// @mui/system/useMediaQuery@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/useMediaQuery/index.js

import * as e from "react";
import t from "@mui/utils/useEnhancedEffect";
import { getThemeProps as n } from "../useThemeProps/index.js";
import i from "../useThemeWithoutDefault/index.js";
import "@mui/utils/resolveProps";
import "../useTheme/index.js";
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
import "@mui/styled-engine";
("use client");
function o(n, i, o, r, s) {
  const [u, m] = e.useState(() =>
    s && o ? o(n).matches : r ? r(n).matches : i,
  );
  t(() => {
    if (!o) return;
    const e = o(n);
    const t = () => {
      m(e.matches);
    };
    t();
    e.addEventListener("change", t);
    return () => {
      e.removeEventListener("change", t);
    };
  }, [n, o]);
  return u;
}
const r = { ...e };
const s = r.useSyncExternalStore;
function u(t, n, i, o, r) {
  const u = e.useCallback(() => n, [n]);
  const m = e.useMemo(() => {
    if (r && i) return () => i(t).matches;
    if (o !== null) {
      const { matches: e } = o(t);
      return () => e;
    }
    return u;
  }, [u, t, o, r, i]);
  const [a, p] = e.useMemo(() => {
    if (i === null) return [u, () => () => {}];
    const e = i(t);
    return [
      () => e.matches,
      (t) => {
        e.addEventListener("change", t);
        return () => {
          e.removeEventListener("change", t);
        };
      },
    ];
  }, [u, i, t]);
  const c = s(p, a, m);
  return c;
}
function m(t = {}) {
  const { themeId: r } = t;
  return function (t, m = {}) {
    let a = i();
    a && r && (a = a[r] || a);
    const p =
      typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
    const {
      defaultMatches: c = false,
      matchMedia: d = p ? window.matchMedia : null,
      ssrMatchMedia: l = null,
      noSsr: h = false,
    } = n({ name: "MuiUseMediaQuery", props: m, theme: a });
    process.env.NODE_ENV !== "production" &&
      typeof t === "function" &&
      a === null &&
      console.error(
        [
          "MUI: The `query` argument provided is invalid.",
          "You are providing a function without a theme in the context.",
          "One of the parent elements needs to use a ThemeProvider.",
        ].join("\n"),
      );
    let f = typeof t === "function" ? t(a) : t;
    f = f.replace(/^@media( ?)/m, "");
    f.includes("print") &&
      console.warn(
        [
          "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
          "Using the print media query to modify print styles can lead to unexpected results.",
          "Consider using the `displayPrint` field in the `sx` prop instead.",
          "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print.",
        ].join("\n"),
      );
    const y = s !== void 0 ? u : o;
    const j = y(f, c, d, l, h);
    process.env.NODE_ENV !== "production" &&
      e.useDebugValue({ query: f, match: j });
    return j;
  };
}
const a = m();
export { a as default, m as unstable_createUseMediaQuery };
