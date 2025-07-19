// @mui/system/styleFunctionSx@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/styleFunctionSx/index.js

import { d as e } from "../../_/BheJLBs-.js";
export {
  s as default,
  u as unstable_createStyleFunctionSx,
} from "../../_/BheJLBs-.js";
import { isPlainObject as t } from "@mui/utils/deepmerge";
import "@mui/utils/capitalize";
import "../merge/index.js";
import "../style/index.js";
import "../responsivePropType/index.js";
import "prop-types";
import "../breakpoints/index.js";
import "../cssContainerQueries/index.js";
import "@mui/utils/formatMuiErrorMessage";
import "../spacing/index.js";
import "../memoize/index.js";
import "../borders/index.js";
import "../compose/index.js";
import "../cssGrid/index.js";
import "../palette/index.js";
import "../sizing/index.js";
const r = (s) => {
  const t = { systemProps: {}, otherProps: {} };
  const r = s?.theme?.unstable_sxConfig ?? e;
  Object.keys(s).forEach((e) => {
    r[e] ? (t.systemProps[e] = s[e]) : (t.otherProps[e] = s[e]);
  });
  return t;
};
function o(s) {
  const { sx: e, ...o } = s;
  const { systemProps: i, otherProps: n } = r(o);
  let p;
  p = Array.isArray(e)
    ? [i, ...e]
    : typeof e === "function"
      ? (...s) => {
          const r = e(...s);
          return t(r) ? { ...i, ...r } : i;
        }
      : { ...i, ...e };
  return { ...n, sx: p };
}
export { o as extendSxProp, e as unstable_defaultSxConfig };
