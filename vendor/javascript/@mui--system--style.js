// @mui/system/style@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/style/index.js

import r from "@mui/utils/capitalize";
import t from "../responsivePropType/index.js";
import { handleBreakpoints as e } from "../breakpoints/index.js";
import "prop-types";
import "@mui/utils/deepmerge";
import "../merge/index.js";
import "../cssContainerQueries/index.js";
import "@mui/utils/formatMuiErrorMessage";
function n(r, t, e = true) {
  if (!t || typeof t !== "string") return null;
  if (r && r.vars && e) {
    const e = `vars.${t}`
      .split(".")
      .reduce((r, t) => (r && r[t] ? r[t] : null), r);
    if (e != null) return e;
  }
  return t.split(".").reduce((r, t) => (r && r[t] != null ? r[t] : null), r);
}
function o(r, t, e, o = e) {
  let i;
  i =
    typeof r === "function"
      ? r(e)
      : Array.isArray(r)
        ? r[e] || o
        : n(r, e) || o;
  t && (i = t(i, o, r));
  return i;
}
function i(i) {
  const { prop: s, cssProperty: p = i.prop, themeKey: u, transform: l } = i;
  const f = (t) => {
    if (t[s] == null) return null;
    const i = t[s];
    const f = t.theme;
    const m = n(f, u) || {};
    const c = (t) => {
      let e = o(m, l, t);
      t === e &&
        typeof t === "string" &&
        (e = o(m, l, `${s}${t === "default" ? "" : r(t)}`, t));
      return p === false ? e : { [p]: e };
    };
    return e(t, i, c);
  };
  f.propTypes = process.env.NODE_ENV !== "production" ? { [s]: t } : {};
  f.filterProps = [s];
  return f;
}
export { i as default, n as getPath, o as getStyleValue };
