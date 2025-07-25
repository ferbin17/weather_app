// hoist-non-react-statics@3.3.2 downloaded from https://ga.jspm.io/npm:hoist-non-react-statics@3.3.2/dist/hoist-non-react-statics.cjs.js

import * as t from "react-is";
var e = "default" in t ? t.default : t;
var r = {};
var a = e;
var o = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true,
};
var u = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true,
};
var p = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
var s = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true,
};
var i = {};
i[a.ForwardRef] = p;
i[a.Memo] = s;
function getStatics(t) {
  return a.isMemo(t) ? s : i[t.$$typeof] || o;
}
var c = Object.defineProperty;
var n = Object.getOwnPropertyNames;
var y = Object.getOwnPropertySymbols;
var v = Object.getOwnPropertyDescriptor;
var f = Object.getPrototypeOf;
var l = Object.prototype;
function hoistNonReactStatics(t, e, r) {
  if ("string" !== typeof e) {
    if (l) {
      var a = f(e);
      a && a !== l && hoistNonReactStatics(t, a, r);
    }
    var o = n(e);
    y && (o = o.concat(y(e)));
    var p = getStatics(t);
    var s = getStatics(e);
    for (var i = 0; i < o.length; ++i) {
      var d = o[i];
      if (!u[d] && !(r && r[d]) && !(s && s[d]) && !(p && p[d])) {
        var m = v(e, d);
        try {
          c(t, d, m);
        } catch (t) {}
      }
    }
  }
  return t;
}
r = hoistNonReactStatics;
var d = r;
export default d;
