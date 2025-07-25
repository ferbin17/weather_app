// @mui/system/spacing@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/spacing/index.js

import n from "../responsivePropType/index.js";
import { handleBreakpoints as r } from "../breakpoints/index.js";
import { getPath as e } from "../style/index.js";
import t from "../merge/index.js";
import o from "../memoize/index.js";
import "prop-types";
import "@mui/utils/deepmerge";
import "../cssContainerQueries/index.js";
import "@mui/utils/formatMuiErrorMessage";
import "@mui/utils/capitalize";
const i = { m: "margin", p: "padding" };
const s = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"],
};
const p = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" };
const a = o((n) => {
  if (n.length > 2) {
    if (!p[n]) return [n];
    n = p[n];
  }
  const [r, e] = n.split("");
  const t = i[r];
  const o = s[e] || "";
  return Array.isArray(o) ? o.map((n) => t + n) : [t + o];
});
const u = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
];
const d = [
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
  "paddingInline",
  "paddingInlineStart",
  "paddingInlineEnd",
  "paddingBlock",
  "paddingBlockStart",
  "paddingBlockEnd",
];
const c = [...u, ...d];
function m(n, r, t, o) {
  const i = e(n, r, true) ?? t;
  if (typeof i === "number" || typeof i === "string")
    return (n) => {
      if (typeof n === "string") return n;
      process.env.NODE_ENV !== "production" &&
        typeof n !== "number" &&
        console.error(
          `MUI: Expected ${o} argument to be a number or a string, got ${n}.`,
        );
      return typeof i === "string"
        ? i.startsWith("var(") && n === 0
          ? 0
          : i.startsWith("var(") && n === 1
            ? i
            : `calc(${n} * ${i})`
        : i * n;
    };
  if (Array.isArray(i))
    return (n) => {
      if (typeof n === "string") return n;
      const e = Math.abs(n);
      process.env.NODE_ENV !== "production" &&
        (Number.isInteger(e)
          ? e > i.length - 1 &&
            console.error(
              [
                `MUI: The value provided (${e}) overflows.`,
                `The supported values are: ${JSON.stringify(i)}.`,
                `${e} > ${i.length - 1}, you need to add the missing values.`,
              ].join("\n"),
            )
          : console.error(
              [
                `MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`,
              ].join("\n"),
            ));
      const t = i[e];
      return n >= 0
        ? t
        : typeof t === "number"
          ? -t
          : typeof t === "string" && t.startsWith("var(")
            ? `calc(-1 * ${t})`
            : `-${t}`;
    };
  if (typeof i === "function") return i;
  process.env.NODE_ENV !== "production" &&
    console.error(
      [
        `MUI: The \`theme.${r}\` value (${i}) is invalid.`,
        "It should be a number, an array or a function.",
      ].join("\n"),
    );
  return () => {};
}
function g(n) {
  return m(n, "spacing", 8, "spacing");
}
function l(n, r) {
  return typeof r === "string" || r == null ? r : n(r);
}
function f(n, r) {
  return (e) =>
    n.reduce((n, t) => {
      n[t] = l(r, e);
      return n;
    }, {});
}
function y(n, e, t, o) {
  if (!e.includes(t)) return null;
  const i = a(t);
  const s = f(i, o);
  const p = n[t];
  return r(n, p, s);
}
function h(n, r) {
  const e = g(n.theme);
  return Object.keys(n)
    .map((t) => y(n, r, t, e))
    .reduce(t, {});
}
function v(n) {
  return h(n, u);
}
v.propTypes =
  process.env.NODE_ENV !== "production"
    ? u.reduce((r, e) => {
        r[e] = n;
        return r;
      }, {})
    : {};
v.filterProps = u;
function b(n) {
  return h(n, d);
}
b.propTypes =
  process.env.NODE_ENV !== "production"
    ? d.reduce((r, e) => {
        r[e] = n;
        return r;
      }, {})
    : {};
b.filterProps = d;
function E(n) {
  return h(n, c);
}
E.propTypes =
  process.env.NODE_ENV !== "production"
    ? c.reduce((r, e) => {
        r[e] = n;
        return r;
      }, {})
    : {};
E.filterProps = c;
export {
  g as createUnarySpacing,
  m as createUnaryUnit,
  E as default,
  f as getStyleFromPropValue,
  l as getValue,
  v as margin,
  u as marginKeys,
  b as padding,
  d as paddingKeys,
};
