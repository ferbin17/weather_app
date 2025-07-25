// @emotion/serialize@1.3.3 downloaded from https://ga.jspm.io/npm:@emotion/serialize@1.3.3/dist/emotion-serialize.esm.js

import e from "@emotion/hash";
import r from "@emotion/unitless";
import n from "@emotion/memoize";
var t = false;
var a = /[A-Z]|^ms/g;
var o = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var i = function isCustomProperty(e) {
  return e.charCodeAt(1) === 45;
};
var l = function isProcessableValue(e) {
  return e != null && typeof e !== "boolean";
};
var s = n(function (e) {
  return i(e) ? e : e.replace(a, "-$&").toLowerCase();
});
var u = function processStyleValue(e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof n === "string")
        return n.replace(o, function (e, r, n) {
          c = { name: r, styles: n, next: c };
          return r;
        });
  }
  return r[e] === 1 || i(e) || typeof n !== "number" || n === 0 ? n : n + "px";
};
var v =
  "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(e, r, n) {
  if (n == null) return "";
  var t = n;
  if (t.__emotion_styles !== void 0) return t;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object":
      var a = n;
      if (a.anim === 1) {
        c = { name: a.name, styles: a.styles, next: c };
        return a.name;
      }
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          while (i !== void 0) {
            c = { name: i.name, styles: i.styles, next: c };
            i = i.next;
          }
        var l = o.styles + ";";
        return l;
      }
      return createStringFromObject(e, r, n);
    case "function":
      if (e !== void 0) {
        var s = c;
        var u = n(e);
        c = s;
        return handleInterpolation(e, r, u);
      }
      break;
  }
  var v = n;
  if (r == null) return v;
  var f = r[v];
  return f !== void 0 ? f : v;
}
function createStringFromObject(e, r, n) {
  var a = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      a += handleInterpolation(e, r, n[o]) + ";";
  else
    for (var i in n) {
      var f = n[i];
      if (typeof f !== "object") {
        var c = f;
        r != null && r[c] !== void 0
          ? (a += i + "{" + r[c] + "}")
          : l(c) && (a += s(i) + ":" + u(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && t) throw new Error(v);
        if (
          !Array.isArray(f) ||
          typeof f[0] !== "string" ||
          (r != null && r[f[0]] !== void 0)
        ) {
          var m = handleInterpolation(e, r, f);
          switch (i) {
            case "animation":
            case "animationName":
              a += s(i) + ":" + m + ";";
              break;
            default:
              a += i + "{" + m + "}";
          }
        } else
          for (var p = 0; p < f.length; p++)
            l(f[p]) && (a += s(i) + ":" + u(i, f[p]) + ";");
      }
    }
  return a;
}
var f = /label:\s*([^\s;{]+)\s*(;|$)/g;
var c;
function serializeStyles(r, n, t) {
  if (
    r.length === 1 &&
    typeof r[0] === "object" &&
    r[0] !== null &&
    r[0].styles !== void 0
  )
    return r[0];
  var a = true;
  var o = "";
  c = void 0;
  var i = r[0];
  if (i == null || i.raw === void 0) {
    a = false;
    o += handleInterpolation(t, n, i);
  } else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < r.length; s++) {
    o += handleInterpolation(t, n, r[s]);
    if (a) {
      var u = i;
      o += u[s];
    }
  }
  f.lastIndex = 0;
  var v = "";
  var m;
  while ((m = f.exec(o)) !== null) v += "-" + m[1];
  var p = e(o) + v;
  return { name: p, styles: o, next: c };
}
export { serializeStyles };
