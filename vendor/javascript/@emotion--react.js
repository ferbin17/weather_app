// @emotion/react@11.14.0 downloaded from https://ga.jspm.io/npm:@emotion/react@11.14.0/dist/emotion-react.browser.esm.js

import {
  h as e,
  E as r,
  c as t,
  w as n,
  T as s,
  i as o,
} from "../_/CzMbfi8W.js";
export {
  C as CacheProvider,
  a as ThemeProvider,
  _ as __unsafe_useEmotionCache,
  u as useTheme,
  b as withTheme,
} from "../_/CzMbfi8W.js";
import * as i from "react";
import {
  insertStyles as l,
  getRegisteredStyles as c,
  registerStyles as f,
} from "@emotion/utils";
import {
  useInsertionEffectWithLayoutFallback as m,
  useInsertionEffectAlwaysWithSyncFallback as v,
} from "@emotion/use-insertion-effect-with-fallbacks";
import { serializeStyles as h } from "@emotion/serialize";
import "@emotion/cache";
import "@babel/runtime/helpers/extends";
import "@emotion/weak-memoize";
import "../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js";
import "hoist-non-react-statics";
import "@babel/runtime/helpers/esm/extends";
var d = function jsx(n, a) {
  var s = arguments;
  if (a == null || !e.call(a, "css")) return i.createElement.apply(void 0, s);
  var o = s.length;
  var l = new Array(o);
  l[0] = r;
  l[1] = t(n, a);
  for (var c = 2; c < o; c++) l[c] = s[c];
  return i.createElement.apply(null, l);
};
(function (e) {
  var r;
  (function (e) {})(r || (r = e.JSX || (e.JSX = {})));
})(d || (d = {}));
var y = n(function (e, r) {
  var t = e.styles;
  var n = h([t], void 0, i.useContext(s));
  var a = i.useRef();
  m(
    function () {
      var e = r.key + "-global";
      var t = new r.sheet.constructor({
        key: e,
        nonce: r.sheet.nonce,
        container: r.sheet.container,
        speedy: r.sheet.isSpeedy,
      });
      var s = false;
      var o = document.querySelector(
        'style[data-emotion="' + e + " " + n.name + '"]',
      );
      r.sheet.tags.length && (t.before = r.sheet.tags[0]);
      if (o !== null) {
        s = true;
        o.setAttribute("data-emotion", e);
        t.hydrate([o]);
      }
      a.current = [t, s];
      return function () {
        t.flush();
      };
    },
    [r],
  );
  m(
    function () {
      var e = a.current;
      var t = e[0],
        s = e[1];
      if (s) e[1] = false;
      else {
        n.next !== void 0 && l(r, n.next, true);
        if (t.tags.length) {
          var o = t.tags[t.tags.length - 1].nextElementSibling;
          t.before = o;
          t.flush();
        }
        r.insert("", n, t, false);
      }
    },
    [r, n.name],
  );
  return null;
});
function css() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return h(r);
}
function keyframes() {
  var e = css.apply(void 0, arguments);
  var r = "animation-" + e.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var g = function classnames(e) {
  var r = e.length;
  var t = 0;
  var n = "";
  for (; t < r; t++) {
    var a = e[t];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object":
          if (Array.isArray(a)) s = classnames(a);
          else {
            s = "";
            for (var o in a)
              if (a[o] && o) {
                s && (s += " ");
                s += o;
              }
          }
          break;
        default:
          s = a;
      }
      if (s) {
        n && (n += " ");
        n += s;
      }
    }
  }
  return n;
};
function merge(e, r, t) {
  var n = [];
  var a = c(e, n, t);
  return n.length < 2 ? t : a + r(n);
}
var p = function Insertion(e) {
  var r = e.cache,
    t = e.serializedArr;
  v(function () {
    for (var e = 0; e < t.length; e++) l(r, t[e], false);
  });
  return null;
};
var w = n(function (e, r) {
  var t = false;
  var n = [];
  var a = function css() {
    if (t && o) throw new Error("css can only be used during render");
    for (var e = arguments.length, a = new Array(e), s = 0; s < e; s++)
      a[s] = arguments[s];
    var i = h(a, r.registered);
    n.push(i);
    f(r, i, false);
    return r.key + "-" + i.name;
  };
  var l = function cx() {
    if (t && o) throw new Error("cx can only be used during render");
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return merge(r.registered, a, g(n));
  };
  var c = { css: a, cx: l, theme: i.useContext(s) };
  var u = e.children(c);
  t = true;
  return i.createElement(
    i.Fragment,
    null,
    i.createElement(p, { cache: r, serializedArr: n }),
    u,
  );
});
export {
  w as ClassNames,
  y as Global,
  s as ThemeContext,
  d as createElement,
  css,
  d as jsx,
  keyframes,
  n as withEmotionCache,
};
