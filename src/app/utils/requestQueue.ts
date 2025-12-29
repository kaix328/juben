/**
 * 通用并发请求队列
 * 
 * 用于管理具有并发限制的异步任务（如 AI 生成、大量图片上传等）
 */

export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

export interface Task<T = any> {
    id: string;
    priority?: number;
    execute: (signal?: AbortSignal) => Promise<T>;  // 🆕 支持 AbortSignal
    status: TaskStatus;
    result?: T;
    error?: any;
    metadata?: any;
    abortController?: AbortController;  // 🆕 用于取消正在运行的任务
    retryCount?: number;  // 🆕 重试次数
    startTime?: number;   // 🆕 开始时间（用于超时检测）
}

export interface QueueOptions {
    maxConcurrency: number;
    timeout?: number;  // 🆕 单任务超时时间（毫秒）
    maxRetries?: number;  // 🆕 最大重试次数
    onTaskComplete?: (task: Task) => Promise<void> | void;
    onTaskFailed?: (task: Task, error: any) => Promise<void> | void;
    onTaskStatusChange?: (task: Task) => Promise<void> | void;
    onTaskTimeout?: (task: Task) => Promise<void> | void;  // 🆕 超时回调
    onQueueEmpty?: () => Promise<void> | void;
}

export class RequestQueue {
    private tasks: Task[] = [];
    private runningCount = 0;
    private options: QueueOptions;
    private isPaused = false;
    private isCancelled = false;  // 🆕 全局取消标志
    private batchResolvers: Array<{ ids: Set<string>, resolve: (tasks: Task[]) => void }> = [];

    constructor(options: Partial<QueueOptions> = {}) {
        this.options = {
            maxConcurrency: options.maxConcurrency || 3,
            timeout: options.timeout || 60000,  // 默认 60 秒超时
            maxRetries: options.maxRetries || 0,
            ...options
        };
    }

    /**
     * 添加任务到队列
     */
    addTask<T>(id: string, execute: () => Promise<T>, metadata?: any, priority = 0): string {
        const task: Task<T> = {
            id,
            priority,
            execute,
            status: 'pending',
            metadata
        };
        this.tasks.push(task);
        this.tasks.sort((a, b) => (b.priority || 0) - (a.priority || 0));

        this.notifyStatusChange(task);
        this.process();
        return id;
    }

    /**
     * 批量添加任务
     */
    addTasks(tasks: { id: string, execute: () => Promise<any>, metadata?: any, priority?: number }[]) {
        tasks.forEach(t => {
            const task: Task = {
                id: t.id,
                priority: t.priority || 0,
                execute: t.execute,
                status: 'pending',
                metadata: t.metadata
            };
            this.tasks.push(task);
        });
        this.tasks.sort((a, b) => (b.priority || 0) - (a.priority || 0));
        this.process();
    }

    /**
     * 等待某一批 ID 的任务全部完成
     */
    async waitForBatch(ids: Set<string>): Promise<Task[]> {
        const getBatchTasks = () => this.tasks.filter(t => ids.has(t.id));
        const isDready = () => {
            const tasks = getBatchTasks();
            if (tasks.length < ids.size) return false;
            return tasks.every(t => ['completed', 'failed', 'cancelled'].includes(t.status));
        };

        if (isDready()) {
            return getBatchTasks();
        }

        return new Promise((resolve) => {
            this.batchResolvers.push({ ids, resolve });
        });
    }

    /**
     * 检查并触发批次解析器
     */
    private checkBatchResolvers() {
        this.batchResolvers = this.batchResolvers.filter(resolver => {
            const tasks = this.tasks.filter(t => resolver.ids.has(t.id));
            const allDone = tasks.length >= resolver.ids.size &&
                tasks.every(t => ['completed', 'failed', 'cancelled'].includes(t.status));

            if (allDone) {
                resolver.resolve(tasks);
                return false;
            }
            return true;
        });
    }

