// @mui/system@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/index.js

import e from "@mui/utils/formatMuiErrorMessage";
export { StyledEngineProvider, css, keyframes } from "@mui/styled-engine";
export { default as GlobalStyles } from "./GlobalStyles/index.js";
export {
  border,
  borderBottom,
  borderBottomColor,
  borderColor,
  borderLeft,
  borderLeftColor,
  borderRadius,
  borderRight,
  borderRightColor,
  borderTop,
  borderTopColor,
  borderTransform,
  default as borders,
  outline,
  outlineColor,
} from "./borders/index.js";
export {
  default as breakpoints,
  handleBreakpoints,
  mergeBreakpointsInOrder,
  resolveBreakpointValues as unstable_resolveBreakpointValues,
} from "./breakpoints/index.js";
export { default as cssContainerQueries } from "./cssContainerQueries/index.js";
export { default as compose } from "./compose/index.js";
export { default as display } from "./display/index.js";
export {
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  default as flexbox,
  justifyContent,
  justifyItems,
  justifySelf,
  order,
} from "./flexbox/index.js";
export {
  columnGap,
  gap,
  default as grid,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridRow,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  rowGap,
} from "./cssGrid/index.js";
export {
  backgroundColor,
  bgcolor,
  color,
  default as palette,
  paletteTransform,
} from "./palette/index.js";
export {
  bottom,
  left,
  position,
  default as positions,
  right,
  top,
  zIndex,
} from "./positions/index.js";
export { default as shadows } from "./shadows/index.js";
export {
  boxSizing,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  sizeHeight,
  sizeWidth,
  default as sizing,
  sizingTransform,
  width,
} from "./sizing/index.js";
export {
  createUnarySpacing,
  createUnaryUnit,
  getStyleFromPropValue,
  getValue,
  margin,
  marginKeys,
  padding,
  paddingKeys,
  default as spacing,
} from "./spacing/index.js";
export { getPath, getStyleValue, default as style } from "./style/index.js";
export {
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textTransform,
  default as typography,
  typographyVariant,
} from "./typography/index.js";
export { extendSxProp as unstable_extendSxProp } from "./styleFunctionSx/index.js";
export { default as unstable_getThemeValue } from "./getThemeValue/index.js";
export { default as Box } from "./Box/index.js";
export { default as createBox } from "./createBox/index.js";
import { p as t } from "../_/C9tlSrFN.js";
export {
  c as createStyled,
  a as shouldForwardProp,
  s as systemDefaultTheme,
} from "../_/C9tlSrFN.js";
export { default as styled } from "./styled/index.js";
export {
  a as createSpacing,
  c as createTheme,
  s as shape,
} from "../_/CLfKUPDW.js";
export { c as createBreakpoints } from "../_/BFC5_3ZN.js";
export {
  getThemeProps,
  default as useThemeProps,
} from "./useThemeProps/index.js";
export { default as useTheme } from "./useTheme/index.js";
export { default as useThemeWithoutDefault } from "./useThemeWithoutDefault/index.js";
export { default as useMediaQuery } from "./useMediaQuery/index.js";
export {
  alpha,
  blend,
  colorChannel,
  darken,
  decomposeColor,
  emphasize,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  lighten,
  private_safeAlpha,
  private_safeColorChannel,
  private_safeDarken,
  private_safeEmphasize,
  private_safeLighten,
  recomposeColor,
  rgbToHex,
} from "./colorManipulator/index.js";
export { default as ThemeProvider } from "./ThemeProvider/index.js";
export {
  c as unstable_createCssVarsProvider,
  b as unstable_createCssVarsTheme,
  a as unstable_cssVarsParser,
  p as unstable_prepareCssVars,
} from "../_/CleQwMua.js";
export { default as responsivePropType } from "./responsivePropType/index.js";
export { default as RtlProvider, useRtl } from "./RtlProvider/index.js";
export { major, minor, patch, prerelease, version } from "./version/index.js";
export {
  C as Container,
  a as containerClasses,
  c as createContainer,
  g as getContainerUtilityClass,
} from "../_/B2U2Pe8m.js";
export {
  default as Grid,
  createGrid,
  getGridUtilityClass,
  gridClasses,
  unstable_generateDirectionClasses,
  unstable_generateSizeClassNames,
  unstable_generateSpacingClassNames,
  unstable_traverseBreakpoints,
} from "./Grid/index.js";
export {
  default as Stack,
  createStack,
  getStackUtilityClass,
  stackClasses,
} from "./Stack/index.js";
export {
  u as unstable_createStyleFunctionSx,
  d as unstable_defaultSxConfig,
  s as unstable_styleFunctionSx,
} from "../_/BheJLBs-.js";
import "react";
import "prop-types";
import "react/jsx-runtime";
import "@mui/utils/deepmerge";
import "./merge/index.js";
import "./memoize/index.js";
import "@mui/utils/capitalize";
import "@mui/utils/ClassNameGenerator";
import "@mui/utils/generateUtilityClasses";
import "clsx";
import "@mui/utils/getDisplayName";
import "@mui/utils/resolveProps";
import "@mui/utils/useEnhancedEffect";
import "@mui/utils/clamp";
import "@mui/private-theming";
import "@mui/utils/exactProp";
import "./DefaultPropsProvider/index.js";
import "@mui/utils/useId";
import "../_/Ci98kjj0.js";
import "@mui/utils/generateUtilityClass";
import "@mui/utils/composeClasses";
import "@mui/utils/isMuiElement";
/* eslint-disable @typescript-eslint/naming-convention */
const r = { theme: void 0 };
function o(e) {
  let s;
  let o;
  return function (a) {
    let i = s;
    if (i === void 0 || a.theme !== o) {
      r.theme = a.theme;
      i = t(e(r));
      s = i;
      o = a.theme;
    }
    return i;
  };
}
function i(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const s = r[0];
    return typeof s !== "string" ||
      s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, ${s}`
      : `, var(--${e ? `${e}-` : ""}${s}${t(...r.slice(1))})`;
  }
  const r = (r, ...s) => `var(--${e ? `${e}-` : ""}${r}${t(...s)})`;
  return r;
}
/**
 * @mui/system v7.2.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function n() {
  throw new Error(
    process.env.NODE_ENV !== "production"
      ? "MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.For more details, see https://github.com/mui/material-ui/pull/35150."
      : e(19),
  );
}
export {
  n as experimental_sx,
  i as unstable_createGetCssVar,
  o as unstable_memoTheme,
};
