// @emotion/cache@11.14.0 downloaded from https://ga.jspm.io/npm:@emotion/cache@11.14.0/dist/emotion-cache.browser.esm.js

import { StyleSheet as e } from "@emotion/sheet";
import {
  peek as r,
  token as a,
  next as t,
  slice as s,
  position as n,
  from as c,
  delimit as i,
  dealloc as o,
  alloc as u,
  hash as l,
  charat as p,
  WEBKIT as f,
  MS as v,
  replace as h,
  strlen as d,
  indexof as $,
  MOZ as m,
  RULESET as b,
  combine as w,
  match as g,
  serialize as y,
  copy as k,
  KEYFRAMES as x,
  DECLARATION as A,
  stringify as C,
  rulesheet as z,
  middleware as P,
  compile as q,
} from "stylis";
import "@emotion/weak-memoize";
import "@emotion/memoize";
var E = function identifierWithPointTracking(e, c, i) {
  var o = 0;
  var u = 0;
  while (true) {
    o = u;
    u = r();
    o === 38 && u === 12 && (c[i] = 1);
    if (a(u)) break;
    t();
  }
  return s(e, n);
};
var R = function toRules(e, s) {
  var o = -1;
  var u = 44;
  do {
    switch (a(u)) {
      case 0:
        u === 38 && r() === 12 && (s[o] = 1);
        e[o] += E(n - 1, s, o);
        break;
      case 2:
        e[o] += i(u);
        break;
      case 4:
        if (u === 44) {
          e[++o] = r() === 58 ? "&\f" : "";
          s[o] = e[o].length;
          break;
        }
      default:
        e[o] += c(u);
    }
  } while ((u = t()));
  return e;
};
var S = function getRules(e, r) {
  return o(R(u(e), r));
};
var W = new WeakMap();
var j = function compat(e) {
  if (e.type === "rule" && e.parent && !(e.length < 1)) {
    var r = e.value;
    var a = e.parent;
    var t = e.column === a.column && e.line === a.line;
    while (a.type !== "rule") {
      a = a.parent;
      if (!a) return;
    }
    if ((e.props.length !== 1 || r.charCodeAt(0) === 58 || W.get(a)) && !t) {
      W.set(e, true);
      var s = [];
      var n = S(r, s);
      var c = a.props;
      for (var i = 0, o = 0; i < n.length; i++)
        for (var u = 0; u < c.length; u++, o++)
          e.props[o] = s[i] ? n[i].replace(/&\f/g, c[u]) : c[u] + " " + n[i];
    }
  }
};
var L = function removeLabel(e) {
  if (e.type === "decl") {
    var r = e.value;
    if (r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98) {
      e.return = "";
      e.value = "";
    }
  }
};
function prefix(e, r) {
  switch (l(e, r)) {
    case 5103:
      return f + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return f + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return f + e + m + e + v + e + e;
    case 6828:
    case 4268:
      return f + e + v + e + e;
    case 6165:
      return f + e + v + "flex-" + e + e;
    case 5187:
      return (
        f + e + h(e, /(\w+).+(:[^]+)/, f + "box-$1$2" + v + "flex-$1$2") + e
      );
    case 5443:
      return f + e + v + "flex-item-" + h(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        f + e + v + "flex-line-pack" + h(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return f + e + v + h(e, "shrink", "negative") + e;
    case 5292:
      return f + e + v + h(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        f +
        "box-" +
        h(e, "-grow", "") +
        f +
        e +
        v +
        h(e, "grow", "positive") +
        e
      );
    case 4554:
      return f + h(e, /([^-])(transform)/g, "$1" + f + "$2") + e;
    case 6187:
      return (
        h(h(h(e, /(zoom-|grab)/, f + "$1"), /(image-set)/, f + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return h(e, /(image-set\([^]*)/, f + "$1$`$1");
    case 4968:
      return (
        h(
          h(e, /(.+:)(flex-)?(.*)/, f + "box-pack:$3" + v + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        f +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return h(e, /(.+)-inline(.+)/, f + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (d(e) - 1 - r > 6)
        switch (p(e, r + 1)) {
          case 109:
            if (p(e, r + 4) !== 45) break;
          case 102:
            return (
              h(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  f +
                  "$2-$3$1" +
                  m +
                  (p(e, r + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~$(e, "stretch")
              ? prefix(h(e, "stretch", "fill-available"), r) + e
              : e;
        }
      break;
    case 4949:
      if (p(e, r + 1) !== 115) break;
    case 6444:
      switch (p(e, d(e) - 3 - (~$(e, "!important") && 10))) {
        case 107:
          return h(e, ":", ":" + f) + e;
        case 101:
          return (
            h(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                f +
                (p(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                f +
                "$2$3$1" +
                v +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (p(e, r + 11)) {
        case 114:
          return f + e + v + h(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return f + e + v + h(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return f + e + v + h(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return f + e + v + e + e;
  }
  return e;
}
var M = function prefixer(e, r, a, t) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case A:
        e.return = prefix(e.value, e.length);
        break;
      case x:
        return y([k(e, { value: h(e.value, "@", "@" + f) })], t);
      case b:
        if (e.length)
          return w(e.props, function (r) {
            switch (g(r, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return y(
                  [k(e, { props: [h(r, /:(read-\w+)/, ":" + m + "$1")] })],
                  t,
                );
              case "::placeholder":
                return y(
                  [
                    k(e, { props: [h(r, /:(plac\w+)/, ":" + f + "input-$1")] }),
                    k(e, { props: [h(r, /:(plac\w+)/, ":" + m + "$1")] }),
                    k(e, { props: [h(r, /:(plac\w+)/, v + "input-$1")] }),
                  ],
                  t,
                );
            }
            return "";
          });
    }
};
var O = [M];
var T = function createCache(r) {
  var a = r.key;
  if (a === "css") {
    var t = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(t, function (e) {
      var r = e.getAttribute("data-emotion");
      if (r.indexOf(" ") !== -1) {
        document.head.appendChild(e);
        e.setAttribute("data-s", "");
      }
    });
  }
  var s = r.stylisPlugins || O;
  var n = {};
  var c;
  var i = [];
  c = r.container || document.head;
  Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
    function (e) {
      var r = e.getAttribute("data-emotion").split(" ");
      for (var a = 1; a < r.length; a++) n[r[a]] = true;
      i.push(e);
    },
  );
  var o;
  var u = [j, L];
  var l;
  var p = [
    C,
    z(function (e) {
      l.insert(e);
    }),
  ];
  var f = P(u.concat(s, p));
  var v = function stylis(e) {
    return y(q(e), f);
  };
  o = function insert(e, r, a, t) {
    l = a;
    v(e ? e + "{" + r.styles + "}" : r.styles);
    t && (h.inserted[r.name] = true);
  };
  var h = {
    key: a,
    sheet: new e({
      key: a,
      container: c,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint,
    }),
    nonce: r.nonce,
    inserted: n,
    registered: {},
    insert: o,
  };
  h.sheet.hydrate(i);
  return h;
};
export { T as default };
