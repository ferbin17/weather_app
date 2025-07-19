// @mui/material/styles@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/material@7.2.0/esm/styles/index.js

import t from "@mui/utils/formatMuiErrorMessage";
import { T as o } from "../../_/DHHyDJeV.js";
import {
  createSpacing as r,
  createBreakpoints as n,
  ThemeProvider as m,
  unstable_createCssVarsProvider as l,
} from "@mui/system";
export {
  StyledEngineProvider,
  alpha,
  css,
  darken,
  decomposeColor,
  emphasize,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  keyframes,
  lighten,
  recomposeColor,
  rgbToHex,
} from "@mui/system";
export { unstable_createBreakpoints } from "@mui/system/createBreakpoints";
import { c, k as p, h, f } from "../../_/BNW_nXeH.js";
export {
  b as createColorScheme,
  a as createTransitions,
  d as duration,
  e as easing,
  g as getOverlayAlpha,
  i as private_createMixins,
  j as private_excludeVariablesFromRoot,
  s as shouldSkipGeneratingVar,
} from "../../_/BNW_nXeH.js";
import y from "@mui/utils/deepmerge";
export { u as useTheme } from "../../_/D_WGnpfS.js";
import S from "@mui/system/useThemeProps";
export { s as styled } from "../../_/DbwSBc_B.js";
import * as v from "react";
import { jsx as x } from "react/jsx-runtime";
import _ from "@mui/system/styleFunctionSx";
import { d as E } from "../../_/n8EhtiRt.js";
import "@mui/system/colorManipulator";
import "../../_/CsfaQFxO.js";
import "@mui/system/spacing";
import "@mui/system/cssVars";
import "@mui/system/createTheme";
import "@mui/utils/generateUtilityClass";
import "@mui/system/createStyled";
import "prop-types";
import "@mui/system/InitColorSchemeScript";
("use client");
function T(e) {
  process.env.NODE_ENV !== "production" &&
    console.warn(
      [
        "MUI: adaptV4Theme() is deprecated.",
        "Follow the upgrade guide on https://mui.com/r/migration-v4#theme.",
      ].join("\n"),
    );
  const {
    defaultProps: t = {},
    mixins: o = {},
    overrides: s = {},
    palette: i = {},
    props: a = {},
    styleOverrides: m = {},
    ...l
  } = e;
  const u = { ...l, components: {} };
  Object.keys(t).forEach((e) => {
    const o = u.components[e] || {};
    o.defaultProps = t[e];
    u.components[e] = o;
  });
  Object.keys(a).forEach((e) => {
    const t = u.components[e] || {};
    t.defaultProps = a[e];
    u.components[e] = t;
  });
  Object.keys(m).forEach((e) => {
    const t = u.components[e] || {};
    t.styleOverrides = m[e];
    u.components[e] = t;
  });
  Object.keys(s).forEach((e) => {
    const t = u.components[e] || {};
    t.styleOverrides = s[e];
    u.components[e] = t;
  });
  u.spacing = r(e.spacing);
  const c = n(e.breakpoints || {});
  const p = u.spacing;
  u.mixins = {
    gutters: (e = {}) => ({
      paddingLeft: p(2),
      paddingRight: p(2),
      ...e,
      [c.up("sm")]: { paddingLeft: p(3), paddingRight: p(3), ...e[c.up("sm")] },
    }),
    ...o,
  };
  const { type: h, mode: d, ...f } = i;
  const g = d || h || "light";
  u.palette = {
    text: {
      hint: g === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)",
    },
    mode: g,
    type: g,
    ...f,
  };
  return u;
}
function w(e, ...t) {
  return c(y({ unstable_strictMode: true }, e), ...t);
}
let k = false;
function I(e) {
  if (!k) {
    console.warn(
      [
        "MUI: createStyles from @mui/material/styles is deprecated.",
        "Please use @mui/styles/createStyles",
      ].join("\n"),
    );
    k = true;
  }
  return e;
}
function M(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function C(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function F(e) {
  return parseFloat(e);
}
function O(e) {
  return (t, o) => {
    const r = C(t);
    if (r === o) return t;
    let s = F(t);
    r !== "px" && (r === "em" || r === "rem") && (s = F(t) * F(e));
    let n = s;
    if (o !== "px")
      if (o === "em") n = s / F(e);
      else {
        if (o !== "rem") return t;
        n = s / F(e);
      }
    return parseFloat(n.toFixed(5)) + o;
  };
}
function U({ size: e, grid: t }) {
  const o = e - (e % t);
  const r = o + t;
  return e - o < r - e ? o : r;
}
function N({ lineHeight: e, pixels: t, htmlFontSize: o }) {
  return t / (e * o);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */ function V({
  cssProperty: e,
  min: t,
  max: o,
  unit: r = "rem",
  breakpoints: s = [600, 900, 1200],
  transform: n = null,
}) {
  const i = { [e]: `${t}${r}` };
  const a = (o - t) / s[s.length - 1];
  s.forEach((o) => {
    let s = t + a * o;
    n !== null && (s = n(s));
    i[`@media (min-width:${o}px)`] = {
      [e]: `${Math.round(s * 1e4) / 1e4}${r}`,
    };
  });
  return i;
}
function P(e, o = {}) {
  const {
    breakpoints: r = ["sm", "md", "lg"],
    disableAlign: s = false,
    factor: n = 2,
    variants: i = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "button",
      "overline",
    ],
  } = o;
  const a = { ...e };
  a.typography = { ...a.typography };
  const m = a.typography;
  const l = O(m.htmlFontSize);
  const u = r.map((e) => a.breakpoints.values[e]);
  i.forEach((e) => {
    const o = m[e];
    if (!o) return;
    const r = parseFloat(l(o.fontSize, "rem"));
    if (r <= 1) return;
    const i = r;
    const a = 1 + (i - 1) / n;
    let { lineHeight: c } = o;
    if (!M(c) && !s)
      throw new Error(
        process.env.NODE_ENV !== "production"
          ? "MUI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead."
          : t(6),
      );
    M(c) || (c = parseFloat(l(c, "rem")) / parseFloat(r));
    let p = null;
    s ||
      (p = (e) =>
        U({
          size: e,
          grid: N({ pixels: 4, lineHeight: c, htmlFontSize: m.htmlFontSize }),
        }));
    m[e] = {
      ...o,
      ...V({
        cssProperty: "fontSize",
        min: a,
        max: i,
        unit: "rem",
        breakpoints: u,
        transform: p,
      }),
    };
  });
  return a;
}
("use client");
function z({ props: e, name: t }) {
  return S({ props: e, name: t, defaultTheme: p, themeId: o });
}
("use client");
function D({ theme: e, ...t }) {
  const r = o in e ? e[o] : void 0;
  return x(m, { ...t, themeId: r ? o : void 0, theme: r || e });
}
("use client");
const {
  CssVarsProvider: Y,
  useColorScheme: R,
  getInitColorSchemeScript: $,
} = l({
  themeId: o,
  theme: () => c({ cssVariables: true }),
  colorSchemeStorageKey: E.colorSchemeStorageKey,
  modeStorageKey: E.modeStorageKey,
  defaultColorScheme: {
    light: E.defaultLightColorScheme,
    dark: E.defaultDarkColorScheme,
  },
  resolveTheme: (e) => {
    const t = { ...e, typography: h(e.palette, e.typography) };
    t.unstable_sx = function (e) {
      return _({ sx: e, theme: this });
    };
    return t;
  },
});
let H = false;
function K(e) {
  if (process.env.NODE_ENV !== "production" && !H) {
    console.warn(
      [
        "MUI: The Experimental_CssVarsProvider component has been ported into ThemeProvider.",
        "",
        "You should use `import { ThemeProvider } from '@mui/material/styles'` instead.",
        "For more details, check out https://mui.com/material-ui/customization/css-theme-variables/usage/",
      ].join("\n"),
    );
    H = true;
  }
  return x(Y, { ...e });
}
let L = false;
const A = (e) => {
  if (!L) {
    console.warn(
      [
        "MUI: The getInitColorSchemeScript function has been deprecated.",
        "",
        "You should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`",
        "and replace the function call with `<InitColorSchemeScript />` instead.",
      ].join("\n"),
    );
    L = true;
  }
  return $(e);
};
/**
 * TODO: remove this export in v7
 * @deprecated
 * The `CssVarsProvider` component has been deprecated and ported into `ThemeProvider`.
 *
 * You should use `ThemeProvider` and `createTheme()` instead:
 *
 * ```diff
 * - import { CssVarsProvider, extendTheme } from '@mui/material/styles';
 * + import { ThemeProvider, createTheme } from '@mui/material/styles';
 *
 * - const theme = extendTheme();
 * + const theme = createTheme({
 * +   cssVariables: true,
 * +   colorSchemes: { light: true, dark: true },
 * + });
 *
 * - <CssVarsProvider theme={theme}>
 * + <ThemeProvider theme={theme}>
 * ```
 *
 * To see the full documentation, check out https://mui.com/material-ui/customization/css-theme-variables/usage/.
 */ const B = Y;
("use client");
function G({ theme: e, ...t }) {
  const r = v.useMemo(() => {
    if (typeof e === "function") return e;
    const t = o in e ? e[o] : e;
    return "colorSchemes" in t ? null : "vars" in t ? e : { ...e, vars: null };
  }, [e]);
  return r ? x(D, { theme: r, ...t }) : x(B, { theme: e, ...t });
}
function Z() {
  throw new Error(
    process.env.NODE_ENV !== "production"
      ? "MUI: makeStyles is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details."
      : t(14),
  );
}
function q() {
  throw new Error(
    process.env.NODE_ENV !== "production"
      ? "MUI: withStyles is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details."
      : t(15),
  );
}
function J() {
  throw new Error(
    process.env.NODE_ENV !== "production"
      ? "MUI: withTheme is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details."
      : t(16),
  );
}
let Q = false;
function W(...e) {
  if (!Q) {
    console.warn(
      [
        "MUI: The `experimental_extendTheme` has been stabilized.",
        "",
        "You should use `import { extendTheme } from '@mui/material/styles'`",
      ].join("\n"),
    );
    Q = true;
  }
  return f(...e);
}
function X() {
  throw new Error(
    process.env.NODE_ENV !== "production"
      ? "MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.For more details, see https://github.com/mui/material-ui/pull/35150."
      : t(19),
  );
}
export {
  B as CssVarsProvider,
  K as Experimental_CssVarsProvider,
  o as THEME_ID,
  G as ThemeProvider,
  T as adaptV4Theme,
  I as createStyles,
  c as createTheme,
  W as experimental_extendTheme,
  X as experimental_sx,
  f as extendTheme,
  A as getInitColorSchemeScript,
  Z as makeStyles,
  h as private_createTypography,
  P as responsiveFontSizes,
  w as unstable_createMuiStrictModeTheme,
  C as unstable_getUnit,
  F as unstable_toUnitless,
  R as useColorScheme,
  z as useThemeProps,
  q as withStyles,
  J as withTheme,
};
