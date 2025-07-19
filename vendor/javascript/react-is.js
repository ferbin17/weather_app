// react-is@19.1.0 downloaded from https://ga.jspm.io/npm:react-is@19.1.0/index.js

var e = {};
var t = Symbol.for("react.transitional.element"),
  r = Symbol.for("react.portal"),
  o = Symbol.for("react.fragment"),
  n = Symbol.for("react.strict_mode"),
  s = Symbol.for("react.profiler");
Symbol.for("react.provider");
var f = Symbol.for("react.consumer"),
  i = Symbol.for("react.context"),
  a = Symbol.for("react.forward_ref"),
  c = Symbol.for("react.suspense"),
  u = Symbol.for("react.suspense_list"),
  y = Symbol.for("react.memo"),
  l = Symbol.for("react.lazy"),
  p = Symbol.for("react.view_transition"),
  m = Symbol.for("react.client.reference");
function typeOf$1(e) {
  if ("object" === typeof e && null !== e) {
    var m = e.$$typeof;
    switch (m) {
      case t:
        switch (((e = e.type), e)) {
          case o:
          case s:
          case n:
          case c:
          case u:
          case p:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case i:
              case a:
              case l:
              case y:
                return e;
              case f:
                return e;
              default:
                return m;
            }
        }
      case r:
        return m;
    }
  }
}
e.ContextConsumer = f;
e.ContextProvider = i;
e.Element = t;
e.ForwardRef = a;
e.Fragment = o;
e.Lazy = l;
e.Memo = y;
e.Portal = r;
e.Profiler = s;
e.StrictMode = n;
e.Suspense = c;
e.SuspenseList = u;
e.isContextConsumer = function (e) {
  return typeOf$1(e) === f;
};
e.isContextProvider = function (e) {
  return typeOf$1(e) === i;
};
e.isElement = function (e) {
  return "object" === typeof e && null !== e && e.$$typeof === t;
};
e.isForwardRef = function (e) {
  return typeOf$1(e) === a;
};
e.isFragment = function (e) {
  return typeOf$1(e) === o;
};
e.isLazy = function (e) {
  return typeOf$1(e) === l;
};
e.isMemo = function (e) {
  return typeOf$1(e) === y;
};
e.isPortal = function (e) {
  return typeOf$1(e) === r;
};
e.isProfiler = function (e) {
  return typeOf$1(e) === s;
};
e.isStrictMode = function (e) {
  return typeOf$1(e) === n;
};
e.isSuspense = function (e) {
  return typeOf$1(e) === c;
};
e.isSuspenseList = function (e) {
  return typeOf$1(e) === u;
};
e.isValidElementType = function (e) {
  return (
    "string" === typeof e ||
    "function" === typeof e ||
    e === o ||
    e === s ||
    e === n ||
    e === c ||
    e === u ||
    ("object" === typeof e &&
      null !== e &&
      (e.$$typeof === l ||
        e.$$typeof === y ||
        e.$$typeof === i ||
        e.$$typeof === f ||
        e.$$typeof === a ||
        e.$$typeof === m ||
        void 0 !== e.getModuleId))
  );
};
e.typeOf = typeOf$1;
const $ = e.ContextConsumer,
  S = e.ContextProvider,
  d = e.Element,
  b = e.ForwardRef,
  O = e.Fragment,
  C = e.Lazy,
  P = e.Memo,
  v = e.Portal,
  x = e.Profiler,
  w = e.StrictMode,
  M = e.Suspense,
  F = e.SuspenseList,
  L = e.isContextConsumer,
  g = e.isContextProvider,
  E = e.isElement,
  z = e.isForwardRef,
  R = e.isFragment,
  _ = e.isLazy,
  h = e.isMemo,
  j = e.isPortal,
  T = e.isProfiler,
  V = e.isStrictMode,
  I = e.isSuspense,
  k = e.isSuspenseList,
  q = e.isValidElementType,
  A = e.typeOf;
export {
  $ as ContextConsumer,
  S as ContextProvider,
  d as Element,
  b as ForwardRef,
  O as Fragment,
  C as Lazy,
  P as Memo,
  v as Portal,
  x as Profiler,
  w as StrictMode,
  M as Suspense,
  F as SuspenseList,
  e as default,
  L as isContextConsumer,
  g as isContextProvider,
  E as isElement,
  z as isForwardRef,
  R as isFragment,
  _ as isLazy,
  h as isMemo,
  j as isPortal,
  T as isProfiler,
  V as isStrictMode,
  I as isSuspense,
  k as isSuspenseList,
  q as isValidElementType,
  A as typeOf,
};