    /**
     * 开始处理队列
     */
    private async process() {
        if (this.isPaused || this.isCancelled || this.runningCount >= this.options.maxConcurrency) {
            return;
        }

        const nextTask = this.tasks.find(t => t.status === 'pending');
        if (!nextTask) {
            if (this.runningCount === 0 && this.options.onQueueEmpty) {
                try {
                    await this.options.onQueueEmpty();
                } catch (e) {
                    console.error('[RequestQueue] onQueueEmpty error:', e);
                }
            }
            return;
        }

        // 🆕 创建 AbortController
        const abortController = new AbortController();
        nextTask.abortController = abortController;
        nextTask.status = 'running';
        nextTask.startTime = Date.now();
        this.runningCount++;
        await this.notifyStatusChange(nextTask);

        // 🆕 超时处理
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        if (this.options.timeout && this.options.timeout > 0) {
            timeoutId = setTimeout(() => {
                if (nextTask.status === 'running') {
                    abortController.abort();
                    this.options.onTaskTimeout?.(nextTask);
                }
            }, this.options.timeout);
        }

        try {
            const result = await nextTask.execute(abortController.signal);
            if (timeoutId) clearTimeout(timeoutId);

            if (this.isCancelled || abortController.signal.aborted) {
                nextTask.status = 'cancelled';
            } else {
                nextTask.status = 'completed';
                nextTask.result = result;
                if (this.options.onTaskComplete) {
                    await this.options.onTaskComplete(nextTask);
                }
            }
        } catch (error: any) {
            if (timeoutId) clearTimeout(timeoutId);

            if (error.name === 'AbortError' || abortController.signal.aborted) {
                nextTask.status = 'cancelled';
            } else {
                // 🆕 重试逻辑
                const retryCount = nextTask.retryCount || 0;
                if (this.options.maxRetries && retryCount < this.options.maxRetries) {
                    nextTask.retryCount = retryCount + 1;
                    nextTask.status = 'pending';  // 重新加入队列
                } else {
                    nextTask.status = 'failed';
                    nextTask.error = error;
                    if (this.options.onTaskFailed) {
                        await this.options.onTaskFailed(nextTask, error);
                    }
                }
            }
        } finally {
            this.runningCount--;
            nextTask.abortController = undefined;
            await this.notifyStatusChange(nextTask);
            this.process();
        }

        // 尝试启动更多并发任务
        if (this.runningCount < this.options.maxConcurrency) {
            this.process();
        }
    }

    /**
     * 取消单个任务（支持取消正在运行的任务）
     */
    cancelTask(id: string) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        if (task.status === 'pending') {
            task.status = 'cancelled';
            this.notifyStatusChange(task);
        } else if (task.status === 'running' && task.abortController) {
            // 🆕 取消正在运行的任务
            task.abortController.abort();
        }
    }

    /**
     * 🆕 取消指定批次的所有任务
     */
    cancelBatch(ids: Set<string>) {
        ids.forEach(id => this.cancelTask(id));
    }

    /**
     * 🆕 取消所有任务（包括正在运行的）
     */
    cancelAll() {
        this.isCancelled = true;
        this.tasks.forEach(t => {
            if (t.status === 'pending') {
                t.status = 'cancelled';
            } else if (t.status === 'running' && t.abortController) {
                t.abortController.abort();
            }
        });
        // 解除所有等待中的批次
        this.batchResolvers.forEach(resolver => {
            const tasks = this.tasks.filter(t => resolver.ids.has(t.id));
            resolver.resolve(tasks);
        });
        this.batchResolvers = [];
    }

    /**
     * 🆕 重试失败的任务
     */
    retryFailed(ids?: Set<string>) {
        const targetIds = ids || new Set(this.tasks.filter(t => t.status === 'failed').map(t => t.id));
        targetIds.forEach(id => {
            const task = this.tasks.find(t => t.id === id);
            if (task && task.status === 'failed') {
                task.status = 'pending';
                task.error = undefined;
                task.retryCount = 0;
                this.notifyStatusChange(task);
            }
        });
        this.process();
    }

    /**
     * 清空队列
     */
    clear() {
        this.cancelAll();
        this.tasks = [];
        this.runningCount = 0;
        this.isCancelled = false;  // 重置取消标志
    }

    /**
     * 🆕 重置队列（清空并重置状态）
     */
    reset() {
        this.clear();
        this.isPaused = false;
    }

    /**
     * 获取所有任务
     */
    getTasks(): Task[] {
        return [...this.tasks];
    }

    /**
     * 获取任务状态
     */
    getTaskStatus(id: string): TaskStatus | undefined {
        return this.tasks.find(t => t.id === id)?.status;
    }

    /**
     * 通知状态变更
     */
    private async notifyStatusChange(task: Task) {
        try {
            await this.options.onTaskStatusChange?.(task);
        } catch (e) {
            console.error('[RequestQueue] onTaskStatusChange error:', e);
        }
        this.checkBatchResolvers();
    }

    /**
     * 暂停/恢复
     */
    pause() { this.isPaused = true; }
    resume() {
        this.isPaused = false;
        this.process();
    }

    /**
     * 获取统计
     */
    getStats() {
        return {
            total: this.tasks.length,
            pending: this.tasks.filter(t => t.status === 'pending').length,
            running: this.tasks.filter(t => t.status === 'running').length,
            completed: this.tasks.filter(t => t.status === 'completed').length,
            failed: this.tasks.filter(t => t.status === 'failed').length,
            cancelled: this.tasks.filter(t => t.status === 'cancelled').length
        };
    }
}
