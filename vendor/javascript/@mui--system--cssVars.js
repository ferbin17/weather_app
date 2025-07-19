// @mui/system/cssVars@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/cssVars/index.js

export {
  b as createCssVarsTheme,
  d as createGetColorSchemeSelector,
  c as default,
  p as prepareCssVars,
} from "../../_/CleQwMua.js";
import "react";
import "prop-types";
import "@mui/styled-engine";
import "@mui/private-theming";
import "@mui/utils/useEnhancedEffect";
import "../ThemeProvider/index.js";
import "@mui/utils/exactProp";
import "../useThemeWithoutDefault/index.js";
import "../RtlProvider/index.js";
import "react/jsx-runtime";
import "../DefaultPropsProvider/index.js";
import "@mui/utils/resolveProps";
import "@mui/utils/useId";
import "../GlobalStyles/index.js";
import "../useTheme/index.js";
import "../../_/CLfKUPDW.js";
import "@mui/utils/deepmerge";
import "../../_/BFC5_3ZN.js";
import "../cssContainerQueries/index.js";
import "@mui/utils/formatMuiErrorMessage";
import "../spacing/index.js";
import "../responsivePropType/index.js";
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
import "../../_/Ci98kjj0.js";
function e(e) {
  const t = {};
  const i = Object.entries(e);
  i.forEach((e) => {
    const [i, r] = e;
    typeof r === "object" &&
      (t[i] =
        `${r.fontStyle ? `${r.fontStyle} ` : ""}${r.fontVariant ? `${r.fontVariant} ` : ""}${r.fontWeight ? `${r.fontWeight} ` : ""}${r.fontStretch ? `${r.fontStretch} ` : ""}${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${r.fontFamily || ""}`);
  });
  return t;
}
export { e as prepareTypographyVars };
