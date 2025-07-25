// @mui/system/DefaultPropsProvider@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/DefaultPropsProvider/index.js

import * as e from "react";
import o from "prop-types";
import t from "@mui/utils/resolveProps";
import { jsx as n } from "react/jsx-runtime";
("use client");
const r = e.createContext(void 0);
function s({ value: e, children: o }) {
  return n(r.Provider, { value: e, children: o });
}
process.env.NODE_ENV !== "production"
  ? (s.propTypes = { children: o.node, value: o.object })
  : void 0;
function p(e) {
  const { theme: o, name: n, props: r } = e;
  if (!o || !o.components || !o.components[n]) return r;
  const s = o.components[n];
  return s.defaultProps
    ? t(s.defaultProps, r, o.components.mergeClassNameAndStyle)
    : s.styleOverrides || s.variants
      ? r
      : t(s, r, o.components.mergeClassNameAndStyle);
}
function m({ props: o, name: t }) {
  const n = e.useContext(r);
  return p({ props: o, name: t, theme: { components: n } });
}
export { s as default, m as useDefaultProps };
