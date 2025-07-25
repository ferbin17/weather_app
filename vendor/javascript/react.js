// react@19.1.0 downloaded from https://ga.jspm.io/npm:react@19.1.0/index.js

var e = {};
var t = Symbol.for("react.transitional.element"),
  n = Symbol.for("react.portal"),
  r = Symbol.for("react.fragment"),
  o = Symbol.for("react.strict_mode"),
  u = Symbol.for("react.profiler"),
  a = Symbol.for("react.consumer"),
  i = Symbol.for("react.context"),
  s = Symbol.for("react.forward_ref"),
  c = Symbol.for("react.suspense"),
  l = Symbol.for("react.memo"),
  f = Symbol.for("react.lazy"),
  p = Symbol.iterator;
function getIteratorFn(e) {
  if (null === e || "object" !== typeof e) return null;
  e = (p && e[p]) || e["@@iterator"];
  return "function" === typeof e ? e : null;
}
var y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  d = Object.assign,
  m = {};
function Component$1(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = n || y;
}
Component$1.prototype.isReactComponent = {};
Component$1.prototype.setState = function (e, t) {
  if ("object" !== typeof e && "function" !== typeof e && null != e)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Component$1.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component$1.prototype;
function PureComponent$1(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = n || y;
}
var h = (PureComponent$1.prototype = new ComponentDummy());
h.constructor = PureComponent$1;
d(h, Component$1.prototype);
h.isPureReactComponent = !0;
var _ = Array.isArray,
  v = { H: null, A: null, T: null, S: null, V: null },
  E = Object.prototype.hasOwnProperty;
function ReactElement(e, n, r, o, u, a) {
  r = a.ref;
  return {
    $$typeof: t,
    type: e,
    key: n,
    ref: void 0 !== r ? r : null,
    props: a,
  };
}
function cloneAndReplaceKey(e, t) {
  return ReactElement(e.type, t, void 0, void 0, void 0, e.props);
}
function isValidElement$1(e) {
  return "object" === typeof e && null !== e && e.$$typeof === t;
}
function escape(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (e) {
      return t[e];
    })
  );
}
var b = /\/+/g;
function getElementKey(e, t) {
  return "object" === typeof e && null !== e && null != e.key
    ? escape("" + e.key)
    : t.toString(36);
}
function noop$1() {}
function resolveThenable(e) {
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (
        ("string" === typeof e.status
          ? e.then(noop$1, noop$1)
          : ((e.status = "pending"),
            e.then(
              function (t) {
                "pending" === e.status &&
                  ((e.status = "fulfilled"), (e.value = t));
              },
              function (t) {
                "pending" === e.status &&
                  ((e.status = "rejected"), (e.reason = t));
              },
            )),
        e.status)
      ) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
  }
  throw e;
}
function mapIntoArray(e, r, o, u, a) {
  var i = typeof e;
  ("undefined" !== i && "boolean" !== i) || (e = null);
  var s = !1;
  if (null === e) s = !0;
  else
    switch (i) {
      case "bigint":
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case t:
          case n:
            s = !0;
            break;
          case f:
            return ((s = e._init), mapIntoArray(s(e._payload), r, o, u, a));
        }
    }
  if (s)
    return (
      (a = a(e)),
      (s = "" === u ? "." + getElementKey(e, 0) : u),
      _(a)
        ? ((o = ""),
          null != s && (o = s.replace(b, "$&/") + "/"),
          mapIntoArray(a, r, o, "", function (e) {
            return e;
          }))
        : null != a &&
          (isValidElement$1(a) &&
            (a = cloneAndReplaceKey(
              a,
              o +
                (null == a.key || (e && e.key === a.key)
                  ? ""
                  : ("" + a.key).replace(b, "$&/") + "/") +
                s,
            )),
          r.push(a)),
      1
    );
  s = 0;
  var c = "" === u ? "." : u + ":";
  if (_(e))
    for (var l = 0; l < e.length; l++)
      ((u = e[l]),
        (i = c + getElementKey(u, l)),
        (s += mapIntoArray(u, r, o, i, a)));
  else if (((l = getIteratorFn(e)), "function" === typeof l))
    for (e = l.call(e), l = 0; !(u = e.next()).done; )
      ((u = u.value),
        (i = c + getElementKey(u, l++)),
        (s += mapIntoArray(u, r, o, i, a)));
  else if ("object" === i) {
    if ("function" === typeof e.then)
      return mapIntoArray(resolveThenable(e), r, o, u, a);
    r = String(e);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === r
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : r) +
        "). If you meant to render a collection of children, use an array instead.",
    );
  }
  return s;
}
function mapChildren(e, t, n) {
  if (null == e) return e;
  var r = [],
    o = 0;
  mapIntoArray(e, r, "", "", function (e) {
    return t.call(n, e, o++);
  });
  return r;
}
function lazyInitializer(e) {
  if (-1 === e._status) {
    var t = e._result;
    t = t();
    t.then(
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 1), (e._result = t));
      },
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 2), (e._result = t));
      },
    );
    -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var C =
  "function" === typeof reportError
    ? reportError
    : function (e) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof e &&
              null !== e &&
              "string" === typeof e.message
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      };
function noop() {}
e.Children = {
  map: mapChildren,
  forEach: function (e, t, n) {
    mapChildren(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    mapChildren(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return (
      mapChildren(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!isValidElement$1(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
e.Component = Component$1;
e.Fragment = r;
e.Profiler = u;
e.PureComponent = PureComponent$1;
e.StrictMode = o;
e.Suspense = c;
e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v;
e.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (e) {
    return v.H.useMemoCache(e);
  },
};
e.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
e.cloneElement = function (e, t, n) {
  if (null === e || void 0 === e)
    throw Error(
      "The argument must be a React element, but you passed " + e + ".",
    );
  var r = d({}, e.props),
    o = e.key,
    u = void 0;
  if (null != t)
    for (a in (void 0 !== t.ref && (u = void 0),
    void 0 !== t.key && (o = "" + t.key),
    t))
      !E.call(t, a) ||
        "key" === a ||
        "__self" === a ||
        "__source" === a ||
        ("ref" === a && void 0 === t.ref) ||
        (r[a] = t[a]);
  var a = arguments.length - 2;
  if (1 === a) r.children = n;
  else if (1 < a) {
    for (var i = Array(a), s = 0; s < a; s++) i[s] = arguments[s + 2];
    r.children = i;
  }
  return ReactElement(e.type, o, void 0, void 0, u, r);
};
e.createContext = function (e) {
  e = {
    $$typeof: i,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
  };
  e.Provider = e;
  e.Consumer = { $$typeof: a, _context: e };
  return e;
};
e.createElement = function (e, t, n) {
  var r,
    o = {},
    u = null;
  if (null != t)
    for (r in (void 0 !== t.key && (u = "" + t.key), t))
      E.call(t, r) &&
        "key" !== r &&
        "__self" !== r &&
        "__source" !== r &&
        (o[r] = t[r]);
  var a = arguments.length - 2;
  if (1 === a) o.children = n;
  else if (1 < a) {
    for (var i = Array(a), s = 0; s < a; s++) i[s] = arguments[s + 2];
    o.children = i;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) void 0 === o[r] && (o[r] = a[r]);
  return ReactElement(e, u, void 0, void 0, null, o);
};
e.createRef = function () {
  return { current: null };
};
e.forwardRef = function (e) {
  return { $$typeof: s, render: e };
};
e.isValidElement = isValidElement$1;
e.lazy = function (e) {
  return {
    $$typeof: f,
    _payload: { _status: -1, _result: e },
    _init: lazyInitializer,
  };
};
e.memo = function (e, t) {
  return { $$typeof: l, type: e, compare: void 0 === t ? null : t };
};
e.startTransition = function (e) {
  var t = v.T,
    n = {};
  v.T = n;
  try {
    var r = e(),
      o = v.S;
    null !== o && o(n, r);
    "object" === typeof r &&
      null !== r &&
      "function" === typeof r.then &&
      r.then(noop, C);
  } catch (e) {
    C(e);
  } finally {
    v.T = t;
  }
};
e.unstable_useCacheRefresh = function () {
  return v.H.useCacheRefresh();
};
e.use = function (e) {
  return v.H.use(e);
};
e.useActionState = function (e, t, n) {
  return v.H.useActionState(e, t, n);
};
e.useCallback = function (e, t) {
  return v.H.useCallback(e, t);
};
e.useContext = function (e) {
  return v.H.useContext(e);
};
e.useDebugValue = function () {};
e.useDeferredValue = function (e, t) {
  return v.H.useDeferredValue(e, t);
};
e.useEffect = function (e, t, n) {
  var r = v.H;
  if ("function" === typeof n)
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React.",
    );
  return r.useEffect(e, t);
};
e.useId = function () {
  return v.H.useId();
};
e.useImperativeHandle = function (e, t, n) {
  return v.H.useImperativeHandle(e, t, n);
};
e.useInsertionEffect = function (e, t) {
  return v.H.useInsertionEffect(e, t);
};
e.useLayoutEffect = function (e, t) {
  return v.H.useLayoutEffect(e, t);
};
e.useMemo = function (e, t) {
  return v.H.useMemo(e, t);
};
e.useOptimistic = function (e, t) {
  return v.H.useOptimistic(e, t);
};
e.useReducer = function (e, t, n) {
  return v.H.useReducer(e, t, n);
};
e.useRef = function (e) {
  return v.H.useRef(e);
};
e.useState = function (e) {
  return v.H.useState(e);
};
e.useSyncExternalStore = function (e, t, n) {
  return v.H.useSyncExternalStore(e, t, n);
};
e.useTransition = function () {
  return v.H.useTransition();
};
e.version = "19.1.0";
const S = e.Children,
  R = e.Component,
  $ = e.Fragment,
  g = e.Profiler,
  w = e.PureComponent,
  I = e.StrictMode,
  A = e.Suspense,
  H = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  T = e.__COMPILER_RUNTIME,
  j = e.act,
  k = e.cache,
  O = e.captureOwnerStack,
  P = e.cloneElement,
  x = e.createContext,
  N = e.createElement,
  V = e.createRef,
  D = e.forwardRef,
  U = e.isValidElement,
  M = e.lazy,
  L = e.memo,
  z = e.startTransition,
  F = e.unstable_useCacheRefresh,
  K = e.use,
  q = e.useActionState,
  G = e.useCallback,
  W = e.useContext,
  Y = e.useDebugValue,
  B = e.useDeferredValue,
  J = e.useEffect,
  Q = e.useId,
  X = e.useImperativeHandle,
  Z = e.useInsertionEffect,
  ee = e.useLayoutEffect,
  te = e.useMemo,
  ne = e.useOptimistic,
  re = e.useReducer,
  oe = e.useRef,
  ue = e.useState,
  ae = e.useSyncExternalStore,
  ie = e.useTransition,
  se = e.version;
export {
  S as Children,
  R as Component,
  $ as Fragment,
  g as Profiler,
  w as PureComponent,
  I as StrictMode,
  A as Suspense,
  H as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  T as __COMPILER_RUNTIME,
  j as act,
  k as cache,
  O as captureOwnerStack,
  P as cloneElement,
  x as createContext,
  N as createElement,
  V as createRef,
  e as default,
  D as forwardRef,
  U as isValidElement,
  M as lazy,
  L as memo,
  z as startTransition,
  F as unstable_useCacheRefresh,
  K as use,
  q as useActionState,
  G as useCallback,
  W as useContext,
  Y as useDebugValue,
  B as useDeferredValue,
  J as useEffect,
  Q as useId,
  X as useImperativeHandle,
  Z as useInsertionEffect,
  ee as useLayoutEffect,
  te as useMemo,
  ne as useOptimistic,
  re as useReducer,
  oe as useRef,
  ue as useState,
  ae as useSyncExternalStore,
  ie as useTransition,
  se as version,
};
