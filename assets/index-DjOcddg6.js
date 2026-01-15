import { j as jsxRuntimeExports, S as Slot, O as Overlay, R as Root$5, T as Trigger$1, C as Content, a as Close, b as Title, D as Description, P as Portal$1, c as Primitive, d as createPopperScope, u as useDirection, e as useControllableState, f as Root2$2, g as createContextScope, h as useId, i as createCollection, k as useComposedRefs, A as Anchor, l as composeEventHandlers, m as useLayoutEffect2, n as Portal$2, V as VisuallyHidden, o as useCallbackRef, p as hideOthers, q as useFocusGuards, r as ReactRemoveScroll, F as FocusScope, s as DismissableLayer, t as Content$1, v as Arrow, w as Root2$3, L as List, x as Trigger$2, y as Content$2, z as Root2$4, B as Trigger$3, E as Portal2$1, G as Content2$2, I as Item2, H as Label2, J as Separator2, K as Presence, M as useSize, N as createDialogScope, W as WarningProvider, Q as Slottable } from "./vendor-ui-D1RflOLB.js";
import { f as requireReactDom, d as React, c as ReactDOM, u as useLocation, L as Link, O as Outlet, a as reactExports, b as reactDomExports, h as useParams, g as getDefaultExportFromCjs, i as useNavigate, H as HashRouter, j as Routes, k as Route, N as Navigate } from "./vendor-react-DeScL_Wg.js";
import { A as ArrowLeft, B as Book, H as House, S as Settings$1, T as TriangleAlert, R as RefreshCw, D as Dexie, X, C as ChevronDown, a as Check, b as ChevronUp, c as Search, d as ArrowDownWideNarrow, P as Plus, e as Trash2, f as Calendar, g as ChevronRight, h as ChartColumn, i as Palette, L as Library, F as FileText, j as Film, k as Layers, l as Save, m as create, M as MessageCircle, U as Users, n as Clock, o as Sparkles, p as PenLine, q as Pen, r as CircleAlert, s as CircleCheckBig, t as LoaderCircle, u as ChartNoAxesColumn, v as Replace, w as Undo2, x as Redo2, y as Download, z as SquareCheckBig, E as List$1, G as Grid3x3, W as WandSparkles, I as FileDown, J as History, K as Camera, N as MessageSquare, O as Maximize2, Q as Copy, V as Settings2, Y as Image, Z as Volume2, _ as Music, $ as Eye, a0 as Lightbulb, a1 as Video, a2 as GripVertical, a3 as Play, a4 as CircleX, a5 as RotateCcw, a6 as ZoomOut, a7 as ZoomIn, a8 as SkipBack, a9 as Pause, aa as SkipForward, ab as Upload, ac as MapPin, ad as Package, ae as Shirt, af as RotateCw, ag as Square, ah as Tag, ai as Map$1, aj as SquarePen, ak as TrendingUp, al as CircleCheck, am as Box, an as Info, ao as Server, ap as Key } from "./vendor-utils-COiYwPjn.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var client = {};
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
function __insertCSS(code) {
  if (typeof document == "undefined") return;
  let head = document.head || document.getElementsByTagName("head")[0];
  let style = document.createElement("style");
  style.type = "text/css";
  head.appendChild(style);
  style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
const getAsset = (type) => {
  switch (type) {
    case "success":
      return SuccessIcon;
    case "info":
      return InfoIcon;
    case "warning":
      return WarningIcon;
    case "error":
      return ErrorIcon;
    default:
      return null;
  }
};
const bars = Array(12).fill(0);
const Loader = ({ visible, className }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      className
    ].filter(Boolean).join(" "),
    "data-visible": visible
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sonner-spinner"
  }, bars.map((_, i) => /* @__PURE__ */ React.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  }))));
};
const SuccessIcon = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ React.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
}));
const WarningIcon = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ React.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
}));
const InfoIcon = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ React.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
}));
const ErrorIcon = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ React.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
}));
const CloseIcon = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const useIsDocumentHidden = () => {
  const [isDocumentHidden, setIsDocumentHidden] = React.useState(document.hidden);
  React.useEffect(() => {
    const callback = () => {
      setIsDocumentHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", callback);
    return () => window.removeEventListener("visibilitychange", callback);
  }, []);
  return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
  constructor() {
    this.subscribe = (subscriber) => {
      this.subscribers.push(subscriber);
      return () => {
        const index = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index, 1);
      };
    };
    this.publish = (data) => {
      this.subscribers.forEach((subscriber) => subscriber(data));
    };
    this.addToast = (data) => {
      this.publish(data);
      this.toasts = [
        ...this.toasts,
        data
      ];
    };
    this.create = (data) => {
      var _data_id;
      const { message, ...rest } = data;
      const id = typeof (data == null ? void 0 : data.id) === "number" || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
      const alreadyExists = this.toasts.find((toast2) => {
        return toast2.id === id;
      });
      const dismissible = data.dismissible === void 0 ? true : data.dismissible;
      if (this.dismissedToasts.has(id)) {
        this.dismissedToasts.delete(id);
      }
      if (alreadyExists) {
        this.toasts = this.toasts.map((toast2) => {
          if (toast2.id === id) {
            this.publish({
              ...toast2,
              ...data,
              id,
              title: message
            });
            return {
              ...toast2,
              ...data,
              id,
              dismissible,
              title: message
            };
          }
          return toast2;
        });
      } else {
        this.addToast({
          title: message,
          ...rest,
          dismissible,
          id
        });
      }
      return id;
    };
    this.dismiss = (id) => {
      if (id) {
        this.dismissedToasts.add(id);
        requestAnimationFrame(() => this.subscribers.forEach((subscriber) => subscriber({
          id,
          dismiss: true
        })));
      } else {
        this.toasts.forEach((toast2) => {
          this.subscribers.forEach((subscriber) => subscriber({
            id: toast2.id,
            dismiss: true
          }));
        });
      }
      return id;
    };
    this.message = (message, data) => {
      return this.create({
        ...data,
        message
      });
    };
    this.error = (message, data) => {
      return this.create({
        ...data,
        message,
        type: "error"
      });
    };
    this.success = (message, data) => {
      return this.create({
        ...data,
        type: "success",
        message
      });
    };
    this.info = (message, data) => {
      return this.create({
        ...data,
        type: "info",
        message
      });
    };
    this.warning = (message, data) => {
      return this.create({
        ...data,
        type: "warning",
        message
      });
    };
    this.loading = (message, data) => {
      return this.create({
        ...data,
        type: "loading",
        message
      });
    };
    this.promise = (promise, data) => {
      if (!data) {
        return;
      }
      let id = void 0;
      if (data.loading !== void 0) {
        id = this.create({
          ...data,
          promise,
          type: "loading",
          message: data.loading,
          description: typeof data.description !== "function" ? data.description : void 0
        });
      }
      const p = Promise.resolve(promise instanceof Function ? promise() : promise);
      let shouldDismiss = id !== void 0;
      let result;
      const originalPromise = p.then(async (response) => {
        result = [
          "resolve",
          response
        ];
        const isReactElementResponse = React.isValidElement(response);
        if (isReactElementResponse) {
          shouldDismiss = false;
          this.create({
            id,
            type: "default",
            message: response
          });
        } else if (isHttpResponse(response) && !response.ok) {
          shouldDismiss = false;
          const promiseData = typeof data.error === "function" ? await data.error(`HTTP error! status: ${response.status}`) : data.error;
          const description = typeof data.description === "function" ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
          const isExtendedResult = typeof promiseData === "object" && !React.isValidElement(promiseData);
          const toastSettings = isExtendedResult ? promiseData : {
            message: promiseData
          };
          this.create({
            id,
            type: "error",
            description,
            ...toastSettings
          });
        } else if (response instanceof Error) {
          shouldDismiss = false;
          const promiseData = typeof data.error === "function" ? await data.error(response) : data.error;
          const description = typeof data.description === "function" ? await data.description(response) : data.description;
          const isExtendedResult = typeof promiseData === "object" && !React.isValidElement(promiseData);
          const toastSettings = isExtendedResult ? promiseData : {
            message: promiseData
          };
          this.create({
            id,
            type: "error",
            description,
            ...toastSettings
          });
        } else if (data.success !== void 0) {
          shouldDismiss = false;
          const promiseData = typeof data.success === "function" ? await data.success(response) : data.success;
          const description = typeof data.description === "function" ? await data.description(response) : data.description;
          const isExtendedResult = typeof promiseData === "object" && !React.isValidElement(promiseData);
          const toastSettings = isExtendedResult ? promiseData : {
            message: promiseData
          };
          this.create({
            id,
            type: "success",
            description,
            ...toastSettings
          });
        }
      }).catch(async (error) => {
        result = [
          "reject",
          error
        ];
        if (data.error !== void 0) {
          shouldDismiss = false;
          const promiseData = typeof data.error === "function" ? await data.error(error) : data.error;
          const description = typeof data.description === "function" ? await data.description(error) : data.description;
          const isExtendedResult = typeof promiseData === "object" && !React.isValidElement(promiseData);
          const toastSettings = isExtendedResult ? promiseData : {
            message: promiseData
          };
          this.create({
            id,
            type: "error",
            description,
            ...toastSettings
          });
        }
      }).finally(() => {
        if (shouldDismiss) {
          this.dismiss(id);
          id = void 0;
        }
        data.finally == null ? void 0 : data.finally.call(data);
      });
      const unwrap = () => new Promise((resolve, reject) => originalPromise.then(() => result[0] === "reject" ? reject(result[1]) : resolve(result[1])).catch(reject));
      if (typeof id !== "string" && typeof id !== "number") {
        return {
          unwrap
        };
      } else {
        return Object.assign(id, {
          unwrap
        });
      }
    };
    this.custom = (jsx, data) => {
      const id = (data == null ? void 0 : data.id) || toastsCounter++;
      this.create({
        jsx: jsx(id),
        id,
        ...data
      });
      return id;
    };
    this.getActiveToasts = () => {
      return this.toasts.filter((toast2) => !this.dismissedToasts.has(toast2.id));
    };
    this.subscribers = [];
    this.toasts = [];
    this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const ToastState = new Observer();
const toastFunction = (message, data) => {
  const id = (data == null ? void 0 : data.id) || toastsCounter++;
  ToastState.addToast({
    title: message,
    ...data,
    id
  });
  return id;
};
const isHttpResponse = (data) => {
  return data && typeof data === "object" && "ok" in data && typeof data.ok === "boolean" && "status" in data && typeof data.status === "number";
};
const basicToast = toastFunction;
const getHistory = () => ToastState.toasts;
const getToasts = () => ToastState.getActiveToasts();
const toast = Object.assign(basicToast, {
  success: ToastState.success,
  info: ToastState.info,
  warning: ToastState.warning,
  error: ToastState.error,
  custom: ToastState.custom,
  message: ToastState.message,
  promise: ToastState.promise,
  dismiss: ToastState.dismiss,
  loading: ToastState.loading
}, {
  getHistory,
  getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
  return action.label !== void 0;
}
const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "24px";
const MOBILE_VIEWPORT_OFFSET = "16px";
const TOAST_LIFETIME = 4e3;
const TOAST_WIDTH = 356;
const GAP = 14;
const SWIPE_THRESHOLD = 45;
const TIME_BEFORE_UNMOUNT = 200;
function cn$1(...classes) {
  return classes.filter(Boolean).join(" ");
}
function getDefaultSwipeDirections(position) {
  const [y, x] = position.split("-");
  const directions = [];
  if (y) {
    directions.push(y);
  }
  if (x) {
    directions.push(x);
  }
  return directions;
}
const Toast = (props) => {
  var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
  const { invert: ToasterInvert, toast: toast2, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = "", descriptionClassName = "", duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = "Close toast" } = props;
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [swipeOutDirection, setSwipeOutDirection] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);
  const [removed, setRemoved] = React.useState(false);
  const [swiping, setSwiping] = React.useState(false);
  const [swipeOut, setSwipeOut] = React.useState(false);
  const [isSwiped, setIsSwiped] = React.useState(false);
  const [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0);
  const [initialHeight, setInitialHeight] = React.useState(0);
  const remainingTime = React.useRef(toast2.duration || durationFromToaster || TOAST_LIFETIME);
  const dragStartTime = React.useRef(null);
  const toastRef = React.useRef(null);
  const isFront = index === 0;
  const isVisible = index + 1 <= visibleToasts;
  const toastType = toast2.type;
  const dismissible = toast2.dismissible !== false;
  const toastClassname = toast2.className || "";
  const toastDescriptionClassname = toast2.descriptionClassName || "";
  const heightIndex = React.useMemo(() => heights.findIndex((height) => height.toastId === toast2.id) || 0, [
    heights,
    toast2.id
  ]);
  const closeButton = React.useMemo(() => {
    var _toast_closeButton;
    return (_toast_closeButton = toast2.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
  }, [
    toast2.closeButton,
    closeButtonFromToaster
  ]);
  const duration = React.useMemo(() => toast2.duration || durationFromToaster || TOAST_LIFETIME, [
    toast2.duration,
    durationFromToaster
  ]);
  const closeTimerStartTimeRef = React.useRef(0);
  const offset = React.useRef(0);
  const lastCloseTimerStartTimeRef = React.useRef(0);
  const pointerStartRef = React.useRef(null);
  const [y, x] = position.split("-");
  const toastsHeightBefore = React.useMemo(() => {
    return heights.reduce((prev, curr, reducerIndex) => {
      if (reducerIndex >= heightIndex) {
        return prev;
      }
      return prev + curr.height;
    }, 0);
  }, [
    heights,
    heightIndex
  ]);
  const isDocumentHidden = useIsDocumentHidden();
  const invert = toast2.invert || ToasterInvert;
  const disabled = toastType === "loading";
  offset.current = React.useMemo(() => heightIndex * gap + toastsHeightBefore, [
    heightIndex,
    toastsHeightBefore
  ]);
  React.useEffect(() => {
    remainingTime.current = duration;
  }, [
    duration
  ]);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    const toastNode = toastRef.current;
    if (toastNode) {
      const height = toastNode.getBoundingClientRect().height;
      setInitialHeight(height);
      setHeights((h) => [
        {
          toastId: toast2.id,
          height,
          position: toast2.position
        },
        ...h
      ]);
      return () => setHeights((h) => h.filter((height2) => height2.toastId !== toast2.id));
    }
  }, [
    setHeights,
    toast2.id
  ]);
  React.useLayoutEffect(() => {
    if (!mounted) return;
    const toastNode = toastRef.current;
    const originalHeight = toastNode.style.height;
    toastNode.style.height = "auto";
    const newHeight = toastNode.getBoundingClientRect().height;
    toastNode.style.height = originalHeight;
    setInitialHeight(newHeight);
    setHeights((heights2) => {
      const alreadyExists = heights2.find((height) => height.toastId === toast2.id);
      if (!alreadyExists) {
        return [
          {
            toastId: toast2.id,
            height: newHeight,
            position: toast2.position
          },
          ...heights2
        ];
      } else {
        return heights2.map((height) => height.toastId === toast2.id ? {
          ...height,
          height: newHeight
        } : height);
      }
    });
  }, [
    mounted,
    toast2.title,
    toast2.description,
    setHeights,
    toast2.id
  ]);
  const deleteToast = React.useCallback(() => {
    setRemoved(true);
    setOffsetBeforeRemove(offset.current);
    setHeights((h) => h.filter((height) => height.toastId !== toast2.id));
    setTimeout(() => {
      removeToast(toast2);
    }, TIME_BEFORE_UNMOUNT);
  }, [
    toast2,
    removeToast,
    setHeights,
    offset
  ]);
  React.useEffect(() => {
    if (toast2.promise && toastType === "loading" || toast2.duration === Infinity || toast2.type === "loading") return;
    let timeoutId;
    const pauseTimer = () => {
      if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
        const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
        remainingTime.current = remainingTime.current - elapsedTime;
      }
      lastCloseTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
    };
    const startTimer = () => {
      if (remainingTime.current === Infinity) return;
      closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
      timeoutId = setTimeout(() => {
        toast2.onAutoClose == null ? void 0 : toast2.onAutoClose.call(toast2, toast2);
        deleteToast();
      }, remainingTime.current);
    };
    if (expanded || interacting || isDocumentHidden) {
      pauseTimer();
    } else {
      startTimer();
    }
    return () => clearTimeout(timeoutId);
  }, [
    expanded,
    interacting,
    toast2,
    toastType,
    isDocumentHidden,
    deleteToast
  ]);
  React.useEffect(() => {
    if (toast2.delete) {
      deleteToast();
    }
  }, [
    deleteToast,
    toast2.delete
  ]);
  function getLoadingIcon() {
    var _toast_classNames9;
    if (icons == null ? void 0 : icons.loading) {
      var _toast_classNames12;
      return /* @__PURE__ */ React.createElement("div", {
        className: cn$1(classNames == null ? void 0 : classNames.loader, toast2 == null ? void 0 : (_toast_classNames12 = toast2.classNames) == null ? void 0 : _toast_classNames12.loader, "sonner-loader"),
        "data-visible": toastType === "loading"
      }, icons.loading);
    }
    return /* @__PURE__ */ React.createElement(Loader, {
      className: cn$1(classNames == null ? void 0 : classNames.loader, toast2 == null ? void 0 : (_toast_classNames9 = toast2.classNames) == null ? void 0 : _toast_classNames9.loader),
      visible: toastType === "loading"
    });
  }
  const icon = toast2.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
  var _toast_richColors, _icons_close;
  return /* @__PURE__ */ React.createElement("li", {
    tabIndex: 0,
    ref: toastRef,
    className: cn$1(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast2 == null ? void 0 : (_toast_classNames = toast2.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast2 == null ? void 0 : (_toast_classNames1 = toast2.classNames) == null ? void 0 : _toast_classNames1[toastType]),
    "data-sonner-toast": "",
    "data-rich-colors": (_toast_richColors = toast2.richColors) != null ? _toast_richColors : defaultRichColors,
    "data-styled": !Boolean(toast2.jsx || toast2.unstyled || unstyled),
    "data-mounted": mounted,
    "data-promise": Boolean(toast2.promise),
    "data-swiped": isSwiped,
    "data-removed": removed,
    "data-visible": isVisible,
    "data-y-position": y,
    "data-x-position": x,
    "data-index": index,
    "data-front": isFront,
    "data-swiping": swiping,
    "data-dismissible": dismissible,
    "data-type": toastType,
    "data-invert": invert,
    "data-swipe-out": swipeOut,
    "data-swipe-direction": swipeOutDirection,
    "data-expanded": Boolean(expanded || expandByDefault && mounted),
    style: {
      "--index": index,
      "--toasts-before": index,
      "--z-index": toasts.length - index,
      "--offset": `${removed ? offsetBeforeRemove : offset.current}px`,
      "--initial-height": expandByDefault ? "auto" : `${initialHeight}px`,
      ...style,
      ...toast2.style
    },
    onDragEnd: () => {
      setSwiping(false);
      setSwipeDirection(null);
      pointerStartRef.current = null;
    },
    onPointerDown: (event) => {
      if (disabled || !dismissible) return;
      dragStartTime.current = /* @__PURE__ */ new Date();
      setOffsetBeforeRemove(offset.current);
      event.target.setPointerCapture(event.pointerId);
      if (event.target.tagName === "BUTTON") return;
      setSwiping(true);
      pointerStartRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    },
    onPointerUp: () => {
      var _toastRef_current, _toastRef_current1, _dragStartTime_current;
      if (swipeOut || !dismissible) return;
      pointerStartRef.current = null;
      const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
      const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
      const timeTaken = (/* @__PURE__ */ new Date()).getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
      const swipeAmount = swipeDirection === "x" ? swipeAmountX : swipeAmountY;
      const velocity = Math.abs(swipeAmount) / timeTaken;
      if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
        setOffsetBeforeRemove(offset.current);
        toast2.onDismiss == null ? void 0 : toast2.onDismiss.call(toast2, toast2);
        if (swipeDirection === "x") {
          setSwipeOutDirection(swipeAmountX > 0 ? "right" : "left");
        } else {
          setSwipeOutDirection(swipeAmountY > 0 ? "down" : "up");
        }
        deleteToast();
        setSwipeOut(true);
        return;
      } else {
        var _toastRef_current2, _toastRef_current3;
        (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty("--swipe-amount-x", `0px`);
        (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty("--swipe-amount-y", `0px`);
      }
      setIsSwiped(false);
      setSwiping(false);
      setSwipeDirection(null);
    },
    onPointerMove: (event) => {
      var _window_getSelection, _toastRef_current, _toastRef_current1;
      if (!pointerStartRef.current || !dismissible) return;
      const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
      if (isHighlighted) return;
      const yDelta = event.clientY - pointerStartRef.current.y;
      const xDelta = event.clientX - pointerStartRef.current.x;
      var _props_swipeDirections;
      const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
      if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
        setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
      }
      let swipeAmount = {
        x: 0,
        y: 0
      };
      const getDampening = (delta) => {
        const factor = Math.abs(delta) / 20;
        return 1 / (1.5 + factor);
      };
      if (swipeDirection === "y") {
        if (swipeDirections.includes("top") || swipeDirections.includes("bottom")) {
          if (swipeDirections.includes("top") && yDelta < 0 || swipeDirections.includes("bottom") && yDelta > 0) {
            swipeAmount.y = yDelta;
          } else {
            const dampenedDelta = yDelta * getDampening(yDelta);
            swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
          }
        }
      } else if (swipeDirection === "x") {
        if (swipeDirections.includes("left") || swipeDirections.includes("right")) {
          if (swipeDirections.includes("left") && xDelta < 0 || swipeDirections.includes("right") && xDelta > 0) {
            swipeAmount.x = xDelta;
          } else {
            const dampenedDelta = xDelta * getDampening(xDelta);
            swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
          }
        }
      }
      if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
        setIsSwiped(true);
      }
      (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty("--swipe-amount-x", `${swipeAmount.x}px`);
      (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty("--swipe-amount-y", `${swipeAmount.y}px`);
    }
  }, closeButton && !toast2.jsx && toastType !== "loading" ? /* @__PURE__ */ React.createElement("button", {
    "aria-label": closeButtonAriaLabel,
    "data-disabled": disabled,
    "data-close-button": true,
    onClick: disabled || !dismissible ? () => {
    } : () => {
      deleteToast();
      toast2.onDismiss == null ? void 0 : toast2.onDismiss.call(toast2, toast2);
    },
    className: cn$1(classNames == null ? void 0 : classNames.closeButton, toast2 == null ? void 0 : (_toast_classNames2 = toast2.classNames) == null ? void 0 : _toast_classNames2.closeButton)
  }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast2.icon || toast2.promise) && toast2.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast2.icon) ? /* @__PURE__ */ React.createElement("div", {
    "data-icon": "",
    className: cn$1(classNames == null ? void 0 : classNames.icon, toast2 == null ? void 0 : (_toast_classNames3 = toast2.classNames) == null ? void 0 : _toast_classNames3.icon)
  }, toast2.promise || toast2.type === "loading" && !toast2.icon ? toast2.icon || getLoadingIcon() : null, toast2.type !== "loading" ? icon : null) : null, /* @__PURE__ */ React.createElement("div", {
    "data-content": "",
    className: cn$1(classNames == null ? void 0 : classNames.content, toast2 == null ? void 0 : (_toast_classNames4 = toast2.classNames) == null ? void 0 : _toast_classNames4.content)
  }, /* @__PURE__ */ React.createElement("div", {
    "data-title": "",
    className: cn$1(classNames == null ? void 0 : classNames.title, toast2 == null ? void 0 : (_toast_classNames5 = toast2.classNames) == null ? void 0 : _toast_classNames5.title)
  }, toast2.jsx ? toast2.jsx : typeof toast2.title === "function" ? toast2.title() : toast2.title), toast2.description ? /* @__PURE__ */ React.createElement("div", {
    "data-description": "",
    className: cn$1(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast2 == null ? void 0 : (_toast_classNames6 = toast2.classNames) == null ? void 0 : _toast_classNames6.description)
  }, typeof toast2.description === "function" ? toast2.description() : toast2.description) : null), /* @__PURE__ */ React.isValidElement(toast2.cancel) ? toast2.cancel : toast2.cancel && isAction(toast2.cancel) ? /* @__PURE__ */ React.createElement("button", {
    "data-button": true,
    "data-cancel": true,
    style: toast2.cancelButtonStyle || cancelButtonStyle,
    onClick: (event) => {
      if (!isAction(toast2.cancel)) return;
      if (!dismissible) return;
      toast2.cancel.onClick == null ? void 0 : toast2.cancel.onClick.call(toast2.cancel, event);
      deleteToast();
    },
    className: cn$1(classNames == null ? void 0 : classNames.cancelButton, toast2 == null ? void 0 : (_toast_classNames7 = toast2.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
  }, toast2.cancel.label) : null, /* @__PURE__ */ React.isValidElement(toast2.action) ? toast2.action : toast2.action && isAction(toast2.action) ? /* @__PURE__ */ React.createElement("button", {
    "data-button": true,
    "data-action": true,
    style: toast2.actionButtonStyle || actionButtonStyle,
    onClick: (event) => {
      if (!isAction(toast2.action)) return;
      toast2.action.onClick == null ? void 0 : toast2.action.onClick.call(toast2.action, event);
      if (event.defaultPrevented) return;
      deleteToast();
    },
    className: cn$1(classNames == null ? void 0 : classNames.actionButton, toast2 == null ? void 0 : (_toast_classNames8 = toast2.classNames) == null ? void 0 : _toast_classNames8.actionButton)
  }, toast2.action.label) : null);
};
function getDocumentDirection() {
  if (typeof window === "undefined") return "ltr";
  if (typeof document === "undefined") return "ltr";
  const dirAttribute = document.documentElement.getAttribute("dir");
  if (dirAttribute === "auto" || !dirAttribute) {
    return window.getComputedStyle(document.documentElement).direction;
  }
  return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
  const styles = {};
  [
    defaultOffset,
    mobileOffset
  ].forEach((offset, index) => {
    const isMobile = index === 1;
    const prefix = isMobile ? "--mobile-offset" : "--offset";
    const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
    function assignAll(offset2) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((key) => {
        styles[`${prefix}-${key}`] = typeof offset2 === "number" ? `${offset2}px` : offset2;
      });
    }
    if (typeof offset === "number" || typeof offset === "string") {
      assignAll(offset);
    } else if (typeof offset === "object") {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((key) => {
        if (offset[key] === void 0) {
          styles[`${prefix}-${key}`] = defaultValue;
        } else {
          styles[`${prefix}-${key}`] = typeof offset[key] === "number" ? `${offset[key]}px` : offset[key];
        }
      });
    } else {
      assignAll(defaultValue);
    }
  });
  return styles;
}
const Toaster = /* @__PURE__ */ React.forwardRef(function Toaster2(props, ref) {
  const { invert, position = "bottom-right", hotkey = [
    "altKey",
    "KeyT"
  ], expand, closeButton, className, offset, mobileOffset, theme = "light", richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = "Notifications" } = props;
  const [toasts, setToasts] = React.useState([]);
  const possiblePositions = React.useMemo(() => {
    return Array.from(new Set([
      position
    ].concat(toasts.filter((toast2) => toast2.position).map((toast2) => toast2.position))));
  }, [
    toasts,
    position
  ]);
  const [heights, setHeights] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [interacting, setInteracting] = React.useState(false);
  const [actualTheme, setActualTheme] = React.useState(theme !== "system" ? theme : typeof window !== "undefined" ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light");
  const listRef = React.useRef(null);
  const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  const lastFocusedElementRef = React.useRef(null);
  const isFocusWithinRef = React.useRef(false);
  const removeToast = React.useCallback((toastToRemove) => {
    setToasts((toasts2) => {
      var _toasts_find;
      if (!((_toasts_find = toasts2.find((toast2) => toast2.id === toastToRemove.id)) == null ? void 0 : _toasts_find.delete)) {
        ToastState.dismiss(toastToRemove.id);
      }
      return toasts2.filter(({ id }) => id !== toastToRemove.id);
    });
  }, []);
  React.useEffect(() => {
    return ToastState.subscribe((toast2) => {
      if (toast2.dismiss) {
        requestAnimationFrame(() => {
          setToasts((toasts2) => toasts2.map((t) => t.id === toast2.id ? {
            ...t,
            delete: true
          } : t));
        });
        return;
      }
      setTimeout(() => {
        ReactDOM.flushSync(() => {
          setToasts((toasts2) => {
            const indexOfExistingToast = toasts2.findIndex((t) => t.id === toast2.id);
            if (indexOfExistingToast !== -1) {
              return [
                ...toasts2.slice(0, indexOfExistingToast),
                {
                  ...toasts2[indexOfExistingToast],
                  ...toast2
                },
                ...toasts2.slice(indexOfExistingToast + 1)
              ];
            }
            return [
              toast2,
              ...toasts2
            ];
          });
        });
      });
    });
  }, [
    toasts
  ]);
  React.useEffect(() => {
    if (theme !== "system") {
      setActualTheme(theme);
      return;
    }
    if (theme === "system") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setActualTheme("dark");
      } else {
        setActualTheme("light");
      }
    }
    if (typeof window === "undefined") return;
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      darkMediaQuery.addEventListener("change", ({ matches }) => {
        if (matches) {
          setActualTheme("dark");
        } else {
          setActualTheme("light");
        }
      });
    } catch (error) {
      darkMediaQuery.addListener(({ matches }) => {
        try {
          if (matches) {
            setActualTheme("dark");
          } else {
            setActualTheme("light");
          }
        } catch (e) {
          console.error(e);
        }
      });
    }
  }, [
    theme
  ]);
  React.useEffect(() => {
    if (toasts.length <= 1) {
      setExpanded(false);
    }
  }, [
    toasts
  ]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      var _listRef_current;
      const isHotkeyPressed = hotkey.every((key) => event[key] || event.code === key);
      if (isHotkeyPressed) {
        var _listRef_current1;
        setExpanded(true);
        (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
      }
      if (event.code === "Escape" && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
        setExpanded(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    hotkey
  ]);
  React.useEffect(() => {
    if (listRef.current) {
      return () => {
        if (lastFocusedElementRef.current) {
          lastFocusedElementRef.current.focus({
            preventScroll: true
          });
          lastFocusedElementRef.current = null;
          isFocusWithinRef.current = false;
        }
      };
    }
  }, [
    listRef.current
  ]);
  return (
    // Remove item from normal navigation flow, only available via hotkey
    /* @__PURE__ */ React.createElement("section", {
      ref,
      "aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, possiblePositions.map((position2, index) => {
      var _heights_;
      const [y, x] = position2.split("-");
      if (!toasts.length) return null;
      return /* @__PURE__ */ React.createElement("ol", {
        key: position2,
        dir: dir === "auto" ? getDocumentDirection() : dir,
        tabIndex: -1,
        ref: listRef,
        className,
        "data-sonner-toaster": true,
        "data-sonner-theme": actualTheme,
        "data-y-position": y,
        "data-lifted": expanded && toasts.length > 1 && !expand,
        "data-x-position": x,
        style: {
          "--front-toast-height": `${((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0}px`,
          "--width": `${TOAST_WIDTH}px`,
          "--gap": `${gap}px`,
          ...style,
          ...assignOffset(offset, mobileOffset)
        },
        onBlur: (event) => {
          if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
            isFocusWithinRef.current = false;
            if (lastFocusedElementRef.current) {
              lastFocusedElementRef.current.focus({
                preventScroll: true
              });
              lastFocusedElementRef.current = null;
            }
          }
        },
        onFocus: (event) => {
          const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === "false";
          if (isNotDismissible) return;
          if (!isFocusWithinRef.current) {
            isFocusWithinRef.current = true;
            lastFocusedElementRef.current = event.relatedTarget;
          }
        },
        onMouseEnter: () => setExpanded(true),
        onMouseMove: () => setExpanded(true),
        onMouseLeave: () => {
          if (!interacting) {
            setExpanded(false);
          }
        },
        onDragEnd: () => setExpanded(false),
        onPointerDown: (event) => {
          const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === "false";
          if (isNotDismissible) return;
          setInteracting(true);
        },
        onPointerUp: () => setInteracting(false)
      }, toasts.filter((toast2) => !toast2.position && index === 0 || toast2.position === position2).map((toast2, index2) => {
        var _toastOptions_duration, _toastOptions_closeButton;
        return /* @__PURE__ */ React.createElement(Toast, {
          key: toast2.id,
          icons,
          index: index2,
          toast: toast2,
          defaultRichColors: richColors,
          duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
          className: toastOptions == null ? void 0 : toastOptions.className,
          descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
          invert,
          visibleToasts,
          closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
          interacting,
          position: position2,
          style: toastOptions == null ? void 0 : toastOptions.style,
          unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
          classNames: toastOptions == null ? void 0 : toastOptions.classNames,
          cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
          actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
          closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
          removeToast,
          toasts: toasts.filter((t) => t.position == toast2.position),
          heights: heights.filter((h) => h.position == toast2.position),
          setHeights,
          expandByDefault: expand,
          gap,
          expanded,
          swipeDirections: props.swipeDirections
        });
      }));
    }))
  );
});
function Layout() {
  const location = useLocation();
  const getBackPath = () => {
    const path = location.pathname;
    if (path.includes("/style")) {
      const projectId = path.split("/")[2];
      return `/projects/${projectId}`;
    }
    if (path.match(/^\/projects\/[^/]+$/)) {
      return "/";
    }
    if (path.includes("/projects/")) {
      const projectId = path.split("/")[2];
      return `/projects/${projectId}`;
    }
    if (path.includes("/settings")) {
      return "/";
    }
    return "/";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm border-b sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: getBackPath(),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors inline-block",
            title: "返回",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Book, { className: "w-8 h-8 text-purple-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-gray-900", children: "AI漫剧制作平台" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "书架" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/settings",
            className: "flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings$1, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "设置" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "w-full px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-16 py-8 border-t bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AI漫剧全流程制作平台 - 让创作更简单" }) }) })
  ] });
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
const createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
const stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
const createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+\/\d+$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value) => fractionRegex.test(value);
const isNumber$1 = (value) => !!value && !Number.isNaN(Number(value));
const isInteger = (value) => !!value && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber$1(value.slice(0, -1));
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber$1);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
const isLabelPosition = (label) => label === "position" || label === "percentage";
const isLabelImage = (label) => label === "image" || label === "url";
const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
const isLabelLength = (label) => label === "length";
const isLabelNumber = (label) => label === "number";
const isLabelFamilyName = (label) => label === "family-name";
const isLabelShadow = (label) => label === "shadow";
const getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber$1, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber$1, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber$1, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber$1, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber$1, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber$1],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber$1, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber$1, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber$1, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber$1, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber$1, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber$1, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber$1, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber$1]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber$1]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber$1, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber$1, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber$1, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = () => {
      this.setState({ hasError: false, error: void 0, errorInfo: void 0 });
      window.location.reload();
    };
    this.handleGoHome = () => {
      window.location.href = window.location.pathname + "#/";
    };
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error);
    console.error("Component stack:", errorInfo.componentStack);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center min-h-[400px] p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-8 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-16 h-16 text-orange-500 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "页面加载出错" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "很抱歉,页面在加载或切换时发生了错误。请尝试刷新页面或返回首页。" }),
        this.state.error && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "text-left mb-4 p-3 bg-gray-100 rounded text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-gray-700 font-medium", children: "错误详情" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-2 text-xs text-red-600 overflow-auto", children: this.state.error.toString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: this.handleReset,
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                "刷新页面"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: this.handleGoHome,
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }),
                "返回首页"
              ]
            }
          )
        ] })
      ] }) });
    }
    return this.props.children;
  }
}
function useObservable(observableFactory, arg2, arg3) {
  var deps;
  var defaultResult;
  if (typeof observableFactory === "function") {
    deps = arg2 || [];
    defaultResult = arg3;
  } else {
    deps = [];
    defaultResult = arg2;
  }
  var monitor = React.useRef({
    hasResult: false,
    result: defaultResult,
    error: null
  });
  var _a = React.useReducer(function(x) {
    return x + 1;
  }, 0);
  _a[0];
  var triggerUpdate = _a[1];
  var observable = React.useMemo(function() {
    var observable2 = typeof observableFactory === "function" ? observableFactory() : observableFactory;
    if (!observable2 || typeof observable2.subscribe !== "function") {
      if (observableFactory === observable2) {
        throw new TypeError("Given argument to useObservable() was neither a valid observable nor a function.");
      } else {
        throw new TypeError("Observable factory given to useObservable() did not return a valid observable.");
      }
    }
    if (!monitor.current.hasResult && typeof window !== "undefined") {
      if (typeof observable2.hasValue !== "function" || observable2.hasValue()) {
        if (typeof observable2.getValue === "function") {
          monitor.current.result = observable2.getValue();
          monitor.current.hasResult = true;
        } else {
          var subscription = observable2.subscribe(function(val) {
            monitor.current.result = val;
            monitor.current.hasResult = true;
          });
          if (typeof subscription === "function") {
            subscription();
          } else {
            subscription.unsubscribe();
          }
        }
      }
    }
    return observable2;
  }, deps);
  React.useDebugValue(monitor.current.result);
  React.useEffect(function() {
    var subscription = observable.subscribe(function(val) {
      var current = monitor.current;
      if (current.error !== null || current.result !== val) {
        current.error = null;
        current.result = val;
        current.hasResult = true;
        triggerUpdate();
      }
    }, function(err) {
      var current = monitor.current;
      if (current.error !== err) {
        current.error = err;
        triggerUpdate();
      }
    });
    return typeof subscription === "function" ? subscription : subscription.unsubscribe.bind(subscription);
  }, deps);
  if (monitor.current.error)
    throw monitor.current.error;
  return monitor.current.result;
}
function useLiveQuery(querier, deps, defaultResult) {
  return useObservable(function() {
    return Dexie.liveQuery(querier);
  }, deps || [], defaultResult);
}
typeof FinalizationRegistry !== "undefined" && new FinalizationRegistry(function(doc) {
  var DexieYProvider = Dexie["DexieYProvider"];
  if (DexieYProvider)
    DexieYProvider.release(doc);
});
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-gray-200", className),
      ...props
    }
  );
}
function EmptyState({
  icon: Icon2,
  title,
  description,
  actionLabel,
  onAction,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-center justify-center py-12 px-4 text-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50 ${className}`, children: [
    Icon2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 rounded-full shadow-sm mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-8 h-8 text-gray-400" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-1", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 max-w-sm mb-6", children: description }),
    actionLabel && onAction && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onAction, variant: "default", children: actionLabel })
  ] });
}
class AppDatabase extends Dexie {
  constructor() {
    super("AiComicDB");
    this.version(1).stores({
      projects: "id, title, updatedAt",
      chapters: "id, projectId, orderIndex",
      scripts: "id, chapterId",
      // script.id is PK, chapterId is indexed
      storyboards: "id, chapterId",
      assets: "projectId",
      // One asset library per project. We use projectId as PK? No, usually id. 
      // But types says AssetLibrary has projectId but maybe not its own id? 
      // Looking at types: interface AssetLibrary { projectId: string; ... } 
      // It doesn't have an 'id'. So projectId is the PK.
      templates: "id, category",
      versions: "id, projectId, versionNumber",
      relations: "id, projectId, fromCharacterId, toCharacterId"
    });
  }
}
const db = new AppDatabase();
const projectStorage = {
  getAll: async () => {
    return await db.projects.toArray();
  },
  getById: async (id) => {
    return await db.projects.get(id);
  },
  save: async (project) => {
    await db.projects.put(project);
  },
  delete: async (id) => {
    await db.transaction("rw", [db.projects, db.chapters, db.scripts, db.storyboards, db.assets, db.versions, db.relations], async () => {
      const chapters = await db.chapters.where("projectId").equals(id).toArray();
      for (const chapter of chapters) {
        await db.scripts.where("chapterId").equals(chapter.id).delete();
        await db.storyboards.where("chapterId").equals(chapter.id).delete();
        await db.chapters.delete(chapter.id);
      }
      await db.assets.delete(id);
      await db.versions.where("projectId").equals(id).delete();
      await db.relations.where("projectId").equals(id).delete();
      await db.projects.delete(id);
    });
  }
};
const chapterStorage = {
  getAll: async () => {
    return await db.chapters.toArray();
  },
  getByProjectId: async (projectId) => {
    return await db.chapters.where("projectId").equals(projectId).sortBy("orderIndex");
  },
  getById: async (id) => {
    return await db.chapters.get(id);
  },
  getProjectIdByChapterId: async (chapterId) => {
    const chapter = await db.chapters.get(chapterId);
    return chapter == null ? void 0 : chapter.projectId;
  },
  save: async (chapter) => {
    await db.chapters.put(chapter);
  },
  delete: async (id) => {
    await db.chapters.delete(id);
  }
};
const scriptStorage = {
  getByChapterId: async (chapterId) => {
    return await db.scripts.where("chapterId").equals(chapterId).first();
  },
  save: async (script) => {
    await db.scripts.put(script);
  }
};
const storyboardStorage = {
  getByChapterId: async (chapterId) => {
    return await db.storyboards.where("chapterId").equals(chapterId).first();
  },
  save: async (storyboard) => {
    await db.storyboards.put(storyboard);
  }
};
const assetStorage = {
  getByProjectId: async (projectId) => {
    return await db.assets.get(projectId);
  },
  save: async (asset) => {
    await db.assets.put(asset);
  },
  // Helper to init if not exists
  initForProject: async (projectId) => {
    const existing = await db.assets.get(projectId);
    if (existing) return existing;
    const newAssets = {
      projectId,
      characters: [],
      scenes: [],
      props: [],
      costumes: []
    };
    await db.assets.add(newAssets);
    return newAssets;
  }
};
const versionStorage = {
  getAll: async () => {
    return await db.versions.toArray();
  },
  getById: async (id) => {
    return await db.versions.get(id);
  },
  save: async (version) => {
    await db.versions.put(version);
  },
  delete: async (id) => {
    await db.versions.delete(id);
  }
};
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
const storage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assetStorage,
  chapterStorage,
  generateId,
  projectStorage,
  scriptStorage,
  storyboardStorage,
  versionStorage
}, Symbol.toStringTag, { value: "Module" }));
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h4",
    {
      "data-slot": "card-title",
      className: cn("leading-none", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6 [&:last-child]:pb-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$5, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { "data-slot": "dialog-portal", ...props });
}
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      ref,
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
});
DialogOverlay.displayName = "DialogOverlay";
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root$4 = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root$4,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(SELECT_NAME);
var [createSelectContext] = createContextScope(SELECT_NAME, [
  createCollectionScope$1,
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select$1 = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = reactExports.useState(null);
  const [valueNode, setValueNode] = reactExports.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = reactExports.useState(false);
  const direction = useDirection(dir);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = reactExports.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = reactExports.useState(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$2, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SelectProvider,
    {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: useId(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectNativeOptionsProvider,
          {
            scope: props.__scopeSelect,
            onNativeOptionAdd: reactExports.useCallback((option) => {
              setNativeOptionsSet((prev) => new Set(prev).add(option));
            }, []),
            onNativeOptionRemove: reactExports.useCallback((option) => {
              setNativeOptionsSet((prev) => {
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
              });
            }, []),
            children
          }
        ) }),
        isFormControl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BubbleSelect,
          {
            "aria-hidden": true,
            required,
            tabIndex: -1,
            name,
            autoComplete,
            value,
            onChange: (event) => setValue(event.target.value),
            disabled,
            form,
            children: [
              value === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "" }) : null,
              Array.from(nativeOptionsSet)
            ]
          },
          nativeSelectKey
        ) : null
      ]
    }
  ) });
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME$1 = "SelectTrigger";
var SelectTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME$1, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = useCollection$1(__scopeSelect);
    const pointerTypeRef = reactExports.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = (pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: composeEventHandlers(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
SelectTrigger$1.displayName = TRIGGER_NAME$1;
var VALUE_NAME = "SelectValue";
var SelectValue$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
    useLayoutEffect2(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...valueProps,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: placeholder }) : children
      }
    );
  }
);
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "▼" });
  }
);
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME$1 = "SelectPortal";
var SelectPortal = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "SelectContent";
var SelectContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useSelectContext(CONTENT_NAME$1, props.__scopeSelect);
    const [fragment, setFragment] = reactExports.useState();
    useLayoutEffect2(() => {
      setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
      const frag = fragment;
      return frag ? reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContentProvider, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Slot, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: props.children }) }) }),
        frag
      ) : null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContentImpl, { ...props, ref: forwardedRef });
  }
);
SelectContent$1.displayName = CONTENT_NAME$1;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$1);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME$1, __scopeSelect);
    const [content, setContent] = reactExports.useState(null);
    const [viewport, setViewport] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [selectedItem, setSelectedItem] = reactExports.useState(null);
    const [selectedItemText, setSelectedItemText] = reactExports.useState(
      null
    );
    const getItems = useCollection$1(__scopeSelect);
    const [isPositioned, setIsPositioned] = reactExports.useState(false);
    const firstValidItemFoundRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (content) return hideOthers(content);
    }, [content]);
    useFocusGuards();
    const focusFirst = reactExports.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate == null ? void 0 : candidate.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate == null ? void 0 : candidate.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = reactExports.useCallback(
      () => focusFirst([selectedItem, content]),
      [focusFirst, selectedItem, content]
    );
    reactExports.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    reactExports.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
          var _a, _b;
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - (((_a = triggerPointerDownPosRef.current) == null ? void 0 : _a.x) ?? 0)),
            y: Math.abs(Math.round(event.pageY) - (((_b = triggerPointerDownPosRef.current) == null ? void 0 : _b.y) ?? 0))
          };
        };
        const handlePointerUp = (event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!content.contains(event.target)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        };
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    reactExports.useEffect(() => {
      const close = () => onOpenChange(false);
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current.focus());
      }
    });
    const itemRefCallback = reactExports.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = reactExports.useCallback(() => content == null ? void 0 : content.focus(), [content]);
    const itemTextRefCallback = reactExports.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FocusScope,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
              var _a;
              (_a = context.trigger) == null ? void 0 : _a.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME$1, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME$1, __scopeSelect);
  const [contentWrapper, setContentWrapper] = reactExports.useState(null);
  const [content, setContent] = reactExports.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection$1(__scopeSelect);
  const shouldExpandOnScrollRef = reactExports.useRef(false);
  const shouldRepositionRef = reactExports.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = reactExports.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced == null ? void 0 : onPlaced();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = reactExports.useState();
  useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = reactExports.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem == null ? void 0 : focusSelectedItem();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content$1,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$1, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = reactExports.useRef(0);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if ((shouldExpandOnScrollRef == null ? void 0 : shouldExpandOnScrollRef.current) && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = useId();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }
);
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }
);
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = reactExports.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = reactExports.useState(false);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => {
        var _a;
        return (_a = contentContext.itemRefCallback) == null ? void 0 : _a.call(contentContext, node, value, disabled);
      }
    );
    const textId = useId();
    const pointerTypeRef = reactExports.useRef("touch");
    const handleSelect = () => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    };
    if (value === "") {
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: reactExports.useCallback((node) => {
          setTextValue((prevTextValue) => prevTextValue || ((node == null ? void 0 : node.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Collection$1.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
                onClick: composeEventHandlers(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
                  var _a;
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
                  var _a;
                  if (event.currentTarget === document.activeElement) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  }
                }),
                onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
                  var _a;
                  const isTypingAhead = ((_a = contentContext.searchRef) == null ? void 0 : _a.current) !== "";
                  if (isTypingAhead && event.key === " ") return;
                  if (SELECTION_KEYS.includes(event.key)) handleSelect();
                  if (event.key === " ") event.preventDefault();
                })
              }
            )
          }
        )
      }
    );
  }
);
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = reactExports.useState(null);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange,
      (node) => {
        var _a;
        return (_a = contentContext.itemTextRefCallback) == null ? void 0 : _a.call(contentContext, node, itemContext.value, itemContext.disabled);
      }
    );
    const textContent = itemTextNode == null ? void 0 : itemTextNode.textContent;
    const nativeOption = reactExports.useMemo(
      () => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    useLayoutEffect2(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? reactDomExports.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton$1 = reactExports.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = reactExports.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton$1 = reactExports.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = reactExports.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = reactExports.useRef(null);
  const getItems = useCollection$1(__scopeSelect);
  const clearAutoScrollTimer = reactExports.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  reactExports.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect2(() => {
    var _a;
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    (_a = activeItem == null ? void 0 : activeItem.ref.current) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        var _a;
        (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }
);
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }
);
SelectArrow.displayName = ARROW_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var BubbleSelect = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { value, ...selectProps } = props;
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const prevValue = usePrevious(value);
    reactExports.useEffect(() => {
      const select = ref.current;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, value);
        select.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { ...selectProps, ref: composedRefs, defaultValue: value }) });
  }
);
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = useCallbackRef(onSearchChange);
  const searchRef = reactExports.useRef("");
  const timerRef = reactExports.useRef(0);
  const handleTypeaheadSearch = reactExports.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = reactExports.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  reactExports.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2$1 = Select$1;
var Trigger = SelectTrigger$1;
var Value = SelectValue$1;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2$1 = SelectContent$1;
var Viewport = SelectViewport;
var Item = SelectItem$1;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton$1;
var ScrollDownButton = SelectScrollDownButton$1;
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2$1,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
    }
  );
}
function Bookshelf() {
  const projects = useLiveQuery(() => projectStorage.getAll());
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [newProject, setNewProject] = reactExports.useState({
    title: "",
    description: ""
  });
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [sortBy, setSortBy] = reactExports.useState("updatedAt");
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [projectToDelete, setProjectToDelete] = reactExports.useState(null);
  const [isDeleting, setIsDeleting] = reactExports.useState(false);
  const filteredProjects = reactExports.useMemo(() => {
    if (!projects) return [];
    let result = projects.filter(
      (p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || (p.description || "").toLowerCase().includes(searchQuery.toLowerCase())
    );
    result.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      const dateA = new Date(sortBy === "updatedAt" ? a.updatedAt || a.createdAt : a.createdAt);
      const dateB = new Date(sortBy === "updatedAt" ? b.updatedAt || b.createdAt : b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
    return result;
  }, [projects, searchQuery, sortBy]);
  const handleCreateProject = async () => {
    if (!newProject.title) return;
    const project = {
      id: generateId(),
      title: newProject.title,
      description: newProject.description,
      cover: "",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await projectStorage.save(project);
    setNewProject({ title: "", description: "" });
    setIsDialogOpen(false);
    toast.success("项目创建成功");
  };
  const handleDeleteClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    setProjectToDelete(project);
    setDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    if (!projectToDelete) return;
    setIsDeleting(true);
    try {
      await projectStorage.delete(projectToDelete.id);
      toast.success(`已删除项目"${projectToDelete.title}"`);
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    } catch (error) {
      toast.error("删除失败，请重试");
    } finally {
      setIsDeleting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-gray-900", children: "我的书架" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2", children: "管理您的AI漫剧作品" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "搜索项目...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9 w-[200px]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: (value) => setSortBy(value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[130px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownWideNarrow, { className: "w-4 h-4 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updatedAt", children: "最近修改" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "createdAt", children: "创建时间" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "title", children: "项目名称" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
            "新建项目"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "创建新项目" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "填写项目基本信息，创建新的AI漫剧项目" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "项目名称" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "title",
                    placeholder: "请输入项目名称",
                    value: newProject.title,
                    onChange: (e) => setNewProject({ ...newProject, title: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", children: "项目简介" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "description",
                    placeholder: "请输入项目简介",
                    rows: 4,
                    value: newProject.description,
                    onChange: (e) => setNewProject({ ...newProject, description: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCreateProject, className: "w-full", children: "创建项目" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: deleteDialogOpen, onOpenChange: setDeleteDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-red-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
          "确认删除项目"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          '您确定要删除项目"',
          projectToDelete == null ? void 0 : projectToDelete.title,
          '"吗？',
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 font-medium", children: "此操作不可撤销，项目相关的所有章节、剧本、分镜和资源都将被删除。" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setDeleteDialogOpen(false),
            disabled: isDeleting,
            children: "取消"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            onClick: handleConfirmDelete,
            disabled: isDeleting,
            className: "gap-2",
            children: isDeleting ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "删除中..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              "确认删除"
            ] })
          }
        )
      ] })
    ] }) }),
    !projects ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[300px] border rounded-xl overflow-hidden bg-white shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[180px] w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
      ] })
    ] }, i)) }) : filteredProjects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Book,
        title: searchQuery ? "没有找到匹配的项目" : "还没有项目",
        description: searchQuery ? "尝试使用其他关键词搜索" : "创建一个新项目，开始您的创作之旅",
        actionLabel: searchQuery ? void 0 : "新建项目",
        onAction: searchQuery ? void 0 : () => setIsDialogOpen(true)
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProjects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${project.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center", children: project.cover ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.cover, alt: project.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Book, { className: "w-16 h-16 text-purple-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-900 mb-2 truncate font-medium", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm line-clamp-2 min-h-[40px]", children: project.description || "暂无简介..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "text-gray-500 text-sm flex items-center gap-2 pt-2 border-t mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(project.updatedAt || project.createdAt).toLocaleDateString() })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "destructive",
          size: "icon",
          className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md",
          onClick: (e) => handleDeleteClick(e, project),
          title: "删除项目",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
        }
      )
    ] }, project.id)) })
  ] });
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
    }
  );
}
function ProjectDetail() {
  const { projectId } = useParams();
  const project = useLiveQuery(
    () => projectId ? projectStorage.getById(projectId) : Promise.resolve(void 0),
    [projectId]
  );
  const chapters = useLiveQuery(
    () => projectId ? chapterStorage.getByProjectId(projectId) : Promise.resolve([]),
    [projectId]
  );
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [newChapterTitle, setNewChapterTitle] = reactExports.useState("");
  const handleCreateChapter = async () => {
    if (!newChapterTitle || !projectId) return;
    const chapter = {
      id: generateId(),
      projectId,
      title: newChapterTitle,
      orderIndex: (chapters == null ? void 0 : chapters.length) || 0,
      originalText: "",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await chapterStorage.save(chapter);
    setNewChapterTitle("");
    setIsDialogOpen(false);
  };
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: "项目不存在" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: "/", children: "首页" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: project.title }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-gray-900 mb-2 text-2xl font-bold", children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: project.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/dashboard`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4" }),
          "数据统计"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/style`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-4 h-4" }),
          "导演风格"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/assets`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { className: "w-4 h-4" }),
          "项目库"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "章节列表" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "新建章节"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "创建新章节" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "为当前项目添加新的章节" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "chapter-title", children: "章节标题" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "chapter-title",
                    placeholder: "例如：第一章 初次相遇",
                    value: newChapterTitle,
                    onChange: (e) => setNewChapterTitle(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCreateChapter, className: "w-full", children: "创建章节" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: !chapters ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-1/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" })
        ] })
      ] }, i)) }) : chapters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          icon: FileText,
          title: "还没有章节",
          description: "开始编写您的第一个剧本章节。",
          actionLabel: "新建章节",
          onAction: () => setIsDialogOpen(true)
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: chapters.map((chapter) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border rounded-lg p-4 hover:shadow-md transition-shadow group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-900 font-medium", children: chapter.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-sm", children: chapter.originalText ? `${chapter.originalText.length} 字` : "未编辑" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/chapter/${chapter.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-2 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                "原文编辑"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/script/${chapter.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-2 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
                "剧本改写"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/projects/${projectId}/storyboard/${chapter.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-2 hover:border-green-300 hover:bg-green-50 hover:text-green-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
                "分镜制作"
              ] }) })
            ] })
          ]
        },
        chapter.id
      )) }) })
    ] })
  ] });
}
function ChapterEditor() {
  const { chapterId } = useParams();
  const chapter = useLiveQuery(
    () => chapterId ? chapterStorage.getById(chapterId) : void 0,
    [chapterId]
  );
  const [originalText, setOriginalText] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (chapter && originalText === "") {
      setOriginalText(chapter.originalText || "");
    }
  }, [chapter]);
  const handleSave = async () => {
    if (!chapter) return;
    const updated = {
      ...chapter,
      originalText
    };
    await chapterStorage.save(updated);
    toast.success("原文已保存");
  };
  if (!chapter) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: "章节不存在" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: chapter.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mt-1", children: "在此编辑章节原文" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
        "保存"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-700 text-sm", children: "原文内容" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-sm", children: [
            originalText.length,
            " 字"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: originalText,
            onChange: (e) => setOriginalText(e.target.value),
            placeholder: "请输入或粘贴章节原文...",
            rows: 20,
            className: "font-mono"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-blue-900 mb-2", children: "提示" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-blue-800 text-sm space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• 保存原文后，可以在"剧本改写"页面使用AI自动提取剧本' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 建议保持段落清晰，有助于AI更好地理解内容" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 对话和动作描述分开编写，提取效果更佳" })
        ] })
      ] })
    ] })
  ] }) });
}
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2$3,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger$2,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content$2,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$4, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger$3,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2$2,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator2,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
const devLog = (...args) => {
};
async function callWithRetry(fn, maxRetries = 3, baseDelay = 1e3) {
  let lastError = null;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      console.warn(`[重试机制] 第 ${i + 1} 次调用失败，${i < maxRetries - 1 ? `${baseDelay * Math.pow(2, i)}ms 后重试` : "已达最大重试次数"}`);
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, baseDelay * Math.pow(2, i)));
      }
    }
  }
  throw lastError || new Error("未知错误");
}
function checkCharacterConsistency(panelCharacters, assetCharacters) {
  if (!panelCharacters || panelCharacters.length === 0) return [];
  const knownNames = new Set(assetCharacters.map((c) => c.name));
  return panelCharacters.filter((name) => !knownNames.has(name));
}
function createJSONStorage(getStorage, options) {
  let storage2;
  try {
    storage2 = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a = storage2.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage2.setItem(name, JSON.stringify(newValue, void 0)),
    removeItem: (name) => storage2.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage2 = options.storage;
  if (!storage2) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage2.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    return setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      return setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage2) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage2.getItem.bind(storage2))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage2 = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage2 == null ? void 0 : storage2.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const useConfigStore = create()(
  persist(
    (set) => ({
      apiSettings: {
        volcApiKey: "",
        llmEndpointId: "",
        imageEndpointId: ""
      },
      setApiSettings: (settings) => set({ apiSettings: settings })
    }),
    {
      name: "comic-ai-config"
      // localStorage key
    }
  )
);
function sanitizeJsonText(text) {
  return text.replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'").replace(/，/g, ",").replace(/：/g, ":").replace(/\n\s*\/\/[^\n]*/g, "").replace(/,(\s*[}\]])/g, "$1").replace(/"\s*\n\s*"/g, '", "').replace(/}\s*\n\s*{/g, "},{").replace(/]\s*\n\s*\[/g, "],[");
}
function fixJsonSyntax(json) {
  return json.replace(/""(\s*[\}\]])/g, '"$1').replace(/,\s*,/g, ",").replace(/([\{\[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3').replace(/[\x00-\x1F\x7F]/g, " ").replace(/([^\\])\\n/g, "$1\\\\n");
}
function extractFromMarkdown(text) {
  const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (match) {
    try {
      const cleaned = fixJsonSyntax(match[1]);
      return JSON.parse(cleaned);
    } catch {
      return null;
    }
  }
  return null;
}
function extractObjects(text) {
  const objectMatches = text.match(/\{[^{}]*\}/g);
  if (!objectMatches || objectMatches.length === 0) return null;
  const validObjects = [];
  for (const objStr of objectMatches) {
    try {
      const obj = JSON.parse(fixJsonSyntax(objStr));
      if (obj && typeof obj === "object") {
        validObjects.push(obj);
      }
    } catch {
    }
  }
  return validObjects.length > 0 ? validObjects : null;
}
function extractByKeyPatterns(text) {
  const keyPatterns = ['"characters"', '"scenes"', '"props"', '"costumes"'];
  for (const key of keyPatterns) {
    const keyIndex = text.indexOf(key);
    if (keyIndex === -1) continue;
    const startBrace = text.lastIndexOf("{", keyIndex);
    if (startBrace === -1) continue;
    let braceCount = 0;
    let endBrace = -1;
    for (let i = startBrace; i < text.length; i++) {
      if (text[i] === "{") braceCount++;
      else if (text[i] === "}") {
        braceCount--;
        if (braceCount === 0) {
          endBrace = i;
          break;
        }
      }
    }
    if (endBrace !== -1) {
      try {
        const potentialJson = text.substring(startBrace, endBrace + 1);
        return JSON.parse(fixJsonSyntax(potentialJson));
      } catch {
      }
    }
  }
  return null;
}
function extractArray(text) {
  const arrayMatch = text.match(/\[[\s\S]*?\](?=\s*$|\s*[^\[\{])/);
  if (!arrayMatch) return null;
  try {
    let cleanJson = fixJsonSyntax(arrayMatch[0]);
    const openBrackets = (cleanJson.match(/\[/g) || []).length;
    const closeBrackets = (cleanJson.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      cleanJson += "]".repeat(openBrackets - closeBrackets);
    }
    return JSON.parse(cleanJson);
  } catch {
    return null;
  }
}
function extractObject(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  let jsonStr = match[0];
  try {
    return JSON.parse(fixJsonSyntax(jsonStr));
  } catch {
    while (jsonStr.length > 2) {
      jsonStr = jsonStr.slice(0, -1);
      if (jsonStr.endsWith("}")) {
        try {
          return JSON.parse(fixJsonSyntax(jsonStr));
        } catch {
          continue;
        }
      }
    }
  }
  return null;
}
function parseJSON(text) {
  const cleanText = sanitizeJsonText(text);
  try {
    return JSON.parse(fixJsonSyntax(cleanText));
  } catch {
    console.log("[parseJSON] 直接解析失败，尝试其他策略...");
  }
  const fromMarkdown = extractFromMarkdown(text);
  if (fromMarkdown) return fromMarkdown;
  const objects = extractObjects(cleanText);
  if (objects) {
    console.log(`[parseJSON] 逐对象解析成功，提取了 ${objects.length} 个对象`);
    return objects;
  }
  const byKey = extractByKeyPatterns(text);
  if (byKey) return byKey;
  const array = extractArray(cleanText);
  if (array) return array;
  const object = extractObject(cleanText);
  if (object) return object;
  console.error("parseJSON failed, raw text:", text.substring(0, 500));
  console.warn("[parseJSON] 所有解析策略失败，返回空数组");
  return [];
}
function getSettings() {
  const state = useConfigStore.getState();
  const settings = state.apiSettings;
  if (settings.volcApiKey) {
    return settings;
  }
  return {
    volcApiKey: "443ba98a-cd7c-4e97-a4f0-58bc62465618",
    llmEndpointId: "ep-20251223112109-lx2fj",
    imageEndpointId: "ep-20251223112223-zfjbn"
  };
}
const BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const REQUEST_CONFIG = {
  timeout: 18e4,
  // 🆕 延长至 180 秒（3分钟），大剧本需要更多处理时间
  maxRetries: 1,
  // 🆕 减少重试次数，避免长时间等待
  retryDelay: 1e3
};
function logRequest(method, endpoint, status, details) {
  const time = (/* @__PURE__ */ new Date()).toISOString().split("T")[1].slice(0, 8);
  const icons = { start: "🚀", success: "✅", error: "❌", retry: "🔄" };
  console.log(`[${time}] ${icons[status]} API ${method} ${endpoint} ${details || ""}`);
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function volcFetch(endpoint, options, retryCount = 0) {
  var _a, _b, _c, _d;
  const settings = getSettings();
  const apiKey = settings.volcApiKey;
  if (!apiKey) throw new Error("Missing API Key. Please configure in Settings (设置页面).");
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_CONFIG.timeout);
  logRequest(options.method || "GET", endpoint, "start");
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...options.headers
      }
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorBody}`);
    }
    const data = await response.json();
    logRequest(options.method || "GET", endpoint, "success");
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    const isRetryable = error.name === "AbortError" || // 超时
    ((_a = error.message) == null ? void 0 : _a.includes("429")) || // 限流
    ((_b = error.message) == null ? void 0 : _b.includes("500")) || // 服务器错误
    ((_c = error.message) == null ? void 0 : _c.includes("502")) || ((_d = error.message) == null ? void 0 : _d.includes("503"));
    if (isRetryable && retryCount < REQUEST_CONFIG.maxRetries) {
      logRequest(options.method || "GET", endpoint, "retry", `(${retryCount + 1}/${REQUEST_CONFIG.maxRetries})`);
      await delay(REQUEST_CONFIG.retryDelay * (retryCount + 1));
      return volcFetch(endpoint, options, retryCount + 1);
    }
    if (error.name === "AbortError") {
      logRequest(options.method || "GET", endpoint, "error", "Timeout");
      throw new Error(`API 请求超时 (${REQUEST_CONFIG.timeout / 1e3}秒)`);
    }
    logRequest(options.method || "GET", endpoint, "error", error.message);
    throw error;
  }
}
async function callDeepSeek(messages, temperature = 0.7) {
  const settings = getSettings();
  const model = settings.llmEndpointId;
  if (!model) throw new Error("Missing LLM Endpoint ID. Please configure in Settings.");
  const data = await volcFetch("/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model,
      messages,
      temperature,
      stream: false
    })
  });
  return data.choices[0].message.content;
}
async function callDoubaoImage(prompt, size = "1920x1920", negativePrompt) {
  const settings = getSettings();
  const model = settings.imageEndpointId;
  if (!model) throw new Error("Missing Image Endpoint ID. Please configure in Settings.");
  const requestBody = {
    model,
    prompt,
    n: 1,
    size
    // 使用传入的尺寸参数
  };
  if (negativePrompt && negativePrompt.trim()) {
    requestBody.negative_prompt = negativePrompt;
    console.log("[文生图] 使用负面提示词:", negativePrompt.substring(0, 50) + "...");
  }
  const data = await volcFetch("/images/generations", {
    method: "POST",
    body: JSON.stringify(requestBody)
  });
  return data.data[0].url;
}
function buildStyleDescription(style) {
  if (!style) return "Cinematic";
  const parts = [];
  if (style.artStyle) parts.push(style.artStyle);
  if (style.colorTone) parts.push(style.colorTone);
  if (style.lightingStyle) parts.push(style.lightingStyle);
  if (style.cameraStyle) parts.push(style.cameraStyle);
  if (style.mood) parts.push(`${style.mood}氛围`);
  if (style.customPrompt) parts.push(style.customPrompt);
  return parts.length > 0 ? parts.join(", ") : "Cinematic";
}
async function optimizePrompt(description, styleOrString = "Cinematic", resourceType) {
  const style = typeof styleOrString === "string" ? styleOrString : buildStyleDescription(styleOrString);
  let systemPrompt = "";
  if (resourceType === "character") {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于角色设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的角色描述(服饰、姿态、表情、发型)
3. 添加光影效果(${style}风格)
4. 添加构图建议(视角、景深)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "穿白衬衫的男孩"
输出: "年轻男孩,穿着整洁的白色衬衫,深色长裤,站立姿态,双手自然下垂,表情平静,短发,全身正面视角,柔和的自然光照,电影感构图,细节丰富,高质量渲染,${style}风格"`;
  } else if (resourceType === "scene") {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于场景设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的场景描述(环境、建筑、植被、天气)
3. 添加光影效果(${style}风格)
4. 添加氛围描述(时间、季节、情绪)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "森林中的小屋"
输出: "茂密森林中的木质小屋,周围环绕着高大的树木,阳光透过树叶洒下斑驳光影,清晨薄雾弥漫,宁静祥和的氛围,细节丰富的木纹和植被,电影感构图,${style}风格,高质量渲染"`;
  } else if (resourceType === "prop") {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于道具设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的道具描述(材质、颜色、形状、细节)
3. 添加光影效果(${style}风格)
4. 添加背景建议(简洁背景突出道具)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "古老的魔法书"
输出: "古老的魔法书,厚重的皮革封面,金色的神秘符文装饰,泛黄的纸张,精致的金属书扣,柔和的聚光灯照明,简洁的深色背景,细节丰富,${style}风格,高质量渲染"`;
  } else if (resourceType === "costume") {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于服饰设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的服饰描述(款式、颜色、材质、纹理、细节)
3. 考虑角色特征和穿着场景
4. 添加光影效果(${style}风格)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "古代将军的战袍"
输出: "古代将军战袍,深红色厚重布料,金色盔甲装饰,精致的龙纹刺绣,威严庄重的气质,细节丰富的金属质感和布料纹理,${style}风格,高质量渲染"`;
  } else if (resourceType === "storyboard") {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于分镜设计。

任务:将分镜描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的分镜描述(景别、角度、角色、动作、环境)
3. 添加电影感构图建议
4. 添加光影效果(${style}风格)
5. 添加质量标签(分镜级别、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "medium shot, eye level, 男孩走进教室, 年轻男孩短发, props: 书包"
输出: "中景镜头,平视角度,年轻短发男孩背着书包走进教室,自然光从窗户照入,教室环境清晰可见,电影感构图,分镜级别细节,${style}风格,高质量渲染"`;
  } else {
    systemPrompt = `你是一位专业的AI绘画提示词专家。
请将用户的简单描述扩写为一段高质量的中文提示词,适用于Doubao-Seedream模型。
要求:
- 包含光影、构图、风格描述
- 包含细节描写(人物服饰、背景材质)
- 保持中文
- 直接输出提示词,不要包含"好的"等废话
- 风格偏向:${style}`;
  }
  return await callDeepSeek([
    { role: "system", content: systemPrompt },
    { role: "user", content: description }
  ], 0.3);
}
const MODE_DESCRIPTIONS = {
  movie: "电影剧本，标准三幕或四幕结构，场景较长，注重视觉叙事",
  tv_drama: "电视剧剧本，每集约45分钟，有明确的集数划分和幕间高潮",
  short_video: "短视频剧本，3分钟以内，节奏快，开场即高潮",
  web_series: "网络剧剧本，每集10-20分钟，注重悬念和钩子"
};
async function extractScript(originalText, mode = "tv_drama", directorStyle) {
  const modeDesc = MODE_DESCRIPTIONS[mode];
  let styleHint = "";
  if (directorStyle) {
    const hints = [];
    if (directorStyle.artStyle) {
      if (directorStyle.artStyle.includes("赛博") || directorStyle.artStyle.includes("科幻")) {
        hints.push("对白风格：简洁干练，带有科技感和未来感");
      } else if (directorStyle.artStyle.includes("港片") || directorStyle.artStyle.includes("复古")) {
        hints.push("对白风格：干脆利落，经典港片风格，可适当使用经典台词结构");
      } else if (directorStyle.artStyle.includes("日系") || directorStyle.artStyle.includes("动画")) {
        hints.push("对白风格：情感细腻，可适当使用内心独白强化情感");
      }
    }
    if (directorStyle.mood) {
      hints.push(`整体氛围：${directorStyle.mood}`);
    }
    if (hints.length > 0) {
      styleHint = `

【导演风格提示】
${hints.join("\n")}`;
    }
  }
  const prompt = `你是一位拥有20年经验的专业编剧。请将以下文本改编为标准影视剧本格式。

【剧本类型】${modeDesc}${styleHint}

【输出规范】
1. 场景行格式：场景号. 内/外景. 地点 - 时间
2. 动作描述：现在时态，第三人称，简洁有力，视觉化表达
3. 角色首次出场：标记 isFirstAppearance=true，并提供简短外貌描述
4. 对白标记：
   - V.O. = 画外音（角色在画外说话）
   - O.S. = 场外音（角色在场景中但不在画面内）
   - CONT'D = 延续对白（同一角色连续说话被动作打断后继续）
5. 括号指示：仅用于必要的表演提示，如"（轻声地）"、"（怒视）"

【专业技巧】
- 每个场景应有明确的戏剧目的（推进剧情/揭示角色/制造冲突）
- 删除冗余的叙述性语言，只保留可视化内容
- 对白应自然、口语化，符合角色性格
- 适当添加转场指示（切至、淡出、溶至等）
- 估算每个场景的时长（秒）

【特殊场景类型】
- FLASHBACK: 闪回
- MONTAGE: 蒙太奇
- INSERT: 插入镜头
- INTERCUT: 交叉剪辑

请严格按照以下 JSON 格式返回，不要包含 Markdown 格式标记：
[
  {
    "sceneNumber": 1,
    "episodeNumber": 1,
    "location": "场景地点",
    "subLocation": "子场景（可选）",
    "timeOfDay": "白天/夜晚/黄昏/清晨",
    "sceneType": "INT/EXT",
    "continuity": "CONTINUOUS/LATER/SAME（可选）",
    "specialSceneType": "FLASHBACK/MONTAGE/INSERT（可选）",
    "action": "动作描述，现在时态，视觉化表达",
    "beat": "情绪节拍（可选，如：紧张升级、情感爆发）",
    "transition": "切至/淡出/溶至（可选）",
    "estimatedDuration": 30,
    "characters": ["角色A", "角色B"],
    "dialogues": [
      {
        "character": "角色A",
        "extension": "V.O./O.S.（可选）",
        "parenthetical": "表演提示（可选）",
        "lines": "台词内容",
        "isFirstAppearance": true/false,
        "isContinued": false
      }
    ],
    "notes": "编剧备注（可选）"
  }
]

文本内容：
${originalText.substring(0, 15e3)}
`;
  try {
    const result = await callDeepSeek([{ role: "user", content: prompt }]);
    const scenes = parseJSON(result);
    return scenes.map((s, index) => ({
      id: generateId(),
      sceneNumber: s.sceneNumber || index + 1,
      episodeNumber: s.episodeNumber || 1,
      location: s.location || "未知场景",
      subLocation: s.subLocation,
      timeOfDay: s.timeOfDay || "白天",
      sceneType: s.sceneType || "INT",
      continuity: s.continuity,
      specialSceneType: s.specialSceneType,
      dayNightNumber: s.dayNightNumber,
      characters: s.characters || [],
      action: s.action || "",
      beat: s.beat,
      dialogues: (s.dialogues || []).map((d) => ({
        id: generateId(),
        character: d.character,
        extension: d.extension,
        parenthetical: d.parenthetical,
        lines: d.lines,
        isFirstAppearance: d.isFirstAppearance || false,
        isContinued: d.isContinued || false,
        dual: d.dual
      })),
      transition: s.transition,
      estimatedDuration: s.estimatedDuration || 15,
      notes: s.notes
    }));
  } catch (error) {
    console.error("DeepSeek extractScript failed:", error);
    throw new Error("AI 剧本生成失败，请检查网络或 Key");
  }
}
const SOUND_PRESETS = {
  // === 战斗/动作 ===
  "战斗": ["刀剑交击", "铠甲碰撞声", "战吼声", "拳拳到肉", "骨骼碎裂"],
  "森林": ["鸟鸣啾啾", "树叶沙沙", "风吹树梢", "溪流潺潺"],
  "雨景": ["雨打芭蕉", "屋檐滴水", "雷声隆隆", "雨水汇流"]
};
const MUSIC_PRESETS = {
  // === 情绪 ===
  "紧张": ["紧张鼓点BGM", "悬疑弦乐渐强", "心跳节奏", "电子紧迫感"],
  "悲伤": ["钢琴抒情轻柔", "提琴悲鸣", "哀伤笛声", "大提琴低沉"],
  "欢快": ["轻快小调", "欢乐节奏", "热闘BGM", "爵士欢快"],
  "浪漫": ["小提琴柔情", "钢琴二重奏", "萨克斯低鸣", "吉他轻弹"],
  "热血": ["激昂管弦", "电吉他嘶吼", "战鼓震天", "合唱高潮"],
  // === 风格 ===
  "古风": ["古琴悠扬", "琵琶轻弹", "箫声空灵", "古筝流水", "二胡婉转"]
};
const EMOTIONAL_CAMERA_PRESETS = {
  "聚焦推进": "镜头从宽泛视野慢向核心主体推进，画面边缘逐渐收缩，传递渐沉浸、情绪递进的张力",
  "抽离后拉": "镜头从主体近景后拉，主体在画面中占比缩小，传递疏离感、释然、时空延展的氛围",
  "探索横摇": "镜头沿水平方向缓慢摇动，如同视线在空间中游走，传递追寻、好奇、不安的情绪",
  "陪伴平移": "镜头与主体保持平行轨迹，始终以主体为视觉锚点，传递无声陪伴、叙事流动感",
  "升华上升": "镜头从低角度缓慢向上升起，视野从局部扩展至开阔空间，传递崇高、希望、释然的力量",
  "压抑下降": "镜头从高处缓慢下沉降，视野从开阔空间收拢至特定主体，传递压抑、失落、聚焦的沉重感",
  "迷幻旋转": "镜头以主体为中心环绕旋转，画面元素随运镜产生动态模糊，传递混乱、迷幻、情绪剧烈波动",
  "爆发急推": "镜头以快速爆发力向前急推，动态冲击强烈，传递突发冲突、紧张爆发的冲击力",
  "爆发急拉": "镜头以快速爆发力向后急拉，画面在短时间内压缩/拉伸，传递紧张爆发的冲击力",
  "手持抖动": "手持镜头伴随轻微自然抖动，画面呈现生活化的不稳定性，传递真实、慌乱、紧张",
  "静动转换": "镜头先保持静止，再自然切换为动态运镜，传递从平静到涌动、从抑制到释放的转变"
};
const PROFESSIONAL_CAMERA_TEMPLATES = {
  // 特效运镜
  "希区柯克变焦": "dolly zoom effect，镜头推进同时变焦拉远，制造悬疑感或心理扭曲的视觉冲击",
  "一镜到底": "continuous tracking shot，无剪辑长镜头跟随主体穿越多个空间，沉浸式叙事",
  // 俯冲与升降
  "俯冲镜头": "Dive Shot，从高空云层急速俯冲逼近地面，配合镜头抖动特效，营造强烈视觉冲击",
  "升降镜头": "Crane Shot，镜头从地面低角度垂直抬升至高空俯瞰，呈现广阔环境中的渺小感",
  "俯瞰全景": "overhead shot，从正上方高空垂直拍摄，展示场景的宏观结构如建筑群落的布局",
  // 动态转场
  "旋转淡出": "spin fade transition，镜头旋转同时渐隐，用于衔接不同场景或时间线",
  "动态匹配": "match cut，通过相似动作或形状匹配衔接两个不同场景",
  // 跟随与环绕
  "跟随运镜": "Tracking Shot，稳定器跟拍奔跑的运动员/悬浮车辆，主体始终居中，背景产生运动模糊",
  "动态环绕": "Orbital Shot，360度环绕拍摄，镜头半径7米，保持仰角15度，突出环境与主体的互动关系",
  "低角环绕": "low-angle orbit，低角度环绕主体，营造视觉冲击力和力量感",
  // 曲线与速度
  "曲线运镜": "curved camera path，镜头沿曲线轨迹运动，模拟真实手持或特殊设备运动轨迹",
  "加速推进": "accelerated zoom，镜头逐渐加速推进，增强紧张感和冲击力",
  "慢速平移": "slow dolly movement，镜头缓慢平稳移动，传递流畅、平稳的叙事节奏",
  // 视角切换
  "仰视广角": "low-angle wide shot，从较低位置向上拍摄，使主体显得更为高耸、庄重",
  "俯视拍摄": "overhead shot，从较高位置向下拍摄，令主体显得相对渺小，营造压迫、孤立感",
  "第一人称": "POV shot，模拟角色眼睛所看到的景象，引导观众以角色的主观视野体验情境",
  "客观视角": "neutral angle，采用中立的拍摄角度，真实地再现场景，不夹杂主观判断"
};
const VISUAL_EFFECT_PRESETS = {
  "广角畸变": "运用鱼眼镜头拍摄，画面边缘呈现显著的变形效果，构建夸张化、非写实的视觉感受",
  "画面分割": "将单一屏幕划分为若干个独立区域，用以同步展现不同的场景或多个视点",
  "影像叠加": "将两个或更多的画面素材重叠融合在一起，创造出如梦似幻或具有抽象意味的视觉效果",
  "单色镜头": "除去画面中所有色彩信息，仅以不同程度的灰色调来呈现，强化复古感、戏剧张力",
  "轮廓剪影": "当主体处于强烈逆光环境下，形成一个深暗的轮廓，细节被隐去，强调物体外形线条",
  "失焦朦胧": "通过控制景深，使得画面的主体或其背景部分呈现模糊状态，引导观众注意力",
  "精细放大": "对极其微小的物体进行极度近距离的特写拍摄，展现平常肉眼难以观察到的细节"
};
const TIME_CONTROL_PRESETS = {
  "延时慢放": "通过高速捕捉影像后再以较慢速度播放，细致入微地展现动作的每一个瞬间，增强画面情绪感染力",
  "缩时摄影": "将较长时间内发生的事件压缩在短时间内快速播放，以直观展现事物发展或时间流逝的过程",
  "瞬间静止": "影像在某一刻突然停止不动，着重突出某个特定的瞬间，常用于剧情达到高潮点或影片收尾",
  "快速摇摆": "以极快的速度水平转动摄影机，导致画面瞬间模糊，常用于场景的快速切换或转场技巧",
  "焦距变换": "利用镜头焦距的调整，实现画面从远距离景物迅速过渡到近距离特写，或由特写迅速转为远景"
};
const DIRECTOR_STYLE_PRESETS = {
  // ========== 经典日系动画 ==========
  "宫崎骏风格": {
    artStyle: "手绘动画",
    colorTone: "温暖柔和色调",
    lightingStyle: "自然柔和光线",
    cameraStyle: "电影级镜头",
    mood: "温馨治愈",
    customPrompt: "Studio Ghibli style, hand-drawn animation, watercolor aesthetic, nature elements",
    negativePrompt: "写实风格, 3D渲染, 暗黑恐怖, 血腥暴力",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  "新海诚风格": {
    artStyle: "唯美写实",
    colorTone: "高饱和度鲜艳色彩",
    lightingStyle: "戏剧性光影对比",
    cameraStyle: "广角镜头",
    mood: "浪漫忧郁",
    customPrompt: "Makoto Shinkai style, detailed urban scenery, beautiful sky, lens flare, romantic atmosphere",
    negativePrompt: "卡通Q版, 粗糙线条, 暗沉色调",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "normal"
  },
  "今敏风格": {
    artStyle: "写实动画",
    colorTone: "高饱和度",
    lightingStyle: "戏剧性光影",
    cameraStyle: "快速剪辑",
    mood: "梦幻迷离",
    customPrompt: "Satoshi Kon style, surreal transitions, dream-like, psychological thriller, anime realism, seamless reality shifts",
    negativePrompt: "简单卡通, 低细节, 平淡叙事",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  // ========== 西方经典导演 ==========
  "诺兰风格": {
    artStyle: "写实主义",
    colorTone: "冷色调去饱和",
    lightingStyle: "强对比戏剧光",
    cameraStyle: "史诗级IMAX镜头",
    mood: "紧张悬疑",
    customPrompt: "Christopher Nolan style, realistic, IMAX cinematography, wide angle, dramatic lighting",
    negativePrompt: "卡通风格, 鲜艳色彩, 可爱元素",
    aspectRatio: "21:9",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  "昆汀风格": {
    artStyle: "复古胶片",
    colorTone: "鲜艳高饱和色彩",
    lightingStyle: "强烈对比光线",
    cameraStyle: "特写广角交替",
    mood: "暴力美学",
    customPrompt: "Quentin Tarantino style, retro film grain, vibrant colors, extreme close-ups, stylized violence",
    negativePrompt: "温馨可爱, 柔和色调, 儿童向",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  "王家卫风格": {
    artStyle: "写实主义",
    colorTone: "温暖复古",
    lightingStyle: "霓虹灯光",
    cameraStyle: "手持摄影",
    mood: "孤独浪漫",
    customPrompt: "Wong Kar-wai style, neon lights, handheld camera, nostalgic mood, motion blur, slow motion, urban melancholy",
    negativePrompt: "明亮温馨, 快节奏, 喜剧风格",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  "韦斯·安德森风格": {
    artStyle: "对称构图",
    colorTone: "柔和复古色调",
    lightingStyle: "均匀平面照明",
    cameraStyle: "正面对称镜头",
    mood: "奇幻怀旧",
    customPrompt: "Wes Anderson style, symmetrical composition, pastel colors, whimsical, vintage aesthetic, centered framing",
    negativePrompt: "不对称, 混乱构图, 暗黑风格",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  "吉尔莫·德尔·托罗风格": {
    artStyle: "哥特式奇幻",
    colorTone: "冷色调",
    lightingStyle: "阴影对比",
    cameraStyle: "戏剧性构图",
    mood: "神秘阴郁",
    customPrompt: "Guillermo del Toro style, gothic fantasy, creature design, dark fairy tale, ornate details, magical realism",
    negativePrompt: "明亮温馨, 简约风格, 卡通可爱",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "normal"
  },
  // ========== 视觉风格 ==========
  "赛博朋克": {
    artStyle: "赛博朋克",
    colorTone: "霓虹色彩",
    lightingStyle: "霓虹灯光效",
    cameraStyle: "未来科技镜头",
    mood: "神秘科技",
    customPrompt: "cyberpunk style, neon lights, futuristic city, holographic elements, rain and reflections",
    negativePrompt: "自然田园, 古典风格, 暖色调",
    aspectRatio: "21:9",
    videoFrameRate: "30",
    motionIntensity: "dynamic"
  },
  "黑色电影": {
    artStyle: "黑白胶片",
    colorTone: "黑白高对比",
    lightingStyle: "强烈阴影",
    cameraStyle: "经典胶片镜头",
    mood: "阴郁悬疑",
    customPrompt: "film noir style, black and white, dramatic shadows, venetian blinds lighting, mystery atmosphere",
    negativePrompt: "彩色画面, 明亮温馨, 可爱卡通",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  // ========== AI漫剧爆款风格 ==========
  "古风仙侠": {
    artStyle: "国风水墨",
    colorTone: "青绿山水色调",
    lightingStyle: "柔和仙气光",
    cameraStyle: "飘逸镜头",
    mood: "仙气飘飘",
    customPrompt: "中国古典仙侠, 水墨画风格, 云雾缭绕, 仙鹤飞舞, 古典建筑, 飘逸衣袂, 唯美意境",
    negativePrompt: "现代元素, 西式建筑, 写实风格",
    aspectRatio: "9:16",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  "都市甜宠": {
    artStyle: "唯美漫画",
    colorTone: "粉嫩甜美色调",
    lightingStyle: "柔焦梦幻光",
    cameraStyle: "浪漫镜头",
    mood: "甜蜜浪漫",
    customPrompt: "现代都市, 甜宠风格, 柔光效果, 梦幻氛围, 精致五官, 时尚穿搭, 浪漫场景",
    negativePrompt: "暗黑风格, 恐怖元素, 粗糙画风",
    aspectRatio: "9:16",
    videoFrameRate: "30",
    motionIntensity: "normal"
  },
  "霸总虐恋": {
    artStyle: "写实漫画",
    colorTone: "冷暖对比色调",
    lightingStyle: "戏剧性侧光",
    cameraStyle: "电影级特写",
    mood: "虐恋情深",
    customPrompt: "现代都市, 霸道总裁风格, 高级感, 戏剧性光影, 情绪张力, 豪华场景, 西装革履",
    negativePrompt: "卡通风格, 低质量, 变形",
    aspectRatio: "9:16",
    videoFrameRate: "24",
    motionIntensity: "normal"
  },
  "重生逆袭": {
    artStyle: "写实漫画",
    colorTone: "高对比鲜艳",
    lightingStyle: "高光打亮",
    cameraStyle: "快节奏剪辑",
    mood: "爽快逆袭",
    customPrompt: "重生题材, 逆袭风格, 表情夸张, 戏剧张力, 对比强烈, 高光时刻, 情绪饱满",
    negativePrompt: "平淡无奇, 暗沉色调",
    aspectRatio: "9:16",
    videoFrameRate: "30",
    motionIntensity: "dynamic"
  },
  "玄幻修仙": {
    artStyle: "东方玄幻",
    colorTone: "金紫神秘色调",
    lightingStyle: "炫光特效",
    cameraStyle: "史诗级镜头",
    mood: "热血震撼",
    customPrompt: "玄幻修仙, 法阵符文, 金光闪耀, 灵气外溢, 飞剑法宝, 气势磅礴, 仙山福地",
    negativePrompt: "现代科技, 西方魔法, 低质量",
    aspectRatio: "9:16",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  "战神归来": {
    artStyle: "硬派写实",
    colorTone: "冷酷金属色调",
    lightingStyle: "硬朗光线",
    cameraStyle: "动作电影镜头",
    mood: "热血战斗",
    customPrompt: "战神题材, 硬汉风格, 军事元素, 肌肉线条, 冷峻表情, 战斗场景, 爆炸特效",
    negativePrompt: "软萌可爱, 女性化",
    aspectRatio: "9:16",
    videoFrameRate: "30",
    motionIntensity: "dynamic"
  },
  "宫斗权谋": {
    artStyle: "古典华丽",
    colorTone: "宫廷富贵色调",
    lightingStyle: "烛光暖调",
    cameraStyle: "宫廷剧镜头",
    mood: "明争暗斗",
    customPrompt: "古代宫廷, 华丽服饰, 雕梁画栋, 勾心斗角, 美人如玉, 权谋深沉, 宫墙深院",
    negativePrompt: "现代元素, 简约风格",
    aspectRatio: "9:16",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  "末世求生": {
    artStyle: "废土风格",
    colorTone: "灰暗荒凉色调",
    lightingStyle: "昏暗末日光",
    cameraStyle: "手持晃动镜头",
    mood: "紧张求生",
    customPrompt: "末世废土, 丧尸危机, 荒凉城市, 破败建筑, 求生装备, 紧张氛围, 危机四伏",
    negativePrompt: "明亮温馨, 可爱风格",
    aspectRatio: "16:9",
    videoFrameRate: "30",
    motionIntensity: "dynamic"
  },
  "校园青春": {
    artStyle: "清新漫画",
    colorTone: "明亮清新色调",
    lightingStyle: "阳光明媚",
    cameraStyle: "青春活力镜头",
    mood: "青涩甜蜜",
    customPrompt: "校园青春, 阳光少年少女, 教室走廊, 樱花飘落, 制服穿搭, 纯真美好, 青春洋溢",
    negativePrompt: "暗黑成人内容, 暴力元素",
    aspectRatio: "9:16",
    videoFrameRate: "30",
    motionIntensity: "normal"
  },
  "国风唯美": {
    artStyle: "国画工笔",
    colorTone: "水墨淡彩",
    lightingStyle: "中式柔光",
    cameraStyle: "诗意镜头",
    mood: "典雅诗意",
    customPrompt: "中国风, 工笔画风格, 汉服古装, 亭台楼阁, 山水意境, 梅兰竹菊, 诗情画意, 雅致唯美",
    negativePrompt: "西式风格, 现代元素, 粗糙线条",
    aspectRatio: "9:16",
    videoFrameRate: "24",
    motionIntensity: "subtle"
  },
  // ========== 影视公司风格 ==========
  "皮克斯风格": {
    artStyle: "3D动画",
    colorTone: "鲜艳明快",
    lightingStyle: "柔和光线",
    cameraStyle: "电影级构图",
    mood: "温馨治愈",
    customPrompt: "Pixar style, 3D animation, vibrant colors, family-friendly, emotional storytelling, detailed textures",
    negativePrompt: "写实人物, 暗黑恐怖, 暴力血腥",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "normal"
  },
  "漫威风格": {
    artStyle: "超级英雄",
    colorTone: "高饱和度",
    lightingStyle: "强对比光",
    cameraStyle: "IMAX大场面",
    mood: "史诗激动",
    customPrompt: "Marvel cinematic style, epic action, superhero aesthetic, CGI effects, dramatic poses, heroic lighting",
    negativePrompt: "低成本, 简陋特效, 平淡日常",
    aspectRatio: "21:9",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  // ========== 地区风格 ==========
  "武侠风格": {
    artStyle: "古装写实",
    colorTone: "中国传统色",
    lightingStyle: "自然光",
    cameraStyle: "广角动作",
    mood: "侠义豪情",
    customPrompt: "Chinese wuxia style, martial arts, traditional costume, ancient China, sword fighting, wire-fu action",
    negativePrompt: "现代元素, 西方魔法, 科幻风格",
    aspectRatio: "16:9",
    videoFrameRate: "24",
    motionIntensity: "dynamic"
  },
  "宝莱坞风格": {
    artStyle: "印度电影",
    colorTone: "鲜艳饱满",
    lightingStyle: "明亮照明",
    cameraStyle: "歌舞镜头",
    mood: "欢快浪漫",
    customPrompt: "Bollywood style, vibrant colors, dance sequences, romantic drama, elaborate costumes, festive atmosphere",
    negativePrompt: "暗黑压抑, 极简风格, 冷色调",
    aspectRatio: "16:9",
    videoFrameRate: "30",
    motionIntensity: "dynamic"
  }
};
const DEFAULT_NEGATIVE_PROMPT = "变形, 扭曲, 比例失调, 画工粗糙, 人体结构错误, 多余肢体, 缺失肢体, 悬浮肢体, 断裂肢体, 畸变, 变异, 丑陋, 恶心, 模糊, 截肢, 多余手指, 缺失手指, 手部畸形, 三只手, 手指过多, 手指粘连, 低分辨率, 质量差, 最差质量, 压缩失真, 水印, 文字, 签名, 用户名, 画面裁切, 画面外内容";
function applyPromptWeight(text, weight = 1.2) {
  if (weight === 1) return text;
  return `(${text}:${weight.toFixed(1)})`;
}
function translateToChineseStyle(style) {
  const translations = {
    "film noir": "黑色电影风格",
    "anime": "日系动漫风格",
    "realistic": "写实风格",
    "watercolor": "水彩风格",
    "oil painting": "油画风格",
    "cyberpunk": "赛博朋克风格",
    "fantasy": "奇幻风格",
    "horror": "恐怖风格",
    "romantic": "浪漫风格",
    "noir": "黑白电影风格"
  };
  const lowerStyle = style.toLowerCase();
  for (const [en, cn2] of Object.entries(translations)) {
    if (lowerStyle.includes(en)) {
      return cn2;
    }
  }
  return style.includes("风格") ? style : `${style}风格`;
}
function generateStoryboardImagePrompt(panel, characters, scenes, directorStyle) {
  const cameraLang = [];
  const triggerWords = [];
  const subjects = [];
  const styleWords = [];
  const qualityTags = [];
  const shotCodeMap = {
    "ECU": "大特写，极致聚焦主体微小局部，几乎排除环境干扰，制造强烈视觉冲击力",
    "CU": "特写，聚焦主体局部细节，弱化远景环境，突出细微动作如手势、眼神变化",
    "MCU": "近景，胸部以上入画，压缩环境空间，强化观众与主体近距离感",
    "MS": "中景，腰部以上入画，聚焦主体主要活动区域，兼顾动作细节和局部环境",
    "MWS": "中全景，膝部以上入画，主体与环境平衡呈现",
    "WS": "远景，全身入画，完整呈现主体全貌及周围核心环境",
    "EWS": "大远景，广阔场景取景，主体占比极小，重点呈现环境整体氛围，空间纵深感强",
    "POV": "主观视角，第一人称视角，观众代入角色所见",
    "OTS": "过肩镜头，前景人物虚化肩部入画，后景清晰呈现对话主体"
  };
  const angleMap = {
    "EYE_LEVEL": "平视，与主体视线平齐，呈现客观中立视角",
    "HIGH": "俯拍，从高于主体视角向下拍摄，突出整体秩序或环境包围感",
    "LOW": "仰拍，从低于主体视角向上拍摄，传递主体权威感、力量感或压迫感",
    "DUTCH": "倾斜，画面倾斜构图，传递不安、紧张或戏剧性张力"
  };
  if (panel.shotSize && shotCodeMap[panel.shotSize]) {
    cameraLang.push(shotCodeMap[panel.shotSize]);
  } else {
    let defaultShot = "中景";
    if (panel.dialogue && panel.dialogue.trim()) {
      defaultShot = "近景";
    } else if (!panel.characters || panel.characters.length === 0) {
      defaultShot = "远景";
    } else if (panel.characters.length > 2) {
      defaultShot = "中全景";
    } else if (panel.emotionalBeat === "CLIMAX" || panel.emotionalBeat === "SHOCK") {
      defaultShot = "特写";
    }
    cameraLang.push(defaultShot);
  }
  if (panel.angle && angleMap[panel.angle]) {
    cameraLang.push(angleMap[panel.angle]);
  }
  const shotSize = panel.shotSize || "MS";
  const compositionGuide = {
    "ECU": "面部居中，极致细节",
    "CU": "面部居中，表情清晰",
    "MCU": "胸部以上，留白适中",
    "MS": "腰部以上，人物居中",
    "MWS": "膝部以上，环境可见",
    "WS": "全身入画，环境占比大",
    "EWS": "人物渺小，环境壮阔",
    "POV": "第一人称视角",
    "OTS": "前景虚化，后景清晰"
  };
  if (compositionGuide[shotSize]) {
    cameraLang.push(compositionGuide[shotSize]);
  }
  if (panel.characters && panel.characters.length > 0) {
    panel.characters.forEach((charName, index) => {
      const char = characters.find((c) => c.name === charName);
      if (char == null ? void 0 : char.triggerWord) {
        const weight = index === 0 ? 1.5 : 1.2;
        triggerWords.push(applyPromptWeight(char.triggerWord, weight));
      }
    });
  }
  if (panel.characters && panel.characters.length > 0) {
    const charNames = panel.characters.slice(0, 3).map(
      (name, i) => i === 0 ? applyPromptWeight(name, 1.3) : name
    ).join("、");
    subjects.push(charNames);
  }
  if (panel.description) {
    let desc = panel.description;
    if (desc.length > 80) {
      const parts = desc.split(/[，。,\.]/);
      desc = "";
      for (const part of parts) {
        if ((desc + part).length <= 70) {
          desc += (desc ? "，" : "") + part.trim();
        } else {
          break;
        }
      }
      if (!desc) {
        desc = panel.description.substring(0, 70);
      }
    }
    subjects.push(desc);
  }
  const scene = scenes.find((s) => s.id === panel.sceneId);
  if (scene == null ? void 0 : scene.timeOfDay) {
    const timeOfDayLighting = {
      "白天": "自然光",
      "日间": "自然光",
      "上午": "晨光",
      "中午": "顶光",
      "下午": "斜阳",
      "黄昏": "金色暖光",
      "傍晚": "暮光",
      "夜晚": "月光",
      "深夜": "暗调",
      "凌晨": "冷蓝光"
    };
    if (timeOfDayLighting[scene.timeOfDay]) {
      subjects.push(timeOfDayLighting[scene.timeOfDay]);
    }
  }
  if (panel.atmosphere) {
    subjects.push(panel.atmosphere);
  }
  if (directorStyle) {
    if (directorStyle.artStyle) {
      const artStyleCN = translateToChineseStyle(directorStyle.artStyle);
      styleWords.push(artStyleCN);
    }
    if (directorStyle.colorTone) {
      styleWords.push(directorStyle.colorTone);
    }
    if (directorStyle.lightingStyle) {
      styleWords.push(directorStyle.lightingStyle);
    }
    if (directorStyle.cameraStyle) {
      styleWords.push(directorStyle.cameraStyle);
    }
    if (directorStyle.mood) {
      styleWords.push(`${directorStyle.mood}氛围`);
    }
    if (directorStyle.customPrompt) {
      const chineseOnly = directorStyle.customPrompt.replace(/[a-zA-Z,\s]+/g, "").trim();
      if (chineseOnly) {
        styleWords.push(chineseOnly);
      }
    }
  }
  qualityTags.push("电影构图", "专业分镜", "高清");
  if (directorStyle == null ? void 0 : directorStyle.artStyle) {
    const artStyle = directorStyle.artStyle;
    if (artStyle.includes("国风") || artStyle.includes("水墨") || artStyle.includes("工笔")) {
      qualityTags.push("东方美学", "中式意境");
    }
    if (artStyle.includes("赛博") || artStyle.includes("科幻")) {
      qualityTags.push("未来感", "科技质感");
    }
    if (artStyle.includes("动画") || artStyle.includes("二次元")) {
      qualityTags.push("动画风格", "精致线条");
    }
    if (artStyle.includes("写实") || artStyle.includes("真人")) {
      qualityTags.push("真实感", "细腻光影");
    }
  }
  const allParts = [
    ...cameraLang,
    ...triggerWords,
    ...subjects,
    ...styleWords,
    ...qualityTags
  ].filter((p) => p);
  let result = allParts.join(", ");
  const aspectRatio = (directorStyle == null ? void 0 : directorStyle.aspectRatio) || "16:9";
  result += ` --ar ${aspectRatio}`;
  const defaultNegative = "变形, 多手指, 模糊, 低质量";
  const negPrompt = (directorStyle == null ? void 0 : directorStyle.negativePrompt) ? `${defaultNegative}, ${directorStyle.negativePrompt}` : defaultNegative;
  result += ` --neg ${negPrompt}`;
  return result;
}
function generateStoryboardVideoPrompt(panel, characters, scenes, directorStyle, platform = "generic", prevPanel) {
  const parts = [];
  const actualPrevPanel = typeof platform === "object" ? platform : prevPanel;
  const actualPlatform = typeof platform === "string" ? platform : "generic";
  if (actualPrevPanel && actualPrevPanel.endFrame) {
    parts.push(`[过渡] 承接上一镜：${actualPrevPanel.endFrame}，画面自然延续`);
  }
  if (panel.transition && panel.transition !== "切至") {
    const transitionMap = {
      "溶至": "画面溶解过渡，从前一镜渐变融入",
      "淡出": "画面淡出至黑，再淡入新镜",
      "淡入": "从黑色淡入画面",
      "闪白": "画面闪白过渡，强调冲击感",
      "擦除": "画面擦除过渡"
    };
    if (transitionMap[panel.transition]) {
      parts.push(`[转场] ${transitionMap[panel.transition]}`);
    }
  }
  const videoShotCodeMap = {
    "ECU": "大特写，极致聚焦主体微小局部",
    "CU": "特写，聚焦主体局部细节",
    "MCU": "近景，胸部以上入画",
    "MS": "中景，腰部以上入画",
    "MWS": "中全景，膝部以上入画",
    "WS": "远景，全身入画",
    "EWS": "大远景，广阔场景",
    "POV": "主观视角，第一人称",
    "OTS": "过肩镜头"
  };
  const videoAngleMap = {
    "EYE_LEVEL": "平视角度",
    "HIGH": "俯拍角度",
    "LOW": "仰拍角度",
    "DUTCH": "倾斜角度"
  };
  if (panel.shotSize && videoShotCodeMap[panel.shotSize]) {
    parts.push(videoShotCodeMap[panel.shotSize]);
  }
  if (panel.cameraAngle && videoAngleMap[panel.cameraAngle]) {
    parts.push(videoAngleMap[panel.cameraAngle]);
  }
  const movementMap = {
    "静止": "静态镜头",
    "推": "推镜头，向前移动",
    "拉": "拉镜头，向后移动",
    "摇": "摇镜头",
    "移": "移动跟拍",
    "跟": "跟随镜头",
    "升降": "升降镜头，垂直运动",
    "环绕": "环绕镜头，圆周运动"
  };
  const movementCodeMap = {
    "STATIC": "静态镜头，画面保持稳定不动",
    "PAN_L": "向左摇镜，匀速水平摇动8秒扫过30米宽场景",
    "PAN_R": "向右摇镜，匀速水平摇动8秒扫过30米宽场景",
    "TILT_UP": "向上摇镜，快速急摇2秒内从地面摇至天空",
    "TILT_DOWN": "向下摇镜，2秒内从天空摇至地面",
    "DOLLY_IN": "推镜头，缓慢推进每秒15厘米，6秒内从全景推至近景",
    "DOLLY_OUT": "拉镜头，快速拉远0.5秒内从特写拉至全景",
    "TRACK_L": "向左横移，缓慢侧移与主体保持2米距离，每秒50厘米",
    "TRACK_R": "向右横移，缓慢侧移与主体保持2米距离，每秒50厘米",
    "CRANE_UP": "升镜头，缓慢升空从腰部升至10米高空，6秒内完成",
    "CRANE_DOWN": "降镜头，快速下降从20米高空直落至主体头顶1.5米处",
    "ZOOM_IN": "变焦拉近，焦距平滑变化聚焦细节",
    "ZOOM_OUT": "变焦拉远，焦距平滑变化展现全貌",
    "HANDHELD": "手持镜头，伴随轻微自然抖动，呈现真实感",
    "STEADICAM": "稳定器跟拍，与主体步行速度每秒1.2米完全同步",
    "FOLLOW": "跟随镜头，追踪主体移动",
    "ARC": "环绕镜头，以主体为圆心保持3米半径，每秒转动30度",
    "WHIP": "甩镜头，快速摇移1秒内完成360度翻转",
    "ORBIT": "环绕镜头，匀速环绕12秒完成一周始终正对主体"
  };
  if (panel.movementType && movementCodeMap[panel.movementType]) {
    parts.push(movementCodeMap[panel.movementType]);
  } else if (panel.cameraMovement && movementMap[panel.cameraMovement]) {
    parts.push(movementMap[panel.cameraMovement]);
  }
  if (panel.cameraMovement && EMOTIONAL_CAMERA_PRESETS[panel.cameraMovement]) {
    parts.push(EMOTIONAL_CAMERA_PRESETS[panel.cameraMovement]);
  }
  if (panel.cameraMovement && PROFESSIONAL_CAMERA_TEMPLATES[panel.cameraMovement]) {
    parts.push(PROFESSIONAL_CAMERA_TEMPLATES[panel.cameraMovement]);
  }
  if (panel.cameraMovement && VISUAL_EFFECT_PRESETS[panel.cameraMovement]) {
    parts.push(VISUAL_EFFECT_PRESETS[panel.cameraMovement]);
  }
  if (panel.cameraMovement && TIME_CONTROL_PRESETS[panel.cameraMovement]) {
    parts.push(TIME_CONTROL_PRESETS[panel.cameraMovement]);
  }
  if (panel.duration) {
    parts.push(`${panel.duration}秒时长`);
  }
  if (panel.actionCue) {
    if (panel.actionCue.startAction && panel.actionCue.endAction) {
      parts.push(`动作：从"${panel.actionCue.startAction}"到"${panel.actionCue.endAction}"`);
    } else if (panel.actionCue.startAction) {
      parts.push(`起始动作：${panel.actionCue.startAction}`);
    }
    if (panel.actionCue.direction) {
      parts.push(`方向：${panel.actionCue.direction}`);
    }
  }
  if (panel.startFrame || panel.endFrame) {
    const frameParts = [];
    if (panel.startFrame) {
      frameParts.push(`【起始帧】${panel.startFrame}`);
    }
    if (panel.endFrame) {
      frameParts.push(`【结束帧】${panel.endFrame}`);
    }
    parts.push(frameParts.join(" → "));
  }
  if (panel.motionSpeed) {
    const speedMap = {
      "slow": "慢动作，0.5倍速",
      "normal": "正常速度",
      "fast": "快动作，2倍速",
      "timelapse": "延时摄影，加速运动"
    };
    parts.push(speedMap[panel.motionSpeed] || panel.motionSpeed);
  }
  if (panel.characterActions && panel.characterActions.length > 0) {
    parts.push(`【角色动作】${panel.characterActions.join("；")}`);
  }
  if (panel.environmentMotion) {
    parts.push(`【环境动态】${panel.environmentMotion}`);
  }
  const scene = scenes.find((s) => s.id === panel.sceneId);
  if (scene) {
    if (scene.location) {
      parts.push(`场景：${scene.location}`);
    }
    if (scene.environment) {
      parts.push(scene.environment);
    }
  }
  if (panel.description) {
    parts.push(panel.description);
  }
  if (panel.characters && panel.characters.length > 0) {
    panel.characters.forEach((name) => {
      const char = characters.find((c) => c.name === name);
      if (char) {
        if (char.triggerWord) {
          parts.push(`【${char.triggerWord}】${name}`);
        } else if (char.appearance) {
          parts.push(`${name}（${char.appearance}）`);
        } else {
          parts.push(name);
        }
      } else {
        parts.push(name);
      }
    });
  }
  if (panel.dialogue) {
    parts.push(`对白："${panel.dialogue}"`);
  }
  if (directorStyle) {
    if (directorStyle.artStyle) {
      parts.push(`${directorStyle.artStyle}风格`);
    }
    if (directorStyle.colorTone) {
      parts.push(directorStyle.colorTone);
    }
    if (directorStyle.lightingStyle) {
      parts.push(directorStyle.lightingStyle);
    }
    if (directorStyle.cameraStyle) {
      parts.push(directorStyle.cameraStyle);
    }
    if (directorStyle.mood) {
      parts.push(`${directorStyle.mood}氛围`);
    }
    if (directorStyle.customPrompt) {
      parts.push(directorStyle.customPrompt);
    }
    if (directorStyle.videoFrameRate) {
      const frameRateMap = {
        "24": "24fps电影流畅",
        "30": "30fps标准流畅",
        "60": "60fps超流畅"
      };
      parts.push(frameRateMap[directorStyle.videoFrameRate] || `${directorStyle.videoFrameRate}fps`);
    }
    if (directorStyle.motionIntensity) {
      const intensityMap = {
        "subtle": "微动效果",
        "normal": "标准运动",
        "dynamic": "强烈动态"
      };
      parts.push(intensityMap[directorStyle.motionIntensity] || directorStyle.motionIntensity);
    }
  }
  if (panel.aspectRatio) {
    const aspectMap = {
      "16:9": "横屏16:9电影比例",
      "9:16": "竖屏9:16手机比例",
      "1:1": "方形1:1社交媒体比例",
      "4:3": "经典4:3比例",
      "21:9": "超宽21:9电影比例"
    };
    parts.push(aspectMap[panel.aspectRatio] || panel.aspectRatio);
  }
  if (panel.soundEffects && panel.soundEffects.length > 0) {
    parts.push(`【音效氛围】${panel.soundEffects.slice(0, 3).join("、")}`);
  }
  if (panel.music) {
    parts.push(`【BGM】${panel.music}`);
  }
  const videoQualityTags = ["流畅运动", "电影级视频", "专业摄影", "高清画质"];
  if (directorStyle == null ? void 0 : directorStyle.artStyle) {
    const styleQualityMap = {
      "水墨": ["东方美学", "写意风格"],
      "赛博朋克": ["未来感", "霓虹光效"],
      "复古": ["胶片质感", "年代感"],
      "写实": ["真实光影", "自然色彩"],
      "动漫": ["二次元", "日系风格"],
      "奇幻": ["魔幻光效", "梦幻氛围"]
    };
    const extraTags = styleQualityMap[directorStyle.artStyle] || [];
    videoQualityTags.push(...extraTags);
  }
  parts.push(...videoQualityTags);
  const formatForPlatform = (parts2, platform2) => {
    switch (platform2) {
      case "runway":
        return parts2.map((p) => {
          if (p.startsWith("【")) return p.replace(/【(.+?)】/, "[$1]");
          return p;
        }).join(", ") + " --ar 16:9 --quality 4K";
      case "pika":
        return parts2.filter((p) => !p.includes("效果") && !p.includes("标签")).slice(0, 10).join("，") + "，高质量视频";
      case "kling":
        return parts2.join("，") + " #视频生成 #电影感";
      case "comfyui":
        return `positive_prompt: "${parts2.filter((p) => !p.startsWith("--")).join(", ")}"`;
      default:
        return parts2.filter((p) => p).join(", ");
    }
  };
  let result = formatForPlatform(parts, actualPlatform);
  if (directorStyle == null ? void 0 : directorStyle.negativePrompt) {
    if (actualPlatform === "comfyui") {
      result += `, negative_prompt: "${directorStyle.negativePrompt}"`;
    } else {
      result += ` --neg ${directorStyle.negativePrompt}`;
    }
  }
  return result;
}
function generateNegativePrompt(directorStyle) {
  if (directorStyle == null ? void 0 : directorStyle.negativePrompt) {
    return directorStyle.negativePrompt;
  }
  return DEFAULT_NEGATIVE_PROMPT;
}
function generateCharacterDefinition(character) {
  const parts = [];
  if (character.triggerWord) {
    parts.push(`[Trigger Word] ${character.triggerWord}`);
  }
  parts.push(`[Name] ${character.name}`);
  if (character.standardAppearance) {
    parts.push(`[Appearance] ${character.standardAppearance}`);
  } else if (character.appearance) {
    parts.push(`[Appearance] ${character.appearance}`);
  }
  if (character.personality) {
    parts.push(`[Personality] ${character.personality}`);
  }
  return parts.join("\n");
}
function exportAllCharacterDefinitions(characters) {
  return characters.map((char) => {
    return `=== ${char.name} ===
${generateCharacterDefinition(char)}`;
  }).join("\n\n");
}
const PLATFORM_PARAMS = {
  generic: { suffix: "", format: "standard" },
  midjourney: { suffix: " --ar 16:9 --style raw --v 6.1", format: "midjourney" },
  comfyui: { suffix: "", format: "comfyui_json" },
  runway: { suffix: ", high quality video, smooth motion", format: "runway" },
  pika: { suffix: ", cinematic, detailed motion", format: "pika" }
};
function generatePanelPromptPack(panel, characters, scenes, directorStyle, platform = "generic") {
  const platformConfig = PLATFORM_PARAMS[platform];
  let imagePrompt = generateStoryboardImagePrompt(panel, characters, scenes, directorStyle);
  let videoPrompt = generateStoryboardVideoPrompt(panel, characters, scenes, directorStyle, platform);
  if (platform === "midjourney") {
    imagePrompt += platformConfig.suffix;
  } else if (platform === "runway" || platform === "pika") {
    videoPrompt += platformConfig.suffix;
  }
  const charRefs = (panel.characters || []).map((name) => characters.find((c) => c.name === name)).filter((c) => c !== void 0).map((c) => generateCharacterDefinition(c));
  return {
    imagePrompt,
    videoPrompt,
    negativePrompt: generateNegativePrompt(directorStyle),
    characterRefs: charRefs,
    metadata: {
      panelNumber: panel.panelNumber,
      duration: panel.duration || 3,
      transition: panel.transition || "切至",
      platform
    }
  };
}
function exportAllPanelPrompts(panels, characters, scenes, directorStyle, platform = "generic") {
  const output = [];
  output.push(`# 分镜提示词导出`);
  output.push(`# 平台: ${platform}`);
  output.push(`# 导出时间: ${(/* @__PURE__ */ new Date()).toISOString()}`);
  output.push(`# 总分镜数: ${panels.length}`);
  output.push("");
  output.push("## 负面提示词 (Negative Prompt)");
  output.push(generateNegativePrompt(directorStyle));
  output.push("");
  output.push("## 角色定义 (Character Definitions)");
  output.push(exportAllCharacterDefinitions(characters));
  output.push("");
  output.push("## 分镜提示词");
  panels.forEach((panel, index) => {
    const pack = generatePanelPromptPack(panel, characters, scenes, directorStyle, platform);
    output.push(`
### 分镜 ${index + 1} (${pack.metadata.duration}秒)`);
    output.push(`**AI绘画提示词:**`);
    output.push(pack.imagePrompt);
    output.push("");
    output.push(`**AI视频提示词:**`);
    output.push(pack.videoPrompt);
    output.push("");
    if (pack.metadata.transition !== "切至") {
      output.push(`**转场:** ${pack.metadata.transition}`);
    }
    output.push("---");
  });
  return output.join("\n");
}
function smartFillPanel(panel, scene, prevPanel, nextPanel, allPanels) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const desc = (panel.description || "").toLowerCase();
  const location = ((scene == null ? void 0 : scene.location) || "").toLowerCase();
  const beat = (scene == null ? void 0 : scene.beat) || "";
  const mood = (panel.atmosphere || panel.emotionalBeat || beat || "").toUpperCase();
  if (prevPanel && prevPanel.endFrame && (!panel.startFrame || panel.startFrame === "")) {
    panel.startFrame = `承接上一镜：${prevPanel.endFrame}`;
  }
  if (allPanels && allPanels.length > 0 && (!panel.music || panel.music === "")) {
    const sameScenePanels = allPanels.filter((p) => p.sceneId === panel.sceneId && p.music);
    if (sameScenePanels.length > 0) {
      panel.music = sameScenePanels[0].music;
    }
  }
  if (allPanels && allPanels.length > 0 && (!panel.colorGrade || panel.colorGrade === "" || panel.colorGrade === "自然调色")) {
    const sameEpisodePanels = allPanels.filter((p) => p.episodeNumber === panel.episodeNumber && p.colorGrade && p.colorGrade !== "自然调色");
    if (sameEpisodePanels.length > 0) {
      panel.colorGrade = sameEpisodePanels[0].colorGrade;
    }
  }
  if (!panel.soundEffects || panel.soundEffects.length === 0) {
    const soundEffects = [];
    if (location.includes("战斗") || desc.includes("打斗") || desc.includes("击")) {
      soundEffects.push(...SOUND_PRESETS["战斗"] || ["战斗音效"]);
    } else if (location.includes("雨") || desc.includes("下雨")) {
      soundEffects.push(...SOUND_PRESETS["雨景"] || ["雨声"]);
    } else if (location.includes("森") || location.includes("山") || location.includes("野")) {
      soundEffects.push(...SOUND_PRESETS["森林"] || ["森林环境音"]);
    } else if (location.includes("市") || location.includes("街") || location.includes("路")) {
      soundEffects.push(...SOUND_PRESETS["城市环境"] || ["城市背景音"]);
    } else if (location.includes("海") || location.includes("水") || location.includes("湖")) {
      soundEffects.push(...SOUND_PRESETS["水边"] || ["水声"]);
    } else if (location.includes("科幻") || location.includes("机械") || location.includes("船")) {
      soundEffects.push(...SOUND_PRESETS["科幻/机械"] || ["机械音效"]);
    } else {
      soundEffects.push("环境背景音");
    }
    if (desc.includes("脚步") || desc.includes("走") || desc.includes("跑")) {
      soundEffects.push("规律脚步声");
    }
    if (desc.includes("门") || desc.includes("开") || desc.includes("关")) {
      soundEffects.push("木门转轴声");
    }
    if (desc.includes("说") || desc.includes("喊") || panel.dialogue) {
      soundEffects.push("清晰人声对白");
    }
    panel.soundEffects = [...new Set(soundEffects)].slice(0, 3);
  }
  if (!panel.music || panel.music === "背景音乐") {
    if (mood.includes("TENSE") || mood.includes("紧张") || mood.includes("危险")) {
      panel.music = (_a = MUSIC_PRESETS["紧张"]) == null ? void 0 : _a[0];
    } else if (mood.includes("ROMANTIC") || mood.includes("浪漫") || mood.includes("温馨")) {
      panel.music = (_b = MUSIC_PRESETS["浪漫"]) == null ? void 0 : _b[0];
    } else if (mood.includes("SAD") || mood.includes("悲伤") || mood.includes("忧郁")) {
      panel.music = (_c = MUSIC_PRESETS["悲伤"]) == null ? void 0 : _c[0];
    } else if (mood.includes("HAPPY") || mood.includes("欢快") || mood.includes("轻松")) {
      panel.music = (_d = MUSIC_PRESETS["欢快"]) == null ? void 0 : _d[0];
    } else if (mood.includes("ACTION") || mood.includes("动作") || mood.includes("热血")) {
      panel.music = (_e = MUSIC_PRESETS["热血"]) == null ? void 0 : _e[0];
    } else if (location.includes("古") || location.includes("武侠") || location.includes("庙")) {
      panel.music = (_f = MUSIC_PRESETS["古风"]) == null ? void 0 : _f[0];
    } else {
      panel.music = "通用叙事背景音乐";
    }
  }
  if (!panel.cameraMovement || panel.cameraMovement === "静止") {
    const prevMovement = (prevPanel == null ? void 0 : prevPanel.cameraMovement) || "";
    const nextHasDialogue = (nextPanel == null ? void 0 : nextPanel.dialogue) && nextPanel.dialogue.length > 10;
    const isSceneStart = panel.panelNumber === 1 || panel.sceneId !== (prevPanel == null ? void 0 : prevPanel.sceneId);
    const isSceneEnd = nextPanel && panel.sceneId !== nextPanel.sceneId;
    const getCoherentMovement = () => {
      if (isSceneStart) return "静止";
      if (isSceneEnd) return "抽离后拉";
      if (nextHasDialogue) return "静止";
      if (prevMovement === "聚焦推进" || prevMovement === "爆发急推" || prevMovement.includes("推")) {
        return "静止";
      }
      if (prevMovement === "抽离后拉" || prevMovement.includes("拉")) {
        return "聚焦推进";
      }
      if (prevMovement === "静止" || prevMovement === "") {
        if (mood.includes("TENSE") || mood.includes("ANGRY")) return "爆发急推";
        if (mood.includes("SAD") || mood.includes("LONELY")) return "压抑下降";
        if (mood.includes("REVEAL")) return "升华上升";
        return "陪伴平移";
      }
      return "静止";
    };
    if (mood.includes("TENSE") || mood.includes("ANGRY")) {
      panel.cameraMovement = isSceneStart ? "静止" : "手持抖动";
    } else if (mood.includes("SAD") || mood.includes("LONELY")) {
      panel.cameraMovement = getCoherentMovement();
    } else if (mood.includes("MYSTERY") || mood.includes("SUSPENSE")) {
      panel.cameraMovement = "探索横摇";
    } else if (mood.includes("REVEAL") || mood.includes("SUBLIME")) {
      panel.cameraMovement = isSceneEnd ? "抽离后拉" : "升华上升";
    } else if (mood.includes("ROMANTIC") || mood.includes("CALM")) {
      panel.cameraMovement = "陪伴平移";
    } else if (mood.includes("ACTION") || mood.includes("CHASE")) {
      panel.cameraMovement = "跟";
    } else if (panel.dialogue && panel.dialogue.length > 20) {
      panel.cameraMovement = "静止";
    } else {
      panel.cameraMovement = getCoherentMovement();
    }
  }
  if (!panel.startFrame || panel.startFrame === "静止画面") {
    const chars = ((_g = panel.characters) == null ? void 0 : _g.join("、")) || "主体";
    const movement = panel.movementType || panel.cameraMovement || "静止";
    if (movement === "DOLLY_IN" || movement === "推" || movement === "聚焦推进" || movement === "爆发急推") {
      panel.startFrame = `${chars}处于全景构图中心`;
      panel.endFrame = `${chars}面部特写，表情细节清晰`;
    } else if (movement === "DOLLY_OUT" || movement === "拉" || movement === "抽离后拉" || movement === "爆发急拉") {
      panel.startFrame = `${chars}近景特写`;
      panel.endFrame = `${chars}在广阔远景中显得渺小`;
    } else if (movement === "FOLLOW" || movement === "跟" || movement === "陪伴平移") {
      panel.startFrame = `${chars}开始侧向/正向移动`;
      panel.endFrame = `保持与${chars}同步高度的动态跟随`;
    } else if (movement === "PAN_L" || movement === "PAN_R" || movement === "探索横摇") {
      panel.startFrame = `场景边缘起始点，${chars}尚未入画`;
      panel.endFrame = `横移扫过场景，${chars}出现在黄金分割点`;
    } else if (panel.dialogue) {
      panel.startFrame = `${chars}开口瞬间的气息捕捉`;
      panel.endFrame = `${chars}说完对白后的微表情收尾`;
    } else {
      panel.startFrame = `${chars}处于画面稳定构图位置`;
      panel.endFrame = `画面保持稳定，光影微动`;
    }
  }
  if (!panel.transition || panel.transition === "切至") {
    if (desc.includes("回忆") || desc.includes("过去")) {
      panel.transition = "溶至";
    } else if (desc.includes("惊醒") || desc.includes("突变")) {
      panel.transition = "闪白";
    } else if (desc.includes("落幕") || desc.includes("结束")) {
      panel.transition = "淡出";
    }
  }
  if (!panel.motionSpeed || panel.motionSpeed === "normal") {
    if (mood.includes("TENSE") || mood.includes("ACTION")) {
      panel.motionSpeed = "fast";
    } else if (mood.includes("CALM") || mood.includes("SAD")) {
      panel.motionSpeed = "slow";
    }
  }
  const shotSize = panel.shotSize || panel.shot || "MS";
  if (!panel.lens) {
    if (shotSize === "ECU" || shotSize === "大特写") {
      panel.lens = "100mm macro";
      panel.fStop = "f/2.8";
      panel.depthOfField = "SHALLOW";
    } else if (shotSize === "CU" || shotSize === "特写") {
      panel.lens = "85mm";
      panel.fStop = "f/2";
      panel.depthOfField = "SHALLOW";
    } else if (shotSize === "MCU" || shotSize === "近景") {
      panel.lens = "50mm";
      panel.fStop = "f/2.8";
      panel.depthOfField = "SHALLOW";
    } else if (shotSize === "MS" || shotSize === "中景") {
      panel.lens = "50mm";
      panel.fStop = "f/4";
      panel.depthOfField = "NORMAL";
    } else if (shotSize === "MWS" || shotSize === "中全景") {
      panel.lens = "35mm";
      panel.fStop = "f/5.6";
      panel.depthOfField = "NORMAL";
    } else if (shotSize === "WS" || shotSize === "全景" || shotSize === "远景") {
      panel.lens = "24mm";
      panel.fStop = "f/8";
      panel.depthOfField = "DEEP";
    } else if (shotSize === "EWS" || shotSize === "大远景") {
      panel.lens = "16mm";
      panel.fStop = "f/11";
      panel.depthOfField = "DEEP";
    } else {
      panel.lens = "50mm";
      panel.fStop = "f/4";
      panel.depthOfField = "NORMAL";
    }
  }
  if (!panel.lighting || !panel.lighting.mood) {
    panel.lighting = panel.lighting || {};
    if (mood.includes("TENSE") || mood.includes("紧张") || mood.includes("SUSPENSE")) {
      panel.lighting.mood = "低调光影，高反差";
      panel.lighting.keyLight = "侧光为主，形成明暗对比";
    } else if (mood.includes("ROMANTIC") || mood.includes("浪漫") || mood.includes("温馨")) {
      panel.lighting.mood = "柔和暖光，高调氛围";
      panel.lighting.keyLight = "柔光正面，轮廓光勾边";
    } else if (mood.includes("SAD") || mood.includes("悲伤") || mood.includes("忧郁")) {
      panel.lighting.mood = "冷色调，低饱和";
      panel.lighting.keyLight = "顶光或逆光，形成剪影";
    } else if (mood.includes("ACTION") || mood.includes("动作") || mood.includes("热血")) {
      panel.lighting.mood = "高对比，动态光效";
      panel.lighting.keyLight = "硬光为主，强调立体";
    } else if (location.includes("夜") || location.includes("晚")) {
      panel.lighting.mood = "夜景氛围，点光源为主";
      panel.lighting.keyLight = "实景光源（路灯/月光）";
      panel.lighting.practicalLights = ["城市灯光", "月光"];
    } else if (location.includes("日") || location.includes("白天")) {
      panel.lighting.mood = "自然日光，通透明亮";
      panel.lighting.keyLight = "太阳光为主光";
    } else {
      panel.lighting.mood = "自然光影";
    }
  }
  if (!panel.props || panel.props.length === 0) {
    const propsExtracted = [];
    const propKeywords = ["剑", "刀", "枪", "书", "杯", "碗", "椅", "桌", "门", "窗", "灯", "镜", "笔", "纸", "信", "手机", "电脑", "车", "包", "伞", "钥匙", "戒指", "项链", "眼镜", "帽子", "花", "酒", "药", "钱", "地图", "照片"];
    for (const keyword of propKeywords) {
      if (desc.includes(keyword)) {
        propsExtracted.push(keyword);
      }
    }
    if (propsExtracted.length > 0) {
      panel.props = propsExtracted.slice(0, 5);
    }
  }
  if (!panel.vfx || panel.vfx.length === 0) {
    const vfxList = [];
    if (desc.includes("爆炸") || desc.includes("火")) {
      vfxList.push("火焰特效", "烟尘粒子");
    }
    if (desc.includes("魔法") || desc.includes("法术") || desc.includes("能量")) {
      vfxList.push("魔法光效", "能量波动");
    }
    if (desc.includes("雨") || desc.includes("雪")) {
      vfxList.push("天气粒子系统");
    }
    if (desc.includes("闪电") || desc.includes("电")) {
      vfxList.push("闪电特效");
    }
    if (desc.includes("模糊") || desc.includes("慢动作")) {
      vfxList.push("运动模糊");
    }
    if (vfxList.length > 0) {
      panel.vfx = vfxList;
    }
  }
  if (!panel.colorGrade) {
    if (mood.includes("TENSE") || mood.includes("紧张")) {
      panel.colorGrade = "冷调蓝绿，去饱和";
    } else if (mood.includes("ROMANTIC") || mood.includes("浪漫")) {
      panel.colorGrade = "暖调橙黄，柔化高光";
    } else if (mood.includes("SAD") || mood.includes("悲伤")) {
      panel.colorGrade = "低饱和蓝灰，压暗中间调";
    } else if (mood.includes("ACTION") || mood.includes("热血")) {
      panel.colorGrade = "高对比橙蓝色调";
    } else if (location.includes("古") || location.includes("武侠")) {
      panel.colorGrade = "复古暖黄，略微去饱和";
    } else {
      panel.colorGrade = "自然调色";
    }
  }
  if (!panel.setupShot) {
    const idx = panel.panelNumber || 1;
    if (((_h = panel.composition) == null ? void 0 : _h.includes("居右")) || ((_i = panel.composition) == null ? void 0 : _i.includes("左侧"))) {
      panel.setupShot = "A机位";
    } else if (((_j = panel.composition) == null ? void 0 : _j.includes("居左")) || ((_k = panel.composition) == null ? void 0 : _k.includes("右侧"))) {
      panel.setupShot = "B机位";
    } else if (idx % 2 === 1) {
      panel.setupShot = "A机位";
    } else {
      panel.setupShot = "B机位";
    }
  }
  if (!panel.axisNote) {
    const charCount = ((_l = panel.characters) == null ? void 0 : _l.length) || 0;
    const prevChars = (prevPanel == null ? void 0 : prevPanel.characters) || [];
    const sameChars = ((_m = panel.characters) == null ? void 0 : _m.filter((c) => prevChars.includes(c))) || [];
    const isSceneChange = panel.sceneId !== (prevPanel == null ? void 0 : prevPanel.sceneId);
    if (isSceneChange) {
      panel.axisNote = "新场景，重新建立轴线";
    } else if (charCount >= 3) {
      panel.axisNote = "群戏场景，建立主轴后保持一致";
    } else if (panel.dialogue && charCount >= 2) {
      panel.axisNote = "保持180°轴线，正反打切换";
    } else if (sameChars.length > 0 && charCount <= 2) {
      panel.axisNote = `延续上一镜轴线，${sameChars[0]}位置保持`;
    } else if (panel.cameraMovement === "跟" || panel.movementType === "FOLLOW") {
      panel.axisNote = "动态轴线，随角色移动";
    } else if (charCount === 1) {
      panel.axisNote = "单人镜头，注意与前后镜头朝向一致";
    } else {
      panel.axisNote = "保持轴线";
    }
  }
  if (!panel.composition) {
    const shotSizeVal = panel.shotSize || panel.shot || "";
    if (desc.includes("窗") || desc.includes("门框") || desc.includes("拱门") || desc.includes("走廊尽头")) {
      panel.composition = "框架构图，人物被门窗框住";
    } else if (desc.includes("道路") || desc.includes("走廊") || desc.includes("隧道") || desc.includes("铁轨")) {
      panel.composition = "引导线构图，纵深延伸";
    } else if (desc.includes("镜子") || desc.includes("水面倒影") || desc.includes("对称")) {
      panel.composition = "对称/反射构图";
    } else if (desc.includes("背影") || desc.includes("剪影") || desc.includes("逆光")) {
      panel.composition = "轮廓构图，强调形态";
    } else if (desc.includes("俯瞰") || desc.includes("鸟瞰") || desc.includes("从上往下")) {
      panel.composition = "俯视构图，展示空间关系";
    } else if (desc.includes("仰望") || desc.includes("从下往上") || desc.includes("高耸")) {
      panel.composition = "仰视构图，强调威严/渺小";
    } else if (desc.includes("角落") || desc.includes("边缘") || desc.includes("靠窗")) {
      panel.composition = "负空间构图，主体偏侧留白";
    } else if (desc.includes("人群") || desc.includes("围观") || desc.includes("中心")) {
      panel.composition = "中心放射构图";
    } else if (shotSizeVal === "WS" || shotSizeVal === "EWS" || shotSizeVal === "远景" || shotSizeVal === "大远景") {
      panel.composition = "三分法构图，环境占2/3";
    } else if (shotSizeVal === "OTS" || panel.dialogue) {
      panel.composition = "过肩构图，主体偏一侧";
    } else if (((_n = panel.characters) == null ? void 0 : _n.length) >= 2) {
      panel.composition = "对称构图，双人居中";
    } else if (shotSizeVal === "CU" || shotSizeVal === "ECU" || shotSizeVal === "特写") {
      panel.composition = "中心构图，人物居中";
    } else {
      panel.composition = "三分法构图";
    }
  }
  if (!panel.shotIntent) {
    const shotSizeVal = panel.shotSize || panel.shot || "";
    if (shotSizeVal === "WS" || shotSizeVal === "EWS" || shotSizeVal === "远景") {
      panel.shotIntent = "建立空间，交代环境";
    } else if (panel.dialogue) {
      panel.shotIntent = "展示对话，传递信息";
    } else if (shotSizeVal === "CU" || shotSizeVal === "ECU" || shotSizeVal === "特写") {
      panel.shotIntent = "揭示细节，强调情绪";
    } else if (mood.includes("TENSE") || mood.includes("紧张")) {
      panel.shotIntent = "制造紧张，推进冲突";
    } else if (mood.includes("REVEAL")) {
      panel.shotIntent = "揭示人物，引发好奇";
    } else if (panel.panelNumber <= 2) {
      panel.shotIntent = "开场建立，吸引注意";
    } else {
      panel.shotIntent = "推进叙事";
    }
  }
  if (!panel.environmentMotion) {
    const timeOfDay = ((scene == null ? void 0 : scene.timeOfDay) || "").toLowerCase();
    const TIME_ENVIRONMENT_MAP = {
      "清晨": "晨雾弥漫，露水滴落",
      "早晨": "阳光渐强，鸟鸣阵阵",
      "黄昏": "夕阳余晖，天色渐暗",
      "傍晚": "霞光万道，影子拉长",
      "深夜": "月光摇曳，虫鸣阵阵",
      "夜晚": "灯光点点，夜色朦胧",
      "正午": "阳光直射，影子短小",
      "午后": "阳光斜照，微风轻拂"
    };
    if (location.includes("雨") || desc.includes("下雨") || desc.includes("暴雨")) {
      panel.environmentMotion = "雨水滴落，水花飞溅";
    } else if (location.includes("雪") || desc.includes("下雪") || desc.includes("飘雪")) {
      panel.environmentMotion = "雪花飘落，白雪皑皑";
    } else if (location.includes("风") || desc.includes("狂风") || desc.includes("大风")) {
      panel.environmentMotion = "狂风呼啸，尘土飞扬";
    } else if (location.includes("风") || desc.includes("微风") || desc.includes("风")) {
      panel.environmentMotion = "微风轻拂，衣袂飘动";
    } else if (location.includes("海") || location.includes("港")) {
      panel.environmentMotion = "海浪拍岸，海鸥盘旋";
    } else if (location.includes("河") || location.includes("溪") || location.includes("水")) {
      panel.environmentMotion = "水波涟漪，倒影摇曳";
    } else if (location.includes("森") || location.includes("林") || location.includes("树")) {
      panel.environmentMotion = "树叶轻摇，光影斑驳";
    } else if (location.includes("火") || desc.includes("火焰") || desc.includes("篝火")) {
      panel.environmentMotion = "火焰跳动，烟雾升腾";
    } else if (location.includes("市") || location.includes("街") || location.includes("道")) {
      panel.environmentMotion = "行人走动，车辆穿梭";
    } else if (location.includes("酒") || location.includes("餐") || location.includes("咖啡")) {
      panel.environmentMotion = "人声鼎沸，杯盏交错";
    } else if (location.includes("工厂") || location.includes("车间")) {
      panel.environmentMotion = "机器运转，蒸汽喷涌";
    } else {
      let matched = false;
      for (const [key, value] of Object.entries(TIME_ENVIRONMENT_MAP)) {
        if (timeOfDay.includes(key) || location.includes(key)) {
          panel.environmentMotion = value;
          matched = true;
          break;
        }
      }
      if (!matched) {
        panel.environmentMotion = "环境平静，光影自然";
      }
    }
  }
  if (!panel.characterActions || panel.characterActions.length === 0) {
    const actions = [];
    const ACTION_PATTERNS = [
      "皱眉",
      "微笑",
      "大笑",
      "哭泣",
      "叹息",
      "惊讶",
      "愤怒",
      "沉思",
      "凝视",
      "闭眼",
      "转身",
      "点头",
      "摇头",
      "挥手",
      "握手",
      "拥抱",
      "推开",
      "拉住",
      "低头",
      "抬头",
      "起身",
      "坐下",
      "躺下",
      "跪下",
      "弯腰",
      "伸手",
      "缩手",
      "跺脚",
      "踱步",
      "走向",
      "走过",
      "跑向",
      "冲向",
      "逃离",
      "靠近",
      "后退",
      "绕过",
      "跳起",
      "踏入",
      "拿起",
      "放下",
      "打开",
      "关上",
      "翻开",
      "撕毁",
      "扔掉",
      "接住",
      "推门",
      "敲门",
      "说道",
      "喊道",
      "低语",
      "怒吼",
      "呢喃",
      "询问",
      "回答",
      "解释",
      "命令",
      "恳求"
    ];
    if (panel.characters && panel.characters.length > 0) {
      for (let i = 0; i < Math.min(panel.characters.length, 3); i++) {
        const char = panel.characters[i];
        const charFound = [];
        for (const action of ACTION_PATTERNS) {
          if (desc.includes(`${char}${action}`) || desc.includes(`${char} ${action}`)) {
            charFound.push(`${char}:${action}`);
          } else if (desc.includes(action) && i === 0) {
            charFound.push(`${char}:${action}`);
            break;
          }
        }
        if (charFound.length > 0) {
          actions.push(charFound[0]);
        }
      }
      if (panel.dialogue && panel.characters[0] && !actions.some((a) => a.includes("说"))) {
        actions.push(`${panel.characters[0]}:说话`);
      }
    }
    if (actions.length > 0) {
      panel.characterActions = actions;
    }
  }
  console.log(`[智能填充增强版] 音效: ${(_o = panel.soundEffects) == null ? void 0 : _o.join(",")} | 音乐: ${panel.music} | 运镜: ${panel.cameraMovement} | 镜头: ${panel.lens} | 光影: ${(_p = panel.lighting) == null ? void 0 : _p.mood}`);
  return panel;
}
const DENSITY_CONFIG = {
  compact: {
    basePerScene: 0.8,
    // 🆕 进一步降低
    panelsPerDialogue: 0.4,
    actionCharsPerPanel: 400,
    // 每400字1镜
    minPerScene: 1,
    maxPerScene: 3,
    longDialogueThreshold: 150,
    addReactionShots: false,
    estimateMultiplier: 0.6,
    promptDescription: "分镜密度：精简模式。每个场景生成约 1-2 个核心分镜。"
  },
  standard: {
    basePerScene: 0.7,
    // 🆕 降低：AI 约每场景1.5镜
    panelsPerDialogue: 0.6,
    // 🆕 降低
    actionCharsPerPanel: 200,
    // 🆕 增大：每200字1镜
    minPerScene: 1,
    maxPerScene: 5,
    longDialogueThreshold: 100,
    addReactionShots: false,
    estimateMultiplier: 1,
    promptDescription: "分镜密度：标准模式。每个场景生成约 1-3 个分镜。"
  },
  detailed: {
    basePerScene: 1.5,
    // 🆕 降低
    panelsPerDialogue: 1,
    actionCharsPerPanel: 100,
    minPerScene: 3,
    maxPerScene: 8,
    longDialogueThreshold: 80,
    addReactionShots: true,
    estimateMultiplier: 1.4,
    promptDescription: "分镜密度：详细模式。每个场景生成约 3-6 个分镜。"
  }
};
function estimatePanelCount(dialogueCount, actionLength, characterCount, mode) {
  const config = DENSITY_CONFIG[mode];
  let baseCount = config.basePerScene;
  const dialoguePanels = dialogueCount * config.panelsPerDialogue;
  const actionPanels = Math.ceil(actionLength / config.actionCharsPerPanel);
  const reactionBonus = config.addReactionShots && characterCount >= 2 && dialogueCount >= 2 ? Math.floor(dialogueCount * 0.3) : 0;
  const total = baseCount + dialoguePanels + actionPanels + reactionBonus;
  const rawMin = Math.floor(total * 0.8);
  const rawMax = Math.ceil(total * 1.2);
  const constrainedMin = Math.max(config.minPerScene, rawMin);
  const constrainedMax = Math.max(constrainedMin, Math.min(config.maxPerScene, rawMax));
  return {
    min: constrainedMin,
    max: constrainedMax
  };
}
function splitLongDialogue(dialogue, threshold = 100) {
  if (!dialogue || dialogue.length <= threshold) {
    return [dialogue];
  }
  const chunks = [];
  const sentences = dialogue.split(/([。！？!?…]+)/);
  let current = "";
  for (let i = 0; i < sentences.length; i++) {
    const part = sentences[i];
    if ((current + part).length <= threshold) {
      current += part;
    } else {
      if (current.trim()) chunks.push(current.trim());
      current = part;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks.filter((c) => c.length > 0);
}
async function generateFallbackPanels(scenes, characters, assetsScenes, densityMode, directorStyle) {
  const allPanels = [];
  let panelNumber = 1;
  scenes.forEach((scene) => {
    var _a;
    const dialogueCount = ((_a = scene.dialogues) == null ? void 0 : _a.length) || 0;
    const actionLength = (scene.action || "").length;
    devLog(`[Fallback 场景${scene.sceneNumber}] ${dialogueCount}句对白, ${actionLength}字动作`);
    allPanels.push({
      id: generateId(),
      panelNumber: panelNumber++,
      sceneId: scene.id,
      episodeNumber: scene.episodeNumber,
      description: `${scene.location || "场景"}，${scene.timeOfDay || "日"}。${(scene.action || "").substring(0, 80)}`,
      shot: "远景",
      angle: "平视",
      cameraMovement: "静止",
      duration: 4,
      characters: scene.characters || [],
      dialogue: "",
      props: [],
      notes: "建立场景",
      aiPrompt: "",
      aiVideoPrompt: ""
    });
    if (scene.dialogues && scene.dialogues.length > 0) {
      const config2 = DENSITY_CONFIG[densityMode] || DENSITY_CONFIG.standard;
      scene.dialogues.forEach((dialogue, idx) => {
        const fullDialogue = dialogue.lines || "";
        const character = dialogue.character;
        const dialogueChunks = splitLongDialogue(fullDialogue, config2.longDialogueThreshold);
        dialogueChunks.forEach((chunk, chunkIdx) => {
          const isFirst = idx === 0 && chunkIdx === 0;
          allPanels.push({
            id: generateId(),
            panelNumber: panelNumber++,
            sceneId: scene.id,
            episodeNumber: scene.episodeNumber,
            description: `${isFirst ? "近景" : "特写"}，${character}${dialogue.parenthetical ? `（${dialogue.parenthetical}）` : ""}说话，表情变化`,
            shot: isFirst ? "近景" : "特写",
            angle: "平视",
            cameraMovement: "静止",
            duration: Math.max(2, Math.ceil(chunk.length / 20)),
            characters: [character],
            dialogue: chunk,
            props: [],
            notes: dialogueChunks.length > 1 ? `对话 ${idx + 1}-${chunkIdx + 1}` : `对话 ${idx + 1}`,
            aiPrompt: "",
            aiVideoPrompt: ""
          });
        });
      });
    }
    const config = DENSITY_CONFIG[densityMode] || DENSITY_CONFIG.standard;
    if (actionLength > config.actionCharsPerPanel / 2) {
      const actionParts = Math.ceil(actionLength / config.actionCharsPerPanel);
      for (let i = 0; i < Math.min(actionParts, 3); i++) {
        const actionText = (scene.action || "").substring(i * config.actionCharsPerPanel, (i + 1) * config.actionCharsPerPanel);
        if (actionText.trim()) {
          allPanels.push({
            id: generateId(),
            panelNumber: panelNumber++,
            sceneId: scene.id,
            episodeNumber: scene.episodeNumber,
            description: `中景，${actionText}`,
            shot: "中景",
            angle: "平视",
            cameraMovement: i === 0 ? "静止" : "跟",
            duration: 3,
            characters: scene.characters || [],
            dialogue: "",
            props: [],
            notes: "动作描写",
            aiPrompt: "",
            aiVideoPrompt: ""
          });
        }
      }
    }
  });
  const filledPanels = allPanels.map((panel, index) => {
    const matchedScene = scenes.find((s) => s.id === panel.sceneId);
    const prevPanel = index > 0 ? allPanels[index - 1] : void 0;
    const nextPanel = index < allPanels.length - 1 ? allPanels[index + 1] : void 0;
    const filledPanel = smartFillPanel(panel, matchedScene, prevPanel, nextPanel, allPanels);
    filledPanel.aiPrompt = generateStoryboardImagePrompt(filledPanel, characters, assetsScenes, directorStyle);
    filledPanel.aiVideoPrompt = generateStoryboardVideoPrompt(filledPanel, characters, assetsScenes, directorStyle, prevPanel);
    return filledPanel;
  });
  devLog(`[智能Fallback] 共生成 ${filledPanels.length} 个分镜（${scenes.length} 个场景）`);
  return filledPanels;
}
const SHOT_CODE_TO_CN = {
  "ECU": "大特写",
  "CU": "特写",
  "MCU": "近景",
  "MS": "中景",
  "MWS": "全景",
  "WS": "远景",
  "EWS": "大远景",
  "POV": "中景",
  "OTS": "中景",
  "TWO": "中景",
  "GROUP": "全景",
  "INSERT": "特写"
};
const ANGLE_CODE_TO_CN = {
  "EYE_LEVEL": "平视",
  "HIGH": "俯视",
  "LOW": "仰视",
  "BIRDS_EYE": "俯视",
  "WORMS_EYE": "仰视",
  "DUTCH": "平视"
};
const MOVEMENT_CODE_TO_CN = {
  "STATIC": "静止",
  "PAN_L": "摇",
  "PAN_R": "摇",
  "TILT_UP": "摇",
  "TILT_DOWN": "摇",
  "DOLLY_IN": "推",
  "DOLLY_OUT": "拉",
  "TRACK_L": "移",
  "TRACK_R": "移",
  "CRANE_UP": "升降",
  "CRANE_DOWN": "升降",
  "ZOOM_IN": "推",
  "ZOOM_OUT": "拉",
  "HANDHELD": "移",
  "STEADICAM": "移",
  "FOLLOW": "跟",
  "ARC": "环绕",
  "WHIP": "摇"
};
async function extractStoryboard(scenes, characters = [], assetsScenes = [], densityMode = "standard", directorStyle) {
  var _a;
  const MAX_SCENES_FOR_AI = 15;
  if (scenes.length > MAX_SCENES_FOR_AI) {
    devLog(`[extractStoryboard] 场景数量 ${scenes.length} 超过限制 ${MAX_SCENES_FOR_AI}，直接使用智能 Fallback`);
    return generateFallbackPanels(scenes, characters, assetsScenes, densityMode, directorStyle);
  }
  const scenesData = scenes.map((s) => {
    var _a2;
    return {
      id: s.id,
      sceneNumber: s.sceneNumber,
      location: s.location,
      timeOfDay: s.timeOfDay,
      sceneType: s.sceneType,
      action: s.action,
      characters: s.characters,
      dialogues: (_a2 = s.dialogues) == null ? void 0 : _a2.map((d) => {
        var _a3;
        return {
          character: d.character,
          lines: (_a3 = d.lines) == null ? void 0 : _a3.substring(0, 500)
        };
      }),
      beat: s.beat,
      specialSceneType: s.specialSceneType
    };
  });
  const characterContext = characters.map((c) => `- ${c.name}: ${c.appearance || c.description}`).join("\n");
  const sceneContext = assetsScenes.map((s) => `- ${s.name}: ${s.environment || s.description}`).join("\n");
  const densityPrompt = ((_a = DENSITY_CONFIG[densityMode]) == null ? void 0 : _a.promptDescription) || DENSITY_CONFIG.standard.promptDescription;
  const config = DENSITY_CONFIG[densityMode] || DENSITY_CONFIG.standard;
  let estimatedTotal = 0;
  scenes.forEach((scene) => {
    var _a2;
    const dialogueCount = ((_a2 = scene.dialogues) == null ? void 0 : _a2.length) || 0;
    const actionLength = (scene.action || "").length;
    estimatedTotal += config.basePerScene + Math.ceil(dialogueCount * config.panelsPerDialogue) + Math.ceil(actionLength / config.actionCharsPerPanel);
  });
  const prompt = `你是专业分镜设计师兼音效设计师，将剧本场景逐帧转换为精确的漫画分镜。

【⚠️ 核心约束 - 必须严格遵守】
1. **预估分镜数量：约 ${estimatedTotal} 个**，请确保生成数量接近此目标
2. **🔴 每句对话必须生成独立分镜**：一句对白 = 一个分镜，不可合并！
3. **每个场景开头必须有建立镜头**（远景/全景）
4. **长动作描写（>50字）必须拆分为多个动作镜头**

【密度要求】
${densityPrompt}

【角色与环境参考】
${characterContext ? `角色描述：
${characterContext}
` : ""}
${sceneContext ? `环境描述：
${sceneContext}
` : ""}
${directorStyle ? `导演风格：${directorStyle.artStyle || ""}, 氛围: ${directorStyle.mood || ""}
` : ""}

【景别代码】ECU(大特写)/CU(特写)/MCU(近景)/MS(中景)/MWS(中全景)/WS(远景)/EWS(大远景)/POV(主观)/OTS(过肩)
【角度代码】EYE_LEVEL(平视)/HIGH(俯视)/LOW(仰视)/DUTCH(倾斜)
【运动代码】STATIC(静止)/PAN_L(左摇)/PAN_R(右摇)/DOLLY_IN(推)/DOLLY_OUT(拉)/TRACK_L(左移)/TRACK_R(右移)/FOLLOW(跟随)

【JSON 格式】
[{"sceneId":"场景ID","description":"画面描述（含光影）","shotSize":"MS","angle":"EYE_LEVEL","movementType":"STATIC","duration":3,"characters":["角色名"],"dialogue":"完整对白（如有）","soundEffects":["具体音效"],"music":"背景音乐","startFrame":"起始帧画面","endFrame":"结束帧画面","composition":"构图方式","shotIntent":"镜头意图","axisNote":"轴线备注","environmentMotion":"环境动态","characterActions":["角色名:动作"]}]

【剧本场景】
${JSON.stringify(scenesData)}
`;
  try {
    const result = await callWithRetry(
      () => callDeepSeek([{ role: "user", content: prompt }]),
      3,
      1e3
    );
    let shots = parseJSON(result);
    if (!shots) shots = [];
    if (!Array.isArray(shots)) {
      if (shots.panels) shots = shots.panels;
      else if (shots.shots) shots = shots.shots;
      else if (shots.storyboard) shots = shots.storyboard;
      else shots = [];
    }
    if (shots.length === 0) {
      console.warn("extractStoryboard: no shots extracted, using smart fallback");
      return generateFallbackPanels(scenes, characters, assetsScenes, densityMode, directorStyle);
    }
    const allPanels = shots.map((shot, index) => {
      const matchedScene = scenes.find((s) => s.id === shot.sceneId) || scenes[Math.floor(index / 3)];
      const rawShotSize = shot.shotSize || shot.shot || "MS";
      const rawAngle = shot.angle || "EYE_LEVEL";
      const rawMovement = shot.movementType || shot.cameraMovement || "STATIC";
      return {
        id: generateId(),
        panelNumber: index + 1,
        sceneId: (matchedScene == null ? void 0 : matchedScene.id) || generateId(),
        episodeNumber: (matchedScene == null ? void 0 : matchedScene.episodeNumber) || 1,
        description: shot.description || "",
        dialogue: shot.dialogue || "",
        shot: SHOT_CODE_TO_CN[rawShotSize] || "中景",
        angle: ANGLE_CODE_TO_CN[rawAngle] || "平视",
        cameraMovement: MOVEMENT_CODE_TO_CN[rawMovement] || "静止",
        shotSize: rawShotSize,
        cameraAngle: rawAngle,
        movementType: rawMovement,
        duration: shot.duration || 4,
        characters: shot.characters || (matchedScene == null ? void 0 : matchedScene.characters) || [],
        props: shot.props || [],
        notes: shot.notes || "",
        composition: shot.composition,
        shotIntent: shot.shotIntent,
        focusPoint: shot.focusPoint,
        axisNote: shot.axisNote,
        soundEffects: shot.soundEffects || [],
        transition: shot.transition || "切至",
        music: shot.music || "",
        startFrame: shot.startFrame || "",
        endFrame: shot.endFrame || "",
        motionSpeed: shot.motionSpeed || "normal",
        environmentMotion: shot.environmentMotion || "",
        characterActions: shot.characterActions || [],
        keyFrames: [],
        _matchedScene: matchedScene
      };
    });
    const processedPanels = allPanels.map((panelData, index) => {
      const matchedScene = panelData._matchedScene;
      delete panelData._matchedScene;
      const prevPanel = index > 0 ? allPanels[index - 1] : void 0;
      const nextPanel = index < allPanels.length - 1 ? allPanels[index + 1] : void 0;
      const filledPanel = smartFillPanel(panelData, matchedScene, prevPanel, nextPanel, allPanels);
      const imagePrompt = generateStoryboardImagePrompt(filledPanel, characters, assetsScenes, directorStyle);
      const videoPrompt = generateStoryboardVideoPrompt(filledPanel, characters, assetsScenes, directorStyle, prevPanel);
      const unknownChars = checkCharacterConsistency(filledPanel.characters || [], characters);
      if (unknownChars.length > 0) {
        console.warn(`[分镜${index + 1}] ⚠️ 未知角色: ${unknownChars.join(", ")}`);
        filledPanel.notes = `${filledPanel.notes || ""} [警告: 未知角色 ${unknownChars.join(", ")}]`.trim();
      }
      filledPanel.aiPrompt = imagePrompt;
      filledPanel.aiVideoPrompt = videoPrompt;
      return filledPanel;
    });
    const coveredSceneIds = new Set(processedPanels.map((p) => p.sceneId));
    const missingScenes = scenes.filter((s) => !coveredSceneIds.has(s.id));
    if (missingScenes.length > 0) {
      console.warn(`[extractStoryboard] ⚠️ AI 遗漏了 ${missingScenes.length} 个场景，使用 Fallback 补充`);
      let panelNumber = processedPanels.length + 1;
      const configForFallback = DENSITY_CONFIG[densityMode] || DENSITY_CONFIG.standard;
      missingScenes.forEach((scene) => {
        const establishingPanel = {
          id: generateId(),
          panelNumber: panelNumber++,
          sceneId: scene.id,
          episodeNumber: scene.episodeNumber,
          description: `${scene.location || "场景"}，${scene.timeOfDay || "日"}。${(scene.action || "").substring(0, 80)}`,
          shot: "远景",
          angle: "平视",
          cameraMovement: "静止",
          duration: 4,
          characters: scene.characters || [],
          dialogue: "",
          props: [],
          notes: "建立场景（AI遗漏补充）",
          aiPrompt: "",
          aiVideoPrompt: "",
          soundEffects: [],
          music: "",
          startFrame: "",
          endFrame: "",
          composition: "三分法",
          shotIntent: "建立空间"
        };
        const filledEstablishing = smartFillPanel(establishingPanel, scene, void 0, void 0, processedPanels);
        filledEstablishing.aiPrompt = generateStoryboardImagePrompt(filledEstablishing, characters, assetsScenes, directorStyle);
        filledEstablishing.aiVideoPrompt = generateStoryboardVideoPrompt(filledEstablishing, characters, assetsScenes, directorStyle, void 0);
        processedPanels.push(filledEstablishing);
        if (scene.dialogues && scene.dialogues.length > 0) {
          scene.dialogues.forEach((dialogue, idx) => {
            const dialoguePanel = {
              id: generateId(),
              panelNumber: panelNumber++,
              sceneId: scene.id,
              episodeNumber: scene.episodeNumber,
              description: `${idx === 0 ? "近景" : "特写"}，${dialogue.character}说话，表情变化`,
              shot: idx === 0 ? "近景" : "特写",
              angle: "平视",
              cameraMovement: "静止",
              duration: Math.max(2, Math.ceil((dialogue.lines || "").length / 20)),
              characters: [dialogue.character],
              dialogue: dialogue.lines || "",
              props: [],
              notes: `对话 ${idx + 1}（AI遗漏补充）`,
              aiPrompt: "",
              aiVideoPrompt: "",
              soundEffects: [],
              music: "",
              startFrame: "",
              endFrame: "",
              composition: "三分法",
              shotIntent: "展示情绪"
            };
            const filledDialogue = smartFillPanel(dialoguePanel, scene, void 0, void 0, processedPanels);
            filledDialogue.aiPrompt = generateStoryboardImagePrompt(filledDialogue, characters, assetsScenes, directorStyle);
            filledDialogue.aiVideoPrompt = generateStoryboardVideoPrompt(filledDialogue, characters, assetsScenes, directorStyle, void 0);
            processedPanels.push(filledDialogue);
          });
        }
        const actionLength = (scene.action || "").length;
        if (actionLength > configForFallback.actionCharsPerPanel / 2) {
          const actionParts = Math.ceil(actionLength / configForFallback.actionCharsPerPanel);
          for (let i = 0; i < Math.min(actionParts, 3); i++) {
            const actionText = (scene.action || "").substring(i * configForFallback.actionCharsPerPanel, (i + 1) * configForFallback.actionCharsPerPanel);
            if (actionText.trim()) {
              const actionPanel = {
                id: generateId(),
                panelNumber: panelNumber++,
                sceneId: scene.id,
                episodeNumber: scene.episodeNumber,
                description: `中景，${actionText}`,
                shot: "中景",
                angle: "平视",
                cameraMovement: i === 0 ? "静止" : "跟",
                duration: 3,
                characters: scene.characters || [],
                dialogue: "",
                props: [],
                notes: "动作描写（AI遗漏补充）",
                aiPrompt: "",
                aiVideoPrompt: "",
                soundEffects: [],
                music: "",
                startFrame: "",
                endFrame: ""
              };
              const filledAction = smartFillPanel(actionPanel, scene, void 0, void 0, processedPanels);
              filledAction.aiPrompt = generateStoryboardImagePrompt(filledAction, characters, assetsScenes, directorStyle);
              filledAction.aiVideoPrompt = generateStoryboardVideoPrompt(filledAction, characters, assetsScenes, directorStyle, void 0);
              processedPanels.push(filledAction);
            }
          }
        }
      });
      console.log(`[extractStoryboard] ✅ 场景覆盖补充完成，共 ${processedPanels.length} 个分镜`);
    }
    return processedPanels;
  } catch (error) {
    console.error("DeepSeek extractStoryboard failed:", error);
    throw new Error("AI 分镜生成失败");
  }
}
const IMAGE_SIZES = {
  // 角色图片
  CHARACTER_FULL_BODY: "1920x1920",
  // 1:1 正方形 (3,686,400 像素) ✓ 改用正方形避免边界问题
  CHARACTER_FACE: "1920x1920",
  // 1:1 正方形 (3,686,400 像素) ✓
  // 场景图片
  SCENE_WIDE: "2560x1440",
  // 16:9 横图 (3,686,400 像素) ✓
  SCENE_MEDIUM: "1920x1920",
  // 1:1 正方形 (3,686,400 像素) ✓
  SCENE_CLOSEUP: "1920x1920",
  // 1:1 正方形 (3,686,400 像素) ✓
  // 道具和服饰
  PROP: "1920x1920",
  // 1:1 正方形 (3,686,400 像素) ✓
  COSTUME: "1600x2304",
  // 接近 3:4 竖图 (3,686,400 像素) ✓
  // 分镜图片（🆕 多尺寸支持）
  STORYBOARD: "2560x1440",
  // 16:9 横图 (3,686,400 像素) ✓ 默认
  STORYBOARD_16_9: "2560x1440",
  // 16:9 横屏电影
  STORYBOARD_9_16: "1440x2560",
  // 9:16 竖屏手机
  STORYBOARD_1_1: "1920x1920",
  // 1:1 方形社交
  STORYBOARD_4_3: "2080x1560",
  // 4:3 经典比例
  STORYBOARD_21_9: "2940x1260"
  // 21:9 超宽电影
};
async function generateStoryboardImage(panel, characters, scenes, directorStyle, enableOptimization = true, maxRetries = 3, imageSize) {
  let imagePrompt = generateStoryboardImagePrompt(panel, characters, scenes, directorStyle);
  if (enableOptimization) {
    try {
      imagePrompt = await optimizePrompt(
        imagePrompt,
        (directorStyle == null ? void 0 : directorStyle.artStyle) || "Cinematic",
        "storyboard"
      );
    } catch (e) {
      console.warn("Prompt optimization failed, using original", e);
    }
  }
  let selectedSize = IMAGE_SIZES.STORYBOARD;
  if (panel.aspectRatio) {
    const aspectSizeMap = {
      "16:9": IMAGE_SIZES.STORYBOARD_16_9,
      "9:16": IMAGE_SIZES.STORYBOARD_9_16,
      "1:1": IMAGE_SIZES.STORYBOARD_1_1,
      "4:3": IMAGE_SIZES.STORYBOARD_4_3,
      "21:9": IMAGE_SIZES.STORYBOARD_21_9
    };
    selectedSize = aspectSizeMap[panel.aspectRatio] || IMAGE_SIZES.STORYBOARD;
  }
  let lastError = null;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[图片生成] 第 ${attempt}/${maxRetries} 次尝试，尺寸: ${selectedSize}...`);
      return await callDoubaoImage(imagePrompt, selectedSize, directorStyle == null ? void 0 : directorStyle.negativePrompt);
    } catch (error) {
      lastError = error;
      console.warn(`[图片生成] 第 ${attempt} 次失败:`, error);
      if (attempt < maxRetries) {
        const delay2 = 1e3 * attempt;
        console.log(`[图片生成] ${delay2}ms 后重试...`);
        await new Promise((resolve) => setTimeout(resolve, delay2));
      }
    }
  }
  console.error("[图片生成] 所有重试均失败:", lastError);
  return `https://placehold.co/1024x576?text=${encodeURIComponent("AI生成失败（已重试" + maxRetries + "次）")}`;
}
const NEGATIVE_PROMPTS = {
  general: "low quality, worst quality, blurry, out of focus, bad art, ugly, watermark, signature, text",
  character: "deformed, bad anatomy, disfigured, poorly drawn face, mutation, extra limbs, bad proportions, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers",
  scene: "cluttered, messy, poor composition, bad perspective, distorted, unrealistic lighting",
  storyboard: "inconsistent style, bad framing, poor cinematography, amateur",
  prop: "broken, damaged, low detail, pixelated",
  costume: "ill-fitting, unrealistic, bad texture"
};
const QUALITY_TAGS = {
  basic: {
    zh: ["高质量", "清晰"],
    en: ["high quality", "detailed"]
  },
  professional: {
    zh: ["超高质量", "8K分辨率", "专业级", "精细细节", "完美构图"],
    en: ["masterpiece", "best quality", "8k", "ultra detailed", "professional", "perfect composition"]
  }
};
const SHOT_TYPE_MAP = {
  "大远景": "extreme long shot, establishing shot",
  "远景": "long shot, wide shot",
  "全景": "full shot",
  "中景": "medium shot",
  "近景": "medium close-up",
  "特写": "close-up",
  "大特写": "extreme close-up"
};
const ANGLE_MAP = {
  "平视": "eye level angle",
  "仰视": "low angle shot",
  "俯视": "high angle shot",
  "斜侧": "dutch angle, tilted frame",
  "顶视": "top-down view",
  "鸟瞰": "bird's eye view"
};
const MOVEMENT_MAP = {
  "静止": "static shot, locked camera",
  "推镜": "push in, dolly forward, zoom in",
  "拉镜": "pull out, dolly backward, zoom out",
  "摇镜": "pan shot, panning movement",
  "移镜": "tracking shot, dolly shot",
  "跟镜": "follow shot, tracking subject",
  "升降": "crane shot, vertical movement",
  "环绕": "orbit shot, circular movement, 360 degree rotation"
};
class PromptEngine {
  constructor(style, config) {
    this.style = style;
    this.config = {
      separateLanguages: true,
      useWeights: false,
      // 默认不使用权重（兼容性）
      includeNegative: true,
      qualityTags: "professional",
      ...config
    };
  }
  /**
   * 生成标准化的角色触发词
   * 格式: char_[姓名简码]_[随机Hash]
   */
  static generateTriggerWord(name, characterId) {
    const safeName = name.split("").map((char) => char.charCodeAt(0) > 255 ? "c" : char.toLowerCase()).join("").replace(/[^a-z0-9]/g, "").substring(0, 8);
    const hash = characterId.substring(characterId.length - 4);
    return `char_${safeName}_${hash}`;
  }
  // ============ 公共接口 ============
  /**
   * 生成角色全身图提示词
   */
  forCharacterFullBody(character, existingPrompt) {
    const parts = [];
    if (character.name) {
      parts.push({ type: "subject", value: character.name, weight: 1.2, language: "zh" });
    }
    if (character.triggerWord) {
      parts.push({ type: "subject", value: character.triggerWord, weight: 1.3, language: "en" });
    }
    if (character.appearance) {
      parts.push({ type: "appearance", value: character.appearance, weight: 1.1, language: "zh" });
    }
    parts.push({ type: "technical", value: "全身正视图", language: "zh" });
    parts.push({ type: "technical", value: "full body shot, standing pose, front view", language: "en" });
    parts.push({ type: "technical", value: "白色背景", language: "zh" });
    parts.push({ type: "technical", value: "white background, simple background", language: "en" });
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "character design, reference sheet", language: "en" });
    return this.buildAdvancedPrompt(parts, "character");
  }
  /**
   * 生成角色脸部图提示词
   */
  forCharacterFace(character, existingPrompt) {
    const parts = [];
    if (character.name) {
      parts.push({ type: "subject", value: character.name, weight: 1.2, language: "zh" });
    }
    if (character.triggerWord) {
      parts.push({ type: "subject", value: character.triggerWord, weight: 1.3, language: "en" });
    }
    if (character.appearance) {
      const features = character.appearance.split(/[，,]/).slice(0, 3).join("，");
      parts.push({ type: "appearance", value: features, weight: 1.1, language: "zh" });
    }
    parts.push({ type: "technical", value: "脸部特写", language: "zh" });
    parts.push({ type: "technical", value: "face close-up, portrait, facial features", language: "en" });
    parts.push({ type: "technical", value: "正面视角，中性表情", language: "zh" });
    parts.push({ type: "technical", value: "front view, neutral expression", language: "en" });
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "detailed face, clear eyes, sharp focus", language: "en" });
    return this.buildAdvancedPrompt(parts, "character");
  }
  /**
   * 生成场景远景提示词
   */
  forSceneWide(scene, existingPrompt) {
    const parts = [];
    if (scene.name) {
      parts.push({ type: "subject", value: scene.name, weight: 1.2, language: "zh" });
    }
    if (scene.location) {
      parts.push({ type: "appearance", value: scene.location, weight: 1.1, language: "zh" });
    }
    parts.push({ type: "technical", value: "远景镜头", language: "zh" });
    parts.push({ type: "technical", value: "wide shot, establishing shot, panoramic view", language: "en" });
    if (scene.environment) {
      parts.push({ type: "appearance", value: scene.environment, language: "zh" });
    }
    if (scene.timeOfDay) {
      const timeDesc = this.getTimeOfDayDescription(scene.timeOfDay);
      parts.push({ type: "lighting", value: timeDesc.zh, language: "zh" });
      parts.push({ type: "lighting", value: timeDesc.en, language: "en" });
    }
    if (scene.weather) {
      parts.push({ type: "mood", value: `${scene.weather}天气`, language: "zh" });
    }
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "cinematic, detailed environment, atmospheric", language: "en" });
    return this.buildAdvancedPrompt(parts, "scene");
  }
  /**
   * 生成场景中景提示词
   */
  forSceneMedium(scene, existingPrompt) {
    const parts = [];
    if (scene.name) {
      parts.push({ type: "subject", value: scene.name, weight: 1.2, language: "zh" });
    }
    parts.push({ type: "technical", value: "中景镜头", language: "zh" });
    parts.push({ type: "technical", value: "medium shot, balanced composition", language: "en" });
    if (scene.description) {
      parts.push({ type: "appearance", value: scene.description, weight: 1.1, language: "zh" });
    }
    if (scene.environment) {
      parts.push({ type: "appearance", value: scene.environment, language: "zh" });
    }
    if (scene.timeOfDay) {
      const timeDesc = this.getTimeOfDayDescription(scene.timeOfDay);
      parts.push({ type: "lighting", value: timeDesc.zh, language: "zh" });
      parts.push({ type: "lighting", value: timeDesc.en, language: "en" });
    }
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "detailed scene, cinematic lighting", language: "en" });
    return this.buildAdvancedPrompt(parts, "scene");
  }
  /**
   * 生成场景特写提示词
   */
  forSceneCloseup(scene, existingPrompt) {
    const parts = [];
    if (scene.name) {
      parts.push({ type: "subject", value: scene.name, weight: 1.2, language: "zh" });
    }
    parts.push({ type: "technical", value: "特写镜头", language: "zh" });
    parts.push({ type: "technical", value: "close-up shot, detail view, focused composition", language: "en" });
    if (scene.description) {
      parts.push({ type: "appearance", value: scene.description, weight: 1.1, language: "zh" });
    }
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "extreme detail, texture focus, macro photography", language: "en" });
    return this.buildAdvancedPrompt(parts, "scene");
  }
  /**
   * 生成道具提示词
   */
  forProp(prop, existingPrompt) {
    const parts = [];
    if (prop.name) {
      parts.push({ type: "subject", value: prop.name, weight: 1.2, language: "zh" });
    }
    if (prop.description) {
      parts.push({ type: "appearance", value: prop.description, weight: 1.1, language: "zh" });
    }
    if (prop.category) {
      parts.push({ type: "appearance", value: prop.category, language: "zh" });
    }
    parts.push({ type: "technical", value: "产品视图", language: "zh" });
    parts.push({ type: "technical", value: "product view, item showcase, clean composition", language: "en" });
    parts.push({ type: "technical", value: "白色背景", language: "zh" });
    parts.push({ type: "technical", value: "white background, studio lighting", language: "en" });
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "clear details, professional photography, sharp focus", language: "en" });
    return this.buildAdvancedPrompt(parts, "prop");
  }
  /**
   * 生成服饰提示词
   */
  forCostume(costume, character, existingPrompt) {
    const parts = [];
    if (costume.name) {
      parts.push({ type: "subject", value: costume.name, weight: 1.2, language: "zh" });
    }
    if (costume.description) {
      parts.push({ type: "appearance", value: costume.description, weight: 1.1, language: "zh" });
    }
    if (costume.style) {
      parts.push({ type: "style", value: costume.style, language: "zh" });
    }
    if (character) {
      const characterIdentifier = character.triggerWord || character.name;
      parts.push({
        type: "subject",
        value: `${characterIdentifier} wearing ${costume.name}`,
        weight: 1.3,
        language: "en"
      });
      if (character.appearance) {
        const physicalTraits = character.appearance.split(/[，,]/).slice(0, 3).join(", ");
        parts.push({
          type: "appearance",
          value: physicalTraits,
          weight: 1.1,
          language: "mixed"
        });
      }
      parts.push({ type: "appearance", value: `a portrait of ${character.name}`, language: "zh" });
    }
    parts.push({ type: "technical", value: "服装展示", language: "zh" });
    parts.push({ type: "technical", value: "costume design, fashion showcase, outfit display", language: "en" });
    if (existingPrompt) {
      parts.push({ type: "style", value: existingPrompt, language: "mixed" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "detailed clothing, fabric texture, professional fashion photography", language: "en" });
    return this.buildAdvancedPrompt(parts, "costume");
  }
  /**
   * 生成分镜图片提示词
   */
  forStoryboardImage(panel, characters, scenes) {
    const parts = [];
    if (panel.shot && SHOT_TYPE_MAP[panel.shot]) {
      parts.push({ type: "technical", value: panel.shot, language: "zh" });
      parts.push({ type: "technical", value: SHOT_TYPE_MAP[panel.shot], language: "en" });
    }
    if (panel.angle && ANGLE_MAP[panel.angle]) {
      parts.push({ type: "technical", value: panel.angle, language: "zh" });
      parts.push({ type: "technical", value: ANGLE_MAP[panel.angle], language: "en" });
    }
    if (panel.description) {
      parts.push({ type: "appearance", value: panel.description, weight: 1.2, language: "zh" });
    }
    if (panel.characters && panel.characters.length > 0) {
      panel.characters.forEach((charName) => {
        const char = characters.find((c) => c.name === charName);
        if (char && char.appearance) {
          parts.push({ type: "subject", value: `${charName}, ${char.appearance}`, weight: 1.1, language: "zh" });
        } else {
          parts.push({ type: "subject", value: charName, language: "zh" });
        }
      });
    }
    if (panel.props && panel.props.length > 0) {
      parts.push({ type: "appearance", value: `道具: ${panel.props.join("、")}`, language: "zh" });
      parts.push({ type: "appearance", value: `props: ${panel.props.join(", ")}`, language: "en" });
    }
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style, true));
    }
    parts.push(...this.getQualityTags());
    parts.push({ type: "quality", value: "cinematic composition, professional storyboard, movie scene", language: "en" });
    return this.buildAdvancedPrompt(parts, "storyboard");
  }
  /**
   * 生成分镜视频提示词
   */
  forStoryboardVideo(panel, characters) {
    const parts = [];
    if (panel.cameraMovement && MOVEMENT_MAP[panel.cameraMovement]) {
      parts.push({ type: "technical", value: panel.cameraMovement, language: "zh" });
      parts.push({ type: "technical", value: MOVEMENT_MAP[panel.cameraMovement], language: "en", weight: 1.2 });
    }
    if (panel.duration) {
      parts.push({ type: "technical", value: `${panel.duration}秒`, language: "zh" });
      parts.push({ type: "technical", value: `${panel.duration} seconds duration`, language: "en" });
    }
    if (panel.description) {
      parts.push({ type: "appearance", value: panel.description, weight: 1.2, language: "zh" });
    }
    if (panel.characters && panel.characters.length > 0) {
      const charActions = panel.characters.map((name) => `${name} in motion`).join(", ");
      parts.push({ type: "subject", value: charActions, language: "en", weight: 1.1 });
    }
    if (this.style) {
      if (this.style.cameraStyle) {
        parts.push({ type: "style", value: this.style.cameraStyle, language: "zh" });
      }
      if (this.style.mood) {
        parts.push({ type: "mood", value: `${this.style.mood}氛围`, language: "zh" });
        parts.push({ type: "mood", value: `${this.style.mood} atmosphere`, language: "en" });
      }
      if (this.style.customPrompt) {
        parts.push({ type: "style", value: this.style.customPrompt, language: "en" });
      }
    }
    parts.push({ type: "quality", value: "smooth motion, fluid animation", language: "en" });
    parts.push({ type: "quality", value: "cinematic video, professional cinematography", language: "en" });
    return this.buildAdvancedPrompt(parts, "storyboard");
  }
  // ============ 私有辅助方法 ============
  /**
   * 将导演风格转换为提示词部分
   */
  styleToPromptParts(style, includeCameraStyle = false) {
    const parts = [];
    if (style.artStyle) {
      parts.push({ type: "style", value: style.artStyle, language: "zh" });
    }
    if (style.colorTone) {
      parts.push({ type: "style", value: style.colorTone, language: "zh" });
    }
    if (style.lightingStyle) {
      parts.push({ type: "lighting", value: style.lightingStyle, language: "zh" });
    }
    if (includeCameraStyle && style.cameraStyle) {
      parts.push({ type: "style", value: style.cameraStyle, language: "zh" });
    }
    if (style.mood) {
      parts.push({ type: "mood", value: `${style.mood}氛围`, language: "zh" });
    }
    if (style.customPrompt) {
      parts.push({ type: "style", value: style.customPrompt, language: "en" });
    }
    return parts;
  }
  /**
   * 获取质量标签
   */
  getQualityTags() {
    if (this.config.qualityTags === "none") return [];
    const tags = QUALITY_TAGS[this.config.qualityTags];
    const parts = [];
    tags.zh.forEach((tag) => {
      parts.push({ type: "quality", value: tag, language: "zh" });
    });
    tags.en.forEach((tag) => {
      parts.push({ type: "quality", value: tag, language: "en" });
    });
    return parts;
  }
  /**
   * 获取时间段描述
   */
  getTimeOfDayDescription(timeOfDay) {
    const descriptions = {
      day: { zh: "白天，明亮的自然光", en: "daytime, bright natural light, sunny" },
      night: { zh: "夜晚，月光或灯光照明", en: "nighttime, moonlight, artificial lighting" },
      dawn: { zh: "黎明，柔和的晨光", en: "dawn, soft morning light, sunrise" },
      dusk: { zh: "黄昏，温暖的夕阳光线", en: "dusk, golden hour, warm sunset light" }
    };
    return descriptions[timeOfDay] || { zh: "", en: "" };
  }
  /**
   * 构建高级提示词
   */
  buildAdvancedPrompt(parts, category) {
    const zhParts = [];
    const enParts = [];
    const mixedParts = [];
    const weights = {};
    parts.forEach((part) => {
      if (!part.value) return;
      const value = part.value.trim();
      if (!value) return;
      if (this.config.useWeights && part.weight && part.weight !== 1) {
        weights[value] = part.weight;
      }
      if (part.language === "zh") {
        zhParts.push(value);
      } else if (part.language === "en") {
        enParts.push(value);
      } else {
        mixedParts.push(value);
      }
    });
    let positive;
    if (this.config.separateLanguages) {
      positive = [...zhParts, ...mixedParts, ...enParts].join(", ");
    } else {
      positive = [...zhParts, ...enParts, ...mixedParts].join(", ");
    }
    const negative = this.config.includeNegative ? `${NEGATIVE_PROMPTS.general}, ${NEGATIVE_PROMPTS[category]}` : "";
    const metadata = {
      totalParts: parts.length,
      hasStyle: !!this.style,
      language: zhParts.length > 0 && enParts.length > 0 ? "mixed" : zhParts.length > 0 ? "zh" : "en"
    };
    return {
      positive,
      negative,
      weights: Object.keys(weights).length > 0 ? weights : void 0,
      metadata
    };
  }
}
async function extractAssets(originalText, scenesCount, directorStyle) {
  const characterNames = /* @__PURE__ */ new Set();
  scenesCount.forEach((scene) => {
    var _a;
    if (scene.characters && Array.isArray(scene.characters)) {
      scene.characters.forEach((name) => characterNames.add(name));
    }
    (_a = scene.dialogues) == null ? void 0 : _a.forEach((d) => characterNames.add(d.character));
  });
  const engine = new PromptEngine(directorStyle, { includeNegative: false });
  const contextText = originalText.substring(0, 15e3);
  const prompt = `你是一位拥有15年经验的资深影视美术总监，曾参与多部大型电影和电视剧的前期视觉开发。

【任务】分析以下故事文本，提取所有视觉资产，为后续的美术制作和AI图像生成提供详尽的参考资料。

【角色提取要求】
- 名字：角色全名或昵称
- 年龄段：如"20多岁"、"中年"、"老年"
- 体型：如"高大魁梧"、"纤细娇小"、"中等身材"
- 发型发色：具体描述，如"黑色长发披肩"、"银白短发"
- 五官特征：眼睛、鼻子、嘴唇的特点
- 标志性特点：疤痕、胎记、配饰等独特识别特征
- 性格：简短性格描述

【场景提取要求】
- 地点名称：场景的名称
- 空间类型：室内/室外/半开放
- 光线条件：自然光/人工光/混合光，以及光线氛围（明亮/昏暗/戏剧性）
- 时代特征：古代/近代/现代/未来
- 氛围描述：情感氛围，如"阴森压抑"、"温馨舒适"
- 关键物件：场景中的重要道具和陈设

【道具提取要求】
- 名称：道具名称
- 类别：武器/日用品/交通工具/食物/文件/珠宝/其他
- 材质：如"青铜"、"木质"、"玻璃"
- 时代特征：与故事背景匹配
- 功能/意义：在剧情中的作用

【服装提取要求】
- 归属角色：穿戴这套服装的角色名
- 服装名称：如"婚纱"、"铠甲"、"校服"
- 款式描述：剪裁、版型
- 颜色：主色调和配色
- 材质：如"丝绸"、"皮革"、"棉麻"
- 风格：如"华丽宫廷风"、"简约现代风"

请严格按照以下 JSON 对象格式返回，不要包含 Markdown 标记：
{
  "characters": [{ "name": "角色名", "age": "年龄段", "bodyType": "体型描述", "hair": "发型发色", "facialFeatures": "五官特征", "appearance": "完整外貌描述", "distinguishingFeatures": "标志性特点", "personality": "性格描述" }],
  "scenes": [{ "name": "场景名称", "location": "具体地点", "spaceType": "室内/室外", "lighting": "光线条件", "era": "时代特征", "atmosphere": "氛围描述", "environment": "完整环境描述", "keyObjects": ["物件1"] }],
  "props": [{ "name": "道具名称", "category": "类别", "material": "材质", "era": "时代特征", "description": "详细描述", "significance": "剧情意义" }],
  "costumes": [{ "characterName": "角色名", "name": "服装名称", "style": "款式", "color": "颜色", "material": "材质", "description": "服装描述" }]
}

已知角色名单（请优先使用这些名字）：${Array.from(characterNames).join("、") || "待提取"}

故事文本：
${contextText}
`;
  try {
    const result = await callDeepSeek([{ role: "user", content: prompt }]);
    let data = parseJSON(result);
    if (Array.isArray(data)) {
      console.log("extractAssets: AI 返回了数组结构，正在尝试自动归类...");
      const reconstructed = { characters: [], scenes: [], props: [], costumes: [] };
      data.forEach((item) => {
        if (item.age || item.hair || item.facialFeatures) reconstructed.characters.push(item);
        else if (item.lighting || item.spaceType || item.atmosphere) reconstructed.scenes.push(item);
        else if (item.material && item.characterName) reconstructed.costumes.push(item);
        else if (item.material || item.category) reconstructed.props.push(item);
      });
      data = reconstructed;
    }
    const characterIdMap = /* @__PURE__ */ new Map();
    const characterNamesExtracted = /* @__PURE__ */ new Set();
    const characters = (data.characters || []).map((c) => {
      const id = generateId();
      characterIdMap.set(c.name, id);
      characterNamesExtracted.add(c.name);
      const namePinyin = c.name.split("").map((char) => char.charCodeAt(0) > 255 ? "c" : char.toLowerCase()).join("").substring(0, 8);
      const triggerWord = `char_${namePinyin}_${id.slice(-4)}`;
      const standardParts = [];
      if (c.age) standardParts.push(c.age);
      if (c.bodyType) standardParts.push(c.bodyType);
      if (c.hair) standardParts.push(c.hair);
      if (c.facialFeatures) standardParts.push(c.facialFeatures);
      const standardAppearance = standardParts.join(", ");
      const charObj = {
        id,
        name: c.name,
        description: c.description || `${c.age || ""} ${c.bodyType || ""} ${c.facialFeatures || ""}`.trim(),
        appearance: c.appearance || `${c.hair || ""}, ${c.facialFeatures || ""}, ${c.bodyType || ""}, ${c.distinguishingFeatures || ""}`.trim(),
        personality: c.personality,
        avatar: "",
        triggerWord,
        standardAppearance,
        fullBodyPrompt: "",
        facePrompt: ""
      };
      const fullBody = engine.forCharacterFullBody(charObj);
      const face = engine.forCharacterFace(charObj);
      charObj.fullBodyPrompt = fullBody.positive;
      charObj.facePrompt = face.positive;
      return charObj;
    });
    characterNames.forEach((name) => {
      if (!characterNamesExtracted.has(name)) {
        const id = generateId();
        characterIdMap.set(name, id);
        characters.push({
          id,
          name,
          description: "从剧本自动识别的角色",
          appearance: "待进一步详细描述",
          personality: "待设定",
          avatar: "",
          triggerWord: `char_gen_${id.slice(-4)}`,
          standardAppearance: "默认外貌"
        });
      }
    });
    return {
      characters,
      scenes: (data.scenes || []).map((s) => {
        const id = generateId();
        const sceneObj = {
          id,
          name: s.name,
          description: s.description || s.environment,
          location: s.location || s.name,
          environment: s.environment || `${s.spaceType || ""}, ${s.lighting || ""}, ${s.atmosphere || ""}, ${s.era || ""}`.trim(),
          image: "",
          widePrompt: "",
          mediumPrompt: "",
          closeupPrompt: ""
        };
        sceneObj.widePrompt = engine.forSceneWide(sceneObj).positive;
        sceneObj.mediumPrompt = engine.forSceneMedium(sceneObj).positive;
        sceneObj.closeupPrompt = engine.forSceneCloseup(sceneObj).positive;
        return sceneObj;
      }),
      props: (data.props || []).map((p) => {
        const id = generateId();
        const propObj = {
          id,
          name: p.name,
          description: p.description || `${p.material || ""} ${p.name}, ${p.significance || ""}`.trim(),
          category: p.category,
          image: "",
          aiPrompt: ""
        };
        propObj.aiPrompt = engine.forProp(propObj).positive;
        return propObj;
      }),
      costumes: (data.costumes || []).map((c) => {
        const id = generateId();
        const charId = characterIdMap.get(c.characterName) || generateId();
        const character = characters.find((char) => char.id === charId);
        const costumeObj = {
          id,
          characterId: charId,
          characterName: c.characterName,
          name: c.name,
          description: c.description || `${c.style || ""}, ${c.color || ""}, ${c.material || ""}`.trim(),
          style: c.style || "默认",
          image: "",
          aiPrompt: ""
        };
        costumeObj.aiPrompt = engine.forCostume(costumeObj, character).positive;
        return costumeObj;
      })
    };
  } catch (error) {
    console.error("DeepSeek extractAssets failed:", error);
    const fallbackCharacters = Array.from(characterNames).map((name) => {
      const id = generateId();
      return {
        id,
        name,
        description: "从剧本自动识别的角色(提取失败回退)",
        appearance: "待设定",
        personality: "待设定",
        avatar: "",
        triggerWord: `char_fb_${id.slice(-4)}`,
        standardAppearance: "默认外貌"
      };
    });
    return { characters: fallbackCharacters, scenes: [], props: [], costumes: [] };
  }
}
function useScriptData({ chapterId }) {
  const isMountedRef = reactExports.useRef(true);
  const [chapter, setChapter] = reactExports.useState(null);
  const [script, setScript] = reactExports.useState(null);
  const [directorStyle, setDirectorStyle] = reactExports.useState();
  const [isExtracting, setIsExtracting] = reactExports.useState(false);
  const [extractProgress, setExtractProgress] = reactExports.useState({ step: "idle", message: "" });
  const [lastSaved, setLastSaved] = reactExports.useState("");
  const [scriptMode, setScriptMode] = reactExports.useState("tv_drama");
  const [history, setHistory] = reactExports.useState([]);
  const [historyIndex, setHistoryIndex] = reactExports.useState(-1);
  const safeToast = reactExports.useCallback((message, type = "success") => {
    requestAnimationFrame(() => {
      if (isMountedRef.current) {
        if (type === "success") {
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    });
  }, []);
  const pushHistory = reactExports.useCallback((newScript, description) => {
    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push({
        script: JSON.parse(JSON.stringify(newScript)),
        // 深拷贝
        timestamp: Date.now(),
        description
      });
      if (newHistory.length > 50) {
        newHistory.shift();
      }
      return newHistory;
    });
    setHistoryIndex((prev) => Math.min(prev + 1, 49));
  }, [historyIndex]);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    const loadData = async () => {
      if (chapterId) {
        const chapterData = await chapterStorage.getById(chapterId);
        if (isMountedRef.current) {
          setChapter(chapterData || null);
        }
        if (chapterData == null ? void 0 : chapterData.projectId) {
          const project = await projectStorage.getById(chapterData.projectId);
          if ((project == null ? void 0 : project.directorStyle) && isMountedRef.current) {
            setDirectorStyle(project.directorStyle);
          }
        }
        const scriptData = await scriptStorage.getByChapterId(chapterId);
        if (scriptData && isMountedRef.current) {
          const migratedScenes = scriptData.scenes.map((scene) => ({
            ...scene,
            sceneType: scene.sceneType || "INT",
            dialogues: scene.dialogues || [],
            transition: scene.transition,
            estimatedDuration: scene.estimatedDuration || 0
          }));
          const migratedScript = { ...scriptData, scenes: migratedScenes };
          setScript(migratedScript);
          setHistory([{ script: migratedScript, timestamp: Date.now(), description: "初始加载" }]);
          setHistoryIndex(0);
        } else if (isMountedRef.current) {
          setScript(null);
        }
      }
    };
    loadData();
    return () => {
      isMountedRef.current = false;
    };
  }, [chapterId]);
  reactExports.useEffect(() => {
    if (!script) return;
    const timer = setTimeout(async () => {
      try {
        await scriptStorage.save(script);
        if (isMountedRef.current) {
          const now = (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
          setLastSaved(now);
        }
      } catch (error) {
        console.error("Auto-save failed:", error);
      }
    }, 2e3);
    return () => clearTimeout(timer);
  }, [script]);
  const handleAIExtract = reactExports.useCallback(async () => {
    if (!chapter || !chapter.originalText) {
      safeToast('请先在"原文编辑"中添加内容', "error");
      return;
    }
    if (!isMountedRef.current) return;
    setIsExtracting(true);
    setExtractProgress({ step: "parsing", message: "正在解析原文..." });
    try {
      setExtractProgress({ step: "extracting", message: "正在提取场景与对白..." });
      const scenes = await extractScript(chapter.originalText, scriptMode, directorStyle);
      setExtractProgress({ step: "validating", message: "正在校验数据格式..." });
      const newScript = {
        id: (script == null ? void 0 : script.id) || generateId(),
        chapterId: chapter.id,
        content: "",
        scenes,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        mode: scriptMode,
        metadata: {
          title: chapter.title,
          draftDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          draft: "初稿"
        }
      };
      await scriptStorage.save(newScript);
      if (isMountedRef.current) {
        setScript(newScript);
        pushHistory(newScript, "AI 提取剧本");
        setExtractProgress({ step: "done", message: "提取完成！" });
        safeToast("AI提取完成！");
      }
    } catch (error) {
      setExtractProgress({ step: "error", message: "提取失败，请重试" });
      safeToast("提取失败，请重试", "error");
    } finally {
      if (isMountedRef.current) {
        setIsExtracting(false);
        setTimeout(() => {
          if (isMountedRef.current) {
            setExtractProgress({ step: "idle", message: "" });
          }
        }, 3e3);
      }
    }
  }, [chapter, script, safeToast, pushHistory, scriptMode, directorStyle]);
  const handleSave = reactExports.useCallback(async () => {
    if (!script || !isMountedRef.current) return;
    try {
      await scriptStorage.save(script);
      safeToast("剧本已保存");
    } catch (error) {
      safeToast("保存失败", "error");
    }
  }, [script, safeToast]);
  const handleUpdateScene = reactExports.useCallback((sceneId, updates) => {
    setScript((prev) => {
      if (!prev) return prev;
      const updatedScenes = prev.scenes.map(
        (scene) => scene.id === sceneId ? { ...scene, ...updates } : scene
      );
      return { ...prev, scenes: updatedScenes };
    });
  }, []);
  const handleAddScene = reactExports.useCallback(() => {
    setScript((prev) => {
      if (!prev) return prev;
      const lastScene = prev.scenes[prev.scenes.length - 1];
      const episodeNumber = (lastScene == null ? void 0 : lastScene.episodeNumber) || 1;
      const newScene = {
        id: generateId(),
        sceneNumber: prev.scenes.length + 1,
        episodeNumber,
        location: "新场景",
        timeOfDay: "白天",
        sceneType: "INT",
        characters: [],
        action: "",
        dialogues: [],
        estimatedDuration: 0
      };
      const newScript = { ...prev, scenes: [...prev.scenes, newScene] };
      pushHistory(newScript, "添加新场景");
      return newScript;
    });
  }, [pushHistory]);
  const handleDeleteScene = reactExports.useCallback((sceneId) => {
    setScript((prev) => {
      if (!prev) return prev;
      const filtered = prev.scenes.filter((s) => s.id !== sceneId);
      const newScript = { ...prev, scenes: filtered };
      pushHistory(newScript, "删除场景");
      return newScript;
    });
  }, [pushHistory]);
  const handleAddDialogue = reactExports.useCallback((sceneId) => {
    setScript((prev) => {
      if (!prev) return prev;
      const updatedScenes = prev.scenes.map((scene) => {
        if (scene.id === sceneId) {
          const newDialogue = {
            id: generateId(),
            character: "角色名",
            lines: ""
          };
          return { ...scene, dialogues: [...scene.dialogues, newDialogue] };
        }
        return scene;
      });
      return { ...prev, scenes: updatedScenes };
    });
  }, []);
  const handleUpdateDialogue = reactExports.useCallback((sceneId, dialogueId, updates) => {
    setScript((prev) => {
      if (!prev) return prev;
      const updatedScenes = prev.scenes.map((scene) => {
        if (scene.id === sceneId) {
          const updatedDialogues = scene.dialogues.map(
            (d) => d.id === dialogueId ? { ...d, ...updates } : d
          );
          return { ...scene, dialogues: updatedDialogues };
        }
        return scene;
      });
      return { ...prev, scenes: updatedScenes };
    });
  }, []);
  const handleDeleteDialogue = reactExports.useCallback((sceneId, dialogueId) => {
    setScript((prev) => {
      if (!prev) return prev;
      const updatedScenes = prev.scenes.map((scene) => {
        if (scene.id === sceneId) {
          return { ...scene, dialogues: scene.dialogues.filter((d) => d.id !== dialogueId) };
        }
        return scene;
      });
      return { ...prev, scenes: updatedScenes };
    });
  }, []);
  const handleBatchUpdate = reactExports.useCallback((sceneIds, updates) => {
    setScript((prev) => {
      if (!prev || sceneIds.size === 0) return prev;
      const updatedScenes = prev.scenes.map(
        (scene) => sceneIds.has(scene.id) ? { ...scene, ...updates } : scene
      );
      const newScript = { ...prev, scenes: updatedScenes };
      pushHistory(newScript, `批量更新 ${sceneIds.size} 个场景`);
      safeToast(`已批量更新 ${sceneIds.size} 个场景`);
      return newScript;
    });
  }, [pushHistory, safeToast]);
  const handleBatchDelete = reactExports.useCallback((sceneIds) => {
    setScript((prev) => {
      if (!prev || sceneIds.size === 0) return prev;
      const filtered = prev.scenes.filter((s) => !sceneIds.has(s.id));
      const newScript = { ...prev, scenes: filtered };
      pushHistory(newScript, `批量删除 ${sceneIds.size} 个场景`);
      safeToast(`已删除 ${sceneIds.size} 个场景`);
      return newScript;
    });
  }, [pushHistory, safeToast]);
  const handleUpdateScript = reactExports.useCallback((newScript) => {
    if (!isMountedRef.current) return;
    setScript(newScript);
    pushHistory(newScript, "全量更新剧本");
  }, [pushHistory]);
  const handleUpdateScenes = reactExports.useCallback((newScenes) => {
    if (!isMountedRef.current) return;
    setScript((prev) => {
      if (!prev) return prev;
      const newScript = { ...prev, scenes: newScenes, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
      pushHistory(newScript, "批量更改场景");
      return newScript;
    });
  }, [pushHistory]);
  const undo = reactExports.useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setScript(JSON.parse(JSON.stringify(history[newIndex].script)));
      safeToast("已撤销");
    }
  }, [historyIndex, history, safeToast]);
  const redo = reactExports.useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setScript(JSON.parse(JSON.stringify(history[newIndex].script)));
      safeToast("已重做");
    }
  }, [historyIndex, history, safeToast]);
  return {
    chapter,
    script,
    isExtracting,
    extractProgress,
    lastSaved,
    history,
    historyIndex,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    handleAIExtract,
    handleSave,
    handleUpdateScene,
    handleAddScene,
    handleDeleteScene,
    handleAddDialogue,
    handleUpdateDialogue,
    handleDeleteDialogue,
    handleBatchUpdate,
    handleBatchDelete,
    handleUpdateScript,
    handleUpdateScenes,
    undo,
    redo
  };
}
function useScriptStats({ script }) {
  return reactExports.useMemo(() => {
    if (!script) return null;
    const totalScenes = script.scenes.length;
    const totalDialogues = script.scenes.reduce((sum, s) => sum + s.dialogues.length, 0);
    const totalSeconds = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const totalDuration = minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;
    const characters = /* @__PURE__ */ new Set();
    script.scenes.forEach((scene) => {
      scene.characters.forEach((char) => characters.add(char));
      scene.dialogues.forEach((d) => characters.add(d.character));
    });
    const totalCharacters = Array.from(characters).filter((c) => c && c !== "角色名");
    const int = script.scenes.filter((s) => s.sceneType === "INT").length;
    const ext = script.scenes.filter((s) => s.sceneType === "EXT").length;
    const sceneTypeStats = { int, ext };
    const episodeDurations = /* @__PURE__ */ new Map();
    const episodeSet = new Set(script.scenes.map((s) => s.episodeNumber || 1));
    episodeSet.forEach((episodeNum) => {
      const scenes = script.scenes.filter((s) => s.episodeNumber === episodeNum);
      const epTotalSeconds = scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
      const epMinutes = Math.floor(epTotalSeconds / 60);
      const epSeconds = epTotalSeconds % 60;
      episodeDurations.set(
        episodeNum,
        epMinutes > 0 ? `${epMinutes}分${epSeconds}秒` : `${epSeconds}秒`
      );
    });
    let estMin = 0;
    let estMax = 0;
    script.scenes.forEach((scene) => {
      var _a;
      const dialogueCount = ((_a = scene.dialogues) == null ? void 0 : _a.length) || 0;
      const actionLength = (scene.action || "").length;
      const characterCount = (scene.characters || []).length;
      let baseMin = 1;
      let baseMax = 2;
      if (dialogueCount >= 3) {
        baseMin += 2;
        baseMax += 3;
      } else if (dialogueCount >= 1) {
        baseMin += 1;
        baseMax += 1;
      }
      if (actionLength > 100) {
        baseMin += 1;
        baseMax += 1;
      }
      if (characterCount >= 3) {
        baseMin += 1;
        baseMax += 1;
      }
      estMin += baseMin;
      estMax += baseMax;
    });
    return {
      totalScenes,
      totalDialogues,
      totalDuration,
      totalCharacters,
      sceneTypeStats,
      episodeDurations,
      estimatedPanelCount: { min: estMin, max: estMax }
    };
  }, [script]);
}
function getAllEpisodes(script) {
  if (!script) return [];
  const episodes = new Set(script.scenes.map((s) => s.episodeNumber || 1));
  return Array.from(episodes).sort((a, b) => a - b);
}
function getFilteredScenes(script, selectedEpisode) {
  if (!script) return [];
  if (selectedEpisode === "all") return script.scenes;
  return script.scenes.filter((s) => s.episodeNumber === selectedEpisode);
}
function useKeyboardShortcuts$1({
  onSave,
  onUndo,
  onRedo,
  onAddScene,
  onToggleStats,
  onToggleBatchMode,
  enabled = true
}) {
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!enabled) return;
      const target = event.target;
      const isInputField = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      if (isCtrlOrCmd) {
        switch (event.key.toLowerCase()) {
          case "s":
            event.preventDefault();
            onSave == null ? void 0 : onSave();
            break;
          case "z":
            if (event.shiftKey) {
              event.preventDefault();
              onRedo == null ? void 0 : onRedo();
            } else {
              event.preventDefault();
              onUndo == null ? void 0 : onUndo();
            }
            break;
          case "y":
            event.preventDefault();
            onRedo == null ? void 0 : onRedo();
            break;
          case "enter":
            if (!isInputField) {
              event.preventDefault();
              onAddScene == null ? void 0 : onAddScene();
            }
            break;
          case "i":
            if (!isInputField) {
              event.preventDefault();
              onToggleStats == null ? void 0 : onToggleStats();
            }
            break;
          case "b":
            if (!isInputField) {
              event.preventDefault();
              onToggleBatchMode == null ? void 0 : onToggleBatchMode();
            }
            break;
        }
      }
      if (event.key === "Escape" && !isInputField) {
        onToggleBatchMode == null ? void 0 : onToggleBatchMode();
      }
    },
    [enabled, onSave, onUndo, onRedo, onAddScene, onToggleStats, onToggleBatchMode]
  );
  reactExports.useEffect(() => {
    if (enabled) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [enabled, handleKeyDown]);
}
const StatsPanel = reactExports.memo(function StatsPanel2({ stats, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-purple-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-5 h-5" }),
        "剧本统计"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-purple-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-purple-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "总场景" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.totalScenes }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [
          "内景: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-purple-600", children: stats.sceneTypeStats.int }),
          " / ",
          "外景: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-teal-600", children: stats.sceneTypeStats.ext })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-purple-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-blue-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "总对话" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.totalDialogues })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-purple-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-green-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "角色数量" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.totalCharacters.length }),
        stats.totalCharacters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 mt-1 truncate", title: stats.totalCharacters.join(", "), children: [
          stats.totalCharacters.slice(0, 3).join(", "),
          stats.totalCharacters.length > 3 && "..."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-purple-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-orange-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "预计时长" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.totalDuration })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm border border-purple-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-pink-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "预估分镜" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-gray-900", children: [
          "~",
          stats.estimatedPanelCount.max
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [
          "范围: ",
          stats.estimatedPanelCount.min,
          "-",
          stats.estimatedPanelCount.max,
          " 个"
        ] })
      ] })
    ] }) })
  ] });
});
const BatchEditPanel = reactExports.memo(function BatchEditPanel2({
  selectedCount,
  onUpdate,
  onDelete,
  onClose
}) {
  const [batchEpisode, setBatchEpisode] = reactExports.useState("");
  const handleApplyEpisode = () => {
    const value = parseInt(batchEpisode);
    if (value > 0) {
      onUpdate({ episodeNumber: value });
      setBatchEpisode("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-orange-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-5 h-5" }),
        "批量修改设置",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-orange-600", children: [
          "（已选 ",
          selectedCount,
          " 个场景）"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "批量设置集数" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "集数",
                value: batchEpisode,
                onChange: (e) => setBatchEpisode(e.target.value),
                className: "h-9",
                min: "1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleApplyEpisode,
                disabled: !batchEpisode || parseInt(batchEpisode) <= 0,
                children: "应用"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "批量设置时间" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => onUpdate({ timeOfDay: value }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择时间" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "白天", children: "白天" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "夜晚", children: "夜晚" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "黄昏", children: "黄昏" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "清晨", children: "清晨" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "傍晚", children: "傍晚" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "批量设置内/外景" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => onUpdate({ sceneType: value }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择类型" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "INT", children: "INT（内景）" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EXT", children: "EXT（外景）" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "批量设置转场" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => onUpdate({ transition: value === "none" ? void 0 : value }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择转场" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "无转场" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "切至", children: "切至" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "淡入", children: "淡入" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "淡出", children: "淡出" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "溶至", children: "溶至" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "化至", children: "化至" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2 border-t border-orange-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "destructive",
          size: "sm",
          onClick: onDelete,
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
            "批量删除选中场景"
          ]
        }
      ) })
    ] })
  ] });
});
const EpisodeFilter = reactExports.memo(function EpisodeFilter2({
  episodes,
  selectedEpisode,
  onSelect,
  getEpisodeDuration
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4 text-gray-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: selectedEpisode === "all" ? "all" : String(selectedEpisode),
        onValueChange: (value) => onSelect(value === "all" ? "all" : parseInt(value)),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择集数" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "all", children: [
              "全部集数（",
              episodes.length,
              " 集）"
            ] }),
            episodes.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(ep), children: [
              "第 ",
              ep,
              " 集 - ",
              getEpisodeDuration(ep)
            ] }, ep))
          ] })
        ]
      }
    )
  ] });
});
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form2 = button == null ? void 0 : button.form;
      if (form2) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form2.addEventListener("reset", reset);
        return () => form2.removeEventListener("reset", reset);
      }
    }, [button, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxProvider, { scope: __scopeCheckbox, state: checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          "aria-required": required,
          "data-state": getState$1(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...checkboxProps,
          ref: composedRefs,
          onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
            if (event.key === "Enter") event.preventDefault();
          }),
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BubbleInput$2,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" },
          defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked
        }
      )
    ] });
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME$1 = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME$1, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isIndeterminate(context.state) || context.state === true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState$1(context.state),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef,
        style: { pointerEvents: "none", ...props.style }
      }
    ) });
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME$1;
var BubbleInput$2 = (props) => {
  const { control, checked, bubbles = true, defaultChecked, ...inputProps } = props;
  const ref = reactExports.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  reactExports.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate(checked);
      setChecked.call(input, isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: defaultChecked ?? defaultCheckedRef.current,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState$1(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var Root$3 = Checkbox$1;
var Indicator$1 = CheckboxIndicator;
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root$3,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator$1,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
const DialogueItem = reactExports.memo(function DialogueItem2({
  dialogue,
  sceneId,
  characters,
  onUpdate,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start bg-gray-50 p-3 rounded-lg border border-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: dialogue.character ?? "",
          onValueChange: (value) => onUpdate(sceneId, dialogue.id, { character: value }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择角色" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              characters.length > 0 ? characters.map((char) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: char, children: char }, char)) : /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "角色名", children: "角色名" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "新角色", children: "+ 新角色" })
            ] })
          ]
        }
      ),
      dialogue.character === "新角色" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "输入角色名",
          className: "mt-2 h-8 text-sm",
          onChange: (e) => {
            if (e.target.value) {
              onUpdate(sceneId, dialogue.id, { character: e.target.value });
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: dialogue.lines ?? "",
          onChange: (e) => onUpdate(sceneId, dialogue.id, { lines: e.target.value }),
          placeholder: "输入台词...",
          className: "min-h-[60px] text-sm"
        }
      ),
      dialogue.parenthetical !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: dialogue.parenthetical ?? "",
          onChange: (e) => onUpdate(sceneId, dialogue.id, { parenthetical: e.target.value }),
          placeholder: "（表演提示，如：轻声地）",
          className: "mt-2 h-8 text-xs text-gray-500 italic"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "sm",
        onClick: () => onDelete(sceneId, dialogue.id),
        className: "text-red-500 hover:text-red-700 hover:bg-red-50",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
      }
    )
  ] });
});
const SceneCard = reactExports.memo(function SceneCard2({
  scene,
  batchMode,
  isSelected,
  onToggleSelect,
  onUpdate,
  onDelete,
  onAddDialogue,
  onUpdateDialogue,
  onDeleteDialogue
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const formatSceneHeading = reactExports.useCallback(() => {
    return `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location} - ${scene.timeOfDay}`;
  }, [scene.sceneNumber, scene.sceneType, scene.location, scene.timeOfDay]);
  const characters = scene.characters.filter((c) => c && c !== "角色名");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `transition-all duration-200 ${isSelected ? "ring-2 ring-orange-500 bg-orange-50" : "hover:shadow-md"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          batchMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked: isSelected,
              onCheckedChange: () => onToggleSelect(scene.id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: scene.location ?? "",
                onChange: (e) => onUpdate(scene.id, { location: e.target.value }),
                className: "h-8 w-40",
                placeholder: "场景地点"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: scene.sceneType,
                onValueChange: (value) => onUpdate(scene.id, { sceneType: value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "INT", children: "INT" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EXT", children: "EXT" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: scene.timeOfDay,
                onValueChange: (value) => onUpdate(scene.id, { timeOfDay: value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "白天", children: "白天" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "夜晚", children: "夜晚" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "黄昏", children: "黄昏" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "清晨", children: "清晨" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "傍晚", children: "傍晚" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setIsEditing(false), children: "完成" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsEditing(true),
              className: "flex items-center gap-2 text-left hover:text-purple-600 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-purple-700", children: formatSceneHeading() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3 opacity-50" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded", children: [
            "第 ",
            scene.episodeNumber || 1,
            " 集"
          ] }),
          (scene.estimatedDuration || 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs flex items-center gap-1 text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            scene.estimatedDuration,
            "秒"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => setIsExpanded(!isExpanded),
              children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
            }
          ),
          !batchMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => onDelete(scene.id),
              className: "text-red-500 hover:text-red-700 hover:bg-red-50",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      scene.transition && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 italic mt-1", children: [
        "转场: ",
        scene.transition
      ] })
    ] }),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-gray-700", children: "动作描述" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: scene.action ?? "",
            onChange: (e) => onUpdate(scene.id, { action: e.target.value }),
            placeholder: "描述场景中的动作和环境...",
            className: "min-h-[80px] text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-gray-700", children: "出场角色" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: (scene.characters || []).join(", "),
            onChange: (e) => onUpdate(scene.id, {
              characters: e.target.value.split(",").map((c) => c.trim()).filter((c) => c)
            }),
            placeholder: "角色1, 角色2, ...",
            className: "text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700", children: [
            "对白 (",
            scene.dialogues.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => onAddDialogue(scene.id),
              className: "gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                "添加对白"
              ]
            }
          )
        ] }),
        scene.dialogues.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-400 py-4 text-sm", children: '暂无对白，点击"添加对白"按钮创建' }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: scene.dialogues.map((dialogue) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DialogueItem,
          {
            dialogue,
            sceneId: scene.id,
            characters,
            onUpdate: onUpdateDialogue,
            onDelete: onDeleteDialogue
          },
          dialogue.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-gray-600", children: "预计时长（秒）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: scene.estimatedDuration || 0,
            onChange: (e) => onUpdate(scene.id, { estimatedDuration: parseInt(e.target.value) || 0 }),
            className: "w-24 h-8 text-sm",
            min: "0"
          }
        )
      ] })
    ] })
  ] });
});
const ExtractProgressIndicator = reactExports.memo(function ExtractProgressIndicator2({
  progress
}) {
  if (progress.step === "idle") return null;
  const getIcon = () => {
    switch (progress.step) {
      case "parsing":
      case "extracting":
      case "validating":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" });
      case "done":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-green-500" });
      case "error":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-500" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" });
    }
  };
  const getStepNumber = () => {
    switch (progress.step) {
      case "parsing":
        return 1;
      case "extracting":
        return 2;
      case "validating":
        return 3;
      case "done":
        return 4;
      default:
        return 0;
    }
  };
  const getBgColor = () => {
    switch (progress.step) {
      case "done":
        return "bg-green-50 border-green-200 text-green-700";
      case "error":
        return "bg-red-50 border-red-200 text-red-700";
      default:
        return "bg-blue-50 border-blue-200 text-blue-700";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 px-4 py-2 rounded-lg border ${getBgColor()}`, children: [
    getIcon(),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: progress.message }),
      progress.step !== "done" && progress.step !== "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-1", children: [1, 2, 3].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-1 w-8 rounded-full ${step <= getStepNumber() ? "bg-blue-500" : "bg-gray-200"}`
        },
        step
      )) })
    ] })
  ] });
});
const CharacterStats = reactExports.memo(function CharacterStats2({ script }) {
  const stats = reactExports.useMemo(() => {
    if (!script || script.scenes.length === 0) return [];
    const characterMap = /* @__PURE__ */ new Map();
    let totalWords = 0;
    script.scenes.forEach((scene) => {
      if (!scene.dialogues || !Array.isArray(scene.dialogues)) return;
      scene.dialogues.forEach((dialogue) => {
        var _a;
        const name = dialogue.character;
        if (!name || name === "角色名") return;
        const wordCount = ((_a = dialogue.lines) == null ? void 0 : _a.length) || 0;
        totalWords += wordCount;
        const existing = characterMap.get(name) || { lineCount: 0, wordCount: 0 };
        characterMap.set(name, {
          lineCount: existing.lineCount + 1,
          wordCount: existing.wordCount + wordCount
        });
      });
    });
    const result = Array.from(characterMap.entries()).map(([name, data]) => ({
      name,
      lineCount: data.lineCount,
      wordCount: data.wordCount,
      percentage: totalWords > 0 ? Math.round(data.wordCount / totalWords * 100) : 0
    })).sort((a, b) => b.wordCount - a.wordCount);
    return result;
  }, [script]);
  if (stats.length === 0) {
    return null;
  }
  const getBarColor = (index) => {
    const colors = [
      "bg-purple-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-orange-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-indigo-500",
      "bg-red-400"
    ];
    return colors[index % colors.length];
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-indigo-700 text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-5 h-5" }),
      "角色对白统计"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        stats.slice(0, 8).map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-800", children: stat.name }),
              index === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded", children: "主角" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-gray-500 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }),
                stat.lineCount,
                "句"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                stat.wordCount,
                "字"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-gray-700", children: [
                stat.percentage,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-100 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-2 rounded-full transition-all duration-500 ${getBarColor(index)}`,
              style: { width: `${stat.percentage}%` }
            }
          ) })
        ] }, stat.name)),
        stats.length > 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-gray-400 pt-2", children: [
          "还有 ",
          stats.length - 8,
          " 个角色..."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-indigo-100 flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
          "共 ",
          stats.length,
          " 个角色"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
          "总对白 ",
          stats.reduce((sum, s) => sum + s.lineCount, 0),
          " 句"
        ] })
      ] })
    ] })
  ] });
});
const WORDS_PER_PAGE = 250;
const PageCounter = reactExports.memo(function PageCounter2({ script }) {
  const stats = reactExports.useMemo(() => {
    if (!script || script.scenes.length === 0) {
      return { pageCount: 0, runtime: "00:00", sceneCount: 0, dialogueCount: 0 };
    }
    let totalWords = 0;
    let dialogueCount = 0;
    script.scenes.forEach((scene) => {
      totalWords += (scene.action || "").length;
      if (scene.dialogues && Array.isArray(scene.dialogues)) {
        scene.dialogues.forEach((dialogue) => {
          totalWords += (dialogue.lines || "").length;
          dialogueCount++;
        });
      }
    });
    const pageCount = Math.ceil(totalWords / WORDS_PER_PAGE);
    const estimatedSeconds = script.scenes.reduce(
      (sum, s) => sum + (s.estimatedDuration || 15),
      0
    );
    const totalMinutes = Math.floor(estimatedSeconds / 60);
    const remainingSeconds = estimatedSeconds % 60;
    const runtime = `${String(totalMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    return {
      pageCount,
      runtime,
      sceneCount: script.scenes.length,
      dialogueCount,
      totalWords
    };
  }, [script]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-purple-600", title: "预计页数（1页≈1分钟）", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: stats.pageCount }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "页" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-gray-200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-blue-600", title: "预计时长", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: stats.runtime })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-gray-200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-green-600", title: "总场景数", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: stats.sceneCount }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "场景" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-xs text-gray-400 cursor-help",
        title: `总字数：${stats.totalWords} | 对白：${stats.dialogueCount}句`,
        children: [
          stats.totalWords,
          "字"
        ]
      }
    )
  ] });
});
function downloadText(content, filename) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
function exportScriptToMarkdown(chapter, script) {
  var _a;
  let output = "";
  output += `# ${((_a = script.metadata) == null ? void 0 : _a.title) || chapter.title}

`;
  if (script.metadata) {
    output += `> **编剧**: ${script.metadata.author || "未署名"}  
`;
    output += `> **稿号**: ${script.metadata.draft || "初稿"}  
`;
    output += `> **日期**: ${script.metadata.draftDate || (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN")}  
`;
    if (script.metadata.logline) {
      output += `> **故事概要**: ${script.metadata.logline}  
`;
    }
  } else {
    output += `> 导出时间：${(/* @__PURE__ */ new Date()).toLocaleString("zh-CN")}
`;
  }
  output += `
---

`;
  const totalScenes = script.scenes.length;
  const episodes = new Set(script.scenes.map((s) => s.episodeNumber || 1));
  const totalDuration = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  const totalDialogues = script.scenes.reduce((sum, s) => sum + s.dialogues.length, 0);
  output += `## 📊 统计信息

`;
  output += `| 项目 | 数值 |
`;
  output += `|------|------|
`;
  output += `| 总场景数 | ${totalScenes} |
`;
  output += `| 总集数 | ${episodes.size} |
`;
  output += `| 总对白数 | ${totalDialogues} |
`;
  output += `| 预计时长 | ${minutes}分${seconds}秒 |

`;
  output += `---

`;
  output += `## 📝 剧本内容

`;
  script.scenes.forEach((scene, index) => {
    let sceneHeader = `### 场景 ${scene.sceneNumber}`;
    if (scene.specialSceneType) {
      sceneHeader += ` [${scene.specialSceneType}]`;
    }
    output += `${sceneHeader}

`;
    let slugline = scene.slugline || `${scene.sceneType}. ${scene.location}`;
    if (scene.subLocation) {
      slugline += ` - ${scene.subLocation}`;
    }
    slugline += ` - ${scene.timeOfDay}`;
    if (scene.continuity) {
      slugline += ` (${scene.continuity})`;
    }
    output += `**${slugline}**

`;
    output += `- 集数：第${scene.episodeNumber}集
`;
    output += `- 预估时长：${scene.estimatedDuration || 0}秒
`;
    if (scene.characters.length > 0) {
      output += `- 出场角色：${scene.characters.join("、")}
`;
    }
    if (scene.beat) {
      output += `- 🎭 **节拍**: ${scene.beat}
`;
    }
    output += `
`;
    if (scene.action) {
      output += `#### 动作描述

`;
      output += `${scene.action}

`;
    }
    if (scene.dialogues.length > 0) {
      output += `#### 对话

`;
      scene.dialogues.forEach((dialogue) => {
        let characterName = dialogue.character;
        if (dialogue.isFirstAppearance) {
          characterName = characterName.toUpperCase();
        }
        let extension = "";
        if (dialogue.extension) {
          extension = ` (${dialogue.extension})`;
        } else if (dialogue.isContinued) {
          extension = ` (CONT'D)`;
        }
        output += `**${characterName}${extension}**`;
        if (dialogue.parenthetical) {
          output += ` *(${dialogue.parenthetical})*`;
        }
        output += `

`;
        output += `> ${dialogue.lines}

`;
      });
    }
    if (scene.notes) {
      output += `> 💡 **编剧备注**: ${scene.notes}

`;
    }
    if (scene.transition && index < script.scenes.length - 1) {
      output += `*${scene.transition}*

`;
    }
    output += `---

`;
  });
  output += `
**剧终**
`;
  return output;
}
function exportScriptToText(chapter, script) {
  var _a;
  let output = "";
  const LINE_WIDTH = 60;
  const center = (text, width = LINE_WIDTH) => {
    const padding = Math.max(0, Math.floor((width - text.length) / 2));
    return " ".repeat(padding) + text;
  };
  const rightAlign = (text, width = LINE_WIDTH) => {
    const padding = Math.max(0, width - text.length);
    return " ".repeat(padding) + text;
  };
  output += `


`;
  output += center(((_a = script.metadata) == null ? void 0 : _a.title) || chapter.title) + "\n\n";
  output += center("剧本") + "\n\n\n";
  if (script.metadata) {
    if (script.metadata.author) {
      output += center(`编剧：${script.metadata.author}`) + "\n";
    }
    output += center(`${script.metadata.draft || "初稿"} - ${script.metadata.draftDate || (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN")}`) + "\n";
  } else {
    output += center(`导出时间：${(/* @__PURE__ */ new Date()).toLocaleString("zh-CN")}`) + "\n";
  }
  output += `



`;
  const totalDuration = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  output += `统计信息：
`;
  output += `总场景数：${script.scenes.length}  `;
  output += `总时长：${minutes}分${seconds}秒
`;
  output += `

`;
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;
  script.scenes.forEach((scene, index) => {
    let slugline = `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location.toUpperCase()}`;
    if (scene.subLocation) {
      slugline += ` - ${scene.subLocation.toUpperCase()}`;
    }
    slugline += ` - ${scene.timeOfDay.toUpperCase()}`;
    if (scene.continuity) {
      slugline += ` (${scene.continuity})`;
    }
    if (scene.specialSceneType) {
      output += `${scene.specialSceneType}:
`;
    }
    output += `${slugline}

`;
    if (scene.action) {
      output += `${scene.action}

`;
    }
    scene.dialogues.forEach((dialogue) => {
      let characterLine = dialogue.character.toUpperCase();
      if (dialogue.isFirstAppearance) {
        characterLine = characterLine;
      }
      if (dialogue.extension) {
        characterLine += ` (${dialogue.extension})`;
      } else if (dialogue.isContinued) {
        characterLine += ` (CONT'D)`;
      }
      output += center(characterLine) + "\n";
      if (dialogue.parenthetical) {
        const parenthetical = `(${dialogue.parenthetical})`;
        output += center(parenthetical) + "\n";
      }
      const DIALOGUE_MARGIN = 10;
      const lines = dialogue.lines.split("\n");
      lines.forEach((line) => {
        if (line.trim()) {
          output += " ".repeat(DIALOGUE_MARGIN) + line + "\n";
        }
      });
      output += `
`;
    });
    if (scene.transition && index < script.scenes.length - 1) {
      const transition = `${scene.transition}：`;
      output += rightAlign(transition) + "\n\n";
    }
    output += `
`;
  });
  output += `

` + center("剧终") + "\n";
  return output;
}
function exportVideoPromptsByPlatform(panels, platform, projectTitle = "未命名项目") {
  let output = "";
  const timestamp = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
  generateFriendlyFilename(projectTitle, platform);
  const platformGuide = {
    kling: {
      header: `# 可灵AI视频提示词
# 项目: ${projectTitle}
# 导出时间: ${timestamp}
# 建议: 每条提示词150字以内，时长4-6秒最佳

`,
      format: (p) => {
        const parts = [];
        if (p.shotSize) parts.push(p.shotSize);
        if (p.cameraMovement && p.cameraMovement !== "静止") parts.push(p.cameraMovement);
        if (p.description) parts.push(p.description.substring(0, 100));
        if (p.startFrame) parts.push(`从${p.startFrame}`);
        if (p.endFrame) parts.push(`到${p.endFrame}`);
        return parts.join("，");
      }
    },
    runway: {
      header: `# Runway Gen-3 视频提示词
# 项目: ${projectTitle}
# 导出时间: ${timestamp}
# 建议: 使用英文效果更好，时长4-16秒

`,
      format: (p) => {
        var _a;
        const parts = [];
        if (p.description) parts.push(p.description);
        if (p.cameraMovement && p.cameraMovement !== "静止") parts.push(`camera: ${p.cameraMovement}`);
        if (p.motionSpeed) parts.push(`speed: ${p.motionSpeed}`);
        if ((_a = p.soundEffects) == null ? void 0 : _a.length) parts.push(`atmosphere: ${p.soundEffects.slice(0, 2).join(", ")}`);
        return parts.join(". ");
      }
    },
    pika: {
      header: `# Pika Labs 视频提示词
# 项目: ${projectTitle}
# 导出时间: ${timestamp}
# 建议: 3秒短视频，动作简洁

`,
      format: (p) => {
        var _a;
        const parts = [];
        if (p.description) parts.push(p.description.substring(0, 80));
        if ((_a = p.characterActions) == null ? void 0 : _a.length) parts.push(p.characterActions[0]);
        return parts.join("，");
      }
    },
    generic: {
      header: `# 通用视频提示词
# 项目: ${projectTitle}
# 导出时间: ${timestamp}

`,
      format: (p) => p.aiVideoPrompt || p.description || ""
    }
  };
  const { header, format } = platformGuide[platform];
  output += header;
  panels.forEach((panel, index) => {
    output += `--- 分镜 ${panel.panelNumber || index + 1} ---
`;
    output += `时长: ${panel.duration || 4}秒
`;
    output += `提示词:
${format(panel)}

`;
  });
  return output;
}
function generateFriendlyFilename(projectTitle, suffix, extension = "txt") {
  const date = /* @__PURE__ */ new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const safeName = projectTitle.replace(/[<>:"/\\|?*]/g, "_").substring(0, 30);
  return `${safeName}_${suffix}_${dateStr}.${extension}`;
}
function exportStoryboardToCSV(panels, projectTitle = "未命名项目") {
  const headers = [
    "分镜号",
    "集数",
    "场景",
    "景别",
    "角度",
    "运镜",
    "时长(秒)",
    "画面描述",
    "对白",
    "角色",
    "道具",
    "音效",
    "音乐",
    "镜头",
    "光圈",
    "景深",
    "起始帧",
    "结束帧",
    "备注",
    "图像提示词",
    "视频提示词"
  ];
  const rows = panels.map((p) => [
    p.panelNumber || "",
    p.episodeNumber || 1,
    p.sceneId || "",
    p.shot || p.shotSize || "",
    p.angle || p.cameraAngle || "",
    p.cameraMovement || "",
    p.duration || 3,
    (p.description || "").replace(/"/g, '""'),
    (p.dialogue || "").replace(/"/g, '""'),
    (p.characters || []).join("、"),
    (p.props || []).join("、"),
    (p.soundEffects || []).join("、"),
    p.music || "",
    p.lens || "",
    p.fStop || "",
    p.depthOfField || "",
    (p.startFrame || "").replace(/"/g, '""'),
    (p.endFrame || "").replace(/"/g, '""'),
    (p.notes || "").replace(/"/g, '""'),
    (p.aiPrompt || "").replace(/"/g, '""'),
    (p.aiVideoPrompt || "").replace(/"/g, '""')
  ]);
  const BOM = "\uFEFF";
  const csvContent = BOM + [
    headers.join(","),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))
  ].join("\n");
  return csvContent;
}
function downloadCSV(content, filename) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
function ScriptEditor() {
  const { chapterId } = useParams();
  const {
    chapter,
    script,
    isExtracting,
    extractProgress,
    lastSaved,
    canUndo,
    canRedo,
    handleAIExtract,
    handleSave,
    handleUpdateScene,
    handleAddScene,
    handleDeleteScene,
    handleAddDialogue,
    handleUpdateDialogue,
    handleDeleteDialogue,
    handleBatchUpdate,
    handleBatchDelete,
    handleUpdateScenes,
    undo,
    redo
  } = useScriptData({ chapterId });
  const stats = useScriptStats({ script });
  const [viewMode, setViewMode] = reactExports.useState("edit");
  const [selectedEpisode, setSelectedEpisode] = reactExports.useState("all");
  const [showStats, setShowStats] = reactExports.useState(true);
  const [batchMode, setBatchMode] = reactExports.useState(false);
  const [selectedScenes, setSelectedScenes] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showBatchPanel, setShowBatchPanel] = reactExports.useState(false);
  const [showCharacterStats, setShowCharacterStats] = reactExports.useState(false);
  const [showReplaceDialog, setShowReplaceDialog] = reactExports.useState(false);
  const [findText, setFindText] = reactExports.useState("");
  const [replaceText, setReplaceText] = reactExports.useState("");
  useKeyboardShortcuts$1({
    onSave: handleSave,
    onUndo: undo,
    onRedo: redo,
    onAddScene: handleAddScene,
    onToggleStats: () => setShowStats((prev) => !prev),
    onToggleBatchMode: () => batchMode ? exitBatchMode() : setBatchMode(true),
    enabled: viewMode === "edit"
  });
  const episodes = reactExports.useMemo(() => getAllEpisodes(script), [script]);
  const filteredScenes = reactExports.useMemo(
    () => getFilteredScenes(script, selectedEpisode),
    [script, selectedEpisode]
  );
  const getEpisodeDuration = reactExports.useCallback((ep) => {
    if (!stats) return "0秒";
    return stats.episodeDurations.get(ep) || "0秒";
  }, [stats]);
  const formatSceneHeading = reactExports.useCallback((scene) => {
    return `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location} - ${scene.timeOfDay}`;
  }, []);
  const toggleSceneSelection = reactExports.useCallback((sceneId) => {
    setSelectedScenes((prev) => {
      const next = new Set(prev);
      if (next.has(sceneId)) {
        next.delete(sceneId);
      } else {
        next.add(sceneId);
      }
      return next;
    });
  }, []);
  const selectAllScenes = reactExports.useCallback(() => {
    setSelectedScenes(new Set(filteredScenes.map((s) => s.id)));
  }, [filteredScenes]);
  const clearSelection = reactExports.useCallback(() => {
    setSelectedScenes(/* @__PURE__ */ new Set());
  }, []);
  const handleBatchUpdateWithSelection = reactExports.useCallback((updates) => {
    handleBatchUpdate(selectedScenes, updates);
  }, [handleBatchUpdate, selectedScenes]);
  const handleBatchDeleteWithSelection = reactExports.useCallback(() => {
    handleBatchDelete(selectedScenes);
    clearSelection();
    setBatchMode(false);
    setShowBatchPanel(false);
  }, [handleBatchDelete, selectedScenes, clearSelection]);
  const exitBatchMode = reactExports.useCallback(() => {
    setBatchMode(false);
    clearSelection();
    setShowBatchPanel(false);
  }, [clearSelection]);
  const handleGlobalReplace = reactExports.useCallback(() => {
    if (!script || !findText.trim()) {
      toast.error("请输入要查找的文本");
      return;
    }
    let replaceCount = 0;
    const updatedScenes = script.scenes.map((scene) => {
      var _a;
      let modified = false;
      const newScene = { ...scene };
      if (scene.characters) {
        newScene.characters = scene.characters.map((char) => {
          if (char === findText) {
            modified = true;
            replaceCount++;
            return replaceText;
          }
          return char;
        });
      }
      newScene.dialogues = scene.dialogues.map((d) => {
        if (d.character === findText) {
          modified = true;
          replaceCount++;
          return { ...d, character: replaceText };
        }
        return d;
      });
      if ((_a = scene.action) == null ? void 0 : _a.includes(findText)) {
        modified = true;
        const count = (scene.action.match(new RegExp(findText, "g")) || []).length;
        replaceCount += count;
        newScene.action = scene.action.split(findText).join(replaceText);
      }
      return modified ? newScene : scene;
    });
    if (replaceCount === 0) {
      toast.warning(`未找到 "${findText}"`);
    } else {
      handleUpdateScenes(updatedScenes);
      toast.success(`已完成全剧替换，共计 ${replaceCount} 处`);
      setShowReplaceDialog(false);
      setFindText("");
      setReplaceText("");
    }
  }, [script, findText, replaceText, handleUpdateScenes]);
  if (!chapter) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: "章节不存在" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    extractProgress.step !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(ExtractProgressIndicator, { progress: extractProgress }),
    script && stats && showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(StatsPanel, { stats, onClose: () => setShowStats(false) }),
    script && showCharacterStats && /* @__PURE__ */ jsxRuntimeExports.jsx(CharacterStats, { script }),
    script && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageCounter, { script }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        !showStats && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setShowStats(true),
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4" }),
              "统计"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: showCharacterStats ? "default" : "outline",
            size: "sm",
            onClick: () => setShowCharacterStats((prev) => !prev),
            className: "gap-2",
            children: "角色统计"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setShowReplaceDialog(true),
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Replace, { className: "w-4 h-4" }),
              "查找替换"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showReplaceDialog, onOpenChange: setShowReplaceDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Replace, { className: "w-5 h-5" }),
        "全局查找替换"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "查找" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: findText,
              onChange: (e) => setFindText(e.target.value),
              placeholder: "输入要查找的角色名或文本"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "替换为" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: replaceText,
              onChange: (e) => setReplaceText(e.target.value),
              placeholder: "输入替换后的内容"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "将在角色名、对白角色、动作描述中进行全局替换" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setShowReplaceDialog(false), children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleGlobalReplace, children: "全部替换" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5" }),
            chapter.title,
            " - 剧本改写"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 text-sm mt-1", children: [
            "专业电影剧本格式",
            lastSaved && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-green-600", children: [
              "(自动保存于 ",
              lastSaved,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: undo,
              disabled: !canUndo,
              title: "撤销",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: redo,
              disabled: !canRedo,
              title: "重做",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Redo2, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: viewMode, onValueChange: (v) => setViewMode(v), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "edit", children: "编辑模式" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "preview", children: "预览模式" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleAIExtract,
              disabled: isExtracting || !chapter.originalText,
              className: "gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                isExtracting ? "AI提取中..." : "AI提取"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, disabled: !script, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "保存"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
              "导出"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownMenuItem,
                {
                  onClick: () => {
                    if (chapter && script) {
                      const markdownContent = exportScriptToMarkdown(chapter, script);
                      downloadText(markdownContent, `${chapter.title}_剧本.md`);
                      toast.success("导出成功");
                    }
                  },
                  children: "导出为 Markdown"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownMenuItem,
                {
                  onClick: () => {
                    if (chapter && script) {
                      const textContent = exportScriptToText(chapter, script);
                      downloadText(textContent, `${chapter.title}_剧本.txt`);
                      toast.success("导出成功");
                    }
                  },
                  children: "导出为纯文本"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: !script ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-16 h-16 text-gray-300 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-4", children: "还没有剧本内容" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: '点击"AI提取"按钮，让AI帮你从原文中提取剧本场景' })
      ] }) : viewMode === "preview" ? (
        // 预览模式
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border rounded-lg p-8 max-w-4xl mx-auto font-mono text-sm leading-relaxed", children: [
          script.scenes.map((scene, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase mb-4", children: formatSceneHeading(scene) }),
            scene.action && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 whitespace-pre-wrap", children: scene.action }),
            scene.dialogues.map((dialogue) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold uppercase mb-1", children: dialogue.character }),
              dialogue.parenthetical && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center italic text-gray-600 mb-1", children: [
                "(",
                dialogue.parenthetical,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto whitespace-pre-wrap", children: dialogue.lines })
            ] }, dialogue.id)),
            scene.transition && index < script.scenes.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right font-bold uppercase mt-4 mb-4", children: [
              scene.transition,
              "："
            ] })
          ] }, scene.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold mt-12", children: "剧终" })
        ] })
      ) : (
        // 编辑模式
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          script.scenes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-gray-50 p-4 rounded-lg border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                EpisodeFilter,
                {
                  episodes,
                  selectedEpisode,
                  onSelect: setSelectedEpisode,
                  getEpisodeDuration
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: batchMode ? "default" : "outline",
                  size: "sm",
                  onClick: () => batchMode ? exitBatchMode() : setBatchMode(true),
                  className: "gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }),
                    batchMode ? "退出批量" : "批量编辑"
                  ]
                }
              ),
              batchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600", children: [
                  "已选择 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-orange-600", children: selectedScenes.size }),
                  " 个场景"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: selectAllScenes,
                    disabled: selectedScenes.size === filteredScenes.length,
                    children: "全选"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: clearSelection,
                    disabled: selectedScenes.size === 0,
                    children: "清空"
                  }
                )
              ] })
            ] }),
            !batchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddScene, className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              "添加场景"
            ] }),
            batchMode && selectedScenes.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setShowBatchPanel(!showBatchPanel),
                children: showBatchPanel ? "隐藏批量面板" : "显示批量面板"
              }
            )
          ] }),
          showBatchPanel && selectedScenes.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            BatchEditPanel,
            {
              selectedCount: selectedScenes.size,
              onUpdate: handleBatchUpdateWithSelection,
              onDelete: handleBatchDeleteWithSelection,
              onClose: () => setShowBatchPanel(false)
            }
          ),
          filteredScenes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500", children: script.scenes.length === 0 ? '暂无场景，点击"添加场景"按钮创建' : "当前集数暂无场景" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredScenes.map((scene) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            SceneCard,
            {
              scene,
              batchMode,
              isSelected: selectedScenes.has(scene.id),
              onToggleSelect: toggleSceneSelection,
              onUpdate: handleUpdateScene,
              onDelete: handleDeleteScene,
              onAddDialogue: handleAddDialogue,
              onUpdateDialogue: handleUpdateDialogue,
              onDeleteDialogue: handleDeleteDialogue
            },
            scene.id
          )) })
        ] })
      ) })
    ] })
  ] });
}
function StoryboardHeader({
  viewMode,
  setViewMode,
  selectedEpisode,
  setSelectedEpisode,
  allEpisodes,
  panelDensityMode,
  setPanelDensityMode,
  estimatedPanelCount,
  isExtracting,
  script,
  storyboard,
  filteredPanelsCount,
  handleAIExtractByEpisode,
  handleBatchRegeneratePrompts,
  handleExportStoryboard,
  handleExportPDF,
  handleExportPrompts,
  handleSave,
  loadVersions,
  setShowHistoryDialog,
  onSyncToAssetLibrary
  // ud83cu ud83cddd5 ud83cud83c
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-7 border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "分镜制作" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mt-1", children: "专业电影分镜设计，支持按集数筛选和AI视频生成" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center flex-wrap justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-gray-300 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: viewMode === "list" ? "default" : "ghost",
            size: "sm",
            onClick: () => setViewMode("list"),
            className: "rounded-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: viewMode === "grid" ? "default" : "ghost",
            size: "sm",
            onClick: () => setViewMode("grid"),
            className: "rounded-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: viewMode === "timeline" ? "default" : "ghost",
            size: "sm",
            onClick: () => setViewMode("timeline"),
            className: "rounded-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" })
          }
        )
      ] }),
      allEpisodes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: selectedEpisode === "all" ? "all" : String(selectedEpisode),
          onValueChange: (value) => {
            setSelectedEpisode(value === "all" ? "all" : parseInt(value));
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择集" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "全部集数" }),
              allEpisodes.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(ep), children: [
                "第",
                ep,
                "集"
              ] }, ep))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: panelDensityMode,
          onValueChange: (value) => setPanelDensityMode(value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "compact", children: "精简" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "standard", children: "标准" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "detailed", children: "详细" })
            ] })
          ]
        }
      ),
      script && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-xs text-gray-700 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap shadow-sm",
          title: "基于当前剧本内容和提取密度预估的分镜总数",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-purple-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              "预估分镜：",
              estimatedPanelCount.min,
              "-",
              estimatedPanelCount.max,
              " 个"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => handleAIExtractByEpisode(selectedEpisode),
          disabled: isExtracting || !script,
          className: "gap-2",
          variant: "secondary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
            isExtracting ? "AI提取中..." : `AI提取${selectedEpisode === "all" ? "全部" : `第${selectedEpisode}集`}`
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleBatchRegeneratePrompts,
          disabled: !storyboard || filteredPanelsCount === 0,
          variant: "outline",
          className: "gap-2",
          title: "根据当前分镜参数重新生成所有提示词",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4" }),
            "刷新提示词"
          ]
        }
      ),
      onSyncToAssetLibrary && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: onSyncToAssetLibrary,
          disabled: !storyboard || filteredPanelsCount === 0,
          variant: "outline",
          className: "gap-2 border-teal-200 text-teal-700 hover:bg-teal-50",
          title: "从分镜提取新角色/场景到项目库",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            "同步到项目库"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => handleExportStoryboard("text"),
          disabled: !storyboard,
          variant: "outline",
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            "导出"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleExportPDF,
          disabled: !storyboard,
          variant: "outline",
          className: "gap-2",
          title: "打印或导出为 PDF",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-4 h-4" }),
            "PDF"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          onValueChange: (value) => handleExportPrompts(value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[140px]", disabled: !storyboard, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-4 h-4 mr-2" }),
              "导出提示词"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "generic", children: "通用格式" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "midjourney", children: "Midjourney" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "comfyui", children: "ComfyUI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "runway", children: "Runway" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pika", children: "Pika" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, disabled: !storyboard, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
        "保存"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => {
            loadVersions();
            setShowHistoryDialog(true);
          },
          disabled: !storyboard,
          variant: "outline",
          className: "gap-2",
          title: "版本历史",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4" }),
            "版本"
          ]
        }
      )
    ] })
  ] });
}
const DndContext = reactExports.createContext({
  dragDropManager: void 0
});
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && true;
}
var fastDeepEqual;
var hasRequiredFastDeepEqual;
function requireFastDeepEqual() {
  if (hasRequiredFastDeepEqual) return fastDeepEqual;
  hasRequiredFastDeepEqual = 1;
  fastDeepEqual = function equal2(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; )
          if (!equal2(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        var key = keys[i];
        if (!equal2(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  };
  return fastDeepEqual;
}
var fastDeepEqualExports = requireFastDeepEqual();
const equal = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqualExports);
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = reactExports.useState(
    () => collect(monitor)
  );
  const updateCollected = reactExports.useCallback(() => {
    const nextValue = collect(monitor);
    if (!equal(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...[]
  ];
  if (typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return reactExports.useMemo(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useConnectDragSource(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!reactExports.isValidElement(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      return node;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node) => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return reactExports.cloneElement(element, {
      ref: newRef
    });
  } else {
    return reactExports.cloneElement(element, {
      ref: (node) => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useDragDropManager() {
  const { dragDropManager } = reactExports.useContext(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = reactExports.useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  reactExports.useEffect(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return reactExports.useMemo(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
function useConnectDropTarget(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return reactExports.useMemo(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}
function useDropTarget(spec, monitor) {
  const dropTarget = reactExports.useMemo(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  reactExports.useEffect(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const QUICK_PRESETS = [
  {
    name: "建立镜头",
    icon: Camera,
    description: "新场景开场，展示环境",
    params: { shot: "远景", shotSize: "WS", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", movementType: "STATIC", duration: 5, shotIntent: "建立空间关系" }
  },
  {
    name: "对话正打",
    icon: MessageSquare,
    description: "对话场景 A 角度",
    params: { shot: "近景", shotSize: "MCU", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", movementType: "STATIC", duration: 3, composition: "三分法人物居右" }
  },
  {
    name: "对话反打",
    icon: MessageSquare,
    description: "对话场景 B 角度",
    params: { shot: "近景", shotSize: "MCU", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", movementType: "STATIC", duration: 3, composition: "三分法人物居左", setupShot: "B角" }
  },
  {
    name: "过肩镜头",
    icon: Film,
    description: "双人对话过肩视角",
    params: { shot: "中景", shotSize: "OTS", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", movementType: "STATIC", duration: 4, shotIntent: "过肩双人视角" }
  },
  {
    name: "特写反应",
    icon: Maximize2,
    description: "强调角色情绪反应",
    params: { shot: "特写", shotSize: "CU", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", movementType: "STATIC", duration: 2, shotIntent: "捕捉情绪反应", focusPoint: "眼部" }
  },
  {
    name: "推进镜头",
    icon: Camera,
    description: "渐进式接近主体",
    params: { shot: "中景", shotSize: "MS", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "推", movementType: "DOLLY_IN", duration: 4, shotIntent: "增加紧张感" }
  },
  {
    name: "跟随镜头",
    icon: Film,
    description: "跟随角色移动",
    params: { shot: "中景", shotSize: "MS", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "跟", movementType: "FOLLOW", duration: 4, shotIntent: "保持动态感" }
  },
  {
    name: "低角仰视",
    icon: Camera,
    description: "突出角色力量感",
    params: { shot: "全景", shotSize: "MWS", angle: "仰视", cameraAngle: "LOW", cameraMovement: "静止", movementType: "STATIC", duration: 3, shotIntent: "展现权威/力量" }
  }
];
const SCENE_TEMPLATES = [
  {
    name: "双人对话场景",
    category: "对话",
    description: "标准对话场景：建立镜头 → 正打 → 反打 → 反应",
    panels: [
      { description: "双人中景，交代场景关系", shot: "中景", shotSize: "MS", angle: "平视", cameraAngle: "EYE_LEVEL", cameraMovement: "静止", duration: 3, shotIntent: "建立对话空间" },
      { description: "A角色近景，正在说话", shot: "近景", shotSize: "MCU", angle: "平视", cameraMovement: "静止", duration: 3, composition: "三分法人物居右" },
      { description: "B角色近景，聆听/回应", shot: "近景", shotSize: "MCU", angle: "平视", cameraMovement: "静止", duration: 3, composition: "三分法人物居左", setupShot: "B角" },
      { description: "反应特写，情绪变化", shot: "特写", shotSize: "CU", angle: "平视", cameraMovement: "静止", duration: 2, shotIntent: "捕捉情绪反应" }
    ]
  },
  {
    name: "追逐场景",
    category: "追逐",
    description: "追逐场景：远景建立 → 跟拍追逐者 → 跟拍逃跑者 → 推进紧张",
    panels: [
      { description: "远景，展示追逐发生的环境", shot: "远景", shotSize: "EWS", angle: "俯视", cameraAngle: "HIGH", cameraMovement: "摇", duration: 4, shotIntent: "建立追逐空间", soundEffects: ["急促脚步声", "风声"] },
      { description: "跟拍追逐者，动态冲击", shot: "中景", shotSize: "MS", angle: "平视", cameraMovement: "跟", movementType: "FOLLOW", duration: 3, motionSpeed: "fast", soundEffects: ["喘息声"] },
      { description: "跟拍逃跑者，惊恐表情", shot: "近景", shotSize: "MCU", angle: "平视", cameraMovement: "跟", movementType: "FOLLOW", duration: 3, motionSpeed: "fast" },
      { description: "推镜头，距离逼近", shot: "中景", shotSize: "MS", angle: "平视", cameraMovement: "推", movementType: "DOLLY_IN", duration: 2, shotIntent: "增加紧张感", music: "紧张鼓点BGM" }
    ]
  },
  {
    name: "战斗场景",
    category: "战斗",
    description: "战斗场景：对峙 → 特写蓄力 → 交锋 → 结果",
    panels: [
      { description: "双方对峙，紧张氛围", shot: "远景", shotSize: "WS", angle: "平视", cameraMovement: "静止", duration: 3, shotIntent: "建立对峙关系", soundEffects: ["风声", "衣袂飘动"], music: "悬疑弦乐" },
      { description: "特写，一方蓄力准备", shot: "特写", shotSize: "CU", angle: "仰视", cameraAngle: "LOW", cameraMovement: "推", duration: 2, shotIntent: "蓄力紧张", soundEffects: ["聚气声"] },
      { description: "快速交锋，动作模糊", shot: "中景", shotSize: "MS", angle: "平视", cameraMovement: "摇", movementType: "WHIP", duration: 1, motionSpeed: "fast", soundEffects: ["刀剑交击", "拳风呼啸"] },
      { description: "结果镜头，分出胜负", shot: "远景", shotSize: "WS", angle: "平视", cameraMovement: "静止", duration: 3, transition: "闪白", soundEffects: ["落地声"] }
    ]
  },
  {
    name: "场景过渡",
    category: "转场",
    description: "场景过渡：结束镜头 → 淡出 → 新场景建立",
    panels: [
      { description: "当前场景最后一个画面", shot: "远景", shotSize: "WS", angle: "平视", cameraMovement: "拉", movementType: "DOLLY_OUT", duration: 3, transition: "淡出", shotIntent: "告别当前场景" },
      { description: "新场景建立镜头，展示环境", shot: "远景", shotSize: "EWS", angle: "平视", cameraMovement: "静止", duration: 4, transition: "淡入", shotIntent: "开启新篇章" }
    ]
  }
];
function DraggablePanelCard({ panelId, index, movePanel, children }) {
  const ref = reactExports.useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "panel",
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    hover(item, monitor) {
      var _a;
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      movePanel(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: "panel",
    item: () => ({ id: panelId, index }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  });
  const opacity = isDragging ? 0.5 : 1;
  preview(drop(ref));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: { opacity }, "data-handler-id": handlerId, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: drag, className: "cursor-move pt-6 flex-shrink-0", title: "拖动调整顺序", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "w-5 h-5 text-gray-400 hover:text-gray-600" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children })
  ] }) });
}
const ShotCard = reactExports.memo(function ShotCardInner({
  panel,
  isSelected,
  status = "idle",
  onSelect,
  onUpdate,
  onDelete,
  onGenerateImage,
  onCopy,
  onSplit,
  onGeneratePrompts,
  onApplyPreset,
  onCopyPrompt,
  viewMode = "list",
  prevPanel,
  // 🆕 上一个分镜（用于连贯性检查）
  nextPanel
  // 🆕 下一个分镜（用于连贯性检查）
}) {
  var _a, _b, _c;
  const isGrid = viewMode === "grid";
  const continuityWarnings = [];
  if (prevPanel && nextPanel && prevPanel.shot === panel.shot && panel.shot === nextPanel.shot) {
    continuityWarnings.push("连续3镜相同景别");
  }
  if (prevPanel && prevPanel.setupShot === panel.setupShot && panel.setupShot) {
    continuityWarnings.push("连续同机位");
  }
  if (panel.dialogue && ((_a = panel.characters) == null ? void 0 : _a.length) >= 2 && !panel.axisNote) {
    continuityWarnings.push("对话场景需标注轴线");
  }
  const statusStyles = {
    idle: { label: "", color: "" },
    pending: { label: "排队中", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: RefreshCw },
    processing: { label: "生成中", color: "bg-blue-100 text-blue-700 border-blue-200", icon: RefreshCw },
    completed: { label: "已完成", color: "bg-green-100 text-green-700 border-green-200" },
    failed: { label: "失败", color: "bg-red-100 text-red-700 border-red-200" },
    cancelled: { label: "已取消", color: "bg-gray-100 text-gray-700 border-gray-200" }
  };
  const currentStatus = statusStyles[status] || statusStyles["idle"];
  if (isGrid) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `group relative rounded-lg overflow-hidden cursor-pointer transition-all ${isSelected ? "ring-2 ring-blue-500" : "ring-1 ring-gray-200 hover:ring-blue-300"}`,
        onClick: onSelect,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-gray-100 relative", children: [
            panel.generatedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: panel.generatedImage, alt: `分镜 ${panel.panelNumber}`, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-gray-400 text-sm", children: "暂无预览" }),
            status !== "idle" && currentStatus.label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs font-medium ${currentStatus.color}`, children: currentStatus.label }),
            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-3 h-3 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: (e) => {
                e.stopPropagation();
                onGenerateImage();
              }, className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
                "生成"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: (e) => {
                e.stopPropagation();
                onDelete();
              }, className: "text-xs text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-gray-700", children: [
                "#",
                panel.panelNumber
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: panel.shot })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 truncate mt-0.5", children: panel.description || "无描述" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-xs text-gray-400", children: [
              panel.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                panel.duration,
                "s"
              ] }),
              ((_b = panel.characters) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                panel.characters.length,
                "角色"
              ] })
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group relative border-2 rounded-xl transition-all ${isSelected ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20" : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: isSelected, onCheckedChange: onSelect, className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-gray-700", children: [
          "#",
          panel.panelNumber
        ] }),
        status !== "idle" && currentStatus && currentStatus.label && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded-full text-xs font-medium border ${currentStatus.color} flex items-center gap-1`, children: [
          currentStatus.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(currentStatus.icon, { className: `w-3 h-3 ${status === "processing" ? "animate-spin" : ""}` }),
          currentStatus.label
        ] }),
        panel.characters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-sm", children: [
          panel.characters.length,
          " 角色"
        ] }),
        continuityWarnings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 cursor-help", title: continuityWarnings.join("；"), children: [
          "⚠️ ",
          continuityWarnings.length,
          "个警告"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: (e) => {
          e.stopPropagation();
          onGenerateImage();
        }, disabled: status === "processing", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          panel.generatedImage ? "重新生成图片" : "生成预览图"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: onGeneratePrompts, className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4" }),
          "刷新提示词"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: onCopy, className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
          "复制分镜"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
            "拆分"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => onSplit(2), children: "拆分为 2 个" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => onSplit(3), children: "拆分为 3 个" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
            "应用预设"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { className: "w-56", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { children: "专业预设" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
            QUICK_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => onApplyPreset(p.params), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-4 h-4 mr-2 text-blue-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: p.description })
              ] })
            ] }, p.name))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: onDelete, className: "gap-1 text-red-600 border-red-200 hover:bg-red-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
          "删除"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex ${isGrid ? "flex-col" : "flex-row"} gap-4 p-4`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isGrid ? "w-full aspect-video" : "w-80 h-52"} relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0`, children: panel.generatedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: panel.generatedImage, alt: `分镜 ${panel.panelNumber}`, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center text-gray-400", children: [
        status === "processing" ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-12 h-12 animate-spin text-blue-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-12 h-12 opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm mt-2", children: status === "processing" ? "生成中..." : "点击上方按钮生成预览图" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-gray-700 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
              "画面描述"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.description, onChange: (e) => onUpdate({ description: e.target.value }), className: "min-h-[80px] text-sm", placeholder: "描述画面内容..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-blue-600 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4" }),
              "角色对白"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.dialogue || "", onChange: (e) => onUpdate({ dialogue: e.target.value }), className: "min-h-[80px] text-sm italic bg-blue-50/50", placeholder: "输入角色台词..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-6 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "景别" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.shot, onValueChange: (val) => onUpdate({ shot: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "全景", children: "全景 (WS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "中景", children: "中景 (MS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "特写", children: "特写 (CU)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "大特写", children: "大特写 (ECU)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "远景", children: "远景 (EWS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "近景", children: "近景 (MCU)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "过肩", children: "过肩 (OTS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "主观", children: "主观 (POV)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "角度" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.angle, onValueChange: (val) => onUpdate({ angle: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "平视", children: "平视" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "俯视", children: "俯视" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "仰视", children: "仰视" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "鸟瞰", children: "鸟瞰" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "蚁视", children: "蚁视" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "倾斜", children: "倾斜" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "运动" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.cameraMovement || "静止", onValueChange: (val) => onUpdate({ cameraMovement: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "静止", children: "静止" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "推", children: "推" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "拉", children: "拉" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "跟", children: "跟" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "摇", children: "摇" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "移", children: "移" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "时长" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: String(panel.duration || 3), onValueChange: (val) => onUpdate({ duration: parseInt(val) }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "h-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                panel.duration || 3,
                "秒"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [1, 2, 3, 4, 5, 8, 10, 15].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(s), children: [
                s,
                "秒"
              ] }, s)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "转场" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.transition || "切至", onValueChange: (val) => onUpdate({ transition: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "切至", children: "切至" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "溶至", children: "溶至" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "淡出", children: "淡出" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "闪白", children: "闪白" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "速度" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.motionSpeed || "normal", onValueChange: (val) => onUpdate({ motionSpeed: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "slow", children: "慢速" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "normal", children: "正常" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "fast", children: "快速" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "timelapse", children: "延时" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-orange-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3 h-3" }),
              "音效"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: (panel.soundEffects || []).join(", "), onChange: (e) => onUpdate({ soundEffects: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }), className: "h-9", placeholder: "脚步声, 风声..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-purple-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-3 h-3" }),
              "背景音乐"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.music || "", onChange: (e) => onUpdate({ music: e.target.value }), className: "h-9", placeholder: "紧张氛围音乐..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500 mb-1", children: "备注" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.notes || "", onChange: (e) => onUpdate({ notes: e.target.value }), className: "h-9", placeholder: "拍摄备注..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-teal-600 mb-1", children: "环境动态" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.environmentMotion || "", onChange: (e) => onUpdate({ environmentMotion: e.target.value }), className: "h-9", placeholder: "风吹树叶, 雨滴..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-teal-600 mb-1", children: "角色动作" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: (panel.characterActions || []).join(", "), onChange: (e) => onUpdate({ characterActions: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }), className: "h-9", placeholder: "张三:转身, 李四:挥手..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-amber-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
              "镜头意图"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.shotIntent || "", onChange: (e) => onUpdate({ shotIntent: e.target.value }), className: "h-9", placeholder: "展现孤独感..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-amber-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
              "构图"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.composition || "", onChange: (e) => onUpdate({ composition: e.target.value }), className: "h-9", placeholder: "三分法, 对称, 引导线..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-amber-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-3 h-3" }),
              "灯光氛围"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: ((_c = panel.lighting) == null ? void 0 : _c.mood) || "", onChange: (e) => onUpdate({ lighting: { ...panel.lighting, mood: e.target.value } }), className: "h-9", placeholder: "低调, 高调, 自然光..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-cyan-600 mb-1", children: "镜头" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.lens || "", onChange: (e) => onUpdate({ lens: e.target.value }), className: "h-9", placeholder: "35mm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-cyan-600 mb-1", children: "光圈" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.fStop || "", onChange: (e) => onUpdate({ fStop: e.target.value }), className: "h-9", placeholder: "f/4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-cyan-600 mb-1", children: "景深" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.depthOfField || "NORMAL", onValueChange: (val) => onUpdate({ depthOfField: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "SHALLOW", children: "浅景深" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "NORMAL", children: "正常" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DEEP", children: "深景深" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-pink-600 mb-1", children: "调色" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.colorGrade || "", onChange: (e) => onUpdate({ colorGrade: e.target.value }), className: "h-9", placeholder: "冷调蓝绿..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-lime-600 mb-1", children: "道具" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: (panel.props || []).join(", "), onChange: (e) => onUpdate({ props: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }), className: "h-9", placeholder: "剑, 书, 杯..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-rose-600 mb-1", children: "视觉特效" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: (panel.vfx || []).join(", "), onChange: (e) => onUpdate({ vfx: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }), className: "h-9", placeholder: "火焰, 魔法..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-sky-600 mb-1", children: "机位" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: panel.setupShot || "A机位", onValueChange: (val) => onUpdate({ setupShot: val }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A机位", children: "A机位" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "B机位", children: "B机位" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "C机位", children: "C机位" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-sky-600 mb-1", children: "轴线" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.axisNote || "", onChange: (e) => onUpdate({ axisNote: e.target.value }), className: "h-9", placeholder: "保持180°轴线" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-emerald-600 mb-1", children: "环境动态" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: panel.environmentMotion || "", onChange: (e) => onUpdate({ environmentMotion: e.target.value }), className: "h-9", placeholder: "风吹树叶, 雨水滴落..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-orange-600 mb-1", children: "角色动作" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: (panel.characterActions || []).join(", "), onChange: (e) => onUpdate({ characterActions: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }), className: "h-9", placeholder: "李明:转身, 张三:点头..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-indigo-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-3 h-3" }),
              "起始帧描述"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.startFrame || "", onChange: (e) => onUpdate({ startFrame: e.target.value }), className: "min-h-[60px] text-sm", placeholder: "视频起始画面详细描述..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-indigo-600 mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-3 h-3" }),
              "结束帧描述"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.endFrame || "", onChange: (e) => onUpdate({ endFrame: e.target.value }), className: "min-h-[60px] text-sm", placeholder: "视频结束画面详细描述..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-3 border-t border-dashed border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-indigo-600 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
                "绘画提示词 (Image Prompt)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => onCopyPrompt(panel.aiPrompt || "", "image"), className: "h-7 text-xs gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                "复制提示词"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.aiPrompt || "", onChange: (e) => onUpdate({ aiPrompt: e.target.value }), className: "min-h-[100px] text-sm font-mono bg-indigo-50/50", placeholder: "AI 绘图提示词..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-purple-600 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4" }),
                "视频提示词 (Video Prompt)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => onCopyPrompt(panel.aiVideoPrompt || "", "video"), className: "h-7 text-xs gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                "复制提示词"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: panel.aiVideoPrompt || "", onChange: (e) => onUpdate({ aiVideoPrompt: e.target.value }), className: "min-h-[100px] text-sm font-mono bg-purple-50/50", placeholder: "AI 视频提示词..." })
          ] })
        ] })
      ] })
    ] })
  ] });
});
ShotCard.displayName = "ShotCard";
const ShotCardDraggable = reactExports.memo(function ShotCardDraggableInner(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DraggablePanelCard, { panelId: props.panel.id, index: props.index || 0, movePanel: props.movePanel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShotCard, { ...props }) });
});
ShotCardDraggable.displayName = "ShotCardDraggable";
function BatchActionBar({
  filteredPanelsCount,
  totalDuration,
  selectedPanelsSize,
  selectedEpisode,
  handleSelectAll,
  handleBatchDelete,
  handleBatchApplyParams,
  handleGenerateAllImages,
  handleAddPanel,
  handleApplyTemplate,
  handleRefreshAllPrompts,
  onPreview,
  isGeneratingAll,
  batchProgress,
  filteredPanelIds,
  // 🆕
  onCancelGeneration,
  // 🆕
  onRetryFailed,
  // 🆕
  failedCount = 0
  // 🆕
}) {
  if (filteredPanelsCount === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "分镜总数" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl", children: filteredPanelsCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "总时长" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl", children: [
          Math.floor(totalDuration / 60),
          "分",
          totalDuration % 60,
          "秒"
        ] })
      ] }),
      selectedPanelsSize > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "已选择" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-blue-600", children: selectedPanelsSize })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      selectedEpisode !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-600", children: [
        "正在查看第",
        selectedEpisode,
        "集"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleAddPanel,
          variant: "outline",
          size: "sm",
          className: "gap-2 bg-green-50 border-green-300 text-green-700 hover:bg-green-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "新增分镜"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          onValueChange: (value) => {
            const template = SCENE_TEMPLATES.find((t) => t.name === value);
            if (template) {
              handleApplyTemplate(template.panels);
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[140px] h-9 bg-purple-50 border-purple-300 text-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "应用模板" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SCENE_TEMPLATES.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: template.name, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: template.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
                template.panels.length,
                "个分镜"
              ] })
            ] }) }, template.name)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleRefreshAllPrompts,
          variant: "outline",
          size: "sm",
          className: "gap-2 bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
            "刷新全部提示词"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: onPreview,
          variant: "outline",
          size: "sm",
          className: "gap-2 bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
            "预览播放"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleSelectAll,
          variant: "outline",
          size: "sm",
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
            selectedPanelsSize === filteredPanelsCount ? "取消全选" : "全选"
          ]
        }
      ),
      selectedPanelsSize > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleBatchDelete,
            variant: "outline",
            size: "sm",
            className: "gap-2 text-red-600 border-red-300 hover:bg-red-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              "批量删除"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            onValueChange: (value) => {
              const preset = QUICK_PRESETS.find((p) => p.name === value);
              if (preset) {
                handleBatchApplyParams(preset.params);
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[150px] h-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "批量应用" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: QUICK_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: preset.name, children: preset.name }, preset.name)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => {
            const ids = new Set(filteredPanelIds);
            handleGenerateAllImages(ids);
          },
          disabled: isGeneratingAll,
          variant: "default",
          className: "gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 font-medium",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4" }),
            isGeneratingAll && batchProgress ? `生成中 ${batchProgress.current}/${batchProgress.total}` : "一键生成全部预览图"
          ]
        }
      ),
      batchProgress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300",
            style: { width: `${batchProgress.current / batchProgress.total * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          Math.round(batchProgress.current / batchProgress.total * 100),
          "%"
        ] })
      ] }),
      isGeneratingAll && onCancelGeneration && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: onCancelGeneration,
          variant: "outline",
          size: "sm",
          className: "gap-2 text-red-600 border-red-300 hover:bg-red-50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
            "取消生成"
          ]
        }
      ),
      !isGeneratingAll && failedCount > 0 && onRetryFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: onRetryFailed,
          variant: "outline",
          size: "sm",
          className: "gap-2 text-orange-600 border-orange-300 hover:bg-orange-50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
            "重试失败 (",
            failedCount,
            ")"
          ]
        }
      )
    ] })
  ] }) });
}
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext] = createContextScope(SLIDER_NAME, [
  createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = reactExports.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = reactExports.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        var _a;
        const thumbs = [...thumbRefs.current];
        (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = reactExports.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
      const nextValue = clamp(snapToStep, [min, max]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min,
            max,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = reactExports.useRef(void 0);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min, max] : [max, min];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = reactExports.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = reactExports.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max, min] : [min, max];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME$1 = "SliderThumb";
var SliderThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index = reactExports.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderThumbImpl, { ...props, ref: composedRefs, index });
  }
);
var SliderThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME$1, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME$1, __scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = useSize(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size == null ? void 0 : size[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    reactExports.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index;
              })
            }
          ) }),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            BubbleInput$1,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME$1;
var BubbleInput$1 = (props) => {
  const { value, ...inputProps } = props;
  const ref = reactExports.useRef(null);
  const prevValue = usePrevious(value);
  reactExports.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", { bubbles: true });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { style: { display: "none" }, ...inputProps, ref, defaultValue: value });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}
function getLabel(index, totalValues) {
  if (totalValues > 2) {
    return `Value ${index + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root$2 = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb$1 = SliderThumb;
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = reactExports.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root$2,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Thumb$1,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}
const TimelineView = ({
  panels,
  selectedPanels,
  onToggleSelect,
  onUpdateDuration,
  renderListView
}) => {
  const [zoomLevel, setZoomLevel] = reactExports.useState(100);
  const [hoveredPanel, setHoveredPanel] = reactExports.useState(null);
  const [tooltipPos, setTooltipPos] = reactExports.useState({ x: 0, y: 0 });
  const totalDuration = panels.reduce((sum, p) => sum + (p.duration || 0), 0);
  const sceneGroups = reactExports.useMemo(() => {
    const groups = [];
    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100", "bg-orange-100"];
    let currentGroup = null;
    panels.forEach((panel) => {
      const sceneId = panel.sceneId || "unknown";
      if (!currentGroup || currentGroup.sceneId !== sceneId) {
        currentGroup = { sceneId, color: colors[groups.length % colors.length], panels: [] };
        groups.push(currentGroup);
      }
      currentGroup.panels.push(panel);
    });
    return groups;
  }, [panels]);
  const getCumulativeTime = (index) => {
    let time = 0;
    for (let i = 0; i < index; i++) {
      time += panels[i].duration || 0;
    }
    return time;
  };
  const formatTimecode = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const timeMarkers = reactExports.useMemo(() => {
    const markers = [];
    for (let t = 0; t <= totalDuration; t += 5) {
      markers.push(t);
    }
    return markers;
  }, [totalDuration]);
  const handleMouseEnter = (panel, e) => {
    setHoveredPanel(panel);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 10 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-gray-50 rounded-lg p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
          "时间轴视图"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          "总时长: ",
          formatTimecode(totalDuration)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500", children: [
          panels.length,
          " 个分镜"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setZoomLevel(Math.max(50, zoomLevel - 25)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            value: [zoomLevel],
            onValueChange: ([v]) => setZoomLevel(v),
            min: 50,
            max: 200,
            step: 25
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 w-10", children: [
          zoomLevel,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setZoomLevel(Math.min(200, zoomLevel + 25)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-4 h-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-gray-200 p-4 overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-6 mb-1", style: { width: `${zoomLevel}%`, minWidth: "100%" }, children: timeMarkers.map((t) => {
        const leftPercent = t / (totalDuration || 1) * 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute text-xs text-gray-400",
            style: { left: `${leftPercent}%`, transform: "translateX(-50%)" },
            children: formatTimecode(t)
          },
          t
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative h-20 bg-gray-50 rounded border border-gray-200",
          style: { width: `${zoomLevel}%`, minWidth: "100%" },
          children: [
            timeMarkers.map((t) => {
              const leftPercent = t / (totalDuration || 1) * 100;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 bottom-0 border-l border-gray-300 border-dashed",
                  style: { left: `${leftPercent}%` }
                },
                `line-${t}`
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex", children: panels.map((panel, index) => {
              const widthPercent = (panel.duration || 3) / (totalDuration || 1) * 100;
              const isSelected = selectedPanels.has(panel.id);
              const sceneGroup = sceneGroups.find((g) => g.panels.includes(panel));
              const bgColor = (sceneGroup == null ? void 0 : sceneGroup.color) || "bg-gray-100";
              const cumulativeTime = getCumulativeTime(index);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `relative border-r border-gray-400 flex flex-col items-center justify-center cursor-pointer transition-all hover:brightness-95 ${bgColor} ${isSelected ? "ring-2 ring-blue-500 ring-inset" : ""}`,
                  style: { width: `${widthPercent}%`, minWidth: "50px" },
                  onClick: () => onToggleSelect(panel.id),
                  onMouseEnter: (e) => handleMouseEnter(panel, e),
                  onMouseLeave: () => setHoveredPanel(null),
                  children: [
                    panel.generatedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-1 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: panel.generatedImage, alt: "", className: "w-full h-full object-cover rounded" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-gray-800", children: [
                        "#",
                        panel.panelNumber
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600", children: [
                        panel.duration,
                        "s"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400", children: formatTimecode(cumulativeTime) })
                    ] })
                  ]
                },
                panel.id
              );
            }) })
          ]
        }
      ),
      sceneGroups.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-3 text-xs text-gray-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "场景:" }),
        sceneGroups.map((group, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded ${group.color}`, children: [
          idx + 1,
          ". ",
          group.sceneId === "unknown" ? "未分组" : group.sceneId,
          " (",
          group.panels.length,
          ")"
        ] }, group.sceneId))
      ] })
    ] }),
    hoveredPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed z-50 bg-white shadow-xl rounded-lg p-3 border border-gray-200 pointer-events-none",
        style: {
          left: tooltipPos.x,
          top: tooltipPos.y,
          transform: "translate(-50%, -100%)"
        },
        children: [
          hoveredPanel.generatedImage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: hoveredPanel.generatedImage,
              alt: `分镜 ${hoveredPanel.panelNumber}`,
              className: "w-40 h-24 object-cover rounded mb-2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
            "#",
            hoveredPanel.panelNumber,
            " - ",
            hoveredPanel.shot
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 mt-1 max-w-[160px] truncate", children: hoveredPanel.description }),
          hoveredPanel.dialogue && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-400 italic mt-1 max-w-[160px] truncate", children: [
            '"',
            hoveredPanel.dialogue,
            '"'
          ] })
        ]
      }
    ),
    renderListView()
  ] });
};
const VersionHistoryDialog = ({
  open,
  onOpenChange,
  versions,
  onRestore,
  onDelete,
  onSave,
  onLoadVersions
}) => {
  const [versionName, setVersionName] = reactExports.useState("");
  const [showNameInput, setShowNameInput] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open && onLoadVersions) {
      setIsLoading(true);
      requestAnimationFrame(() => {
        onLoadVersions().finally(() => setIsLoading(false));
      });
    }
  }, [open, onLoadVersions]);
  const formatTime = (v) => {
    if (v.createdAt) {
      return new Date(v.createdAt).toLocaleString("zh-CN");
    }
    if (v.timestamp) {
      return new Date(v.timestamp).toLocaleString("zh-CN");
    }
    return "未知时间";
  };
  const getPanelCount = (v) => {
    var _a;
    if (v.panelCount !== void 0) return v.panelCount;
    if ((_a = v.data) == null ? void 0 : _a.panels) return v.data.panels.length;
    return 0;
  };
  const handleSave = () => {
    if (onSave) {
      onSave(versionName || void 0);
      setVersionName("");
      setShowNameInput(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-5 h-5 text-blue-500" }),
        "版本历史管理"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "保存当前版本或恢复到之前的历史版本。注意：恢复操作会替换当前内容。" })
    ] }),
    onSave && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-blue-800", children: "保存当前版本" }),
      showNameInput ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: versionName,
            onChange: (e) => setVersionName(e.target.value),
            placeholder: "输入版本名称（可选）",
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, size: "sm", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          "保存"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setShowNameInput(false), children: "取消" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowNameInput(true), variant: "outline", className: "gap-1 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        "创建新版本"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 max-h-[400px] overflow-y-auto pr-2", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-gray-500 flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-blue-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "加载版本中..." })
    ] }) : versions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "暂无历史版本记录" }) : versions.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-50 rounded-full text-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-gray-900", children: v.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-400 mt-1", children: [
                formatTime(v),
                " • ",
                getPanelCount(v),
                " 个分镜"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1",
                onClick: () => onRestore(v.id),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
                  "恢复"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50",
                onClick: () => onDelete(v.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      },
      v.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "关闭" }) })
  ] }) });
};
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root$1 = Progress$1;
var Indicator = ProgressIndicator;
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root$1,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
const PreviewDialog = ({
  open,
  onOpenChange,
  panels
}) => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [elapsed, setElapsed] = reactExports.useState(0);
  const currentPanel = panels[currentIndex];
  const currentDuration = ((currentPanel == null ? void 0 : currentPanel.duration) || 3) * 1e3;
  reactExports.useEffect(() => {
    if (!isPlaying || !open) return;
    const interval = setInterval(() => {
      setElapsed((prev) => {
        const newElapsed = prev + 100;
        if (newElapsed >= currentDuration) {
          if (currentIndex < panels.length - 1) {
            setCurrentIndex((i) => i + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return prev;
          }
        }
        return newElapsed;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, open, currentDuration, currentIndex, panels.length]);
  reactExports.useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setElapsed(0);
      setIsPlaying(false);
    }
  }, [open]);
  const handlePrev = reactExports.useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setElapsed(0);
    }
  }, [currentIndex]);
  const handleNext = reactExports.useCallback(() => {
    if (currentIndex < panels.length - 1) {
      setCurrentIndex((i) => i + 1);
      setElapsed(0);
    }
  }, [currentIndex, panels.length]);
  const togglePlay = reactExports.useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);
  if (!currentPanel) return null;
  const progress = elapsed / currentDuration * 100;
  const totalDuration = panels.reduce((acc, p) => acc + (p.duration || 3), 0);
  const playedDuration = panels.slice(0, currentIndex).reduce((acc, p) => acc + (p.duration || 3), 0) + elapsed / 1e3;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl p-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "p-4 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "分镜预览播放" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 font-normal", children: [
        currentIndex + 1,
        " / ",
        panels.length
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-video bg-black", children: [
      currentPanel.generatedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: currentPanel.generatedImage,
          alt: `分镜 ${currentPanel.panelNumber}`,
          className: "w-full h-full object-contain"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-6xl mb-4", children: [
          "#",
          currentPanel.panelNumber
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg max-w-lg px-4", children: currentPanel.description })
      ] }) }),
      currentPanel.dialogue && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-16 left-0 right-0 px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/70 text-white text-center py-3 px-6 rounded-lg text-lg backdrop-blur-sm", children: currentPanel.dialogue }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm backdrop-blur-sm", children: [
        "#",
        currentPanel.panelNumber,
        " · ",
        currentPanel.shot,
        " · ",
        currentPanel.duration,
        "秒"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress, className: "h-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          Math.floor(playedDuration),
          "秒"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          totalDuration,
          "秒"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 p-4 pt-2 border-t", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: handlePrev,
          disabled: currentIndex === 0,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "default",
          size: "lg",
          onClick: togglePlay,
          className: "gap-2",
          children: [
            isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5" }),
            isPlaying ? "暂停" : "播放"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: handleNext,
          disabled: currentIndex === panels.length - 1,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "w-4 h-4" })
        }
      )
    ] })
  ] }) });
};
const StoryboardPrintTemplate = ({
  panels,
  project,
  title,
  showPrompts = false,
  layoutMode = "card"
}) => {
  const exportDate = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
  const displayTitle = title || (project == null ? void 0 : project.title) || "分镜表";
  const groupedPanels = reactExports.useMemo(() => {
    const groups = [];
    let currentGroup = null;
    panels.forEach((panel) => {
      const sceneId = panel.sceneId || "unknown";
      const sceneName = panel.sceneId || "未分组场景";
      if (!currentGroup || currentGroup.sceneId !== sceneId) {
        currentGroup = { sceneId, sceneName, panels: [] };
        groups.push(currentGroup);
      }
      currentGroup.panels.push(panel);
    });
    return groups;
  }, [panels]);
  const stats = reactExports.useMemo(() => {
    const totalDuration = panels.reduce((sum, p) => sum + (p.duration || 0), 0);
    const withImage = panels.filter((p) => p.generatedImage).length;
    const withDialogue = panels.filter((p) => p.dialogue).length;
    return { totalDuration, withImage, withDialogue, total: panels.length };
  }, [panels]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-template hidden print:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-title", children: displayTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-subtitle", children: [
        "共 ",
        panels.length,
        " 个分镜 | 导出时间: ",
        exportDate
      ] }),
      project && project.directorStyle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-subtitle", children: project.directorStyle.artStyle && `风格: ${project.directorStyle.artStyle}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-stats-title", children: "📊 分镜统计" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "print-stats-item", children: [
        "总分镜: ",
        stats.total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "print-stats-item", children: [
        "总时长: ",
        Math.floor(stats.totalDuration / 60),
        "分",
        stats.totalDuration % 60,
        "秒"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "print-stats-item", children: [
        "已生成图片: ",
        stats.withImage,
        "/",
        stats.total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "print-stats-item", children: [
        "有对白: ",
        stats.withDialogue
      ] })
    ] }),
    layoutMode === "table" ? (
      // 🆕 表格布局模式
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "print-table-layout", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "序号" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "预览图" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "景别/角度" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "画面描述" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "对白" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "时长" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: panels.map((panel, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: panel.panelNumber || index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: panel.generatedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: panel.generatedImage, alt: `分镜 ${panel.panelNumber}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#999" }, children: "无图" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            panel.shot,
            panel.angle && ` / ${panel.angle}`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: panel.description || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontStyle: "italic" }, children: panel.dialogue || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: panel.duration ? `${panel.duration}秒` : "-" })
        ] }, panel.id)) })
      ] })
    ) : (
      // 卡片布局模式（带场景分组）
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-panels", children: groupedPanels.map((group, groupIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        groupedPanels.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-scene-group", children: [
          "场景 ",
          groupIndex + 1,
          ": ",
          group.sceneName
        ] }),
        group.panels.map((panel, index) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel no-page-break", children: [
            panel.generatedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: panel.generatedImage,
                alt: `分镜 ${panel.panelNumber}`,
                className: "print-panel-image"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-panel-image-placeholder", children: "暂无预览图" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-number", children: [
                "#",
                panel.panelNumber || index + 1,
                panel.shot && ` - ${panel.shot}`,
                panel.angle && ` / ${panel.angle}`
              ] }),
              panel.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "print-panel-desc", children: panel.description }),
              panel.dialogue && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-dialogue", children: [
                '"',
                panel.dialogue,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-meta", children: [
                panel.duration && `${panel.duration}秒`,
                panel.cameraMovement && panel.cameraMovement !== "静止" && ` | ${panel.cameraMovement}`,
                ((_a = panel.characters) == null ? void 0 : _a.length) > 0 && ` | 角色: ${panel.characters.join(", ")}`
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-meta", style: { fontSize: "9px", color: "#666" }, children: [
                panel.composition && `构图: ${panel.composition}`,
                panel.shotIntent && ` | 意图: ${panel.shotIntent}`,
                panel.axisNote && ` | 轴线: ${panel.axisNote}`
              ] }),
              (panel.environmentMotion || panel.characterActions && panel.characterActions.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-meta", style: { fontSize: "9px", color: "#555" }, children: [
                panel.environmentMotion && `环境: ${panel.environmentMotion}`,
                panel.characterActions && panel.characterActions.length > 0 && ` | 动作: ${panel.characterActions.join(", ")}`
              ] }),
              showPrompts && panel.aiPrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-panel-prompt", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "提示词:" }),
                " ",
                panel.aiPrompt
              ] })
            ] })
          ] }, panel.id);
        })
      ] }, group.sceneId)) })
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-footer", children: [
      displayTitle,
      " - 由 AI 漫剧工作流生成"
    ] })
  ] });
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/juben/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function useStoryboardData({ chapterId }) {
  const [script, setScript] = reactExports.useState(null);
  const [storyboard, setStoryboard] = reactExports.useState(null);
  const [project, setProject] = reactExports.useState(null);
  const [assets, setAssets] = reactExports.useState(null);
  const [styleLastUpdated, setStyleLastUpdated] = reactExports.useState(0);
  const loadData = reactExports.useCallback(async () => {
    if (!chapterId) return;
    try {
      const scriptData = await scriptStorage.getByChapterId(chapterId);
      if (scriptData) {
        const migratedScenes = scriptData.scenes.map((scene) => ({
          ...scene,
          sceneType: scene.sceneType || "INT",
          dialogues: scene.dialogues || [],
          episodeNumber: scene.episodeNumber || 1
        }));
        setScript({ ...scriptData, scenes: migratedScenes });
      }
      const storyboardData = await storyboardStorage.getByChapterId(chapterId);
      setStoryboard(storyboardData || null);
      const actualProjId = await chapterStorage.getProjectIdByChapterId(chapterId);
      if (actualProjId) {
        const projectData = await projectStorage.getById(actualProjId);
        setProject(projectData || null);
        const assetData = await assetStorage.getByProjectId(actualProjId);
        setAssets(assetData || null);
        if (projectData == null ? void 0 : projectData.directorStyle) {
          setStyleLastUpdated(Date.now());
        }
      }
    } catch (error) {
      console.error("Failed to load storyboard data:", error);
      toast.error("数据加载失败");
    }
  }, [chapterId]);
  reactExports.useEffect(() => {
    loadData();
  }, [loadData]);
  const handleSave = reactExports.useCallback(async (updatedStoryboard) => {
    try {
      await storyboardStorage.save(updatedStoryboard);
      setStoryboard(updatedStoryboard);
      toast.success("分镜已保存");
      return true;
    } catch (error) {
      console.error("Failed to save storyboard:", error);
      toast.error("保存失败");
      return false;
    }
  }, []);
  const handleUpdateAssets = reactExports.useCallback(async (updatedAssets) => {
    try {
      await assetStorage.save(updatedAssets);
      setAssets(updatedAssets);
      return true;
    } catch (error) {
      console.error("Failed to save assets:", error);
      toast.error("保存资产失败");
      return false;
    }
  }, []);
  const handleUpdatePanel = reactExports.useCallback(async (panelId, updates) => {
    if (!storyboard) return;
    const index = storyboard.panels.findIndex((p) => p.id === panelId);
    if (index === -1) return;
    const updatedPanels = [...storyboard.panels];
    updatedPanels[index] = { ...updatedPanels[index], ...updates };
    await handleSave({ ...storyboard, panels: updatedPanels });
  }, [storyboard, handleSave]);
  const handleDeletePanel = reactExports.useCallback(async (panelId) => {
    if (!storyboard) return;
    const updatedPanels = storyboard.panels.filter((p) => p.id !== panelId);
    await handleSave({ ...storyboard, panels: updatedPanels });
    toast.success("分镜已删除");
  }, [storyboard, handleSave]);
  const handleAddPanel = reactExports.useCallback(async (afterPanelId) => {
    var _a, _b;
    if (!storyboard) return;
    const newPanel = {
      id: `p-${Date.now()}`,
      panelNumber: storyboard.panels.length + 1,
      sceneId: ((_a = storyboard.panels[0]) == null ? void 0 : _a.sceneId) || "",
      episodeNumber: ((_b = storyboard.panels[0]) == null ? void 0 : _b.episodeNumber) || 1,
      description: "",
      dialogue: "",
      aiPrompt: "",
      aiVideoPrompt: "",
      duration: 3,
      characters: [],
      props: [],
      shot: "中景",
      angle: "平视",
      cameraMovement: "静止",
      shotSize: "MS",
      cameraAngle: "EYE_LEVEL",
      movementType: "STATIC",
      transition: "切至",
      soundEffects: [],
      music: "",
      notes: "",
      startFrame: "",
      endFrame: "",
      motionSpeed: "normal",
      environmentMotion: "",
      characterActions: [],
      composition: "",
      shotIntent: "",
      focusPoint: "",
      lighting: { mood: "" }
    };
    let updatedPanels;
    if (afterPanelId) {
      const index = storyboard.panels.findIndex((p) => p.id === afterPanelId);
      updatedPanels = [
        ...storyboard.panels.slice(0, index + 1),
        newPanel,
        ...storyboard.panels.slice(index + 1)
      ];
    } else {
      updatedPanels = [...storyboard.panels, newPanel];
    }
    const renumbered = updatedPanels.map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await handleSave({ ...storyboard, panels: renumbered });
  }, [storyboard, handleSave]);
  const handleApplyTemplate = reactExports.useCallback(async (templatePanels) => {
    var _a, _b;
    if (!storyboard) return;
    const baseNumber = storyboard.panels.length;
    const baseSceneId = ((_a = storyboard.panels[0]) == null ? void 0 : _a.sceneId) || "";
    const baseEpisode = ((_b = storyboard.panels[0]) == null ? void 0 : _b.episodeNumber) || 1;
    const newPanels = templatePanels.map((tp, idx) => ({
      id: `p-${Date.now()}-${idx}`,
      panelNumber: baseNumber + idx + 1,
      sceneId: baseSceneId,
      episodeNumber: baseEpisode,
      description: tp.description || "",
      dialogue: tp.dialogue || "",
      aiPrompt: "",
      aiVideoPrompt: "",
      duration: tp.duration || 3,
      characters: tp.characters || [],
      props: tp.props || [],
      shot: tp.shot || "中景",
      angle: tp.angle || "平视",
      cameraMovement: tp.cameraMovement || "静止",
      shotSize: tp.shotSize || "MS",
      cameraAngle: tp.cameraAngle || "EYE_LEVEL",
      movementType: tp.movementType || "STATIC",
      transition: tp.transition || "切至",
      soundEffects: tp.soundEffects || [],
      music: tp.music || "",
      notes: tp.notes || "",
      startFrame: tp.startFrame || "",
      endFrame: tp.endFrame || "",
      motionSpeed: tp.motionSpeed || "normal",
      environmentMotion: tp.environmentMotion || "",
      characterActions: tp.characterActions || [],
      composition: tp.composition || "",
      shotIntent: tp.shotIntent || "",
      focusPoint: tp.focusPoint || "",
      lighting: tp.lighting || { mood: "" }
    }));
    const updatedPanels = [...storyboard.panels, ...newPanels];
    const renumbered = updatedPanels.map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await handleSave({ ...storyboard, panels: renumbered });
  }, [storyboard, handleSave]);
  const movePanel = reactExports.useCallback(async (dragIndex, hoverIndex) => {
    if (!storyboard) return;
    const newPanels = [...storyboard.panels];
    const dragPanel = newPanels[dragIndex];
    newPanels.splice(dragIndex, 1);
    newPanels.splice(hoverIndex, 0, dragPanel);
    const renumbered = newPanels.map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await handleSave({ ...storyboard, panels: renumbered });
  }, [storyboard, handleSave]);
  const [versions, setVersions] = reactExports.useState([]);
  const loadVersions = reactExports.useCallback(async () => {
    if (!chapterId) return;
    const { versionStorage: versionStorage2 } = await __vitePreload(async () => {
      const { versionStorage: versionStorage3 } = await Promise.resolve().then(() => storage);
      return { versionStorage: versionStorage3 };
    }, true ? void 0 : void 0);
    const vData = await versionStorage2.getAll();
    setVersions(vData.filter((v) => v.chapterId === chapterId));
  }, [chapterId]);
  const handleSaveVersion = reactExports.useCallback(async (versionName) => {
    if (!storyboard || !chapterId) return;
    try {
      const { versionStorage: versionStorage2, generateId: generateId2 } = await __vitePreload(async () => {
        const { versionStorage: versionStorage3, generateId: generateId3 } = await Promise.resolve().then(() => storage);
        return { versionStorage: versionStorage3, generateId: generateId3 };
      }, true ? void 0 : void 0);
      const version = {
        id: generateId2(),
        chapterId,
        name: versionName || `版本 ${(/* @__PURE__ */ new Date()).toLocaleString("zh-CN")}`,
        data: storyboard,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await versionStorage2.save(version);
      await loadVersions();
      toast.success("版本已保存");
    } catch (error) {
      console.error("Failed to save version:", error);
      toast.error("保存版本失败");
    }
  }, [storyboard, chapterId, loadVersions]);
  const handleRestoreVersion = reactExports.useCallback(async (versionId) => {
    try {
      const { versionStorage: versionStorage2 } = await __vitePreload(async () => {
        const { versionStorage: versionStorage3 } = await Promise.resolve().then(() => storage);
        return { versionStorage: versionStorage3 };
      }, true ? void 0 : void 0);
      const version = await versionStorage2.getById(versionId);
      if (version && version.data) {
        await handleSave(version.data);
        toast.success("版本已恢复");
      }
    } catch (error) {
      toast.error("恢复失败");
    }
  }, [handleSave]);
  const handleDeleteVersion = reactExports.useCallback(async (versionId) => {
    try {
      const { versionStorage: versionStorage2 } = await __vitePreload(async () => {
        const { versionStorage: versionStorage3 } = await Promise.resolve().then(() => storage);
        return { versionStorage: versionStorage3 };
      }, true ? void 0 : void 0);
      await versionStorage2.delete(versionId);
      await loadVersions();
      toast.success("版本记录已删除");
    } catch (error) {
      toast.error("删除记录失败");
    }
  }, [loadVersions]);
  const handleAIExtractByEpisode = reactExports.useCallback(async (episodeNumber, densityMode, onStart, onEnd) => {
    if (!script || !chapterId) return;
    onStart();
    try {
      const scenesToExtract = episodeNumber === "all" ? script.scenes : script.scenes.filter((s) => s.episodeNumber === episodeNumber);
      const panelResults = await extractStoryboard(
        scenesToExtract,
        (assets == null ? void 0 : assets.characters) || [],
        (assets == null ? void 0 : assets.scenes) || [],
        densityMode,
        project == null ? void 0 : project.directorStyle
      );
      if (panelResults) {
        let baseStoryboard = storyboard;
        if (!baseStoryboard) {
          baseStoryboard = {
            id: `sb-${chapterId}`,
            chapterId,
            panels: [],
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
        let updatedPanels;
        if (episodeNumber === "all") {
          updatedPanels = panelResults;
        } else {
          const otherPanels = (baseStoryboard.panels || []).filter((p) => p.episodeNumber !== episodeNumber);
          updatedPanels = [...otherPanels, ...panelResults].sort((a, b) => {
            if (a.episodeNumber !== b.episodeNumber) {
              return (a.episodeNumber || 1) - (b.episodeNumber || 1);
            }
            return a.panelNumber - b.panelNumber;
          });
        }
        const renumbered = updatedPanels.map((p, i) => ({ ...p, panelNumber: i + 1 }));
        const finalStoryboard = {
          ...baseStoryboard,
          panels: renumbered,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        await handleSave(finalStoryboard);
        toast.success(episodeNumber === "all" ? "全集分镜提取成功" : `第 ${episodeNumber} 集分镜提取成功`);
      }
    } catch (error) {
      console.error("AI Extraction failed:", error);
      toast.error("分镜提取失败");
    } finally {
      onEnd();
    }
  }, [script, chapterId, project, assets, storyboard, handleSave]);
  return {
    script,
    setScript,
    storyboard,
    setStoryboard,
    project,
    assets,
    styleLastUpdated,
    handleSave,
    handleUpdateAssets,
    // 🆕 保存资产库
    handleAIExtractByEpisode,
    handleAddPanel,
    handleApplyTemplate,
    handleDeletePanel,
    handleUpdatePanel,
    movePanel,
    versions,
    loadVersions,
    handleSaveVersion,
    // 🆕 保存版本
    handleRestoreVersion,
    handleDeleteVersion,
    refreshData: loadData
  };
}
const initialState = {
  viewMode: "list",
  selectedEpisode: "all",
  panelDensityMode: "standard",
  selectedPanels: /* @__PURE__ */ new Set(),
  enablePromptOptimization: true,
  batchProgress: null,
  isExtracting: false,
  isGeneratingAll: false,
  confirmDialogOpen: false,
  pendingEpisode: "all",
  showHistoryDialog: false,
  panelStatuses: {}
};
function uiReducer(state, action) {
  switch (action.type) {
    case "SET_VIEW_MODE":
      return { ...state, viewMode: action.payload };
    case "SET_EPISODE":
      return { ...state, selectedEpisode: action.payload };
    case "SET_DENSITY_MODE":
      return { ...state, panelDensityMode: action.payload };
    case "SELECT_PANEL": {
      const next = new Set(state.selectedPanels);
      if (next.has(action.payload)) next.delete(action.payload);
      else next.add(action.payload);
      return { ...state, selectedPanels: next };
    }
    case "SELECT_ALL":
      return { ...state, selectedPanels: new Set(action.payload) };
    case "CLEAR_SELECTION":
      return { ...state, selectedPanels: /* @__PURE__ */ new Set() };
    case "SET_EXTRACTING":
      return { ...state, isExtracting: action.payload };
    case "SET_GENERATING":
      return { ...state, isGeneratingAll: action.payload };
    case "SET_BATCH_PROGRESS":
      return { ...state, batchProgress: action.payload };
    case "SET_CONFIRM_DIALOG":
      return { ...state, confirmDialogOpen: action.payload };
    case "SET_PENDING_EPISODE":
      return { ...state, pendingEpisode: action.payload };
    case "SET_HISTORY_DIALOG":
      return { ...state, showHistoryDialog: action.payload };
    case "SET_PROMPT_OPTIMIZATION":
      return { ...state, enablePromptOptimization: action.payload };
    case "UPDATE_PANEL_STATUS":
      return { ...state, panelStatuses: { ...state.panelStatuses, [action.payload.id]: action.payload.status } };
    case "RESET_PANEL_STATUSES": {
      const next = { ...state.panelStatuses };
      action.payload.forEach((id) => {
        next[id] = "idle";
      });
      return { ...state, panelStatuses: next };
    }
    default:
      return state;
  }
}
function useStoryboardUI({ script, storyboard }) {
  const [state, dispatch] = reactExports.useReducer(uiReducer, initialState);
  const allEpisodes = reactExports.useMemo(() => {
    if (!script) return [];
    const eps = /* @__PURE__ */ new Set();
    script.scenes.forEach((s) => {
      if (s.episodeNumber) eps.add(s.episodeNumber);
    });
    return Array.from(eps).sort((a, b) => a - b);
  }, [script]);
  const getFilteredPanels = reactExports.useCallback(() => {
    if (!storyboard) return [];
    if (state.selectedEpisode === "all") return storyboard.panels;
    return storyboard.panels.filter((p) => p.episodeNumber === state.selectedEpisode);
  }, [storyboard, state.selectedEpisode]);
  const getEstimatedPanelCount = reactExports.useCallback(() => {
    if (!script) return { min: 0, max: 0 };
    const scenesToCount = state.selectedEpisode === "all" ? script.scenes : script.scenes.filter((s) => s.episodeNumber === state.selectedEpisode);
    let minTotal = 0, maxTotal = 0;
    scenesToCount.forEach((scene) => {
      var _a;
      const dialogueCount = ((_a = scene.dialogues) == null ? void 0 : _a.length) || 0;
      const actionLength = (scene.action || "").length;
      const characterCount = (scene.characters || []).length;
      const estimate = estimatePanelCount(
        dialogueCount,
        actionLength,
        characterCount,
        state.panelDensityMode
      );
      minTotal += estimate.min;
      maxTotal += estimate.max;
    });
    return { min: minTotal, max: maxTotal };
  }, [script, state.selectedEpisode, state.panelDensityMode]);
  const handleToggleSelect = reactExports.useCallback((panelId) => {
    dispatch({ type: "SELECT_PANEL", payload: panelId });
  }, []);
  const handleSelectAll = reactExports.useCallback(() => {
    const panels = getFilteredPanels();
    if (state.selectedPanels.size === panels.length && panels.length > 0) {
      dispatch({ type: "CLEAR_SELECTION" });
    } else {
      dispatch({ type: "SELECT_ALL", payload: panels.map((p) => p.id) });
    }
  }, [getFilteredPanels, state.selectedPanels.size]);
  const handleClearSelection = reactExports.useCallback(() => {
    dispatch({ type: "CLEAR_SELECTION" });
  }, []);
  const updatePanelStatus = reactExports.useCallback((id, status) => {
    dispatch({ type: "UPDATE_PANEL_STATUS", payload: { id, status } });
  }, []);
  const resetPanelStatuses = reactExports.useCallback((ids) => {
    dispatch({ type: "RESET_PANEL_STATUSES", payload: ids });
  }, []);
  return {
    viewMode: state.viewMode,
    setViewMode: (mode) => dispatch({ type: "SET_VIEW_MODE", payload: mode }),
    selectedEpisode: state.selectedEpisode,
    setSelectedEpisode: (ep) => dispatch({ type: "SET_EPISODE", payload: ep }),
    panelDensityMode: state.panelDensityMode,
    setPanelDensityMode: (mode) => dispatch({ type: "SET_DENSITY_MODE", payload: mode }),
    selectedPanels: state.selectedPanels,
    setSelectedPanels: (panels) => dispatch({ type: "SELECT_ALL", payload: Array.from(panels) }),
    enablePromptOptimization: state.enablePromptOptimization,
    setEnablePromptOptimization: (val) => dispatch({ type: "SET_PROMPT_OPTIMIZATION", payload: val }),
    batchProgress: state.batchProgress,
    setBatchProgress: (p) => dispatch({ type: "SET_BATCH_PROGRESS", payload: p }),
    isExtracting: state.isExtracting,
    setIsExtracting: (val) => dispatch({ type: "SET_EXTRACTING", payload: val }),
    isGeneratingAll: state.isGeneratingAll,
    setIsGeneratingAll: (val) => dispatch({ type: "SET_GENERATING", payload: val }),
    confirmDialogOpen: state.confirmDialogOpen,
    setConfirmDialogOpen: (val) => dispatch({ type: "SET_CONFIRM_DIALOG", payload: val }),
    pendingEpisode: state.pendingEpisode,
    setPendingEpisode: (ep) => dispatch({ type: "SET_PENDING_EPISODE", payload: ep }),
    showHistoryDialog: state.showHistoryDialog,
    setShowHistoryDialog: (val) => dispatch({ type: "SET_HISTORY_DIALOG", payload: val }),
    allEpisodes,
    getFilteredPanels,
    getEstimatedPanelCount,
    handleToggleSelect,
    handleSelectAll,
    handleClearSelection,
    panelStatuses: state.panelStatuses,
    updatePanelStatus,
    resetPanelStatuses
  };
}
class RequestQueue {
  constructor(options = {}) {
    this.tasks = [];
    this.runningCount = 0;
    this.isPaused = false;
    this.isCancelled = false;
    this.batchResolvers = [];
    this.options = {
      maxConcurrency: options.maxConcurrency || 3,
      timeout: options.timeout || 6e4,
      // 默认 60 秒超时
      maxRetries: options.maxRetries || 0,
      ...options
    };
  }
  /**
   * 添加任务到队列
   */
  addTask(id, execute, metadata, priority = 0) {
    const task = {
      id,
      priority,
      execute,
      status: "pending",
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
  addTasks(tasks) {
    tasks.forEach((t) => {
      const task = {
        id: t.id,
        priority: t.priority || 0,
        execute: t.execute,
        status: "pending",
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
  async waitForBatch(ids) {
    const getBatchTasks = () => this.tasks.filter((t) => ids.has(t.id));
    const isDready = () => {
      const tasks = getBatchTasks();
      if (tasks.length < ids.size) return false;
      return tasks.every((t) => ["completed", "failed", "cancelled"].includes(t.status));
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
  checkBatchResolvers() {
    this.batchResolvers = this.batchResolvers.filter((resolver) => {
      const tasks = this.tasks.filter((t) => resolver.ids.has(t.id));
      const allDone = tasks.length >= resolver.ids.size && tasks.every((t) => ["completed", "failed", "cancelled"].includes(t.status));
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
  async process() {
    if (this.isPaused || this.isCancelled || this.runningCount >= this.options.maxConcurrency) {
      return;
    }
    const nextTask = this.tasks.find((t) => t.status === "pending");
    if (!nextTask) {
      if (this.runningCount === 0 && this.options.onQueueEmpty) {
        try {
          await this.options.onQueueEmpty();
        } catch (e) {
          console.error("[RequestQueue] onQueueEmpty error:", e);
        }
      }
      return;
    }
    const abortController = new AbortController();
    nextTask.abortController = abortController;
    nextTask.status = "running";
    nextTask.startTime = Date.now();
    this.runningCount++;
    await this.notifyStatusChange(nextTask);
    let timeoutId;
    if (this.options.timeout && this.options.timeout > 0) {
      timeoutId = setTimeout(() => {
        var _a, _b;
        if (nextTask.status === "running") {
          abortController.abort();
          (_b = (_a = this.options).onTaskTimeout) == null ? void 0 : _b.call(_a, nextTask);
        }
      }, this.options.timeout);
    }
    try {
      const result = await nextTask.execute(abortController.signal);
      if (timeoutId) clearTimeout(timeoutId);
      if (this.isCancelled || abortController.signal.aborted) {
        nextTask.status = "cancelled";
      } else {
        nextTask.status = "completed";
        nextTask.result = result;
        if (this.options.onTaskComplete) {
          await this.options.onTaskComplete(nextTask);
        }
      }
    } catch (error) {
      if (timeoutId) clearTimeout(timeoutId);
      if (error.name === "AbortError" || abortController.signal.aborted) {
        nextTask.status = "cancelled";
      } else {
        const retryCount = nextTask.retryCount || 0;
        if (this.options.maxRetries && retryCount < this.options.maxRetries) {
          nextTask.retryCount = retryCount + 1;
          nextTask.status = "pending";
        } else {
          nextTask.status = "failed";
          nextTask.error = error;
          if (this.options.onTaskFailed) {
            await this.options.onTaskFailed(nextTask, error);
          }
        }
      }
    } finally {
      this.runningCount--;
      nextTask.abortController = void 0;
      await this.notifyStatusChange(nextTask);
      this.process();
    }
    if (this.runningCount < this.options.maxConcurrency) {
      this.process();
    }
  }
  /**
   * 取消单个任务（支持取消正在运行的任务）
   */
  cancelTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) return;
    if (task.status === "pending") {
      task.status = "cancelled";
      this.notifyStatusChange(task);
    } else if (task.status === "running" && task.abortController) {
      task.abortController.abort();
    }
  }
  /**
   * 🆕 取消指定批次的所有任务
   */
  cancelBatch(ids) {
    ids.forEach((id) => this.cancelTask(id));
  }
  /**
   * 🆕 取消所有任务（包括正在运行的）
   */
  cancelAll() {
    this.isCancelled = true;
    this.tasks.forEach((t) => {
      if (t.status === "pending") {
        t.status = "cancelled";
      } else if (t.status === "running" && t.abortController) {
        t.abortController.abort();
      }
    });
    this.batchResolvers.forEach((resolver) => {
      const tasks = this.tasks.filter((t) => resolver.ids.has(t.id));
      resolver.resolve(tasks);
    });
    this.batchResolvers = [];
  }
  /**
   * 🆕 重试失败的任务
   */
  retryFailed(ids) {
    const targetIds = ids || new Set(this.tasks.filter((t) => t.status === "failed").map((t) => t.id));
    targetIds.forEach((id) => {
      const task = this.tasks.find((t) => t.id === id);
      if (task && task.status === "failed") {
        task.status = "pending";
        task.error = void 0;
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
    this.isCancelled = false;
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
  getTasks() {
    return [...this.tasks];
  }
  /**
   * 获取任务状态
   */
  getTaskStatus(id) {
    var _a;
    return (_a = this.tasks.find((t) => t.id === id)) == null ? void 0 : _a.status;
  }
  /**
   * 通知状态变更
   */
  async notifyStatusChange(task) {
    var _a, _b;
    try {
      await ((_b = (_a = this.options).onTaskStatusChange) == null ? void 0 : _b.call(_a, task));
    } catch (e) {
      console.error("[RequestQueue] onTaskStatusChange error:", e);
    }
    this.checkBatchResolvers();
  }
  /**
   * 暂停/恢复
   */
  pause() {
    this.isPaused = true;
  }
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
      pending: this.tasks.filter((t) => t.status === "pending").length,
      running: this.tasks.filter((t) => t.status === "running").length,
      completed: this.tasks.filter((t) => t.status === "completed").length,
      failed: this.tasks.filter((t) => t.status === "failed").length,
      cancelled: this.tasks.filter((t) => t.status === "cancelled").length
    };
  }
}
function useStoryboardActions({
  storyboard,
  script,
  project,
  assets,
  onUpdateStoryboard,
  onUpdateAssets,
  // 🆕
  updatePanelStatus
}) {
  const queue = reactExports.useMemo(() => new RequestQueue({
    maxConcurrency: 3,
    timeout: 12e4,
    // 2分钟超时
    maxRetries: 1,
    // 自动重试一次
    onTaskStatusChange: (task) => {
      updatePanelStatus == null ? void 0 : updatePanelStatus(task.id, task.status);
    },
    onTaskTimeout: (task) => {
      toast.warning(`分镜 ${task.id.substring(0, 8)} 生成超时，已自动取消`);
    },
    onTaskFailed: (task, error) => {
      console.error(`[Task ${task.id}] Failed:`, error);
    }
  }), [updatePanelStatus]);
  const handleBatchRegeneratePrompts = reactExports.useCallback(async (selectedIds, optimize, onProgress, onComplete) => {
    if (!storyboard || !project) return;
    const total = selectedIds.size;
    let current = 0;
    const tasks = storyboard.panels.filter((p) => selectedIds.has(p.id)).map((panel) => ({
      id: panel.id,
      execute: async () => {
        let finalPrompt = panel.aiPrompt;
        if (optimize) {
          finalPrompt = await optimizePrompt(
            panel.description,
            project.directorStyle || "Cinematic",
            "storyboard"
          );
        }
        current++;
        onProgress == null ? void 0 : onProgress(current, total);
        return { ...panel, aiPrompt: finalPrompt };
      }
    }));
    queue.addTasks(tasks);
    try {
      await queue.waitForBatch(selectedIds);
      const results = queue.getTasks().filter((t) => selectedIds.has(t.id) && t.status === "completed").map((t) => t.result);
      if (results.length > 0) {
        const updatedPanels = storyboard.panels.map((p) => {
          const found = results.find((r2) => r2.id === p.id);
          return found || p;
        });
        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success(`已完成 ${results.length} 个分镜的提示词重生成`);
      }
    } catch (err) {
      console.error("[BatchRegenerate] Error:", err);
      toast.error("提示词重生成过程中出现异常");
    } finally {
      onComplete == null ? void 0 : onComplete();
    }
  }, [storyboard, project, onUpdateStoryboard, queue]);
  const computeStyleHash = reactExports.useCallback((style) => {
    if (!style) return "default";
    const str = JSON.stringify(style);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return `style_${Math.abs(hash).toString(16).substring(0, 8)}`;
  }, []);
  const handleGenerateImage = reactExports.useCallback(async (panel) => {
    if (!assets || !project || !storyboard) return;
    toast.loading("正在生成预览图...", { id: `img-${panel.id}` });
    try {
      const imageUrl = await generateStoryboardImage(
        panel,
        assets.characters,
        assets.scenes,
        project.directorStyle,
        true
        // enableOptimization
      );
      const styleHash = computeStyleHash(project.directorStyle);
      const updatedPanels = storyboard.panels.map(
        (p) => p.id === panel.id ? {
          ...p,
          generatedImage: imageUrl,
          appliedStyleHash: styleHash,
          // 🆕 记录风格哈希
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
          // 🆕 记录生成时间
        } : p
      );
      await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
      toast.success("预览图已生成", { id: `img-${panel.id}` });
      return imageUrl;
    } catch (error) {
      console.error("Failed to generate image:", error);
      toast.error("生成图片失败", { id: `img-${panel.id}` });
    }
  }, [assets, project, storyboard, onUpdateStoryboard, computeStyleHash]);
  const handleCopyPanel = reactExports.useCallback(async (panel) => {
    if (!storyboard) return;
    const newPanel = {
      ...panel,
      id: `p-${Date.now()}`,
      panelNumber: panel.panelNumber + 1
    };
    const index = storyboard.panels.findIndex((p) => p.id === panel.id);
    const updatedPanels = [
      ...storyboard.panels.slice(0, index + 1),
      newPanel,
      ...storyboard.panels.slice(index + 1)
    ].map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
    toast.success("分镜已复制");
  }, [storyboard, onUpdateStoryboard]);
  const handleSplitPanel = reactExports.useCallback(async (panelId, count) => {
    if (!storyboard) return;
    const index = storyboard.panels.findIndex((p) => p.id === panelId);
    if (index === -1) return;
    const panel = storyboard.panels[index];
    const newPanels = [];
    for (let i = 0; i < count; i++) {
      newPanels.push({
        ...panel,
        id: `p-${Date.now()}-${i}`,
        panelNumber: panel.panelNumber + i,
        aiPrompt: "",
        generatedImage: void 0
      });
    }
    const updatedPanels = [
      ...storyboard.panels.slice(0, index),
      ...newPanels,
      ...storyboard.panels.slice(index + 1)
    ].map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
    toast.success(`分镜已拆分为 ${count} 份`);
  }, [storyboard, onUpdateStoryboard]);
  const handleBatchDelete = reactExports.useCallback(async (selectedIds) => {
    if (!storyboard) return;
    const updatedPanels = storyboard.panels.filter((p) => !selectedIds.has(p.id)).map((p, i) => ({ ...p, panelNumber: i + 1 }));
    await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
    toast.success(`已删除 ${selectedIds.size} 个分镜`);
  }, [storyboard, onUpdateStoryboard]);
  const handleBatchApplyParams = reactExports.useCallback(async (selectedIds, params) => {
    if (!storyboard) return;
    const updatedPanels = storyboard.panels.map((p) => {
      if (selectedIds.has(p.id)) {
        return { ...p, ...params };
      }
      return p;
    });
    await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
    toast.success(`已为 ${selectedIds.size} 个分镜应用参数`);
  }, [storyboard, onUpdateStoryboard]);
  const handleApplyPreset = reactExports.useCallback(async (panelId, params) => {
    if (!storyboard) return;
    const updatedPanels = storyboard.panels.map((p) => {
      if (p.id === panelId) {
        return { ...p, ...params };
      }
      return p;
    });
    await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
  }, [storyboard, onUpdateStoryboard]);
  const handleExportStoryboard = reactExports.useCallback((format) => {
    if (!storyboard) return;
    let content;
    let filename;
    let mimeType;
    if (format === "json") {
      content = JSON.stringify(storyboard, null, 2);
      filename = `storyboard_${Date.now()}.json`;
      mimeType = "application/json";
    } else {
      const lines = storyboard.panels.map(
        (p) => `#${p.panelNumber} | ${p.shot || "中景"} | ${p.duration || 3}秒
画面：${p.description || ""}
对白：${p.dialogue || ""}
提示词：${p.aiPrompt || ""}
---`
      );
      content = lines.join("\n\n");
      filename = `storyboard_${Date.now()}.txt`;
      mimeType = "text/plain";
    }
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`已导出为 ${format.toUpperCase()} 格式`);
  }, [storyboard]);
  const handleExportPrompts = reactExports.useCallback((platform) => {
    if (!storyboard || !assets || !script || !project) return;
    const prompts = exportAllPanelPrompts(
      storyboard.panels,
      assets.characters,
      assets.scenes,
      project.directorStyle,
      platform
    );
    const blob = new Blob([prompts], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `storyboard_prompts_${platform}_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`已导出 ${platform} 格式提示词`);
  }, [storyboard, assets, script, project]);
  const handleExportPDF = reactExports.useCallback(async () => {
    toast.loading("正在准备PDF导出...", { id: "pdf-export" });
    await new Promise((resolve) => setTimeout(resolve, 100));
    window.print();
    setTimeout(() => {
      toast.dismiss("pdf-export");
      toast.success('PDF导出对话框已打开，请选择"保存为PDF"');
    }, 500);
  }, []);
  const handleCopyPrompt = reactExports.useCallback((prompt, type) => {
    navigator.clipboard.writeText(prompt);
    toast.success(`${type === "image" ? "提示词" : "视频描述"}已复制到剪贴板`);
  }, []);
  const handleGenerateAllImages = reactExports.useCallback(async (selectedIds, onProgress, onComplete) => {
    if (!storyboard || !assets || !project) return;
    const total = selectedIds.size;
    let current = 0;
    const tasks = storyboard.panels.filter((p) => selectedIds.has(p.id)).map((panel) => ({
      id: panel.id,
      execute: async () => {
        const imageUrl = await generateStoryboardImage(
          panel,
          assets.characters,
          assets.scenes,
          project.directorStyle,
          true
        );
        current++;
        onProgress == null ? void 0 : onProgress(current, total);
        return { ...panel, generatedImage: imageUrl };
      }
    }));
    queue.addTasks(tasks);
    try {
      await queue.waitForBatch(selectedIds);
      const results = queue.getTasks().filter((t) => selectedIds.has(t.id) && t.status === "completed").map((t) => t.result);
      if (results.length > 0) {
        const updatedPanels = storyboard.panels.map((p) => {
          const found = results.find((r2) => r2.id === p.id);
          return found || p;
        });
        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success(`已完成 ${results.length} 张预览图生成`);
      }
    } catch (err) {
      console.error("[BatchGenerateImages] Error:", err);
      toast.error("批量生成过程中出现异常");
    } finally {
      onComplete == null ? void 0 : onComplete();
    }
  }, [storyboard, assets, project, queue, onUpdateStoryboard]);
  const handleGeneratePrompts = reactExports.useCallback(async (panel) => {
    if (!assets || !project) return;
    ({ ...panel });
    await handleBatchRegeneratePrompts(/* @__PURE__ */ new Set([panel.id]), true);
  }, [assets, project, handleBatchRegeneratePrompts]);
  const handleExportCSV = reactExports.useCallback(() => {
    if (!storyboard || !project) return;
    const csv = exportStoryboardToCSV(storyboard.panels, project.title);
    const filename = generateFriendlyFilename(project.title, "分镜表", "csv");
    downloadCSV(csv, filename);
    toast.success("已导出 CSV 格式（可用Excel打开）");
  }, [storyboard, project]);
  const handleExportVideoPrompts = reactExports.useCallback((platform) => {
    if (!storyboard || !project) return;
    const content = exportVideoPromptsByPlatform(storyboard.panels, platform, project.title);
    const filename = generateFriendlyFilename(project.title, `视频提示词_${platform}`, "txt");
    downloadText(content, filename);
    toast.success(`已导出 ${platform.toUpperCase()} 格式视频提示词`);
  }, [storyboard, project]);
  const handleSyncToAssetLibrary = reactExports.useCallback(async () => {
    if (!storyboard || !assets) {
      toast.error("分镜或项目库未加载");
      return { newCharacters: [], newScenes: [] };
    }
    const existingCharNames = new Set(assets.characters.map((c) => c.name.toLowerCase()));
    const existingSceneNames = new Set(assets.scenes.map((s) => s.name.toLowerCase()));
    const newCharacters = [];
    const newScenes = [];
    storyboard.panels.forEach((panel) => {
      var _a;
      if (panel.characters) {
        panel.characters.forEach((charName) => {
          if (charName && !existingCharNames.has(charName.toLowerCase())) {
            existingCharNames.add(charName.toLowerCase());
            newCharacters.push({
              name: charName,
              description: `从分镜 ${panel.id.substring(0, 8)} 提取`
            });
          }
        });
      }
      if (panel.dialogue) {
        const dialogueMatch = panel.dialogue.match(/^(.+?)[:：]/);
        if (dialogueMatch) {
          const charName = dialogueMatch[1].trim();
          if (charName && !existingCharNames.has(charName.toLowerCase())) {
            existingCharNames.add(charName.toLowerCase());
            newCharacters.push({
              name: charName,
              description: `从对白中提取`
            });
          }
        }
      }
      let sceneName = "";
      if (panel.sceneId) {
        const existingScene = assets.scenes.find((s) => s.id === panel.sceneId);
        if (!existingScene) {
          sceneName = `场景_${panel.sceneId.substring(0, 8)}`;
        }
      }
      if (!sceneName && panel.description) {
        const sceneMatch = panel.description.match(/^(INT\.|EXT\.|内|外)[^\-\n]*/i);
        if (sceneMatch) {
          sceneName = sceneMatch[0].trim();
        }
      }
      if (sceneName && !existingSceneNames.has(sceneName.toLowerCase())) {
        existingSceneNames.add(sceneName.toLowerCase());
        newScenes.push({
          name: sceneName,
          description: ((_a = panel.description) == null ? void 0 : _a.substring(0, 100)) || `从分镜 ${panel.id.substring(0, 8)} 提取`
        });
      }
    });
    if (newCharacters.length === 0 && newScenes.length === 0) {
      toast.info("未发现新的角色或场景");
      return { newCharacters: [], newScenes: [], saved: false };
    }
    if (onUpdateAssets && assets) {
      const stylePrefix = (project == null ? void 0 : project.directorStyle) ? [
        project.directorStyle.artStyle,
        project.directorStyle.colorTone,
        project.directorStyle.lightingStyle,
        project.directorStyle.cameraStyle,
        project.directorStyle.mood,
        project.directorStyle.customPrompt
      ].filter(Boolean).join(", ") : "";
      const updatedAssets = {
        ...assets,
        characters: [
          ...assets.characters,
          ...newCharacters.map((c, idx) => {
            `${c.name}, character portrait`;
            return {
              id: `char-sync-${Date.now()}-${idx}`,
              name: c.name,
              description: c.description,
              appearance: "",
              personality: "",
              avatar: "",
              fullBodyPrompt: `full body portrait of ${c.name}, white background, front view, ${stylePrefix}, high quality, detailed`.trim(),
              facePrompt: `close-up face portrait of ${c.name}, detailed facial features, ${stylePrefix}, high quality`.trim(),
              tags: ["从分镜同步"]
            };
          })
        ],
        scenes: [
          ...assets.scenes,
          ...newScenes.map((s, idx) => {
            const scenePrompt = `${s.name}, ${s.description || "cinematic scene"}`;
            return {
              id: `scene-sync-${Date.now()}-${idx}`,
              name: s.name,
              description: s.description,
              location: s.name,
              environment: "",
              atmosphere: "",
              image: "",
              widePrompt: `wide shot, ${scenePrompt}, ${stylePrefix}, establishing shot, high quality, detailed environment`.trim(),
              mediumPrompt: `medium shot, ${scenePrompt}, ${stylePrefix}, cinematic composition`.trim(),
              closeupPrompt: `close-up detail of ${s.name}, ${stylePrefix}, high quality`.trim(),
              tags: ["从分镜同步"]
            };
          })
        ]
      };
      const saved = await onUpdateAssets(updatedAssets);
      if (saved) {
        toast.success(`已自动添加 ${newCharacters.length} 个角色，${newScenes.length} 个场景到项目库`);
        return { newCharacters, newScenes, saved: true };
      } else {
        toast.error("保存到项目库失败");
        return { newCharacters, newScenes, saved: false };
      }
    }
    return { newCharacters, newScenes, saved: false };
  }, [storyboard, assets, onUpdateAssets]);
  return {
    handleBatchRegeneratePrompts,
    handleGenerateAllImages,
    handleGenerateImage,
    handleCopyPanel,
    handleSplitPanel,
    handleBatchDelete,
    handleBatchApplyParams: (selectedIds, params) => handleBatchApplyParams(selectedIds, params),
    handleApplyPreset,
    handleExportStoryboard,
    handleExportPrompts,
    handleExportPDF,
    handleCopyPrompt,
    handleGeneratePrompts,
    handleExportCSV,
    handleExportVideoPrompts,
    handleSyncToAssetLibrary,
    // 🆕 队列控制方法
    cancelAllTasks: () => queue.cancelAll(),
    retryFailedTasks: (ids) => queue.retryFailed(ids),
    getQueueStats: () => queue.getStats()
  };
}
const MAX_HISTORY_SIZE = 30;
function useStoryboardHistory({
  storyboard,
  onSave,
  autoSaveInterval = 3e4
  // 默认30秒
}) {
  const [history, setHistory] = reactExports.useState([]);
  const [historyIndex, setHistoryIndex] = reactExports.useState(-1);
  const [isDirty, setIsDirty] = reactExports.useState(false);
  const lastSavedRef = reactExports.useRef("");
  const autoSaveTimerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (storyboard && history.length === 0) {
      setHistory([storyboard]);
      setHistoryIndex(0);
      lastSavedRef.current = JSON.stringify(storyboard);
    }
  }, [storyboard, history.length]);
  const pushHistory = reactExports.useCallback((newStoryboard) => {
    setHistory((prev) => {
      const trimmed = prev.slice(0, historyIndex + 1);
      const updated = [...trimmed, newStoryboard];
      if (updated.length > MAX_HISTORY_SIZE) {
        return updated.slice(-MAX_HISTORY_SIZE);
      }
      return updated;
    });
    setHistoryIndex((prev) => Math.min(prev + 1, MAX_HISTORY_SIZE - 1));
    const currentJson = JSON.stringify(newStoryboard);
    setIsDirty(currentJson !== lastSavedRef.current);
  }, [historyIndex]);
  const undo = reactExports.useCallback(() => {
    if (historyIndex <= 0) return null;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    return history[newIndex] || null;
  }, [history, historyIndex]);
  const redo = reactExports.useCallback(() => {
    if (historyIndex >= history.length - 1) return null;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    return history[newIndex] || null;
  }, [history, historyIndex]);
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const saveAndMark = reactExports.useCallback(async (sb) => {
    const success = await onSave(sb);
    if (success) {
      lastSavedRef.current = JSON.stringify(sb);
      setIsDirty(false);
    }
    return success;
  }, [onSave]);
  reactExports.useEffect(() => {
    if (autoSaveInterval <= 0 || !isDirty) return;
    autoSaveTimerRef.current = setTimeout(async () => {
      const currentStoryboard = history[historyIndex];
      if (currentStoryboard && isDirty) {
        console.log("[AutoSave] Saving storyboard...");
        await saveAndMark(currentStoryboard);
      }
    }, autoSaveInterval);
    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [autoSaveInterval, isDirty, history, historyIndex, saveAndMark]);
  reactExports.useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "您有未保存的更改，确定要离开吗？";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);
  return {
    pushHistory,
    undo,
    redo,
    canUndo,
    canRedo,
    isDirty,
    saveAndMark,
    historyLength: history.length,
    currentIndex: historyIndex
  };
}
function useKeyboardShortcuts({
  onUndo,
  onRedo,
  onDelete,
  onSelectAll,
  onEscape,
  onSave,
  onCopy,
  enabled = true
}) {
  const handleKeyDown = reactExports.useCallback((e) => {
    if (!enabled) return;
    const target = e.target;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
      if (e.key !== "Escape") return;
    }
    const isCtrl = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    if (isCtrl && e.key === "z" && !isShift) {
      e.preventDefault();
      onUndo == null ? void 0 : onUndo();
      return;
    }
    if (isCtrl && e.key === "y" || isCtrl && isShift && e.key === "z") {
      e.preventDefault();
      onRedo == null ? void 0 : onRedo();
      return;
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      onDelete == null ? void 0 : onDelete();
      return;
    }
    if (isCtrl && e.key === "a") {
      e.preventDefault();
      onSelectAll == null ? void 0 : onSelectAll();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      onEscape == null ? void 0 : onEscape();
      return;
    }
    if (isCtrl && e.key === "s") {
      e.preventDefault();
      onSave == null ? void 0 : onSave();
      return;
    }
    if (isCtrl && e.key === "c") {
      e.preventDefault();
      onCopy == null ? void 0 : onCopy();
      return;
    }
  }, [enabled, onUndo, onRedo, onDelete, onSelectAll, onEscape, onSave, onCopy]);
  reactExports.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
function StoryboardEditor() {
  const { chapterId } = useParams();
  const {
    script,
    storyboard,
    setStoryboard,
    // 🆕 for undo/redo
    project,
    assets,
    handleSave,
    handleUpdateAssets,
    // 🆕 用于反向同步
    handleAIExtractByEpisode,
    handleAddPanel,
    handleApplyTemplate,
    handleDeletePanel,
    handleUpdatePanel,
    versions,
    loadVersions,
    handleRestoreVersion,
    handleDeleteVersion,
    handleSaveVersion
    // 🆕 保存版本
  } = useStoryboardData({ chapterId });
  const {
    viewMode,
    setViewMode,
    selectedEpisode,
    setSelectedEpisode,
    panelDensityMode,
    setPanelDensityMode,
    selectedPanels,
    enablePromptOptimization,
    batchProgress,
    setBatchProgress,
    isExtracting,
    setIsExtracting,
    isGeneratingAll,
    setIsGeneratingAll,
    showHistoryDialog,
    setShowHistoryDialog,
    allEpisodes,
    getFilteredPanels,
    handleToggleSelect,
    handleSelectAll,
    handleClearSelection,
    panelStatuses,
    updatePanelStatus,
    getEstimatedPanelCount
  } = useStoryboardUI({ script, storyboard });
  const {
    handleBatchRegeneratePrompts,
    handleGenerateAllImages,
    handleGenerateImage,
    handleCopyPanel,
    handleSplitPanel,
    handleBatchDelete,
    handleBatchApplyParams,
    handleApplyPreset,
    handleExportStoryboard,
    handleExportPrompts,
    handleExportPDF,
    handleCopyPrompt,
    handleGeneratePrompts,
    handleSyncToAssetLibrary,
    // 🆕 反向同步
    cancelAllTasks,
    // 🆕 取消所有任务
    retryFailedTasks,
    // 🆕 重试失败任务
    getQueueStats
    // 🆕 获取队列状态
  } = useStoryboardActions({
    storyboard,
    script,
    project,
    assets,
    onUpdateStoryboard: handleSave,
    onUpdateAssets: handleUpdateAssets,
    // 🆕 自动保存资产
    updatePanelStatus
  });
  const {
    undo,
    redo,
    saveAndMark
  } = useStoryboardHistory({
    storyboard,
    onSave: handleSave,
    autoSaveInterval: 3e4
    // 30秒自动保存
  });
  const handleUndo = reactExports.useCallback(() => {
    const prev = undo();
    if (prev) {
      setStoryboard(prev);
      toast.success("已撤销");
    }
  }, [undo, setStoryboard]);
  const handleRedo = reactExports.useCallback(() => {
    const next = redo();
    if (next) {
      setStoryboard(next);
      toast.success("已重做");
    }
  }, [redo, setStoryboard]);
  const handleManualSave = reactExports.useCallback(async () => {
    if (storyboard) {
      const success = await saveAndMark(storyboard);
      if (success) toast.success("已保存");
    }
  }, [storyboard, saveAndMark]);
  useKeyboardShortcuts({
    onUndo: handleUndo,
    onRedo: handleRedo,
    onDelete: () => {
      if (selectedPanels.size > 0) {
        handleBatchDelete(selectedPanels);
      }
    },
    onSelectAll: handleSelectAll,
    onEscape: handleClearSelection,
    onSave: handleManualSave,
    enabled: true
  });
  const filteredPanels = reactExports.useMemo(() => getFilteredPanels(), [getFilteredPanels]);
  const totalDuration = reactExports.useMemo(
    () => filteredPanels.reduce((acc, p) => acc + (p.duration || 0), 0),
    [filteredPanels]
  );
  const estimatedPanelCount = reactExports.useMemo(() => getEstimatedPanelCount(), [getEstimatedPanelCount]);
  const [showPreviewDialog, setShowPreviewDialog] = reactExports.useState(false);
  if (!script) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500 font-medium", children: "正在加载剧本数据..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50/50 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryboardHeader,
      {
        viewMode,
        setViewMode,
        selectedEpisode,
        setSelectedEpisode,
        allEpisodes,
        panelDensityMode,
        setPanelDensityMode,
        estimatedPanelCount,
        isExtracting,
        script,
        storyboard,
        filteredPanelsCount: filteredPanels.length,
        handleAIExtractByEpisode: (ep) => handleAIExtractByEpisode(
          ep,
          panelDensityMode,
          () => setIsExtracting(true),
          () => setIsExtracting(false)
        ),
        handleBatchRegeneratePrompts: async () => {
          await handleBatchRegeneratePrompts(
            selectedPanels,
            enablePromptOptimization,
            (curr, tot) => setBatchProgress({ current: curr, total: tot }),
            () => setBatchProgress(null)
          );
        },
        handleExportStoryboard,
        handleExportPDF,
        handleExportPrompts,
        handleSave: () => storyboard && handleSave(storyboard),
        loadVersions,
        setShowHistoryDialog,
        onSyncToAssetLibrary: handleSyncToAssetLibrary
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "w-full px-6 py-8", children: [
      (viewMode === "list" || viewMode === "grid") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: viewMode === "list" ? "space-y-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredPanels.map((panel, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ShotCard,
        {
          panel,
          index: idx,
          isSelected: selectedPanels.has(panel.id),
          status: panelStatuses[panel.id],
          onSelect: () => handleToggleSelect(panel.id),
          onUpdate: (params) => handleUpdatePanel(panel.id, params),
          onDelete: () => handleDeletePanel(panel.id),
          onGenerateImage: async () => await handleGenerateImage(panel),
          onCopy: () => handleCopyPanel(panel),
          onSplit: (count) => handleSplitPanel(panel.id, count),
          onGeneratePrompts: () => handleGeneratePrompts(panel),
          onApplyPreset: (params) => handleApplyPreset(panel.id, params),
          onCopyPrompt: handleCopyPrompt,
          viewMode,
          densityMode: panelDensityMode
        },
        panel.id
      )) }),
      viewMode === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TimelineView,
        {
          panels: filteredPanels,
          selectedPanels,
          onToggleSelect: handleToggleSelect,
          renderListView: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 mt-8", children: filteredPanels.map((panel, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShotCard,
            {
              panel,
              index: idx,
              isSelected: selectedPanels.has(panel.id),
              status: panelStatuses[panel.id],
              onSelect: () => handleToggleSelect(panel.id),
              onUpdate: (params) => handleUpdatePanel(panel.id, params),
              onDelete: () => handleDeletePanel(panel.id),
              onGenerateImage: async () => await handleGenerateImage(panel),
              onCopy: () => handleCopyPanel(panel),
              onSplit: (count) => handleSplitPanel(panel.id, count),
              onGeneratePrompts: () => handleGeneratePrompts(panel),
              onApplyPreset: (params) => handleApplyPreset(panel.id, params),
              onCopyPrompt: handleCopyPrompt,
              viewMode: "list",
              densityMode: panelDensityMode
            },
            panel.id
          )) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-6 pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      BatchActionBar,
      {
        filteredPanelsCount: filteredPanels.length,
        totalDuration,
        selectedPanelsSize: selectedPanels.size,
        selectedEpisode,
        handleSelectAll,
        handleBatchDelete: () => handleBatchDelete(selectedPanels),
        handleBatchApplyParams: (params) => handleBatchApplyParams(selectedPanels, params),
        handleGenerateAllImages,
        handleAddPanel,
        handleApplyTemplate,
        handleRefreshAllPrompts: async () => {
          const allIds = new Set(filteredPanels.map((p) => p.id));
          await handleBatchRegeneratePrompts(
            allIds,
            enablePromptOptimization,
            (curr, tot) => setBatchProgress({ current: curr, total: tot }),
            () => setBatchProgress(null)
          );
        },
        onPreview: () => setShowPreviewDialog(true),
        isGeneratingAll,
        batchProgress,
        filteredPanelIds: filteredPanels.map((p) => p.id),
        onCancelGeneration: () => {
          cancelAllTasks();
          setIsGeneratingAll(false);
          setBatchProgress(null);
        },
        onRetryFailed: () => {
          setIsGeneratingAll(true);
          retryFailedTasks();
        },
        failedCount: getQueueStats().failed
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      VersionHistoryDialog,
      {
        open: showHistoryDialog,
        onOpenChange: setShowHistoryDialog,
        versions,
        onRestore: handleRestoreVersion,
        onDelete: handleDeleteVersion,
        onSave: handleSaveVersion,
        onLoadVersions: loadVersions
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewDialog,
      {
        open: showPreviewDialog,
        onOpenChange: setShowPreviewDialog,
        panels: filteredPanels
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryboardPrintTemplate,
      {
        panels: filteredPanels,
        project: project || void 0,
        title: project == null ? void 0 : project.title
      }
    )
  ] });
}
function createStorage(keyPrefix) {
  return {
    /**
     * 生成完整的存储键
     */
    key: (id) => `${keyPrefix}_${id}`,
    /**
     * 获取存储的数据
     */
    get: (id) => {
      try {
        const key = `${keyPrefix}_${id}`;
        const data = localStorage.getItem(key);
        if (!data) return null;
        return JSON.parse(data);
      } catch (error) {
        console.error(`[Storage] Failed to get ${keyPrefix}_${id}:`, error);
        return null;
      }
    },
    /**
     * 保存数据到存储
     */
    set: (id, data) => {
      try {
        const key = `${keyPrefix}_${id}`;
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      } catch (error) {
        console.error(`[Storage] Failed to set ${keyPrefix}_${id}:`, error);
        return false;
      }
    },
    /**
     * 删除存储的数据
     */
    remove: (id) => {
      try {
        const key = `${keyPrefix}_${id}`;
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error(`[Storage] Failed to remove ${keyPrefix}_${id}:`, error);
        return false;
      }
    },
    /**
     * 检查数据是否存在
     */
    has: (id) => {
      const key = `${keyPrefix}_${id}`;
      return localStorage.getItem(key) !== null;
    }
  };
}
const styleSettingsStorage = createStorage("styleSettings");
function trackCharacterInScript(character, scripts) {
  const locations = [];
  scripts.forEach(({ script, chapterTitle, chapterId }) => {
    script.scenes.forEach((scene, sceneIndex) => {
      var _a, _b;
      if ((_a = scene.characters) == null ? void 0 : _a.includes(character.name)) {
        locations.push({
          type: "script",
          chapterId,
          chapterTitle,
          sceneNumber: scene.sceneNumber || sceneIndex + 1,
          context: `场景 ${scene.sceneNumber || sceneIndex + 1}: ${scene.location || "未知地点"}`
        });
      }
      (_b = scene.dialogues) == null ? void 0 : _b.forEach((dialogue) => {
        var _a2;
        if (dialogue.character === character.name) {
          locations.push({
            type: "script",
            chapterId,
            chapterTitle,
            sceneNumber: scene.sceneNumber || sceneIndex + 1,
            context: `台词: ${((_a2 = dialogue.lines) == null ? void 0 : _a2.slice(0, 50)) || ""}...`
          });
        }
      });
    });
  });
  const uniqueLocations = locations.filter(
    (loc, index, self) => index === self.findIndex((l) => l.chapterId === loc.chapterId && l.sceneNumber === loc.sceneNumber)
  );
  return uniqueLocations;
}
function trackCharacterInStoryboard(character, storyboards) {
  const locations = [];
  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      var _a, _b;
      if ((_a = panel.characters) == null ? void 0 : _a.includes(character.name)) {
        locations.push({
          type: "storyboard",
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `镜头 ${panel.panelNumber}: ${((_b = panel.description) == null ? void 0 : _b.slice(0, 50)) || ""}...`
        });
      }
    });
  });
  return locations;
}
function trackSceneInScript(scene, scripts) {
  const locations = [];
  scripts.forEach(({ script, chapterTitle, chapterId }) => {
    script.scenes.forEach((scriptScene, sceneIndex) => {
      const scriptLocation = (scriptScene.location || "").toLowerCase();
      const assetName = (scene.name || "").toLowerCase();
      const assetLocation = (scene.location || "").toLowerCase();
      if (assetName && scriptLocation.includes(assetName) || assetLocation && scriptLocation.includes(assetLocation) || scriptLocation && assetName.includes(scriptLocation)) {
        locations.push({
          type: "script",
          chapterId,
          chapterTitle,
          sceneNumber: scriptScene.sceneNumber || sceneIndex + 1,
          context: `场景 ${scriptScene.sceneNumber || sceneIndex + 1}: ${scriptScene.location || "未知地点"}`
        });
      }
    });
  });
  return locations;
}
function trackPropInStoryboard(prop, storyboards) {
  const locations = [];
  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      var _a, _b, _c;
      const desc = (panel.description || "").toLowerCase();
      const pName = (prop.name || "").toLowerCase();
      if ((_a = panel.props) == null ? void 0 : _a.includes(prop.name)) {
        locations.push({
          type: "storyboard",
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `镜头 ${panel.panelNumber}: ${((_b = panel.description) == null ? void 0 : _b.slice(0, 50)) || ""}...`
        });
      } else if (pName && desc.includes(pName)) {
        locations.push({
          type: "storyboard",
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `描述中提到: ${((_c = panel.description) == null ? void 0 : _c.slice(0, 50)) || ""}...`
        });
      }
    });
  });
  const uniqueLocations = locations.filter(
    (loc, index, self) => index === self.findIndex((l) => l.chapterId === loc.chapterId && l.panelNumber === loc.panelNumber)
  );
  return uniqueLocations;
}
function trackCostumeInStoryboard(costume, storyboards) {
  const locations = [];
  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      var _a, _b;
      if ((_a = panel.description) == null ? void 0 : _a.toLowerCase().includes(costume.name.toLowerCase())) {
        locations.push({
          type: "storyboard",
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `分镜 ${panel.panelNumber}: ${((_b = panel.description) == null ? void 0 : _b.slice(0, 50)) || ""}...`
        });
      }
    });
  });
  return locations;
}
function calculateAssetUsage(assets, scripts, storyboards) {
  const usageMap = /* @__PURE__ */ new Map();
  assets.characters.forEach((character) => {
    const scriptUsage = trackCharacterInScript(character, scripts);
    const storyboardUsage = trackCharacterInStoryboard(character, storyboards);
    usageMap.set(character.id, scriptUsage.length + storyboardUsage.length);
  });
  assets.scenes.forEach((scene) => {
    const scriptUsage = trackSceneInScript(scene, scripts);
    usageMap.set(scene.id, scriptUsage.length);
  });
  assets.props.forEach((prop) => {
    const storyboardUsage = trackPropInStoryboard(prop, storyboards);
    usageMap.set(prop.id, storyboardUsage.length);
  });
  assets.costumes.forEach((costume) => {
    const storyboardUsage = trackCostumeInStoryboard(costume, storyboards);
    usageMap.set(costume.id, storyboardUsage.length);
  });
  return usageMap;
}
function canSafelyDeleteAsset(assetId, assetType, usageCount) {
  if (usageCount === 0) {
    return { canDelete: true };
  }
  const typeNames = {
    character: "角色",
    scene: "场景",
    prop: "道具",
    costume: "服饰"
  };
  return {
    canDelete: true,
    warning: `此${typeNames[assetType]}在 ${usageCount} 个地方被引用，删除后这些引用将失效。`
  };
}
const mergeAssets = (oldAssets, newAssets) => {
  const merge = (oldList, newList, imageKeys) => {
    const oldMap = new Map(oldList.map((item) => [item.name.trim().toLowerCase(), item]));
    const merged = [...oldList];
    newList.forEach((newItem) => {
      const nameKey = newItem.name.trim().toLowerCase();
      const existingItem = oldMap.get(nameKey);
      if (existingItem) {
        const idx = merged.findIndex((m) => m.id === existingItem.id);
        if (idx !== -1) {
          const updatedItem = { ...newItem, ...existingItem };
          const textFields = ["description", "appearance", "personality", "environment", "location", "category", "aiPrompt", "fullBodyPrompt", "facePrompt", "widePrompt", "mediumPrompt", "closeupPrompt"];
          textFields.forEach((field) => {
            if (newItem[field]) {
              updatedItem[field] = newItem[field];
            }
          });
          merged[idx] = updatedItem;
        }
      } else {
        merged.push(newItem);
      }
    });
    return merged;
  };
  return {
    projectId: oldAssets.projectId,
    characters: merge(oldAssets.characters, newAssets.characters),
    scenes: merge(oldAssets.scenes, newAssets.scenes),
    props: merge(oldAssets.props, newAssets.props),
    costumes: merge(oldAssets.costumes, newAssets.costumes)
  };
};
function useAssetData({ projectId }) {
  const [project, setProject] = reactExports.useState(null);
  const [assets, setAssets] = reactExports.useState(null);
  const [isExtracting, setIsExtracting] = reactExports.useState(false);
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [styleSettings, setStyleSettings] = reactExports.useState({
    mode: "manual",
    autoApplyToNew: true,
    protectManualEdits: true,
    confirmBeforeApply: true,
    showPreview: true
  });
  const loadAssets = reactExports.useCallback(async () => {
    if (!projectId) return;
    const assetsData = await assetStorage.getByProjectId(projectId);
    setAssets(assetsData || {
      projectId,
      characters: [],
      scenes: [],
      props: [],
      costumes: []
    });
  }, [projectId]);
  const loadProject = reactExports.useCallback(async () => {
    if (!projectId) return;
    const proj = await projectStorage.getById(projectId);
    setProject(proj || null);
  }, [projectId]);
  reactExports.useEffect(() => {
    if (projectId) {
      loadAssets();
      loadProject();
      const savedSettings = styleSettingsStorage.get(projectId);
      if (savedSettings) {
        setStyleSettings(savedSettings);
      }
    }
  }, [projectId, loadAssets, loadProject]);
  const handleSave = reactExports.useCallback(async () => {
    if (!assets) return;
    await assetStorage.save(assets);
    toast.success("项目库已保存");
  }, [assets]);
  const handleAIExtract = reactExports.useCallback(async (isMerge = false) => {
    if (!projectId) return;
    const chapters = await chapterStorage.getByProjectId(projectId);
    const allOriginalText = chapters.map((c) => c.originalText).join("\n\n");
    if (!allOriginalText) {
      toast.error("请先在章节中添加内容");
      return;
    }
    const allScenes = [];
    for (const chapter of chapters) {
      const script = await scriptStorage.getByChapterId(chapter.id);
      if (script) {
        allScenes.push(...script.scenes.map((scene) => ({
          ...scene,
          sceneType: scene.sceneType || "INT",
          dialogues: scene.dialogues || [],
          transition: scene.transition
        })));
      }
    }
    setIsExtracting(true);
    try {
      const extracted = await extractAssets(allOriginalText, allScenes, project == null ? void 0 : project.directorStyle);
      const rawNewAssets = {
        projectId,
        ...extracted
      };
      let finalAssets = rawNewAssets;
      if (isMerge && assets) {
        finalAssets = mergeAssets(assets, rawNewAssets);
      }
      await assetStorage.save(finalAssets);
      setAssets(finalAssets);
      toast.success(isMerge ? "增量分析完成！" : "全量覆盖提取完成！");
    } catch (error) {
      console.error("AI extract failed:", error);
      toast.error("提取失败，请重试");
    } finally {
      setIsExtracting(false);
    }
  }, [projectId, project, assets]);
  const handleSyncDirectorStyle = reactExports.useCallback(async () => {
    console.log("[风格同步] 开始同步，project:", project == null ? void 0 : project.id, "directorStyle:", (project == null ? void 0 : project.directorStyle) ? "已设置" : "未设置", "assets:", assets ? "已加载" : "未加载");
    if (!(project == null ? void 0 : project.directorStyle)) {
      console.warn("[风格同步] 失败：项目未设定导演风格");
      toast.error('当前项目未设定导演风格，请先在"导演风格"页面设置风格');
      return;
    }
    if (!assets) {
      console.warn("[风格同步] 失败：资产未加载");
      toast.error("资产库未加载，请稍后重试");
      return;
    }
    try {
      setIsSyncing(true);
      const updatedCharacters = assets.characters.map((char) => {
        if (!char.triggerWord) {
          return {
            ...char,
            triggerWord: PromptEngine.generateTriggerWord(char.name, char.id)
          };
        }
        return char;
      });
      const updatedAssetsPreSync = { ...assets, characters: updatedCharacters };
      const {
        batchApplyStyleToCharacters: batchApplyStyleToCharacters2,
        batchApplyStyleToScenes: batchApplyStyleToScenes2,
        batchApplyStyleToProps: batchApplyStyleToProps2,
        batchApplyStyleToCostumes: batchApplyStyleToCostumes2
      } = await __vitePreload(async () => {
        const {
          batchApplyStyleToCharacters: batchApplyStyleToCharacters3,
          batchApplyStyleToScenes: batchApplyStyleToScenes3,
          batchApplyStyleToProps: batchApplyStyleToProps3,
          batchApplyStyleToCostumes: batchApplyStyleToCostumes3
        } = await Promise.resolve().then(() => promptOptimizer);
        return {
          batchApplyStyleToCharacters: batchApplyStyleToCharacters3,
          batchApplyStyleToScenes: batchApplyStyleToScenes3,
          batchApplyStyleToProps: batchApplyStyleToProps3,
          batchApplyStyleToCostumes: batchApplyStyleToCostumes3
        };
      }, true ? void 0 : void 0);
      const syncedAssets = {
        ...updatedAssetsPreSync,
        characters: batchApplyStyleToCharacters2(updatedAssetsPreSync.characters, project.directorStyle),
        scenes: batchApplyStyleToScenes2(assets.scenes, project.directorStyle),
        props: batchApplyStyleToProps2(assets.props, project.directorStyle),
        costumes: batchApplyStyleToCostumes2(assets.costumes, updatedAssetsPreSync.characters, project.directorStyle)
      };
      await assetStorage.save(syncedAssets);
      setAssets(syncedAssets);
      toast.success("全库提示词已同步至最新导演风格，并已自动完善角色特征字段！");
    } catch (error) {
      console.error("Sync director style failed:", error);
      toast.error("同步失败");
    } finally {
      setIsSyncing(false);
    }
  }, [project, assets]);
  const handleUpdateCharacter = reactExports.useCallback((id, updates) => {
    setAssets((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        characters: prev.characters.map((c) => c.id === id ? { ...c, ...updates } : c)
      };
    });
  }, []);
  const handleAddCharacter = reactExports.useCallback(() => {
    const newCharacter = {
      id: generateId(),
      name: "新角色",
      description: "",
      appearance: "",
      personality: "",
      avatar: "",
      fullBodyPreview: "",
      facePreview: "",
      fullBodyPrompt: "",
      facePrompt: "",
      isGeneratingFullBody: false,
      isGeneratingFace: false,
      tags: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      usageCount: 0
    };
    setAssets((prev) => prev ? { ...prev, characters: [...prev.characters, newCharacter] } : prev);
  }, []);
  const handleDeleteCharacter = reactExports.useCallback((id, usageCount) => {
    const { warning } = canSafelyDeleteAsset(id, "character", usageCount);
    if (warning && !confirm(warning + "\n\n确定要删除吗？")) return;
    setAssets((prev) => prev ? { ...prev, characters: prev.characters.filter((c) => c.id !== id) } : prev);
  }, []);
  const handleUpdateScene = reactExports.useCallback((id, updates) => {
    setAssets((prev) => prev ? { ...prev, scenes: prev.scenes.map((s) => s.id === id ? { ...s, ...updates } : s) } : prev);
  }, []);
  const handleAddScene = reactExports.useCallback(() => {
    const newScene = {
      id: generateId(),
      name: "新场景",
      description: "",
      location: "",
      environment: "",
      image: "",
      widePrompt: "",
      mediumPrompt: "",
      closeupPrompt: "",
      widePreview: "",
      mediumPreview: "",
      closeupPreview: "",
      isGeneratingWide: false,
      isGeneratingMedium: false,
      isGeneratingCloseup: false,
      tags: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      usageCount: 0
    };
    setAssets((prev) => prev ? { ...prev, scenes: [...prev.scenes, newScene] } : prev);
  }, []);
  const handleDeleteScene = reactExports.useCallback((id, usageCount) => {
    const { warning } = canSafelyDeleteAsset(id, "scene", usageCount);
    if (warning && !confirm(warning + "\n\n确定要删除吗？")) return;
    setAssets((prev) => prev ? { ...prev, scenes: prev.scenes.filter((s) => s.id !== id) } : prev);
  }, []);
  const handleUpdateProp = reactExports.useCallback((id, updates) => {
    setAssets((prev) => prev ? { ...prev, props: prev.props.map((p) => p.id === id ? { ...p, ...updates } : p) } : prev);
  }, []);
  const handleAddProp = reactExports.useCallback(() => {
    const newProp = {
      id: generateId(),
      name: "新道具",
      description: "",
      category: "",
      image: "",
      aiPrompt: "",
      preview: "",
      isGenerating: false,
      tags: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      usageCount: 0
    };
    setAssets((prev) => prev ? { ...prev, props: [...prev.props, newProp] } : prev);
  }, []);
  const handleDeleteProp = reactExports.useCallback((id, usageCount) => {
    const { warning } = canSafelyDeleteAsset(id, "prop", usageCount);
    if (warning && !confirm(warning + "\n\n确定要删除吗？")) return;
    setAssets((prev) => prev ? { ...prev, props: prev.props.filter((p) => p.id !== id) } : prev);
  }, []);
  const handleUpdateCostume = reactExports.useCallback((id, updates) => {
    setAssets((prev) => prev ? { ...prev, costumes: prev.costumes.map((c) => c.id === id ? { ...c, ...updates } : c) } : prev);
  }, []);
  const handleAddCostume = reactExports.useCallback(() => {
    if (!assets || assets.characters.length === 0) {
      toast.error("请先添加角色");
      return;
    }
    const newCostume = {
      id: generateId(),
      characterId: assets.characters[0].id,
      name: "新服饰",
      description: "",
      style: "",
      image: "",
      aiPrompt: "",
      preview: "",
      isGenerating: false,
      tags: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      usageCount: 0
    };
    setAssets((prev) => prev ? { ...prev, costumes: [...prev.costumes, newCostume] } : prev);
  }, [assets]);
  const handleDeleteCostume = reactExports.useCallback((id, usageCount) => {
    const { warning } = canSafelyDeleteAsset(id, "costume", usageCount);
    if (warning && !confirm(warning + "\n\n确定要删除吗？")) return;
    setAssets((prev) => prev ? { ...prev, costumes: prev.costumes.filter((c) => c.id !== id) } : prev);
  }, []);
  const handleAddTag = reactExports.useCallback((itemId, itemType, tag) => {
    if (!tag.trim()) return;
    setAssets((prev) => {
      if (!prev) return prev;
      const items = prev[itemType === "character" ? "characters" : itemType === "scene" ? "scenes" : itemType === "prop" ? "props" : "costumes"];
      return {
        ...prev,
        [itemType === "character" ? "characters" : itemType === "scene" ? "scenes" : itemType === "prop" ? "props" : "costumes"]: items.map((item) => {
          if (item.id === itemId) {
            const currentTags = item.tags || [];
            if (!currentTags.includes(tag.trim())) {
              return { ...item, tags: [...currentTags, tag.trim()] };
            }
          }
          return item;
        })
      };
    });
  }, []);
  const handleRemoveTag = reactExports.useCallback((itemId, itemType, tag) => {
    setAssets((prev) => {
      if (!prev) return prev;
      const items = prev[itemType === "character" ? "characters" : itemType === "scene" ? "scenes" : itemType === "prop" ? "props" : "costumes"];
      return {
        ...prev,
        [itemType === "character" ? "characters" : itemType === "scene" ? "scenes" : itemType === "prop" ? "props" : "costumes"]: items.map((item) => {
          if (item.id === itemId) {
            const currentTags = item.tags || [];
            return { ...item, tags: currentTags.filter((t) => t !== tag) };
          }
          return item;
        })
      };
    });
  }, []);
  const handleBatchDelete = reactExports.useCallback((selectedItems) => {
    if (!assets || selectedItems.length === 0) return;
    if (!confirm(`确定要删除选中的 ${selectedItems.length} 个项目吗？`)) return;
    setAssets((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        characters: prev.characters.filter((c) => !selectedItems.includes(c.id)),
        scenes: prev.scenes.filter((s) => !selectedItems.includes(s.id)),
        props: prev.props.filter((p) => !selectedItems.includes(p.id)),
        costumes: prev.costumes.filter((c) => !selectedItems.includes(c.id))
      };
    });
    toast.success("批量删除成功");
  }, [assets]);
  const handleReorderAssets = reactExports.useCallback((itemType, startIndex, endIndex) => {
    setAssets((prev) => {
      if (!prev) return prev;
      const listKey = itemType === "character" ? "characters" : itemType === "scene" ? "scenes" : itemType === "prop" ? "props" : "costumes";
      const newList = [...prev[listKey]];
      const [removed] = newList.splice(startIndex, 1);
      newList.splice(endIndex, 0, removed);
      return {
        ...prev,
        [listKey]: newList
      };
    });
  }, []);
  return {
    project,
    assets,
    setAssets,
    isExtracting,
    isSyncing,
    styleSettings,
    setStyleSettings,
    handleSave,
    handleAIExtract,
    handleSyncDirectorStyle,
    handleUpdateCharacter,
    handleAddCharacter,
    handleDeleteCharacter,
    handleUpdateScene,
    handleAddScene,
    handleDeleteScene,
    handleUpdateProp,
    handleAddProp,
    handleDeleteProp,
    handleUpdateCostume,
    handleAddCostume,
    handleDeleteCostume,
    handleAddTag,
    handleRemoveTag,
    handleBatchDelete,
    handleReorderAssets,
    // 🆕
    loadAssets,
    loadProject
  };
}
function useImageGeneration({
  assets,
  project,
  handleUpdateCharacter,
  handleUpdateScene,
  handleUpdateProp,
  handleUpdateCostume
}) {
  const [enablePromptOptimization, setEnablePromptOptimization] = reactExports.useState(true);
  const [isBatchGenerating, setIsBatchGenerating] = reactExports.useState(false);
  const [batchProgress, setBatchProgress] = reactExports.useState({ current: 0, total: 0 });
  const getImageGenerationErrorMessage = (error) => {
    const errorMsg = error instanceof Error ? error.message : String(error);
    if (errorMsg.includes("Missing API Key")) return "请先在设置页面配置API密钥";
    if (errorMsg.includes("Missing Image Endpoint ID")) return "请先在设置页面配置图片端点ID";
    if (errorMsg.includes("InvalidParameter")) return "参数错误,请检查提示词格式";
    if (errorMsg.includes("400")) return "请求格式错误,请重试或联系管理员";
    if (errorMsg.includes("401") || errorMsg.includes("403")) return "API密钥无效或已过期,请检查配置";
    if (errorMsg.includes("429")) return "API调用次数超限,请稍后重试";
    if (errorMsg.includes("500") || errorMsg.includes("502") || errorMsg.includes("503")) return "服务器错误,请稍后重试";
    if (errorMsg.includes("timeout") || errorMsg.includes("network")) return "网络连接超时,请检查网络连接";
    return "生成失败,请检查网络连接和API配置";
  };
  const handleGenerateCharacterFullBody = async (characterId) => {
    var _a, _b;
    const character = assets == null ? void 0 : assets.characters.find((c) => c.id === characterId);
    if (!character || !character.fullBodyPrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateCharacter(characterId, { isGeneratingFullBody: true });
    try {
      let optimizedPrompt = character.fullBodyPrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${characterId}` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${character.name} 的全身正视图: ${character.appearance || ""}, ${character.fullBodyPrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "character");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${characterId}` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.CHARACTER_FULL_BODY, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateCharacter(characterId, {
        fullBodyPreview: imageUrl,
        isGeneratingFullBody: false
      });
      toast.success("全身图生成成功!", { id: `gen-${characterId}` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${characterId}` });
      handleUpdateCharacter(characterId, { isGeneratingFullBody: false });
    }
  };
  const handleGenerateCharacterFace = async (characterId) => {
    var _a, _b;
    const character = assets == null ? void 0 : assets.characters.find((c) => c.id === characterId);
    if (!character || !character.facePrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateCharacter(characterId, { isGeneratingFace: true });
    try {
      let optimizedPrompt = character.facePrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${characterId}-face` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${character.name} 的脸部特写: ${character.appearance || ""}, ${character.facePrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "character");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${characterId}-face` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.CHARACTER_FACE, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateCharacter(characterId, {
        facePreview: imageUrl,
        isGeneratingFace: false
      });
      toast.success("脸部图生成成功!", { id: `gen-${characterId}-face` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${characterId}-face` });
      handleUpdateCharacter(characterId, { isGeneratingFace: false });
    }
  };
  const handleGenerateSceneWide = async (sceneId) => {
    var _a, _b;
    const scene = assets == null ? void 0 : assets.scenes.find((s) => s.id === sceneId);
    if (!scene || !scene.widePrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateScene(sceneId, { isGeneratingWide: true });
    try {
      let optimizedPrompt = scene.widePrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${sceneId}-wide` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${scene.name} 场景 - 远景: ${scene.environment || ""}, ${scene.widePrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "scene");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${sceneId}-wide` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_WIDE, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateScene(sceneId, {
        widePreview: imageUrl,
        isGeneratingWide: false
      });
      toast.success("远景图生成成功!", { id: `gen-${sceneId}-wide` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-wide` });
      handleUpdateScene(sceneId, { isGeneratingWide: false });
    }
  };
  const handleGenerateSceneMedium = async (sceneId) => {
    var _a, _b;
    const scene = assets == null ? void 0 : assets.scenes.find((s) => s.id === sceneId);
    if (!scene || !scene.mediumPrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateScene(sceneId, { isGeneratingMedium: true });
    try {
      let optimizedPrompt = scene.mediumPrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${sceneId}-medium` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${scene.name} 场景 - 中景: ${scene.environment || ""}, ${scene.mediumPrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "scene");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${sceneId}-medium` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_MEDIUM, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateScene(sceneId, {
        mediumPreview: imageUrl,
        isGeneratingMedium: false
      });
      toast.success("中景图生成成功!", { id: `gen-${sceneId}-medium` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-medium` });
      handleUpdateScene(sceneId, { isGeneratingMedium: false });
    }
  };
  const handleGenerateSceneCloseup = async (sceneId) => {
    var _a, _b;
    const scene = assets == null ? void 0 : assets.scenes.find((s) => s.id === sceneId);
    if (!scene || !scene.closeupPrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateScene(sceneId, { isGeneratingCloseup: true });
    try {
      let optimizedPrompt = scene.closeupPrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${sceneId}-closeup` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${scene.name} 场景 - 特写: ${scene.environment || ""}, ${scene.closeupPrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "scene");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${sceneId}-closeup` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_CLOSEUP, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateScene(sceneId, {
        closeupPreview: imageUrl,
        isGeneratingCloseup: false
      });
      toast.success("特写图生成成功!", { id: `gen-${sceneId}-closeup` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-closeup` });
      handleUpdateScene(sceneId, { isGeneratingCloseup: false });
    }
  };
  const handleGenerateProp = async (propId) => {
    var _a, _b;
    const prop = assets == null ? void 0 : assets.props.find((p) => p.id === propId);
    if (!prop || !prop.aiPrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateProp(propId, { isGenerating: true });
    try {
      let optimizedPrompt = prop.aiPrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${propId}` });
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `道具 - ${prop.name}: ${prop.description || ""}, ${prop.aiPrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "prop");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${propId}` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.PROP, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateProp(propId, {
        preview: imageUrl,
        isGenerating: false
      });
      toast.success("道具图生成成功!", { id: `gen-${propId}` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${propId}` });
      handleUpdateProp(propId, { isGenerating: false });
    }
  };
  const handleGenerateCostume = async (costumeId) => {
    var _a, _b;
    const costume = assets == null ? void 0 : assets.costumes.find((c) => c.id === costumeId);
    if (!costume || !costume.aiPrompt) {
      toast.error("请先填写AI提示词");
      return;
    }
    handleUpdateCostume(costumeId, { isGenerating: true });
    try {
      let optimizedPrompt = costume.aiPrompt;
      if (enablePromptOptimization) {
        try {
          toast.loading("正在优化提示词...", { id: `gen-${costumeId}` });
          const character = assets == null ? void 0 : assets.characters.find((c) => c.id === costume.characterId);
          const styleHint = ((_a = project == null ? void 0 : project.directorStyle) == null ? void 0 : _a.artStyle) || "Cinematic";
          const desc = `${(character == null ? void 0 : character.name) || "角色"} 的服饰 - ${costume.name}: ${costume.description || ""}, ${costume.aiPrompt}`;
          optimizedPrompt = await optimizePrompt(desc, styleHint, "costume");
        } catch (e) {
          console.warn("Prompt optimization failed, using original", e);
        }
      }
      toast.loading("正在生成图片...", { id: `gen-${costumeId}` });
      const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.COSTUME, (_b = project == null ? void 0 : project.directorStyle) == null ? void 0 : _b.negativePrompt);
      handleUpdateCostume(costumeId, {
        preview: imageUrl,
        isGenerating: false
      });
      toast.success("服饰图生成成功!", { id: `gen-${costumeId}` });
    } catch (error) {
      console.error("生成失败:", error);
      toast.error(getImageGenerationErrorMessage(error), { id: `gen-${costumeId}` });
      handleUpdateCostume(costumeId, { isGenerating: false });
    }
  };
  const handleBatchGenerateAll = async () => {
    if (!assets) {
      toast.error("资产库未加载");
      return;
    }
    const tasks = [];
    assets.characters.forEach((char) => {
      if (!char.fullBodyPreview && char.fullBodyPrompt) {
        tasks.push({ type: "char-full", id: char.id, name: `${char.name} 全身图`, handler: () => handleGenerateCharacterFullBody(char.id) });
      }
      if (!char.facePreview && char.facePrompt) {
        tasks.push({ type: "char-face", id: char.id, name: `${char.name} 头像`, handler: () => handleGenerateCharacterFace(char.id) });
      }
    });
    assets.scenes.forEach((scene) => {
      if (!scene.widePreview && scene.widePrompt) {
        tasks.push({ type: "scene-wide", id: scene.id, name: `${scene.name} 远景`, handler: () => handleGenerateSceneWide(scene.id) });
      }
      if (!scene.mediumPreview && scene.mediumPrompt) {
        tasks.push({ type: "scene-med", id: scene.id, name: `${scene.name} 中景`, handler: () => handleGenerateSceneMedium(scene.id) });
      }
      if (!scene.closeupPreview && scene.closeupPrompt) {
        tasks.push({ type: "scene-close", id: scene.id, name: `${scene.name} 特写`, handler: () => handleGenerateSceneCloseup(scene.id) });
      }
    });
    assets.props.forEach((prop) => {
      if (!prop.preview && prop.aiPrompt) {
        tasks.push({ type: "prop", id: prop.id, name: prop.name, handler: () => handleGenerateProp(prop.id) });
      }
    });
    assets.costumes.forEach((costume) => {
      if (!costume.preview && costume.aiPrompt) {
        tasks.push({ type: "costume", id: costume.id, name: costume.name, handler: () => handleGenerateCostume(costume.id) });
      }
    });
    if (tasks.length === 0) {
      toast.info("所有资产都已生成图片，无需批量生成");
      return;
    }
    if (!confirm(`即将批量生成 ${tasks.length} 张图片，预计耗时 ${Math.ceil(tasks.length * 0.5)} 分钟。是否继续？`)) {
      return;
    }
    setIsBatchGenerating(true);
    setBatchProgress({ current: 0, total: tasks.length });
    toast.loading(`批量生成中 (0/${tasks.length})...`, { id: "batch-gen" });
    let successCount = 0;
    let failCount = 0;
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      setBatchProgress({ current: i + 1, total: tasks.length });
      toast.loading(`批量生成中 (${i + 1}/${tasks.length}): ${task.name}...`, { id: "batch-gen" });
      try {
        await task.handler();
        successCount++;
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`批量生成失败: ${task.name}`, error);
        failCount++;
      }
    }
    setIsBatchGenerating(false);
    setBatchProgress({ current: 0, total: 0 });
    if (failCount === 0) {
      toast.success(`批量生成完成！成功 ${successCount} 张`, { id: "batch-gen" });
    } else {
      toast.warning(`批量生成完成：成功 ${successCount} 张，失败 ${failCount} 张`, { id: "batch-gen" });
    }
  };
  return {
    enablePromptOptimization,
    setEnablePromptOptimization,
    isBatchGenerating,
    // 🆕
    batchProgress,
    // 🆕
    handleGenerateCharacterFullBody,
    handleGenerateCharacterFace,
    handleGenerateSceneWide,
    handleGenerateSceneMedium,
    handleGenerateSceneCloseup,
    handleGenerateProp,
    handleGenerateCostume,
    handleBatchGenerateAll
    // 🆕
  };
}
function useAssetUsage({ projectId, assets, setAssets }) {
  const [usageMap, setUsageMap] = reactExports.useState(/* @__PURE__ */ new Map());
  const [allScripts, setAllScripts] = reactExports.useState([]);
  const [allStoryboards, setAllStoryboards] = reactExports.useState([]);
  const calculateUsage = reactExports.useCallback(async () => {
    if (!projectId || !assets) return;
    const chapters = await chapterStorage.getByProjectId(projectId);
    const scripts = [];
    for (const chapter of chapters) {
      const script = await scriptStorage.getByChapterId(chapter.id);
      if (script) {
        scripts.push({ script, chapterTitle: chapter.title, chapterId: chapter.id });
      }
    }
    const storyboards = [];
    for (const chapter of chapters) {
      const storyboard = await storyboardStorage.getByChapterId(chapter.id);
      if (storyboard) {
        storyboards.push({ storyboard, chapterTitle: chapter.title, chapterId: chapter.id });
      }
    }
    const usage = calculateAssetUsage(assets, scripts, storyboards);
    setUsageMap(usage);
    setAllScripts(scripts);
    setAllStoryboards(storyboards);
    const updatedAssets = {
      ...assets,
      characters: assets.characters.map((c) => ({ ...c, usageCount: usage.get(c.id) || 0 })),
      scenes: assets.scenes.map((s) => ({ ...s, usageCount: usage.get(s.id) || 0 })),
      props: assets.props.map((p) => ({ ...p, usageCount: usage.get(p.id) || 0 })),
      costumes: assets.costumes.map((c) => ({ ...c, usageCount: usage.get(c.id) || 0 }))
    };
    if (JSON.stringify(updatedAssets) !== JSON.stringify(assets)) {
      setAssets(updatedAssets);
    }
  }, [projectId, assets, setAssets]);
  reactExports.useEffect(() => {
    if (projectId && assets) {
      calculateUsage();
    }
  }, [projectId, assets, calculateUsage]);
  const getCharacterUsageLocations = (character) => {
    if (!allScripts.length && !allStoryboards.length) return [];
    const scriptUsage = trackCharacterInScript(character, allScripts);
    const storyboardUsage = trackCharacterInStoryboard(character, allStoryboards);
    return [...scriptUsage, ...storyboardUsage];
  };
  const getSceneUsageLocations = (scene) => {
    if (!allScripts.length) return [];
    return trackSceneInScript(scene, allScripts);
  };
  const getPropUsageLocations = (prop) => {
    if (!allStoryboards.length) return [];
    return trackPropInStoryboard(prop, allStoryboards);
  };
  const getCostumeUsageLocations = (costume) => {
    if (!allStoryboards.length) return [];
    return trackCostumeInStoryboard(costume, allStoryboards);
  };
  return {
    usageMap,
    getCharacterUsageLocations,
    getSceneUsageLocations,
    getPropUsageLocations,
    getCostumeUsageLocations,
    calculateUsage
  };
}
const AssetLibraryHeader = ({
  projectId,
  projectName,
  isExtracting,
  isSyncing,
  isBatchGenerating,
  // 🆕
  onAIExtractClick,
  onSyncStyle,
  onBatchGenerate,
  // 🆕
  onSave,
  onExport,
  onImportClick,
  importInputRef,
  enablePromptOptimization,
  setEnablePromptOptimization,
  groupBy,
  onGroupByChange
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: "/", children: "首页" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: `/project/${projectId}`, children: projectName || "项目" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: "项目库" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "项目库" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "管理角色、场景、道具和服饰" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-[1px] bg-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "分组显示:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-gray-100 p-0.5 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onGroupByChange("none"),
                  className: `px-2 py-0.5 text-xs rounded transition-all ${groupBy === "none" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                  children: "平铺"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onGroupByChange("tags"),
                  className: `px-2 py-0.5 text-xs rounded transition-all ${groupBy === "tags" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                  children: "标签"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onGroupByChange("source"),
                  className: `px-2 py-0.5 text-xs rounded transition-all ${groupBy === "source" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                  children: "来源"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: onAIExtractClick,
            disabled: isExtracting,
            className: "gap-2 border-purple-200 text-purple-700 hover:bg-purple-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: `w-4 h-4 ${isExtracting ? "animate-spin" : ""}` }),
              isExtracting ? "分析中..." : "AI 一键提取"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: onBatchGenerate,
            disabled: isBatchGenerating,
            className: "gap-2 border-green-200 text-green-700 hover:bg-green-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isBatchGenerating ? "animate-spin" : ""}` }),
              isBatchGenerating ? "生成中..." : "批量生图"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: onImportClick, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
          "导入"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            ref: importInputRef,
            onChange: (e) => {
            },
            className: "hidden",
            accept: ".json"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: onExport, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          "导出"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: onSyncStyle,
            disabled: isSyncing,
            className: "gap-2 border-orange-200 text-orange-700 hover:bg-orange-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: `w-4 h-4 ${isSyncing ? "animate-spin" : ""}` }),
              "同步风格"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onSave, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          "保存资源"
        ] })
      ] })
    ] })
  ] });
};
const AssetStatsPanel = ({ stats }) => {
  if (!stats) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-3 border border-purple-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-purple-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-purple-600", children: "角色" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-purple-900", children: stats.characters.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-purple-600", children: [
        stats.characters.withImages,
        " 已生成图"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 rounded-lg p-3 border border-green-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-green-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-600", children: "场景" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-900", children: stats.scenes.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600", children: [
        stats.scenes.withImages,
        " 已生成图"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 rounded-lg p-3 border border-orange-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-600", children: "道具" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-orange-900", children: stats.props.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-orange-600", children: [
        stats.props.withImages,
        " 已生成图"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 rounded-lg p-3 border border-pink-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shirt, { className: "w-4 h-4 text-pink-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-pink-600", children: "服饰" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-pink-900", children: stats.costumes.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-pink-600", children: [
        stats.costumes.withImages,
        " 已生成图"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-3 border border-blue-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-600", children: "完成度" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-blue-900", children: [
        stats.completionRate,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600", children: "资源完整度" })
    ] })
  ] });
};
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$5, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const ExtractDialog = ({
  open,
  onOpenChange,
  onExtract
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-600" }),
        "AI 一键提取资源库"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "AI 将扫描所有章节内容，自动提取其中的角色、场景、道具和服饰。请选择提取模式：" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "flex flex-col items-start gap-1 h-auto p-4 hover:border-purple-500 hover:bg-purple-50",
          onClick: () => {
            onExtract(true);
            onOpenChange(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
              "增量分析 (推荐)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 text-left", children: "保留现有已生成的图片和 ID，仅补充新发现的资产或更新描述。" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "flex flex-col items-start gap-1 h-auto p-4 hover:border-red-500 hover:bg-red-50",
          onClick: () => {
            onExtract(false);
            onOpenChange(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold text-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-4 h-4" }),
              "全量覆盖"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 text-left", children: "清除当前库中所有内容，完全根据最新原文重新生成一份完整的资源库。" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" }) })
  ] }) });
};
function StyleApplicationDialog({
  isOpen,
  onClose,
  onConfirm,
  directorStyle,
  characters,
  scenes,
  props,
  costumes,
  protectManualEdits,
  showPreview
}) {
  const [expandedSection, setExpandedSection] = reactExports.useState(null);
  if (!isOpen) return null;
  const calculateImpact = () => {
    let affectedCount = 0;
    let protectedCount = 0;
    let totalCount = 0;
    characters.forEach((char) => {
      totalCount += 2;
      if (protectManualEdits) {
        if (char.fullBodyPrompt && char.fullBodyPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (char.facePrompt && char.facePrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
      } else {
        affectedCount += 2;
      }
    });
    scenes.forEach((scene) => {
      totalCount += 3;
      if (protectManualEdits) {
        if (scene.widePrompt && scene.widePrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (scene.mediumPrompt && scene.mediumPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (scene.closeupPrompt && scene.closeupPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
      } else {
        affectedCount += 3;
      }
    });
    props.forEach((prop) => {
      totalCount++;
      if (protectManualEdits && prop.aiPrompt && prop.aiPrompt.trim()) {
        protectedCount++;
      } else {
        affectedCount++;
      }
    });
    costumes.forEach((costume) => {
      totalCount++;
      if (protectManualEdits && costume.aiPrompt && costume.aiPrompt.trim()) {
        protectedCount++;
      } else {
        affectedCount++;
      }
    });
    return { affectedCount, protectedCount, totalCount };
  };
  const impact = calculateImpact();
  const getPreviewSamples = () => {
    const engine = new PromptEngine(directorStyle, { includeNegative: false });
    const samples = [];
    if (characters.length > 0) {
      const char = characters[0];
      const before = char.fullBodyPrompt || "（未设置）";
      const after = engine.forCharacterFullBody(char).positive;
      samples.push({
        type: "角色",
        name: char.name,
        before,
        after
      });
    }
    if (scenes.length > 0) {
      const scene = scenes[0];
      const before = scene.widePrompt || "（未设置）";
      const after = engine.forSceneWide(scene).positive;
      samples.push({
        type: "场景",
        name: scene.name,
        before,
        after
      });
    }
    if (props.length > 0) {
      const prop = props[0];
      const before = prop.aiPrompt || "（未设置）";
      const after = engine.forProp(prop).positive;
      samples.push({
        type: "道具",
        name: prop.name,
        before,
        after
      });
    }
    return samples;
  };
  const previewSamples = showPreview ? getPreviewSamples() : [];
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-gray-900 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-7 h-7 text-purple-600" }),
        "确认应用导演风格"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2", children: "即将将导演风格应用到项目资源的AI提示词，请确认操作" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-blue-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
          "影响范围统计"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 text-center border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600", children: impact.totalCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "总提示词数" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 text-center border border-green-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: impact.affectedCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "将被应用" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-4 text-center border border-orange-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-orange-600", children: impact.protectedCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-1", children: "受保护（跳过）" })
          ] })
        ] }),
        protectManualEdits && impact.protectedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-orange-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "保护模式已开启：" }),
          impact.protectedCount,
          " 个已有提示词将被跳过，不会被覆盖"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900", children: "详细清单" }),
        characters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "w-full px-4 py-3 bg-purple-50 hover:bg-purple-100 transition-colors flex items-center justify-between",
              onClick: () => toggleSection("characters"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-purple-900", children: [
                  "角色 (",
                  characters.length,
                  " 个，共 ",
                  characters.length * 2,
                  " 个提示词)"
                ] }),
                expandedSection === "characters" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-purple-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-purple-600" })
              ]
            }
          ),
          expandedSection === "characters" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white space-y-2", children: characters.map((char) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 pl-4", children: [
            "• ",
            char.name,
            " - 全身图、脸部图"
          ] }, char.id)) })
        ] }),
        scenes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "w-full px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-between",
              onClick: () => toggleSection("scenes"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-green-900", children: [
                  "场景 (",
                  scenes.length,
                  " 个，共 ",
                  scenes.length * 3,
                  " 个提示词)"
                ] }),
                expandedSection === "scenes" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-green-600" })
              ]
            }
          ),
          expandedSection === "scenes" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white space-y-2", children: scenes.map((scene) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 pl-4", children: [
            "• ",
            scene.name,
            " - 远景、中景、特写"
          ] }, scene.id)) })
        ] }),
        props.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "w-full px-4 py-3 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-between",
              onClick: () => toggleSection("props"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-orange-900", children: [
                  "道具 (",
                  props.length,
                  " 个)"
                ] }),
                expandedSection === "props" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-orange-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-orange-600" })
              ]
            }
          ),
          expandedSection === "props" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white space-y-2", children: props.map((prop) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 pl-4", children: [
            "• ",
            prop.name
          ] }, prop.id)) })
        ] }),
        costumes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "w-full px-4 py-3 bg-pink-50 hover:bg-pink-100 transition-colors flex items-center justify-between",
              onClick: () => toggleSection("costumes"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-pink-900", children: [
                  "服饰 (",
                  costumes.length,
                  " 个)"
                ] }),
                expandedSection === "costumes" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-pink-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-pink-600" })
              ]
            }
          ),
          expandedSection === "costumes" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white space-y-2", children: costumes.map((costume) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 pl-4", children: [
            "• ",
            costume.name
          ] }, costume.id)) })
        ] })
      ] }),
      showPreview && previewSamples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900", children: "提示词预览对比（示例）" }),
        previewSamples.map((sample, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 rounded", children: sample.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sample.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-gray-500 mb-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3 text-red-500" }),
                "应用前"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-50 border border-red-200 rounded text-sm text-gray-700 font-mono max-h-24 overflow-y-auto", children: sample.before })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-gray-500 mb-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 text-green-500" }),
                "应用后"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-green-50 border border-green-200 rounded text-sm text-gray-700 font-mono max-h-24 overflow-y-auto", children: sample.after })
            ] })
          ] })
        ] }, index))
      ] }),
      !protectManualEdits && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-yellow-900", children: "注意" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-800 mt-1", children: '保护模式未开启，所有提示词（包括已手动编辑的）都会被覆盖。 建议在"风格应用设置"中开启"保护手动编辑的提示词"。' })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t bg-gray-50 flex gap-3 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, className: "px-6", children: "取消" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => {
            onConfirm();
            onClose();
          },
          className: "px-6 bg-purple-600 hover:bg-purple-700",
          children: "确认应用"
        }
      )
    ] })
  ] }) });
}
const CharacterCard = reactExports.memo(({
  character,
  isSelected,
  isBatchSelected,
  isBatchMode,
  usageCount,
  onSelect,
  onDelete,
  onGenerateFullBody,
  onGenerateFace
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: `cursor-pointer transition-all hover:shadow-md relative group ${isSelected ? "ring-2 ring-blue-500 border-blue-200" : ""} ${isBatchSelected ? "bg-blue-50 border-blue-300" : ""}`,
      onClick: () => onSelect(character.id),
      children: [
        isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10", children: isBatchSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-5 h-5 text-blue-600 fill-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-5 h-5 text-gray-300 fill-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center", children: [
          character.facePreview || character.fullBodyPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: character.facePreview || character.fullBodyPreview,
              alt: character.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "bg-white/90 backdrop-blur-sm text-xs border-none shadow-sm", children: [
            usageCount,
            " 次使用"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg truncate group-hover:text-blue-600 transition-colors", children: character.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50",
                onClick: (e) => {
                  e.stopPropagation();
                  onDelete(character.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 line-clamp-2 min-h-[2.5rem]", children: character.description || "暂无描述" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1", children: [
            (_a = character.tags) == null ? void 0 : _a.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] py-0 px-1.5 h-4 font-normal", children: tag }, tag)),
            character.tags && character.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] py-0 px-1.5 h-4 font-normal text-gray-400", children: [
              "+",
              character.tags.length - 3
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 hidden group-hover:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 text-xs h-7",
                disabled: character.isGeneratingFullBody,
                onClick: (e) => {
                  e.stopPropagation();
                  onGenerateFullBody(character.id);
                },
                children: [
                  character.isGeneratingFullBody ? /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-3 h-3 mr-1" }),
                  "生成全身"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 text-xs h-7",
                disabled: character.isGeneratingFace,
                onClick: (e) => {
                  e.stopPropagation();
                  onGenerateFace(character.id);
                },
                children: [
                  character.isGeneratingFace ? /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3 h-3 mr-1" }),
                  "生成头像"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
});
function AssetUsagePanel({ usageLocations, usageCount }) {
  if (usageCount === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "此资源暂未被使用" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4 text-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-blue-900", children: [
        "使用情况 (",
        usageCount,
        " 处)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: usageLocations.map((location, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded px-3 py-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: location.type === "script" ? "default" : "secondary", children: location.type === "script" ? "剧本" : "分镜" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: location.chapterTitle })
      ] }),
      location.context && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs", children: location.context })
    ] }, index)) })
  ] });
}
function applyStyleToCharacterFullBody(character, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCharacterFullBody(character, existingPrompt).positive;
}
function applyStyleToCharacterFace(character, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCharacterFace(character, existingPrompt).positive;
}
function applyStyleToSceneWide(scene, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneWide(scene, existingPrompt).positive;
}
function applyStyleToSceneMedium(scene, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneMedium(scene, existingPrompt).positive;
}
function applyStyleToSceneCloseup(scene, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneCloseup(scene, existingPrompt).positive;
}
function applyStyleToProp(prop, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forProp(prop, existingPrompt).positive;
}
function applyStyleToCostume(costume, character, style, existingPrompt) {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCostume(costume, character, existingPrompt).positive;
}
function batchApplyStyleToCharacters(characters, style) {
  return characters.map((character) => ({
    ...character,
    fullBodyPrompt: applyStyleToCharacterFullBody(character, style, character.fullBodyPrompt),
    facePrompt: applyStyleToCharacterFace(character, style, character.facePrompt)
  }));
}
function batchApplyStyleToScenes(scenes, style) {
  return scenes.map((scene) => ({
    ...scene,
    widePrompt: applyStyleToSceneWide(scene, style, scene.widePrompt),
    mediumPrompt: applyStyleToSceneMedium(scene, style, scene.mediumPrompt),
    closeupPrompt: applyStyleToSceneCloseup(scene, style, scene.closeupPrompt)
  }));
}
function batchApplyStyleToProps(props, style) {
  return props.map((prop) => ({
    ...prop,
    aiPrompt: applyStyleToProp(prop, style, prop.aiPrompt)
  }));
}
function batchApplyStyleToCostumes(costumes, characters, style) {
  return costumes.map((costume) => {
    const character = characters.find((c) => c.id === costume.characterId);
    return {
      ...costume,
      aiPrompt: applyStyleToCostume(costume, character, style, costume.aiPrompt)
    };
  });
}
const PROMPT_TEMPLATES = {
  character: {
    fullBody: [
      "全身正视图，站立姿态，双手自然下垂，白色背景",
      "全身像，正面站立，自然光照明，简洁背景",
      "完整身体展示，标准站姿，中性表情，纯色背景"
    ],
    face: [
      "脸部特写，正面视角，中性表情，柔和光线",
      "面部细节，五官清晰，温和表情，肖像摄影",
      "头部特写，正面角度，自然表情，专业肖像"
    ]
  },
  scene: {
    wide: [
      "远景镜头，宽广视角，全景展示，建立镜头",
      "大远景，环境全貌，空间感强，电影构图",
      "广角镜头，整体环境，深度层次，视觉震撼"
    ],
    medium: [
      "中景镜头，主要区域，平衡构图，叙事清晰",
      "中等距离，关键区域，细节可见，视觉聚焦",
      "中景拍摄，重点突出，环境融合，故事感强"
    ],
    closeup: [
      "特写镜头，细节展示，情感表达，视觉冲击",
      "近距离特写，质感清晰，情绪饱满，艺术感强",
      "微距特写，细节丰富，氛围浓厚，视觉焦点"
    ]
  },
  prop: [
    "产品视图，白色背景，清晰细节，专业摄影",
    "物品展示，简洁背景，质感真实，光影自然",
    "道具特写，纯色背景，细节丰富，商业摄影"
  ],
  costume: [
    "服装展示，全身搭配，时尚摄影，清晰细节",
    "服饰特写，款式清晰，材质展示，专业拍摄",
    "穿搭展示，整体造型，风格明确，时尚感强"
  ]
};
const promptOptimizer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PROMPT_TEMPLATES,
  applyStyleToCharacterFace,
  applyStyleToCharacterFullBody,
  applyStyleToCostume,
  applyStyleToProp,
  applyStyleToSceneCloseup,
  applyStyleToSceneMedium,
  applyStyleToSceneWide,
  batchApplyStyleToCharacters,
  batchApplyStyleToCostumes,
  batchApplyStyleToProps,
  batchApplyStyleToScenes
}, Symbol.toStringTag, { value: "Module" }));
function PromptTemplateSelector({
  type,
  subType,
  onSelect,
  className = ""
}) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const getTemplates = () => {
    if (type === "character" && subType) {
      return PROMPT_TEMPLATES.character[subType];
    }
    if (type === "scene" && subType) {
      return PROMPT_TEMPLATES.scene[subType];
    }
    if (type === "prop") {
      return PROMPT_TEMPLATES.prop;
    }
    if (type === "costume") {
      return PROMPT_TEMPLATES.costume;
    }
    return [];
  };
  const templates = getTemplates();
  const handleSelect = (template) => {
    onSelect(template);
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        onClick: () => setIsOpen(!isOpen),
        className: "gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-3 h-3" }),
          "使用模板",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-10",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 px-2 py-1 font-medium", children: "选择提示词模板" }),
        templates.map((template, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSelect(template),
            className: "w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700 transition-colors",
            children: template
          },
          index
        ))
      ] }) })
    ] })
  ] });
}
function CharacterTab({
  assets,
  searchTerm,
  setSearchTerm,
  selectedCharacterId,
  setSelectedCharacterId,
  handleAddCharacter,
  handleUpdateCharacter,
  handleDeleteCharacter,
  handleAddTag,
  handleRemoveTag,
  getCharacterUsageLocations,
  usageMap,
  handleGenerateCharacterFullBody,
  handleGenerateCharacterFace,
  projectId,
  project,
  onReorder,
  groupBy = "none"
}) {
  const [newTag, setNewTag] = reactExports.useState("");
  const [draggedIndex, setDraggedIndex] = reactExports.useState(null);
  const [dragOverIndex, setDragOverIndex] = reactExports.useState(null);
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    if (onReorder) {
      onReorder(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const filteredCharacters = assets.characters.filter(
    (c) => (c.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || (c.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddCharacterTag = (id) => {
    if (!newTag.trim()) return;
    handleAddTag(id, "character", newTag.trim());
    setNewTag("");
  };
  if (selectedCharacterId !== null) {
    const character = assets.characters.find((c) => c.id === selectedCharacterId);
    if (!character) return null;
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("已复制到剪切板");
    };
    const handleOptimize = (type) => {
      if (!(project == null ? void 0 : project.directorStyle)) {
        toast.error("未设定导演风格，无法优化");
        return;
      }
      const engine = new PromptEngine(project.directorStyle);
      let result;
      if (type === "fullBody") {
        result = engine.forCharacterFullBody(character, character.fullBodyPrompt);
        handleUpdateCharacter(character.id, { fullBodyPrompt: result.positive });
      } else {
        result = engine.forCharacterFace(character, character.facePrompt);
        handleUpdateCharacter(character.id, { facePrompt: result.positive });
      }
      toast.success("提示词已根据导演风格优化");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setSelectedCharacterId(null),
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "返回列表"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-6 bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: character.name,
                onChange: (e) => handleUpdateCharacter(character.id, { name: e.target.value }),
                className: "text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              (character.tags || []).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
                tag,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  X,
                  {
                    className: "w-3 h-3 cursor-pointer hover:text-red-500",
                    onClick: () => handleRemoveTag(character.id, "character", tag)
                  }
                )
              ] }, tag)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "添加标签...",
                    value: newTag,
                    onChange: (e) => setNewTag(e.target.value),
                    onKeyPress: (e) => {
                      if (e.key === "Enter") handleAddCharacterTag(character.id);
                    },
                    className: "h-6 w-24 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2",
                    onClick: () => handleAddCharacterTag(character.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                handleDeleteCharacter(character.id);
                setSelectedCharacterId(null);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-500" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-700", children: "基本信息" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "角色描述" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: character.description,
                    onChange: (e) => handleUpdateCharacter(character.id, { description: e.target.value }),
                    rows: 4
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "性格特征" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: character.personality || "",
                      onChange: (e) => handleUpdateCharacter(character.id, { personality: e.target.value }),
                      placeholder: "如：开朗、冷静..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "外貌特征" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: character.appearance || "",
                      onChange: (e) => handleUpdateCharacter(character.id, { appearance: e.target.value }),
                      placeholder: "如：金发碧眼、高大..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "触发词 (Trigger Word)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: character.triggerWord || "",
                      onChange: (e) => handleUpdateCharacter(character.id, { triggerWord: e.target.value }),
                      placeholder: "用于模型训练或资源锁定的前缀...",
                      className: "font-mono text-xs"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "标准外貌描述 (Standard Appearance)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      value: character.standardAppearance || "",
                      onChange: (e) => handleUpdateCharacter(character.id, { standardAppearance: e.target.value }),
                      placeholder: "结构化的详细外观描述，用于跨场景保持一致性...",
                      rows: 3,
                      className: "text-xs"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AssetUsagePanel,
              {
                usageLocations: getCharacterUsageLocations(character),
                usageCount: usageMap.get(character.id) || 0
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "全身预览" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[9/16] bg-white rounded border border-dashed border-blue-300 overflow-hidden flex items-center justify-center", children: character.fullBodyPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: character.fullBodyPreview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-blue-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full text-xs h-7 gap-1 border-blue-300 text-blue-600",
                    onClick: () => handleGenerateCharacterFullBody(character.id),
                    disabled: character.isGeneratingFullBody,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                      character.isGeneratingFullBody ? "..." : "生成全身照"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "面部预览" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] bg-white rounded border border-dashed border-blue-300 overflow-hidden flex items-center justify-center", children: character.facePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: character.facePreview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-blue-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full text-xs h-7 gap-1 border-blue-300 text-blue-600",
                    onClick: () => handleGenerateCharacterFace(character.id),
                    disabled: character.isGeneratingFace,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                      character.isGeneratingFace ? "..." : "生成面部特写"
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2 text-blue-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
              "AI 角色提示词"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-400", children: "全身照提示词 (Full Body)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-blue-600 hover:text-blue-700 hover:bg-blue-50",
                        onClick: () => handleOptimize("fullBody"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                          "智能优化"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-gray-500",
                        onClick: () => handleCopy(character.fullBodyPrompt || ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                          "复制"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: character.fullBodyPrompt || "",
                    onChange: (e) => handleUpdateCharacter(character.id, { fullBodyPrompt: e.target.value }),
                    rows: 6,
                    className: "bg-white border-blue-100 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PromptTemplateSelector,
                  {
                    type: "character",
                    subType: "fullBody",
                    onSelect: (template) => {
                      const currentPrompt = character.fullBodyPrompt || "";
                      handleUpdateCharacter(character.id, {
                        fullBodyPrompt: currentPrompt ? `${currentPrompt}, ${template}` : template
                      });
                    }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-400", children: "面部特写提示词 (Face Detail)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-blue-600 hover:text-blue-700 hover:bg-blue-50",
                        onClick: () => handleOptimize("face"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                          "智能优化"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-gray-500",
                        onClick: () => handleCopy(character.facePrompt || ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                          "复制"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: character.facePrompt || "",
                    onChange: (e) => handleUpdateCharacter(character.id, { facePrompt: e.target.value }),
                    rows: 6,
                    className: "bg-white border-blue-100 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PromptTemplateSelector,
                  {
                    type: "character",
                    subType: "face",
                    onSelect: (template) => {
                      const currentPrompt = character.facePrompt || "";
                      handleUpdateCharacter(character.id, {
                        facePrompt: currentPrompt ? `${currentPrompt}, ${template}` : template
                      });
                    }
                  }
                ) })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "搜索角色...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-9"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddCharacter, variant: "outline", className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        "添加角色"
      ] })
    ] }),
    filteredCharacters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Users,
        title: "没有找到角色",
        description: "请尝试调整搜索条件或添加新角色。",
        actionLabel: "添加角色",
        onAction: handleAddCharacter
      }
    ) : groupBy === "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: filteredCharacters.map((char, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        draggable: groupBy === "none",
        onDragStart: (e) => handleDragStart(e, index),
        onDragEnd: handleDragEnd,
        onDragOver: (e) => handleDragOver(e, index),
        onDrop: (e) => handleDrop(e, index),
        className: `group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? "ring-2 ring-blue-500 scale-105" : ""}`,
        onClick: () => setSelectedCharacterId(char.id),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CharacterCard,
          {
            character: char,
            isSelected: selectedCharacterId === char.id,
            isBatchSelected: false,
            isBatchMode: false,
            usageCount: usageMap.get(char.id) || 0,
            onSelect: setSelectedCharacterId,
            onDelete: handleDeleteCharacter,
            onGenerateFullBody: handleGenerateCharacterFullBody,
            onGenerateFace: handleGenerateCharacterFace
          }
        )
      },
      char.id
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: (() => {
      const groups = {};
      if (groupBy === "source") {
        groups["从分镜同步"] = filteredCharacters.filter((c) => {
          var _a;
          return (_a = c.tags) == null ? void 0 : _a.includes("从分镜同步");
        });
        groups["手动添加"] = filteredCharacters.filter((c) => {
          var _a;
          return !((_a = c.tags) == null ? void 0 : _a.includes("从分镜同步"));
        });
      } else if (groupBy === "tags") {
        filteredCharacters.forEach((char) => {
          const tags = char.tags && char.tags.length > 0 ? char.tags : ["未分类"];
          tags.forEach((tag) => {
            if (!groups[tag]) groups[tag] = [];
            groups[tag].push(char);
          });
        });
      }
      return Object.entries(groups).filter(([_, items]) => items.length > 0).map(([groupName, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 font-medium", children: [
            groupName,
            " (",
            items.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: items.map((char) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group relative cursor-pointer",
            onClick: () => setSelectedCharacterId(char.id),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CharacterCard,
              {
                character: char,
                isSelected: selectedCharacterId === char.id,
                isBatchSelected: false,
                isBatchMode: false,
                usageCount: usageMap.get(char.id) || 0,
                onSelect: setSelectedCharacterId,
                onDelete: handleDeleteCharacter,
                onGenerateFullBody: handleGenerateCharacterFullBody,
                onGenerateFace: handleGenerateCharacterFace
              }
            )
          },
          char.id
        )) })
      ] }, groupName));
    })() })
  ] });
}
function SceneTab({
  assets,
  searchTerm,
  setSearchTerm,
  selectedSceneId,
  setSelectedSceneId,
  handleAddScene,
  handleUpdateScene,
  handleDeleteScene,
  handleAddTag,
  handleRemoveTag,
  handleGenerateSceneWide,
  handleGenerateSceneMedium,
  handleGenerateSceneCloseup,
  getSceneUsageLocations,
  usageMap,
  project,
  onReorder,
  groupBy = "none"
}) {
  const [newTag, setNewTag] = reactExports.useState("");
  const [draggedIndex, setDraggedIndex] = reactExports.useState(null);
  const [dragOverIndex, setDragOverIndex] = reactExports.useState(null);
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    if (onReorder) {
      onReorder(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const filteredScenes = assets.scenes.filter(
    (s) => (s.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || (s.description || "").toLowerCase().includes(searchTerm.toLowerCase()) || (s.location || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (assets.scenes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Map$1,
        title: "没有场景",
        description: "场景是故事发生的舞台，快去添加一个吧。",
        actionLabel: "新建场景",
        onAction: handleAddScene
      }
    );
  }
  if (selectedSceneId !== null) {
    const scene = assets.scenes.find((s) => s.id === selectedSceneId);
    if (!scene) return null;
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("已复制到剪切板");
    };
    const handleOptimize = (type) => {
      if (!(project == null ? void 0 : project.directorStyle)) {
        toast.error("未设定导演风格，无法优化");
        return;
      }
      const engine = new PromptEngine(project.directorStyle);
      let result;
      if (type === "wide") {
        result = engine.forSceneWide(scene, scene.widePrompt);
        handleUpdateScene(scene.id, { widePrompt: result.positive });
      } else if (type === "medium") {
        result = engine.forSceneMedium(scene, scene.mediumPrompt);
        handleUpdateScene(scene.id, { mediumPrompt: result.positive });
      } else {
        result = engine.forSceneCloseup(scene, scene.closeupPrompt);
        handleUpdateScene(scene.id, { closeupPrompt: result.positive });
      }
      toast.success("提示词已根据导演风格优化");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setSelectedSceneId(null),
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "返回列表"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-6 bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: scene.name,
                onChange: (e) => handleUpdateScene(scene.id, { name: e.target.value }),
                className: "text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              (scene.tags || []).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
                tag,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  X,
                  {
                    className: "w-3 h-3 cursor-pointer hover:text-red-500",
                    onClick: () => handleRemoveTag(scene.id, "scene", tag)
                  }
                )
              ] }, tag)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "添加标签...",
                    value: newTag,
                    onChange: (e) => setNewTag(e.target.value),
                    onKeyPress: (e) => {
                      if (e.key === "Enter") {
                        handleAddTag(scene.id, "scene", newTag);
                        setNewTag("");
                      }
                    },
                    className: "h-6 w-24 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2",
                    onClick: () => {
                      handleAddTag(scene.id, "scene", newTag);
                      setNewTag("");
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                handleDeleteScene(scene.id);
                setSelectedSceneId(null);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-500" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-700", children: "基本信息" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "地点" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: scene.location,
                      onChange: (e) => handleUpdateScene(scene.id, { location: e.target.value })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "环境氛围" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: scene.environment,
                      onChange: (e) => handleUpdateScene(scene.id, { environment: e.target.value })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "场景描述" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: scene.description,
                    onChange: (e) => handleUpdateScene(scene.id, { description: e.target.value }),
                    rows: 3
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "时间环境" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: scene.timeOfDay || "day",
                      onChange: (e) => handleUpdateScene(scene.id, { timeOfDay: e.target.value }),
                      className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "day", children: "白天" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "night", children: "夜晚" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dawn", children: "黎明" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dusk", children: "黄昏" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "天气" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: scene.weather || "",
                      onChange: (e) => handleUpdateScene(scene.id, { weather: e.target.value }),
                      placeholder: "晴天、雨天..."
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AssetUsagePanel,
              {
                usageLocations: getSceneUsageLocations(scene),
                usageCount: usageMap.get(scene.id) || 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] sm:text-xs text-center block", children: "全景" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center", children: scene.widePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scene.widePreview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-green-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full text-[10px] h-7 gap-1 border-green-300 text-green-600",
                    onClick: () => handleGenerateSceneWide(scene.id),
                    disabled: scene.isGeneratingWide,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                      scene.isGeneratingWide ? "..." : "生成"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] sm:text-xs text-center block", children: "中景" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center", children: scene.mediumPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scene.mediumPreview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-green-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full text-[10px] h-7 gap-1 border-green-300 text-green-600",
                    onClick: () => handleGenerateSceneMedium(scene.id),
                    disabled: scene.isGeneratingMedium,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                      scene.isGeneratingMedium ? "..." : "生成"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] sm:text-xs text-center block", children: "特写" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center", children: scene.closeupPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scene.closeupPreview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-green-200" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full text-[10px] h-7 gap-1 border-green-300 text-green-600",
                    onClick: () => handleGenerateSceneCloseup(scene.id),
                    disabled: scene.isGeneratingCloseup,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                      scene.isGeneratingCloseup ? "..." : "生成"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500", children: "全景提示词" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50",
                        onClick: () => handleOptimize("wide"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                          "智能优化"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-gray-500",
                        onClick: () => handleCopy(scene.widePrompt || ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                          "复制"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: scene.widePrompt || "",
                    onChange: (e) => handleUpdateScene(scene.id, { widePrompt: e.target.value }),
                    rows: 3,
                    className: "text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500", children: "中景提示词" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50",
                        onClick: () => handleOptimize("medium"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                          "智能优化"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-gray-500",
                        onClick: () => handleCopy(scene.mediumPrompt || ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                          "复制"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: scene.mediumPrompt || "",
                    onChange: (e) => handleUpdateScene(scene.id, { mediumPrompt: e.target.value }),
                    rows: 3,
                    className: "text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-gray-500", children: "特写提示词" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50",
                        onClick: () => handleOptimize("closeup"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                          "智能优化"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-6 px-2 text-[10px] text-gray-500",
                        onClick: () => handleCopy(scene.closeupPrompt || ""),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                          "复制"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: scene.closeupPrompt || "",
                    onChange: (e) => handleUpdateScene(scene.id, { closeupPrompt: e.target.value }),
                    rows: 3,
                    className: "text-xs"
                  }
                )
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "搜索场景...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-9"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddScene, variant: "outline", className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        "添加场景"
      ] })
    ] }),
    filteredScenes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-gray-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Map$1, { className: "w-12 h-12 mx-auto mb-2 text-gray-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "没有找到相关场景" })
    ] }) : groupBy === "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredScenes.map((scene, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        draggable: groupBy === "none",
        onDragStart: (e) => handleDragStart(e, index),
        onDragEnd: handleDragEnd,
        onDragOver: (e) => handleDragOver(e, index),
        onDrop: (e) => handleDrop(e, index),
        className: `group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? "ring-2 ring-green-500 scale-105" : ""}`,
        onClick: () => setSelectedSceneId(scene.id),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-400 transition-all hover:shadow-lg bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center overflow-hidden relative", children: [
              scene.widePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: scene.widePreview,
                  alt: scene.name,
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Map$1, { className: "w-12 h-12 text-gray-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white border-t border-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-medium text-gray-900 truncate", children: scene.name }),
              scene.tags && scene.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-2 justify-center", children: scene.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] px-1 h-4", children: tag }, tag)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white border border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-50 hover:border-red-300",
              onClick: (e) => {
                e.stopPropagation();
                handleDeleteScene(scene.id);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 text-red-500" })
            }
          )
        ]
      },
      scene.id
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: (() => {
      const groups = {};
      if (groupBy === "source") {
        groups["从分镜同步"] = filteredScenes.filter((s) => {
          var _a;
          return (_a = s.tags) == null ? void 0 : _a.includes("从分镜同步");
        });
        groups["手动添加"] = filteredScenes.filter((s) => {
          var _a;
          return !((_a = s.tags) == null ? void 0 : _a.includes("从分镜同步"));
        });
      } else if (groupBy === "tags") {
        filteredScenes.forEach((scene) => {
          const tags = scene.tags && scene.tags.length > 0 ? scene.tags : ["未分类"];
          tags.forEach((tag) => {
            if (!groups[tag]) groups[tag] = [];
            groups[tag].push(scene);
          });
        });
      }
      return Object.entries(groups).filter(([_, items]) => items.length > 0).map(([groupName, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "px-3 py-1 bg-green-50 text-green-700 border-green-200 font-medium", children: [
            groupName,
            " (",
            items.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] flex-1 bg-gradient-to-r from-green-100 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: items.map((scene) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group relative cursor-pointer",
            onClick: () => setSelectedSceneId(scene.id),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-400 transition-all hover:shadow-lg bg-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center overflow-hidden relative", children: [
                scene.widePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: scene.widePreview,
                    alt: scene.name,
                    className: "w-full h-full object-cover"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Map$1, { className: "w-12 h-12 text-gray-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-medium text-gray-900 truncate", children: scene.name }) })
            ] })
          },
          scene.id
        )) })
      ] }, groupName));
    })() })
  ] });
}
const PropCard = reactExports.memo(({
  prop,
  isSelected,
  isBatchSelected,
  isBatchMode,
  onSelect,
  onDelete,
  onGenerate
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: `cursor-pointer transition-all hover:shadow-md relative group ${isSelected ? "ring-2 ring-orange-500 border-orange-200" : ""} ${isBatchSelected ? "bg-orange-50 border-orange-300" : ""}`,
      onClick: () => onSelect(prop.id),
      children: [
        isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10", children: isBatchSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-5 h-5 text-orange-600 fill-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-5 h-5 text-gray-300 fill-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center", children: [
          prop.preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: prop.preview,
              alt: prop.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm truncate group-hover:text-orange-600 transition-colors", children: prop.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50",
                onClick: (e) => {
                  e.stopPropagation();
                  onDelete(prop.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.3 h-3.3" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: (_a = prop.tags) == null ? void 0 : _a.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] py-0 px-1 h-4 font-normal", children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 hidden group-hover:flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "flex-1 text-[10px] h-6 px-1 border-orange-200 text-orange-600 hover:bg-orange-50",
              disabled: prop.isGenerating,
              onClick: (e) => {
                e.stopPropagation();
                onGenerate(prop.id);
              },
              children: [
                prop.isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-3 h-3 mr-1" }),
                "生图"
              ]
            }
          ) })
        ] })
      ]
    }
  );
});
function PropTab({
  assets,
  searchTerm,
  setSearchTerm,
  selectedPropId,
  setSelectedPropId,
  handleAddProp,
  handleUpdateProp,
  handleDeleteProp,
  handleAddTag,
  handleRemoveTag,
  handleGenerateProp,
  getPropUsageLocations,
  usageMap,
  project,
  handleBatchDelete,
  onReorder,
  groupBy = "none"
}) {
  const [newTag, setNewTag] = reactExports.useState("");
  const [draggedIndex, setDraggedIndex] = reactExports.useState(null);
  const [dragOverIndex, setDragOverIndex] = reactExports.useState(null);
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    if (onReorder) {
      onReorder(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const filteredProps = assets.props.filter(
    (p) => (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || (p.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddPropTag = (id) => {
    if (!newTag.trim()) return;
    handleAddTag(id, "prop", newTag.trim());
    setNewTag("");
  };
  if (selectedPropId !== null) {
    const prop = assets.props.find((p) => p.id === selectedPropId);
    if (!prop) return null;
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("已复制到剪切板");
    };
    const handleOptimize = () => {
      if (!(project == null ? void 0 : project.directorStyle)) {
        toast.error("未设定导演风格，无法优化");
        return;
      }
      const engine = new PromptEngine(project.directorStyle);
      const result = engine.forProp(prop, prop.aiPrompt);
      handleUpdateProp(prop.id, { aiPrompt: result.positive });
      toast.success("提示词已根据导演风格优化");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setSelectedPropId(null),
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "返回列表"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-6 bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: prop.name,
                onChange: (e) => handleUpdateProp(prop.id, { name: e.target.value }),
                className: "text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              (prop.tags || []).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
                tag,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  X,
                  {
                    className: "w-3 h-3 cursor-pointer hover:text-red-500",
                    onClick: () => handleRemoveTag(prop.id, "prop", tag)
                  }
                )
              ] }, tag)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "添加标签...",
                    value: newTag,
                    onChange: (e) => setNewTag(e.target.value),
                    onKeyPress: (e) => {
                      if (e.key === "Enter") handleAddPropTag(prop.id);
                    },
                    className: "h-6 w-24 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2",
                    onClick: () => handleAddPropTag(prop.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                handleDeleteProp(prop.id);
                setSelectedPropId(null);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-500" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-700", children: "基本信息" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "道具描述" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: prop.description,
                    onChange: (e) => handleUpdateProp(prop.id, { description: e.target.value }),
                    rows: 4
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AssetUsagePanel,
              {
                usageLocations: getPropUsageLocations(prop),
                usageCount: usageMap.get(prop.id) || 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-center block", children: "道具预览" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gray-50 rounded border border-dashed border-orange-300 overflow-hidden flex items-center justify-center relative group", children: [
              prop.preview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: prop.preview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-16 h-16 text-orange-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-8 h-8 text-white" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full gap-2 border-orange-300 text-orange-600",
                onClick: () => handleGenerateProp(prop.id),
                disabled: prop.isGenerating,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  prop.isGenerating ? "生成中..." : "生成道具图"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2 text-orange-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  "AI 绘画提示词"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px] text-orange-600 hover:text-orange-700 hover:bg-orange-50",
                      onClick: () => handleOptimize(),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                        "智能优化"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px] text-gray-500",
                      onClick: () => handleCopy(prop.aiPrompt || ""),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                        "复制"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: prop.aiPrompt || "",
                  onChange: (e) => handleUpdateProp(prop.id, { aiPrompt: e.target.value }),
                  rows: 6,
                  className: "text-xs",
                  placeholder: "描述道具的外观细节、材质、光影等..."
                }
              )
            ] })
          ] }) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "搜索道具...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-9"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddProp, variant: "outline", className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        "添加道具"
      ] })
    ] }),
    filteredProps.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Package,
        title: "没有道具",
        description: "请尝试调整搜索条件或添加新道具。",
        actionLabel: "添加道具",
        onAction: handleAddProp
      }
    ) : groupBy === "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredProps.map((prop, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        draggable: groupBy === "none",
        onDragStart: (e) => handleDragStart(e, index),
        onDragEnd: handleDragEnd,
        onDragOver: (e) => handleDragOver(e, index),
        onDrop: (e) => handleDrop(e, index),
        className: `group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? "ring-2 ring-orange-500 scale-105" : ""}`,
        onClick: () => setSelectedPropId(prop.id),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PropCard,
          {
            prop,
            isSelected: selectedPropId === prop.id,
            isBatchSelected: false,
            isBatchMode: false,
            onSelect: setSelectedPropId,
            onDelete: handleDeleteProp,
            onGenerate: handleGenerateProp
          }
        )
      },
      prop.id
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: (() => {
      const groups = {};
      if (groupBy === "source") {
        groups["从分镜同步"] = filteredProps.filter((p) => {
          var _a;
          return (_a = p.tags) == null ? void 0 : _a.includes("从分镜同步");
        });
        groups["手动添加"] = filteredProps.filter((p) => {
          var _a;
          return !((_a = p.tags) == null ? void 0 : _a.includes("从分镜同步"));
        });
      } else if (groupBy === "tags") {
        filteredProps.forEach((prop) => {
          const tags = prop.tags && prop.tags.length > 0 ? prop.tags : ["未分类"];
          tags.forEach((tag) => {
            if (!groups[tag]) groups[tag] = [];
            groups[tag].push(prop);
          });
        });
      }
      return Object.entries(groups).filter(([_, items]) => items.length > 0).map(([groupName, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "px-3 py-1 bg-orange-50 text-orange-700 border-orange-200 font-medium", children: [
            groupName,
            " (",
            items.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] flex-1 bg-gradient-to-r from-orange-100 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: items.map((prop) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group relative cursor-pointer",
            onClick: () => setSelectedPropId(prop.id),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PropCard,
              {
                prop,
                isSelected: selectedPropId === prop.id,
                isBatchSelected: false,
                isBatchMode: false,
                onSelect: setSelectedPropId,
                onDelete: handleDeleteProp,
                onGenerate: handleGenerateProp
              }
            )
          },
          prop.id
        )) })
      ] }, groupName));
    })() })
  ] });
}
const CostumeCard = reactExports.memo(({
  costume,
  isSelected,
  isBatchSelected,
  isBatchMode,
  onSelect,
  onDelete,
  onGenerate
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: `cursor-pointer transition-all hover:shadow-md relative group ${isSelected ? "ring-2 ring-pink-500 border-pink-200" : ""} ${isBatchSelected ? "bg-pink-50 border-pink-300" : ""}`,
      onClick: () => onSelect(costume.id),
      children: [
        isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10", children: isBatchSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-5 h-5 text-pink-600 fill-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-5 h-5 text-gray-300 fill-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center", children: [
          costume.preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: costume.preview,
              alt: costume.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shirt, { className: "w-12 h-12 text-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm truncate group-hover:text-pink-600 transition-colors", children: costume.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50",
                onClick: (e) => {
                  e.stopPropagation();
                  onDelete(costume.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: (_a = costume.tags) == null ? void 0 : _a.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] py-0 px-1 h-4 font-normal", children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 hidden group-hover:flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "flex-1 text-[10px] h-6 px-1 border-pink-200 text-pink-600 hover:bg-pink-50",
              disabled: costume.isGenerating,
              onClick: (e) => {
                e.stopPropagation();
                onGenerate(costume.id);
              },
              children: [
                costume.isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-3 h-3 mr-1" }),
                "生图"
              ]
            }
          ) })
        ] })
      ]
    }
  );
});
function CostumeTab({
  assets,
  searchTerm,
  setSearchTerm,
  selectedCostumeId,
  setSelectedCostumeId,
  handleAddCostume,
  handleUpdateCostume,
  handleDeleteCostume,
  handleAddTag,
  handleRemoveTag,
  handleGenerateCostume,
  getCostumeUsageLocations,
  usageMap,
  project,
  handleBatchDelete,
  onReorder,
  groupBy = "none"
}) {
  const [newTag, setNewTag] = reactExports.useState("");
  const [draggedIndex, setDraggedIndex] = reactExports.useState(null);
  const [dragOverIndex, setDragOverIndex] = reactExports.useState(null);
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    if (onReorder) {
      onReorder(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  const filteredCostumes = assets.costumes.filter(
    (c) => (c.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || (c.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddCostumeTag = (id) => {
    if (!newTag.trim()) return;
    handleAddTag(id, "costume", newTag.trim());
    setNewTag("");
  };
  if (selectedCostumeId !== null) {
    const costume = assets.costumes.find((c) => c.id === selectedCostumeId);
    if (!costume) return null;
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("已复制到剪切板");
    };
    const handleOptimize = () => {
      if (!(project == null ? void 0 : project.directorStyle)) {
        toast.error("未设定导演风格，无法优化");
        return;
      }
      const engine = new PromptEngine(project.directorStyle);
      const character = assets.characters.find((c) => c.id === costume.characterId);
      const result = engine.forCostume(costume, character, costume.aiPrompt);
      handleUpdateCostume(costume.id, { aiPrompt: result.positive });
      toast.success("提示词已根据导演风格优化");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setSelectedCostumeId(null),
          className: "gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "返回列表"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-6 bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: costume.name,
                onChange: (e) => handleUpdateCostume(costume.id, { name: e.target.value }),
                className: "text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
              (costume.tags || []).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
                tag,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  X,
                  {
                    className: "w-3 h-3 cursor-pointer hover:text-red-500",
                    onClick: () => handleRemoveTag(costume.id, "costume", tag)
                  }
                )
              ] }, tag)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "添加标签...",
                    value: newTag,
                    onChange: (e) => setNewTag(e.target.value),
                    onKeyPress: (e) => {
                      if (e.key === "Enter") handleAddCostumeTag(costume.id);
                    },
                    className: "h-6 w-24 text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2",
                    onClick: () => handleAddCostumeTag(costume.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                handleDeleteCostume(costume.id);
                setSelectedCostumeId(null);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-500" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-700", children: "基本信息" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "服饰描述" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: costume.description,
                    onChange: (e) => handleUpdateCostume(costume.id, { description: e.target.value }),
                    rows: 4
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AssetUsagePanel,
              {
                usageLocations: getCostumeUsageLocations(costume),
                usageCount: usageMap.get(costume.id) || 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-center block", children: "服饰预览" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gray-50 rounded border border-dashed border-pink-300 overflow-hidden flex items-center justify-center relative group", children: [
              costume.preview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: costume.preview, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shirt, { className: "w-16 h-16 text-pink-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-8 h-8 text-white" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full gap-2 border-pink-300 text-pink-600",
                onClick: () => handleGenerateCostume(costume.id),
                disabled: costume.isGenerating,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  costume.isGenerating ? "生成中..." : "生成服饰图"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2 text-pink-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  "AI 绘画提示词"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px] text-pink-600 hover:text-pink-700 hover:bg-pink-50",
                      onClick: () => handleOptimize(),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "w-3 h-3 mr-1" }),
                        "智能优化"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px] text-gray-500",
                      onClick: () => handleCopy(costume.aiPrompt || ""),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 mr-1" }),
                        "复制"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: costume.aiPrompt || "",
                  onChange: (e) => handleUpdateCostume(costume.id, { aiPrompt: e.target.value }),
                  rows: 6,
                  className: "text-xs",
                  placeholder: "描述服饰的款式、材质、颜色细节等..."
                }
              )
            ] })
          ] }) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "搜索服饰...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-9"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleAddCostume, variant: "outline", className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        "添加服饰"
      ] })
    ] }),
    filteredCostumes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Shirt,
        title: "没有服饰",
        description: "请尝试调整搜索条件或添加新服饰。",
        actionLabel: "添加服饰",
        onAction: handleAddCostume
      }
    ) : groupBy === "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredCostumes.map((costume, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        draggable: groupBy === "none",
        onDragStart: (e) => handleDragStart(e, index),
        onDragEnd: handleDragEnd,
        onDragOver: (e) => handleDragOver(e, index),
        onDrop: (e) => handleDrop(e, index),
        className: `group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? "ring-2 ring-pink-500 scale-105" : ""}`,
        onClick: () => setSelectedCostumeId(costume.id),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CostumeCard,
          {
            costume,
            isSelected: selectedCostumeId === costume.id,
            isBatchSelected: false,
            isBatchMode: false,
            onSelect: setSelectedCostumeId,
            onDelete: handleDeleteCostume,
            onGenerate: handleGenerateCostume
          }
        )
      },
      costume.id
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: (() => {
      const groups = {};
      if (groupBy === "source") {
        groups["从分镜同步"] = filteredCostumes.filter((c) => {
          var _a;
          return (_a = c.tags) == null ? void 0 : _a.includes("从分镜同步");
        });
        groups["手动添加"] = filteredCostumes.filter((c) => {
          var _a;
          return !((_a = c.tags) == null ? void 0 : _a.includes("从分镜同步"));
        });
      } else if (groupBy === "tags") {
        filteredCostumes.forEach((costume) => {
          const tags = costume.tags && costume.tags.length > 0 ? costume.tags : ["未分类"];
          tags.forEach((tag) => {
            if (!groups[tag]) groups[tag] = [];
            groups[tag].push(costume);
          });
        });
      }
      return Object.entries(groups).filter(([_, items]) => items.length > 0).map(([groupName, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "px-3 py-1 bg-pink-50 text-pink-700 border-pink-200 font-medium", children: [
            groupName,
            " (",
            items.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] flex-1 bg-gradient-to-r from-pink-100 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: items.map((costume) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group relative cursor-pointer",
            onClick: () => setSelectedCostumeId(costume.id),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CostumeCard,
              {
                costume,
                isSelected: selectedCostumeId === costume.id,
                isBatchSelected: false,
                isBatchMode: false,
                onSelect: setSelectedCostumeId,
                onDelete: handleDeleteCostume,
                onGenerate: handleGenerateCostume
              }
            )
          },
          costume.id
        )) })
      ] }, groupName));
    })() })
  ] });
}
function AssetLibrary() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    project,
    assets,
    setAssets,
    isExtracting,
    isSyncing,
    styleSettings,
    handleSave,
    handleAIExtract,
    handleSyncDirectorStyle,
    handleUpdateCharacter,
    handleAddCharacter,
    handleDeleteCharacter,
    handleUpdateScene,
    handleAddScene,
    handleDeleteScene,
    handleUpdateProp,
    handleAddProp,
    handleDeleteProp,
    handleUpdateCostume,
    handleAddCostume,
    handleDeleteCostume,
    handleAddTag,
    handleRemoveTag,
    handleBatchDelete,
    handleReorderAssets
  } = useAssetData({ projectId });
  const {
    enablePromptOptimization,
    setEnablePromptOptimization,
    isBatchGenerating,
    // 🆕
    handleGenerateCharacterFullBody,
    handleGenerateCharacterFace,
    handleGenerateSceneWide,
    handleGenerateSceneMedium,
    handleGenerateSceneCloseup,
    handleGenerateProp,
    handleGenerateCostume,
    handleBatchGenerateAll
    // 🆕
  } = useImageGeneration({
    assets,
    project,
    handleUpdateCharacter,
    handleUpdateScene,
    handleUpdateProp,
    handleUpdateCostume
  });
  const {
    usageMap,
    getCharacterUsageLocations,
    getSceneUsageLocations,
    getPropUsageLocations,
    getCostumeUsageLocations
  } = useAssetUsage({ projectId, assets, setAssets });
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [showExtractDialog, setShowExtractDialog] = reactExports.useState(false);
  const [showStyleDialog, setShowStyleDialog] = reactExports.useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = reactExports.useState(null);
  const [selectedSceneId, setSelectedSceneId] = reactExports.useState(null);
  const [selectedPropId, setSelectedPropId] = reactExports.useState(null);
  const [selectedCostumeId, setSelectedCostumeId] = reactExports.useState(null);
  const [groupBy, setGroupBy] = reactExports.useState("none");
  const importInputRef = reactExports.useRef(null);
  const getInitialTab = () => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    const validTabs = ["character", "scene", "prop", "costume"];
    return tabParam && validTabs.includes(tabParam) ? tabParam : "character";
  };
  const [activeTab, setActiveTab] = reactExports.useState(getInitialTab);
  const handleTabChange = (value) => {
    const validTabs = ["character", "scene", "prop", "costume"];
    const tab = validTabs.includes(value) ? value : "character";
    setActiveTab(tab);
    const params = new URLSearchParams(location.search);
    params.set("tab", tab);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };
  const stats = assets ? {
    characters: {
      total: assets.characters.length,
      withImages: assets.characters.filter((c) => c.fullBodyPreview || c.facePreview).length
    },
    scenes: {
      total: assets.scenes.length,
      withImages: assets.scenes.filter((s) => s.widePreview || s.mediumPreview || s.closeupPreview).length
    },
    props: {
      total: assets.props.length,
      withImages: assets.props.filter((p) => p.preview).length
    },
    costumes: {
      total: assets.costumes.length,
      withImages: assets.costumes.filter((c) => c.preview).length
    },
    completionRate: (function() {
      const total = assets.characters.length + assets.scenes.length + assets.props.length + assets.costumes.length;
      if (total === 0) return 0;
      const withImages = assets.characters.filter((c) => c.fullBodyPreview || c.facePreview).length + assets.scenes.filter((s) => s.widePreview || s.mediumPreview || s.closeupPreview).length + assets.props.filter((p) => p.preview).length + assets.costumes.filter((c) => c.preview).length;
      return Math.round(withImages / total * 100);
    })()
  } : null;
  const handleExport = () => {
    if (!assets) return;
    const dataStr = JSON.stringify(assets, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `项目库_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("导出成功");
  };
  const handleImport = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      var _a2;
      try {
        const imported = JSON.parse((_a2 = event.target) == null ? void 0 : _a2.result);
        if (projectId) imported.projectId = projectId;
        setAssets(imported);
        toast.success("导入成功");
      } catch (error) {
        toast.error("导入失败，文件格式错误");
      }
    };
    reader.readAsText(file);
  };
  if (!projectId) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssetLibraryHeader,
      {
        projectId,
        projectName: project == null ? void 0 : project.title,
        isExtracting,
        isSyncing,
        isBatchGenerating,
        onAIExtractClick: () => setShowExtractDialog(true),
        onSyncStyle: () => {
          if (styleSettings.confirmBeforeApply) {
            setShowStyleDialog(true);
          } else {
            handleSyncDirectorStyle();
          }
        },
        onBatchGenerate: handleBatchGenerateAll,
        onSave: handleSave,
        onExport: handleExport,
        onImportClick: () => {
          var _a;
          return (_a = importInputRef.current) == null ? void 0 : _a.click();
        },
        importInputRef,
        enablePromptOptimization,
        setEnablePromptOptimization,
        groupBy,
        onGroupByChange: setGroupBy
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        ref: importInputRef,
        onChange: handleImport,
        className: "hidden",
        accept: ".json"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssetStatsPanel, { stats }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: handleTabChange, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4 bg-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "character", children: [
            "角色 (",
            (assets == null ? void 0 : assets.characters.length) || 0,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "scene", children: [
            "场景 (",
            (assets == null ? void 0 : assets.scenes.length) || 0,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "prop", children: [
            "道具 (",
            (assets == null ? void 0 : assets.props.length) || 0,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "costume", children: [
            "服饰 (",
            (assets == null ? void 0 : assets.costumes.length) || 0,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "character", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CharacterTab,
            {
              assets: assets || { projectId, characters: [], scenes: [], props: [], costumes: [] },
              searchTerm,
              setSearchTerm,
              selectedCharacterId,
              setSelectedCharacterId,
              handleAddCharacter,
              handleUpdateCharacter,
              handleDeleteCharacter: (id) => handleDeleteCharacter(id, usageMap.get(id) || 0),
              handleAddTag,
              handleRemoveTag,
              getCharacterUsageLocations,
              usageMap,
              handleGenerateCharacterFullBody,
              handleGenerateCharacterFace,
              projectId,
              project,
              onReorder: (start, end) => handleReorderAssets("character", start, end),
              groupBy
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "scene", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SceneTab,
            {
              assets: assets || { projectId, characters: [], scenes: [], props: [], costumes: [] },
              searchTerm,
              setSearchTerm,
              selectedSceneId,
              setSelectedSceneId,
              handleAddScene,
              handleUpdateScene,
              handleDeleteScene: (id) => handleDeleteScene(id, usageMap.get(id) || 0),
              handleAddTag,
              handleRemoveTag,
              handleGenerateSceneWide,
              handleGenerateSceneMedium,
              handleGenerateSceneCloseup,
              onReorder: (start, end) => handleReorderAssets("scene", start, end),
              getSceneUsageLocations,
              usageMap,
              groupBy
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "prop", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PropTab,
            {
              assets: assets || { projectId, characters: [], scenes: [], props: [], costumes: [] },
              searchTerm,
              setSearchTerm,
              selectedPropId,
              setSelectedPropId,
              handleAddProp,
              handleUpdateProp,
              handleDeleteProp: (id) => handleDeleteProp(id, usageMap.get(id) || 0),
              handleAddTag,
              handleRemoveTag,
              handleBatchDelete,
              handleGenerateProp,
              onReorder: (start, end) => handleReorderAssets("prop", start, end),
              getPropUsageLocations,
              usageMap,
              groupBy
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "costume", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CostumeTab,
            {
              assets: assets || { projectId, characters: [], scenes: [], props: [], costumes: [] },
              searchTerm,
              setSearchTerm,
              selectedCostumeId,
              setSelectedCostumeId,
              handleAddCostume,
              handleUpdateCostume,
              handleDeleteCostume: (id) => handleDeleteCostume(id, usageMap.get(id) || 0),
              handleAddTag,
              handleRemoveTag,
              handleBatchDelete,
              handleGenerateCostume,
              onReorder: (start, end) => handleReorderAssets("costume", start, end),
              getCostumeUsageLocations,
              usageMap,
              groupBy
            }
          ) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExtractDialog,
      {
        open: showExtractDialog,
        onOpenChange: setShowExtractDialog,
        onExtract: handleAIExtract
      }
    ),
    (project == null ? void 0 : project.directorStyle) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      StyleApplicationDialog,
      {
        isOpen: showStyleDialog,
        onClose: () => setShowStyleDialog(false),
        onConfirm: handleSyncDirectorStyle,
        directorStyle: project.directorStyle,
        characters: (assets == null ? void 0 : assets.characters) || [],
        scenes: (assets == null ? void 0 : assets.scenes) || [],
        props: (assets == null ? void 0 : assets.props) || [],
        costumes: (assets == null ? void 0 : assets.costumes) || [],
        protectManualEdits: styleSettings.protectManualEdits,
        showPreview: styleSettings.showPreview
      }
    )
  ] });
}
async function calculateProjectStats(projectId) {
  const chapters = await chapterStorage.getByProjectId(projectId);
  let totalScenes = 0;
  let totalPanels = 0;
  let totalDuration = 0;
  for (const chapter of chapters) {
    const script = await scriptStorage.getByChapterId(chapter.id);
    if (script) {
      totalScenes += script.scenes.length;
    }
    const storyboard = await storyboardStorage.getByChapterId(chapter.id);
    if (storyboard) {
      totalPanels += storyboard.panels.length;
      storyboard.panels.forEach((panel) => {
        totalDuration += panel.duration || 0;
        if (panel.generatedImage) ;
      });
    }
  }
  const assets = await assetStorage.getByProjectId(projectId) || {
    characters: [],
    scenes: [],
    props: []
  };
  let completionPoints = 0;
  let totalPoints = 0;
  totalPoints += chapters.length * 25;
  const chaptersWithText = chapters.filter((c) => c.originalText && c.originalText.trim().length > 0);
  completionPoints += chaptersWithText.length * 25;
  totalPoints += chapters.length * 25;
  for (const c of chapters) {
    const script = await scriptStorage.getByChapterId(c.id);
    if (script && script.scenes.length > 0) completionPoints += 25;
    const storyboard = await storyboardStorage.getByChapterId(c.id);
    if (storyboard && storyboard.panels.length > 0) completionPoints += 25;
    if (storyboard && storyboard.panels.length > 0 && storyboard.panels.some((p) => p.generatedImage)) {
      completionPoints += 25;
    }
  }
  totalPoints = chapters.length * 100;
  const completionRate = totalPoints > 0 ? Math.round(completionPoints / totalPoints * 100) : 0;
  return {
    totalChapters: chapters.length,
    totalScenes,
    totalPanels,
    totalDuration,
    charactersCount: assets.characters.length,
    scenesCount: assets.scenes.length,
    propsCount: assets.props.length,
    completionRate
  };
}
async function getCharacterAppearances(projectId) {
  const chapters = await chapterStorage.getByProjectId(projectId);
  const appearances = {};
  for (const chapter of chapters) {
    const storyboard = await storyboardStorage.getByChapterId(chapter.id);
    if (storyboard) {
      storyboard.panels.forEach((panel) => {
        panel.characters.forEach((char) => {
          appearances[char] = (appearances[char] || 0) + 1;
        });
      });
    }
  }
  return appearances;
}
async function getSceneUsageFrequency(projectId) {
  const chapters = await chapterStorage.getByProjectId(projectId);
  const usage = {};
  for (const chapter of chapters) {
    const script = await scriptStorage.getByChapterId(chapter.id);
    if (script) {
      script.scenes.forEach((scene) => {
        const locationKey = `${scene.location} (${scene.sceneType})`;
        usage[locationKey] = (usage[locationKey] || 0) + 1;
      });
    }
  }
  return usage;
}
function ProjectDashboard() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = reactExports.useState(null);
  const [characterStats, setCharacterStats] = reactExports.useState({});
  const [sceneStats, setSceneStats] = reactExports.useState({});
  reactExports.useEffect(() => {
    const loadData = async () => {
      if (projectId) {
        const proj = await projectStorage.getById(projectId);
        if (proj) {
          const stats2 = await calculateProjectStats(projectId);
          setProject({ ...proj, stats: stats2 });
          const charStats = await getCharacterAppearances(projectId);
          const scnStats = await getSceneUsageFrequency(projectId);
          setCharacterStats(charStats);
          setSceneStats(scnStats);
        }
      }
    };
    loadData();
  }, [projectId]);
  if (!project || !project.stats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "加载中..." }) });
  }
  const stats = project.stats;
  const topCharacters = Object.entries(characterStats).sort(([, a], [, b]) => b - a).slice(0, 5);
  const topScenes = Object.entries(sceneStats).sort(([, a], [, b]) => b - a).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: "/", children: "首页" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: `/projects/${projectId}`, children: project.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: "数据统计" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: "项目数据总览" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate(`/projects/${projectId}`), children: "返回书架" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
        "项目完成度"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
            stats.completionRate,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm opacity-90", children: [
            stats.completionRate < 30 && "刚刚起步",
            stats.completionRate >= 30 && stats.completionRate < 60 && "稳步推进",
            stats.completionRate >= 60 && stats.completionRate < 90 && "接近完成",
            stats.completionRate >= 90 && "即将大功告成"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/30 rounded-full h-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-white rounded-full h-3 transition-all duration-500",
            style: { width: `${stats.completionRate}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3 text-sm opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 inline mr-1" }),
            "原文编写"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 inline mr-1" }),
            "剧本改写"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 inline mr-1" }),
            "分镜制作"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 inline mr-1" }),
            "图片生成"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
          "章节总数"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600", children: stats.totalChapters }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个章节" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
          "场景总数"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: stats.totalScenes }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个剧本场景" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
          "分镜总数"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600", children: stats.totalPanels }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个分镜画面" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          "总时长"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-orange-600", children: Math.floor(stats.totalDuration / 60) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "分钟" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
          "角色数量"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-indigo-600", children: stats.charactersCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个角色" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
          "场景数量"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-teal-600", children: stats.scenesCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个场景" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
          "道具数量"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-pink-600", children: stats.propsCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "个道具" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-5 h-5" }),
          "角色出场统计 TOP 5"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: topCharacters.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topCharacters.map(([name, count], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs", children: index + 1 }),
              name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
              count,
              " 次"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-2",
              style: { width: `${count / topCharacters[0][1] * 100}%` }
            }
          ) })
        ] }, name)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-center py-8", children: "暂无角色出场数据" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }),
          "场景使用频率 TOP 5"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: topScenes.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topScenes.map(([location, count], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs", children: index + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[200px]", children: location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
              count,
              " 次"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-gradient-to-r from-green-500 to-green-600 rounded-full h-2",
              style: { width: `${count / topScenes[0][1] * 100}%` }
            }
          ) })
        ] }, location)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-center py-8", children: "暂无场景使用数据" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "快捷操作" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-20 flex flex-col gap-2",
            onClick: () => navigate(`/projects/${projectId}`),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "查看章节" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-20 flex flex-col gap-2",
            onClick: () => navigate(`/projects/${projectId}/assets`),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "资源库" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-20 flex flex-col gap-2",
            onClick: () => navigate(`/projects/${projectId}/style`),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "导演风格" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-20 flex flex-col gap-2",
            onClick: () => window.location.reload(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-6 h-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "刷新统计" })
            ]
          }
        )
      ] }) })
    ] })
  ] });
}
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = reactExports.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  reactExports.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function StyleApplicationSettingsPanel({
  settings,
  onSettingsChange
}) {
  const updateSetting = (key, value) => {
    onSettingsChange({
      ...settings,
      [key]: value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Settings$1, { className: "w-5 h-5 text-blue-600" }),
      "风格应用设置"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white rounded-lg border border-blue-100 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900 mb-1", children: "应用模式" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-3", children: "选择导演风格如何应用到资源的AI提示词" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `flex-1 px-4 py-3 rounded-lg border-2 transition-all ${settings.mode === "manual" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"}`,
                onClick: () => updateSetting("mode", "manual"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "手动模式" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1", children: '需要手动点击"应用导演风格"按钮' })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `flex-1 px-4 py-3 rounded-lg border-2 transition-all ${settings.mode === "auto" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"}`,
                onClick: () => updateSetting("mode", "auto"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "自动模式" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1", children: "修改导演风格后自动应用到全部资源" })
                ]
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-medium text-gray-900", children: "新建资源自动应用风格" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "创建新的角色、场景等资源时，自动将导演风格应用到AI提示词" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: settings.autoApplyToNew,
            onCheckedChange: (checked) => updateSetting("autoApplyToNew", checked)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-medium text-gray-900", children: "保护手动编辑的提示词" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "批量应用导演风格时，跳过已经手动编辑过的提示词，防止覆盖" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-600 mt-1", children: "💡 推荐开启：避免意外覆盖你精心调整的提示词" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: settings.protectManualEdits,
            onCheckedChange: (checked) => updateSetting("protectManualEdits", checked)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-medium text-gray-900", children: "批量应用前显示确认" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-1", children: '点击"应用导演风格到全部"时，先显示确认对话框和影响范围' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: settings.confirmBeforeApply,
            onCheckedChange: (checked) => updateSetting("confirmBeforeApply", checked)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-medium text-gray-900", children: "应用前显示预览对比" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "在确认对话框中显示应用前后的提示词对比" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "注意：预览大量资源时可能稍慢" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: settings.showPreview,
            onCheckedChange: (checked) => updateSetting("showPreview", checked)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-medium text-purple-900 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4" }),
          "当前配置总结"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-purple-800 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "应用模式：" }),
            settings.mode === "manual" ? "手动模式（需要手动点击应用）" : "自动模式（修改后自动应用）"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "新建资源：" }),
            settings.autoApplyToNew ? "自动应用导演风格" : "不自动应用"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "手动编辑：" }),
            settings.protectManualEdits ? "保护，不会被覆盖" : "不保护，可能被覆盖"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "批量应用：" }),
            settings.confirmBeforeApply ? "显示确认对话框" : "直接应用"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "预览对比：" }),
            settings.showPreview ? "显示前后对比" : "不显示"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function StyleSelect({
  label,
  description,
  value,
  onChange,
  options,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: label }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
        "选择",
        label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: onChange, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: placeholder || `选择${label}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: description })
    ] })
  ] });
}
const useProjectStore = create((set) => ({
  currentProject: null,
  isLoading: false,
  error: null,
  setCurrentProject: (project) => set({ currentProject: project }),
  loadProject: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const project = await projectStorage.getById(id);
      if (project) {
        set({ currentProject: project, isLoading: false });
      } else {
        set({ error: "Project not found", isLoading: false });
      }
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  updateProject: async (project) => {
    try {
      await projectStorage.save(project);
      set({ currentProject: project });
    } catch (err) {
      set({ error: err.message });
    }
  }
}));
const DEFAULT_STYLE_SETTINGS = {
  mode: "manual",
  autoApplyToNew: true,
  protectManualEdits: true,
  confirmBeforeApply: true,
  showPreview: true
};
const DEFAULT_STYLE = {
  artStyle: "",
  colorTone: "",
  lightingStyle: "",
  cameraStyle: "",
  mood: "",
  customPrompt: "",
  negativePrompt: "",
  aspectRatio: "16:9",
  videoFrameRate: "24",
  motionIntensity: "normal"
};
function useDirectorStyle(projectId) {
  const { currentProject, loadProject, updateProject } = useProjectStore();
  const isMountedRef = reactExports.useRef(true);
  const [style, setStyle] = reactExports.useState(DEFAULT_STYLE);
  const [styleSettings, setStyleSettings] = reactExports.useState(DEFAULT_STYLE_SETTINGS);
  const safeToast = reactExports.useCallback((message, type = "success") => {
    requestAnimationFrame(() => {
      if (isMountedRef.current) {
        if (type === "success") {
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    });
  }, []);
  const safeUpdateStyle = reactExports.useCallback((key, value) => {
    if (isMountedRef.current) {
      setStyle((prev) => ({ ...prev, [key]: value }));
    }
  }, []);
  const safeUpdateStyleSettings = reactExports.useCallback((newSettings) => {
    if (!isMountedRef.current) return;
    setStyleSettings(newSettings);
    requestAnimationFrame(() => {
      if (isMountedRef.current && projectId) {
        const success = styleSettingsStorage.set(projectId, newSettings);
        if (success) {
          safeToast("应用设置已保存");
        }
      }
    });
  }, [projectId, safeToast]);
  const resetStyle = reactExports.useCallback(() => {
    setStyle(DEFAULT_STYLE);
    safeToast("已重置所有风格设置");
  }, [safeToast]);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    if (projectId) {
      loadProject(projectId);
      const savedSettings = styleSettingsStorage.get(projectId);
      if (savedSettings && isMountedRef.current) {
        setStyleSettings(savedSettings);
      }
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [projectId, loadProject]);
  reactExports.useEffect(() => {
    if (currentProject == null ? void 0 : currentProject.directorStyle) {
      setStyle(currentProject.directorStyle);
    }
  }, [currentProject]);
  const handleSave = reactExports.useCallback(async () => {
    if (!currentProject || !isMountedRef.current) return;
    const oldStyle = currentProject.directorStyle;
    const hasStyleChanged = JSON.stringify(oldStyle) !== JSON.stringify(style);
    const updatedProject = {
      ...currentProject,
      directorStyle: style,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      await updateProject(updatedProject);
      safeToast("导演风格已保存并同步至全局");
      if (hasStyleChanged && oldStyle) {
        setTimeout(() => {
          if (isMountedRef.current) {
            toast.info('💡 导演风格已更新，建议前往项目库点击"同步风格"按钮更新所有资源提示词', {
              duration: 8e3,
              action: {
                label: "前往项目库",
                onClick: () => window.location.href = `/projects/${projectId}/assets`
              }
            });
          }
        }, 1e3);
      }
    } catch (error) {
      safeToast("保存失败", "error");
    }
  }, [currentProject, style, updateProject, safeToast, projectId]);
  return {
    style,
    setStyle,
    styleSettings,
    currentProject,
    isMountedRef,
    safeToast,
    safeUpdateStyle,
    safeUpdateStyleSettings,
    resetStyle,
    handleSave
  };
}
function useStyleBatchApply(projectId, style, handleSave, isMountedRef) {
  const [isApplyingToAll, setIsApplyingToAll] = reactExports.useState(false);
  const handleApplyStyleToAllPanels = reactExports.useCallback(async () => {
    if (!projectId || !isMountedRef.current) return;
    await handleSave();
    const confirmed = window.confirm(
      "确定要将当前导演风格应用到项目中所有分镜的提示词吗？\n\n这将为每个分镜重新生成优化后的AI提示词，可能需要一些时间。"
    );
    if (!confirmed) return;
    setIsApplyingToAll(true);
    const toastId = "apply-style-to-all";
    toast.loading("正在加载项目分镜...", { id: toastId });
    try {
      const chapters = await chapterStorage.getByProjectId(projectId);
      if (!chapters || chapters.length === 0) {
        toast.warning("项目中没有章节", { id: toastId });
        setIsApplyingToAll(false);
        return;
      }
      let totalPanels = 0;
      let processedPanels = 0;
      const storyboards = [];
      for (const chapter of chapters) {
        const sb = await storyboardStorage.getByChapterId(chapter.id);
        if (sb && sb.panels && sb.panels.length > 0) {
          storyboards.push(sb);
          totalPanels += sb.panels.length;
        }
      }
      if (totalPanels === 0) {
        toast.warning("项目中没有分镜面板", { id: toastId });
        setIsApplyingToAll(false);
        return;
      }
      toast.loading(`正在更新 ${totalPanels} 个分镜的提示词...`, { id: toastId });
      for (const storyboard of storyboards) {
        const updatedPanels = await Promise.all(
          storyboard.panels.map(async (panel) => {
            try {
              const newPrompt = await optimizePrompt(
                panel.description || "",
                style,
                "storyboard"
              );
              processedPanels++;
              toast.loading(`已处理 ${processedPanels}/${totalPanels} 个分镜...`, { id: toastId });
              return {
                ...panel,
                aiPrompt: newPrompt,
                appliedStyleHash: `style_${Date.now().toString(16).substring(0, 8)}`,
                generatedAt: (/* @__PURE__ */ new Date()).toISOString()
              };
            } catch (error) {
              console.error(`Failed to update panel ${panel.id}:`, error);
              processedPanels++;
              return panel;
            }
          })
        );
        await storyboardStorage.save({
          ...storyboard,
          panels: updatedPanels,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      toast.success(`已成功更新 ${processedPanels} 个分镜的提示词！`, { id: toastId });
    } catch (error) {
      console.error("Failed to apply style to all panels:", error);
      toast.error("应用风格时出错，请稍后重试", { id: toastId });
    } finally {
      setIsApplyingToAll(false);
    }
  }, [projectId, style, handleSave, isMountedRef]);
  return {
    isApplyingToAll,
    handleApplyStyleToAllPanels
  };
}
const ART_STYLE_OPTIONS = [
  { value: "写实主义", label: "写实主义" },
  { value: "手绘动画", label: "手绘动画" },
  { value: "唯美写实", label: "唯美写实" },
  { value: "赛博朋克", label: "赛博朋克" },
  { value: "复古胶片", label: "复古胶片" },
  { value: "黑白胶片", label: "黑白胶片" },
  { value: "水彩风格", label: "水彩风格" },
  { value: "油画风格", label: "油画风格" },
  { value: "漫画风格", label: "漫画风格" },
  { value: "像素艺术", label: "像素艺术" }
];
const COLOR_TONE_OPTIONS = [
  { value: "温暖色调", label: "温暖色调" },
  { value: "冷色调", label: "冷色调" },
  { value: "中性色调", label: "中性色调" },
  { value: "高饱和度", label: "高饱和度" },
  { value: "低饱和度", label: "低饱和度" },
  { value: "霓虹色彩", label: "霓虹色彩" },
  { value: "黑白高对比", label: "黑白高对比" },
  { value: "柔和色彩", label: "柔和色彩" },
  { value: "复古色调", label: "复古色调" }
];
const LIGHTING_STYLE_OPTIONS = [
  { value: "自然光", label: "自然光" },
  { value: "柔和光线", label: "柔和光线" },
  { value: "戏剧性光影", label: "戏剧性光影" },
  { value: "强对比光", label: "强对比光" },
  { value: "霓虹灯光", label: "霓虹灯光" },
  { value: "黄金时刻", label: "黄金时刻（Golden Hour）" },
  { value: "蓝调时刻", label: "蓝调时刻（Blue Hour）" },
  { value: "强烈阴影", label: "强烈阴影" },
  { value: "均匀照明", label: "均匀照明" }
];
const CAMERA_STYLE_OPTIONS = [
  { value: "电影感", label: "电影感（Cinematic）" },
  { value: "纪实风格", label: "纪实风格（Documentary）" },
  { value: "梦幻风格", label: "梦幻风格（Dreamy）" },
  { value: "IMAX", label: "IMAX 大画幅" },
  { value: "手持摄影", label: "手持摄影（Handheld）" },
  { value: "稳定器", label: "稳定器拍摄（Gimbal）" },
  { value: "广角镜头", label: "广角镜头" },
  { value: "长焦镜头", label: "长焦镜头" },
  { value: "鱼眼镜头", label: "鱼眼镜头" }
];
const MOOD_OPTIONS = [
  { value: "温馨", label: "温馨" },
  { value: "紧张", label: "紧张" },
  { value: "神秘", label: "神秘" },
  { value: "欢快", label: "欢快" },
  { value: "悲伤", label: "悲伤" },
  { value: "浪漫", label: "浪漫" },
  { value: "恐怖", label: "恐怖" },
  { value: "史诗", label: "史诗感" },
  { value: "忧郁", label: "忧郁" },
  { value: "激动", label: "激动人心" },
  { value: "宁静", label: "宁静" }
];
const ASPECT_RATIO_OPTIONS = [
  { value: "16:9", label: "16:9（电影/横屏）" },
  { value: "4:3", label: "4:3（传统电视）" },
  { value: "1:1", label: "1:1（方形/社交媒体）" },
  { value: "9:16", label: "9:16（竖屏/短视频）" },
  { value: "21:9", label: "21:9（超宽屏/电影院）" }
];
const FRAME_RATE_OPTIONS = [
  { value: "24", label: "24 fps（电影标准）" },
  { value: "30", label: "30 fps（电视/网络）" },
  { value: "60", label: "60 fps（流畅/游戏）" }
];
const MOTION_INTENSITY_OPTIONS = [
  { value: "subtle", label: "微妙（细腻动作）" },
  { value: "normal", label: "正常（标准运动）" },
  { value: "dynamic", label: "强烈（动态激烈）" }
];
const MOTION_INTENSITY_LABELS = {
  "subtle": "微妙",
  "normal": "正常",
  "dynamic": "强烈"
};
function DirectorStyleEditor() {
  const { projectId } = useParams();
  const {
    style,
    setStyle,
    styleSettings,
    currentProject,
    isMountedRef,
    safeToast,
    safeUpdateStyle,
    safeUpdateStyleSettings,
    resetStyle,
    handleSave
  } = useDirectorStyle(projectId);
  const { isApplyingToAll, handleApplyStyleToAllPanels } = useStyleBatchApply(
    projectId,
    style,
    handleSave,
    isMountedRef
  );
  const handleApplyPreset = (presetName) => {
    if (!isMountedRef.current) return;
    const preset = DIRECTOR_STYLE_PRESETS[presetName];
    if (preset) {
      setStyle(preset);
      safeToast(`已应用 ${presetName}`);
    }
  };
  if (!currentProject) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "加载项目配置中..." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: "/", children: "首页" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { href: `/projects/${projectId}`, children: currentProject.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: "导演风格" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        onReset: resetStyle,
        onSave: handleSave,
        onApplyToAll: handleApplyStyleToAllPanels,
        isApplyingToAll
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StylePresetSelector, { onApplyPreset: handleApplyPreset }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "艺术风格",
          description: "定义画面的整体艺术表现形式",
          value: style.artStyle,
          onChange: (value) => safeUpdateStyle("artStyle", value),
          options: ART_STYLE_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "色调设定",
          description: "设定画面的主色调和色彩倾向",
          value: style.colorTone,
          onChange: (value) => safeUpdateStyle("colorTone", value),
          options: COLOR_TONE_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "光照风格",
          description: "控制画面的光影效果和氛围",
          value: style.lightingStyle,
          onChange: (value) => safeUpdateStyle("lightingStyle", value),
          options: LIGHTING_STYLE_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "镜头风格",
          description: "定义镜头的拍摄风格和视角",
          value: style.cameraStyle,
          onChange: (value) => safeUpdateStyle("cameraStyle", value),
          options: CAMERA_STYLE_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "情绪氛围",
          description: "设定画面传递的整体情绪",
          value: style.mood,
          onChange: (value) => safeUpdateStyle("mood", value),
          options: MOOD_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "画面比例",
          description: "定义生成图片和视频的宽高比",
          value: style.aspectRatio || "16:9",
          onChange: (value) => safeUpdateStyle("aspectRatio", value),
          options: ASPECT_RATIO_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "视频帧率",
          description: "视频的帧率设置，影响流畅度",
          value: style.videoFrameRate || "24",
          onChange: (value) => safeUpdateStyle("videoFrameRate", value),
          options: FRAME_RATE_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StyleSelect,
        {
          label: "运动强度",
          description: "控制视频中的运动幅度和动态感",
          value: style.motionIntensity || "normal",
          onChange: (value) => safeUpdateStyle("motionIntensity", value),
          options: MOTION_INTENSITY_OPTIONS
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "自定义提示词" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "额外的风格描述（英文效果更佳）" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: style.customPrompt,
              onChange: (e) => safeUpdateStyle("customPrompt", e.target.value),
              rows: 4,
              placeholder: "例如：Studio Ghibli style, hand-drawn animation, watercolor aesthetic, nature elements...",
              className: "font-mono text-sm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "可以添加更具体的风格描述，这些内容会自动添加到所有AI提示词中" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-red-200 bg-red-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg text-red-700", children: "负面提示词（Negative Prompt）" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "需要避免的元素（英文）" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: style.negativePrompt || "",
              onChange: (e) => safeUpdateStyle("negativePrompt", e.target.value),
              rows: 3,
              placeholder: "deformed, distorted, bad anatomy, extra fingers, missing limbs, blurry, lowres, watermark, text...",
              className: "font-mono text-sm bg-white"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600", children: "💡 这些描述会告诉AI需要避免生成的内容，如变形、多余手指、模糊等常见问题" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StylePreview, { style }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StyleApplicationSettingsPanel,
      {
        settings: styleSettings,
        onSettingsChange: safeUpdateStyleSettings
      }
    )
  ] });
}
function PageHeader({
  onReset,
  onSave,
  onApplyToAll,
  isApplyingToAll
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold text-gray-900 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-8 h-8" }),
        "导演风格设定"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: "为整个项目设定统一的视觉风格，将自动应用到所有AI提示词" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: onReset, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
        "重置"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onSave, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
        "保存风格"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: onApplyToAll,
          disabled: isApplyingToAll,
          className: "gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
          children: [
            isApplyingToAll ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
            isApplyingToAll ? "正在应用..." : "应用到所有分镜"
          ]
        }
      )
    ] })
  ] });
}
function StylePresetSelector({ onApplyPreset }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-5 h-5 text-purple-600" }),
      "风格预设模板"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: Object.keys(DIRECTOR_STYLE_PRESETS).map((presetName) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "h-auto py-4 flex flex-col gap-2 hover:bg-purple-100 hover:border-purple-400",
          onClick: () => onApplyPreset(presetName),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: presetName })
          ]
        },
        presetName
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-700 mt-4", children: "💡 点击预设模板可快速应用经典电影风格，也可以自定义修改" })
    ] })
  ] });
}
function StylePreview({ style }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-blue-600" }),
      "当前风格预览"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "艺术风格", value: style.artStyle, color: "blue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "色调", value: style.colorTone, color: "green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "光照", value: style.lightingStyle, color: "orange" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "镜头", value: style.cameraStyle, color: "purple" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "情绪", value: style.mood, color: "pink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "画面比例", value: style.aspectRatio || "16:9", color: "indigo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewItem, { label: "帧率", value: `${style.videoFrameRate || "24"}fps`, color: "cyan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PreviewItem,
            {
              label: "运动强度",
              value: MOTION_INTENSITY_LABELS[style.motionIntensity || "normal"] || "正常",
              color: "amber"
            }
          )
        ] }),
        style.customPrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "自定义提示词" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono bg-gray-50 p-3 rounded border", children: style.customPrompt })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-blue-100 border border-blue-300 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 inline mr-2" }),
          "这些风格设定将自动应用到："
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-blue-800 mt-2 ml-6 list-disc space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "项目库中的角色AI提示词生成" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "项目库中的场景AI提示词生成" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "分镜的AI绘画提示词生成" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "分镜的AI视频提示词生成" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-purple-900 mb-3", children: "📸 示例分镜提示词预览（基于当前风格）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-md p-4 border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "示例场景：森林中奔跑的少年" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono text-gray-700 leading-relaxed", children: [
            "中景镜头，年轻少年在森林小径上奔跑",
            style.artStyle && `，${style.artStyle}风格`,
            style.colorTone && `，${style.colorTone}`,
            style.lightingStyle && `，${style.lightingStyle}照明`,
            style.cameraStyle && `，${style.cameraStyle}镜头`,
            style.mood && `，${style.mood}的氛围`,
            "，高质量渲染，分镜级别细节",
            style.customPrompt && `，${style.customPrompt}`
          ] })
        ] }),
        style.negativePrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-red-50 rounded-md p-3 border border-red-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 mb-1", children: "负面提示词：" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-red-700", children: style.negativePrompt })
        ] })
      ] })
    ] })
  ] });
}
function PreviewItem({
  label,
  value,
  color
}) {
  const colorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
    indigo: "text-indigo-600",
    cyan: "text-cyan-600",
    amber: "text-amber-600"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-medium ${colorClasses[color] || "text-gray-600"}`, children: value || "未设置" })
  ] });
}
function Settings() {
  const { apiSettings, setApiSettings } = useConfigStore();
  const handleSave = () => {
    toast.success("配置已保存，状态全站实时更新");
  };
  const handleReset = () => {
    if (confirm("确定清除本地配置吗？将恢复使用默认环境变量（如有）。")) {
      setApiSettings({
        volcApiKey: "",
        llmEndpointId: "",
        imageEndpointId: ""
      });
      toast.info("配置表单已重置");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "系统设置" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: "配置 AI 服务连接参数" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-5 h-5 text-blue-600" }),
          "火山引擎 (Volcano Engine) 配置"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "配置 Ark 大模型服务。如果不填写，系统将尝试使用构建时注入的环境变量。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "apiKey", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-4 h-4" }),
            " API Key"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "apiKey",
              type: "password",
              placeholder: "Ex: 443ba98a-...",
              value: apiSettings.volcApiKey,
              onChange: (e) => setApiSettings({ ...apiSettings, volcApiKey: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "您的 API 密钥将通过 Zustand 状态管理并自动加密持久化（可选）。" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "llmEndpoint", children: "LLM Endpoint ID (DeepSeek)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "llmEndpoint",
                placeholder: "Ex: ep-2025...",
                value: apiSettings.llmEndpointId,
                onChange: (e) => setApiSettings({ ...apiSettings, llmEndpointId: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "imgEndpoint", children: "Image Endpoint ID (Doubao)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "imgEndpoint",
                placeholder: "Ex: ep-2025...",
                value: apiSettings.imageEndpointId,
                onChange: (e) => setApiSettings({ ...apiSettings, imageEndpointId: e.target.value })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSave, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "保存配置"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: handleReset, className: "gap-2 text-red-600 hover:text-red-700 hover:bg-red-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
            "重置"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-blue-50 border-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-blue-600 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-blue-900", children: "配置说明" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
          "1. 请前往火山引擎控制台获取 API Key。",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "2. 创建推理接入点，分别获取支持 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "DeepSeek" }),
          " (LLM) 和 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Doubao-Seedream" }),
          " (文生图) 的 Endpoint ID。",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "3. 保存后，所有 AI 提取和生图功能将自动使用新的配置。"
        ] })
      ] })
    ] }) }) })
  ] });
}
async function initializeDemoData() {
  const existingProjects = await projectStorage.getAll();
  if (existingProjects.length > 0) {
    return;
  }
  const demoProject = {
    id: "demo-project-1",
    title: "示例项目：现代都市奇幻故事",
    description: "一个关于普通上班族意外获得超能力，开始探索城市隐秘世界的故事。",
    cover: "",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  await projectStorage.save(demoProject);
  const demoChapter = {
    id: "demo-chapter-1",
    projectId: demoProject.id,
    title: "第一章 觉醒",
    orderIndex: 0,
    originalText: `清晨的阳光透过百叶窗的缝隙洒进房间，李明睁开眼睛，看了看床头的闹钟——七点整。

他坐起身来，准备开始又一个平凡的工作日。洗漱、穿衣、吃早餐，一切都和往常一样。

"又要迟到了！"李明看了看手表，急匆匆地冲出了家门。

地铁站里人山人海，李明挤在拥挤的人群中，突然感到一阵眩晕。当他再次睁开眼睛时，周围的一切都变得不同了——人们的身影变得模糊，而他们身上却闪烁着各种颜色的光芒。

"这是怎么回事？"李明惊讶地看着自己的双手，它们也在发出淡淡的蓝色光芒。

一个穿着黑色风衣的女子注意到了他的异常。她走过来，压低声音说："你觉醒了。跟我来，这里不安全。"

李明还没来得及反应，女子就拉着他快步离开了地铁站。`,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  await chapterStorage.save(demoChapter);
}
function App() {
  reactExports.useEffect(() => {
    initializeDemoData();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HashRouter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", richColors: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookshelf, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "settings", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectDetail, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectDashboard, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/style", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DirectorStyleEditor, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/chapter/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChapterEditor, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/script/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScriptEditor, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/storyboard/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StoryboardEditor, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "projects/:projectId/assets", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssetLibrary, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "project/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/projects/:id", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "project/:id/chapter/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/projects/:id/chapter/:chapterId", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "project/:id/script/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/projects/:id/script/:chapterId", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "project/:id/storyboard/:chapterId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/projects/:id/storyboard/:chapterId", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "project/:id/assets", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/projects/:id/assets", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true }) })
    ] }) })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
