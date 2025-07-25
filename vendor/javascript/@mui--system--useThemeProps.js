// @mui/system/useThemeProps@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/useThemeProps/index.js

import e from "@mui/utils/resolveProps";
import i from "../useTheme/index.js";
import "../../_/CLfKUPDW.js";
import "@mui/utils/deepmerge";
import "../../_/BFC5_3ZN.js";
import "../cssContainerQueries/index.js";
import "@mui/utils/formatMuiErrorMessage";
import "../spacing/index.js";
import "../responsivePropType/index.js";
import "prop-types";
import "../breakpoints/index.js";
import "../merge/index.js";
import "../style/index.js";
import "@mui/utils/capitalize";
import "../memoize/index.js";
import "../../_/BheJLBs-.js";
import "../borders/index.js";
import "../compose/index.js";
import "../cssGrid/index.js";
import "../palette/index.js";
import "../sizing/index.js";
import "../useThemeWithoutDefault/index.js";
import "react";
import "@mui/styled-engine";
function t(i) {
  const { theme: t, name: o, props: r } = i;
  return t && t.components && t.components[o] && t.components[o].defaultProps
    ? e(t.components[o].defaultProps, r)
    : r;
}
("use client");
function o({ props: e, name: o, defaultTheme: r, themeId: s }) {
  let m = i(r);
  s && (m = m[s] || m);
  return t({ theme: m, name: o, props: e });
}
export { o as default, t as getThemeProps };
