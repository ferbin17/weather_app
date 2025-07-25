// react-transition-group@4.4.5 downloaded from https://ga.jspm.io/npm:react-transition-group@4.4.5/esm/index.js

export { default as CSSTransition } from "./CSSTransition.js";
import e from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import n from "@babel/runtime/helpers/esm/inheritsLoose";
import r from "prop-types";
import t from "react";
import i from "react-dom";
import o from "./TransitionGroup.js";
export { default as TransitionGroup } from "./TransitionGroup.js";
import { E as a, a as l, b as s } from "../_/570ce52b.js";
export { T as Transition, c as config } from "../_/570ce52b.js";
import u from "./TransitionGroupContext.js";
import "@babel/runtime/helpers/esm/extends";
import "dom-helpers/addClass";
import "dom-helpers/removeClass";
import "@babel/runtime/helpers/esm/assertThisInitialized";
var d = (function (r) {
  n(ReplaceTransition, r);
  function ReplaceTransition() {
    var e;
    for (var n = arguments.length, t = new Array(n), i = 0; i < n; i++)
      t[i] = arguments[i];
    e = r.call.apply(r, [this].concat(t)) || this;
    e.handleEnter = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onEnter", 0, r);
    };
    e.handleEntering = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onEntering", 0, r);
    };
    e.handleEntered = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onEntered", 0, r);
    };
    e.handleExit = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onExit", 1, r);
    };
    e.handleExiting = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onExiting", 1, r);
    };
    e.handleExited = function () {
      for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
        r[t] = arguments[t];
      return e.handleLifecycle("onExited", 1, r);
    };
    return e;
  }
  var a = ReplaceTransition.prototype;
  a.handleLifecycle = function handleLifecycle(e, n, r) {
    var o;
    var a = this.props.children;
    var l = t.Children.toArray(a)[n];
    l.props[e] && (o = l.props)[e].apply(o, r);
    if (this.props[e]) {
      var c = l.props.nodeRef ? void 0 : i.findDOMNode(this);
      this.props[e](c);
    }
  };
  a.render = function render() {
    var n = this.props,
      r = n.children,
      i = n.in,
      a = e(n, ["children", "in"]);
    var l = t.Children.toArray(r),
      c = l[0],
      s = l[1];
    delete a.onEnter;
    delete a.onEntering;
    delete a.onEntered;
    delete a.onExit;
    delete a.onExiting;
    delete a.onExited;
    return t.createElement(
      o,
      a,
      i
        ? t.cloneElement(c, {
            key: "first",
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onEntered: this.handleEntered,
          })
        : t.cloneElement(s, {
            key: "second",
            onEnter: this.handleExit,
            onEntering: this.handleExiting,
            onEntered: this.handleExited,
          }),
    );
  };
  return ReplaceTransition;
})(t.Component);
d.propTypes =
  "production" !== process.env.NODE_ENV
    ? {
        in: r.bool.isRequired,
        children: function children(e, n) {
          return 2 !== t.Children.count(e[n])
            ? new Error(
                '"' + n + '" must be exactly two transition components.',
              )
            : null;
        },
      }
    : {};
var p, h;
function areChildrenDifferent(e, n) {
  return (
    e !== n &&
    (!t.isValidElement(e) ||
      !t.isValidElement(n) ||
      null == e.key ||
      e.key !== n.key)
  );
}
var f = { out: "out-in", in: "in-out" };
var m = function callHook(e, n, r) {
  return function () {
    var t;
    e.props[n] && (t = e.props)[n].apply(t, arguments);
    r();
  };
};
var E =
  ((p = {}),
  (p[f.out] = function (e) {
    var n = e.current,
      r = e.changeState;
    return t.cloneElement(n, {
      in: false,
      onExited: m(n, "onExited", function () {
        r(a, null);
      }),
    });
  }),
  (p[f.in] = function (e) {
    var n = e.current,
      r = e.changeState,
      i = e.children;
    return [
      n,
      t.cloneElement(i, {
        in: true,
        onEntered: m(i, "onEntered", function () {
          r(a);
        }),
      }),
    ];
  }),
  p);
var v =
  ((h = {}),
  (h[f.out] = function (e) {
    var n = e.children,
      r = e.changeState;
    return t.cloneElement(n, {
      in: true,
      onEntered: m(n, "onEntered", function () {
        r(l, t.cloneElement(n, { in: true }));
      }),
    });
  }),
  (h[f.in] = function (e) {
    var n = e.current,
      r = e.children,
      i = e.changeState;
    return [
      t.cloneElement(n, {
        in: false,
        onExited: m(n, "onExited", function () {
          i(l, t.cloneElement(r, { in: true }));
        }),
      }),
      t.cloneElement(r, { in: true }),
    ];
  }),
  h);
var y = (function (e) {
  n(SwitchTransition, e);
  function SwitchTransition() {
    var n;
    for (var r = arguments.length, t = new Array(r), i = 0; i < r; i++)
      t[i] = arguments[i];
    n = e.call.apply(e, [this].concat(t)) || this;
    n.state = { status: l, current: null };
    n.appeared = false;
    n.changeState = function (e, r) {
      void 0 === r && (r = n.state.current);
      n.setState({ status: e, current: r });
    };
    return n;
  }
  var r = SwitchTransition.prototype;
  r.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(
    e,
    n,
  ) {
    return null == e.children
      ? { current: null }
      : n.status === a && e.mode === f.in
        ? { status: a }
        : n.current && areChildrenDifferent(n.current, e.children)
          ? { status: s }
          : { current: t.cloneElement(e.children, { in: true }) };
  };
  r.render = function render() {
    var e = this.props,
      n = e.children,
      r = e.mode,
      i = this.state,
      o = i.status,
      c = i.current;
    var d = {
      children: n,
      current: c,
      changeState: this.changeState,
      status: o,
    };
    var p;
    switch (o) {
      case a:
        p = v[r](d);
        break;
      case s:
        p = E[r](d);
        break;
      case l:
        p = c;
    }
    return t.createElement(
      u.Provider,
      { value: { isMounting: !this.appeared } },
      p,
    );
  };
  return SwitchTransition;
})(t.Component);
y.propTypes =
  "production" !== process.env.NODE_ENV
    ? {
        /**
         * Transition modes.
         * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
         * `in-out`: New element transitions in first, then when complete, the current element transitions out.
         *
         * @type {'out-in'|'in-out'}
         */
        mode: r.oneOf([f.in, f.out]),
        children: r.oneOfType([r.element.isRequired]),
      }
    : {};
y.defaultProps = { mode: f.out };
export { d as ReplaceTransition, y as SwitchTransition };
