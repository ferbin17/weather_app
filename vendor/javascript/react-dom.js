// react-dom@19.1.0 downloaded from https://ga.jspm.io/npm:react-dom@19.1.0/index.js

import * as e from "react";
var r = e;
try {
  "default" in e && (r = e.default);
} catch (e) {}
var t = {};
var i = r;
function formatProdErrorMessage(e) {
  var r = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    r += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var t = 2; t < arguments.length; t++)
      r += "&args[]=" + encodeURIComponent(arguments[t]);
  }
  return (
    "Minified React error #" +
    e +
    "; visit " +
    r +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function noop() {}
var n = {
    d: {
      f: noop,
      r: function () {
        throw Error(formatProdErrorMessage(522));
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop,
    },
    p: 0,
    findDOMNode: null,
  },
  o = Symbol.for("react.portal");
function createPortal$1(e, r, t) {
  var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: o,
    key: null == i ? null : "" + i,
    children: e,
    containerInfo: r,
    implementation: t,
  };
}
var s = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(e, r) {
  return "font" === e
    ? ""
    : "string" === typeof r
      ? "use-credentials" === r
        ? r
        : ""
      : void 0;
}
t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n;
t.createPortal = function (e, r) {
  var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!r || (1 !== r.nodeType && 9 !== r.nodeType && 11 !== r.nodeType))
    throw Error(formatProdErrorMessage(299));
  return createPortal$1(e, r, null, t);
};
t.flushSync = function (e) {
  var r = s.T,
    t = n.p;
  try {
    if (((s.T = null), (n.p = 2), e)) return e();
  } finally {
    ((s.T = r), (n.p = t), n.d.f());
  }
};
t.preconnect = function (e, r) {
  "string" === typeof e &&
    (r
      ? ((r = r.crossOrigin),
        (r =
          "string" === typeof r ? ("use-credentials" === r ? r : "") : void 0))
      : (r = null),
    n.d.C(e, r));
};
t.prefetchDNS = function (e) {
  "string" === typeof e && n.d.D(e);
};
t.preinit = function (e, r) {
  if ("string" === typeof e && r && "string" === typeof r.as) {
    var t = r.as,
      i = getCrossOriginStringAs(t, r.crossOrigin),
      o = "string" === typeof r.integrity ? r.integrity : void 0,
      s = "string" === typeof r.fetchPriority ? r.fetchPriority : void 0;
    "style" === t
      ? n.d.S(e, "string" === typeof r.precedence ? r.precedence : void 0, {
          crossOrigin: i,
          integrity: o,
          fetchPriority: s,
        })
      : "script" === t &&
        n.d.X(e, {
          crossOrigin: i,
          integrity: o,
          fetchPriority: s,
          nonce: "string" === typeof r.nonce ? r.nonce : void 0,
        });
  }
};
t.preinitModule = function (e, r) {
  if ("string" === typeof e)
    if ("object" === typeof r && null !== r) {
      if (null == r.as || "script" === r.as) {
        var t = getCrossOriginStringAs(r.as, r.crossOrigin);
        n.d.M(e, {
          crossOrigin: t,
          integrity: "string" === typeof r.integrity ? r.integrity : void 0,
          nonce: "string" === typeof r.nonce ? r.nonce : void 0,
        });
      }
    } else null == r && n.d.M(e);
};
t.preload = function (e, r) {
  if (
    "string" === typeof e &&
    "object" === typeof r &&
    null !== r &&
    "string" === typeof r.as
  ) {
    var t = r.as,
      i = getCrossOriginStringAs(t, r.crossOrigin);
    n.d.L(e, t, {
      crossOrigin: i,
      integrity: "string" === typeof r.integrity ? r.integrity : void 0,
      nonce: "string" === typeof r.nonce ? r.nonce : void 0,
      type: "string" === typeof r.type ? r.type : void 0,
      fetchPriority:
        "string" === typeof r.fetchPriority ? r.fetchPriority : void 0,
      referrerPolicy:
        "string" === typeof r.referrerPolicy ? r.referrerPolicy : void 0,
      imageSrcSet: "string" === typeof r.imageSrcSet ? r.imageSrcSet : void 0,
      imageSizes: "string" === typeof r.imageSizes ? r.imageSizes : void 0,
      media: "string" === typeof r.media ? r.media : void 0,
    });
  }
};
t.preloadModule = function (e, r) {
  if ("string" === typeof e)
    if (r) {
      var t = getCrossOriginStringAs(r.as, r.crossOrigin);
      n.d.m(e, {
        as: "string" === typeof r.as && "script" !== r.as ? r.as : void 0,
        crossOrigin: t,
        integrity: "string" === typeof r.integrity ? r.integrity : void 0,
      });
    } else n.d.m(e);
};
t.requestFormReset = function (e) {
  n.d.r(e);
};
t.unstable_batchedUpdates = function (e, r) {
  return e(r);
};
t.useFormState = function (e, r, t) {
  return s.H.useFormState(e, r, t);
};
t.useFormStatus = function () {
  return s.H.useHostTransitionStatus();
};
t.version = "19.1.0";
function checkDCE() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE === "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (e) {
      console.error(e);
    }
}
true;
checkDCE();
var c = t;
var f = c;
const a = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  g = c.createPortal,
  p = c.flushSync,
  d = c.preconnect,
  l = c.prefetchDNS,
  u = c.preinit,
  y = c.preinitModule,
  _ = c.preload,
  O = c.preloadModule,
  v = c.requestFormReset,
  S = c.unstable_batchedUpdates,
  m = c.useFormState,
  E = c.useFormStatus,
  h = c.version;
export {
  a as __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  g as createPortal,
  f as default,
  p as flushSync,
  d as preconnect,
  l as prefetchDNS,
  u as preinit,
  y as preinitModule,
  _ as preload,
  O as preloadModule,
  v as requestFormReset,
  S as unstable_batchedUpdates,
  m as useFormState,
  E as useFormStatus,
  h as version,
};
