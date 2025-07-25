// @mui/system/Grid@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/Grid/index.js

import e from "prop-types";
import * as r from "react";
import n from "clsx";
import o from "@mui/utils/isMuiElement";
import t from "@mui/utils/generateUtilityClass";
import i from "@mui/utils/composeClasses";
import s from "../styled/index.js";
import a from "../useThemeProps/index.js";
import c from "../useTheme/index.js";
import { extendSxProp as p } from "../styleFunctionSx/index.js";
import { c as m } from "../../_/CLfKUPDW.js";
import { jsx as u } from "react/jsx-runtime";
import f from "@mui/utils/generateUtilityClasses";
import "../../_/C9tlSrFN.js";
import "@mui/styled-engine";
import "@mui/utils/deepmerge";
import "@mui/utils/capitalize";
import "@mui/utils/getDisplayName";
import "../../_/BheJLBs-.js";
import "../merge/index.js";
import "../style/index.js";
import "../responsivePropType/index.js";
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
import "../../_/BFC5_3ZN.js";
import "@mui/utils/resolveProps";
import "../useThemeWithoutDefault/index.js";
const l = (e, r) => e.filter((e) => r.includes(e));
const d = (e, r, n) => {
  const o = e.keys[0];
  if (Array.isArray(r))
    r.forEach((r, o) => {
      n((r, n) => {
        o <= e.keys.length - 1 &&
          (o === 0 ? Object.assign(r, n) : (r[e.up(e.keys[o])] = n));
      }, r);
    });
  else if (r && typeof r === "object") {
    const t =
      Object.keys(r).length > e.keys.length
        ? e.keys
        : l(e.keys, Object.keys(r));
    t.forEach((t) => {
      if (e.keys.includes(t)) {
        const i = r[t];
        i !== void 0 &&
          n((r, n) => {
            o === t ? Object.assign(r, n) : (r[e.up(t)] = n);
          }, i);
      }
    });
  } else
    (typeof r !== "number" && typeof r !== "string") ||
      n((e, r) => {
        Object.assign(e, r);
      }, r);
};
function b(e) {
  return `--Grid-${e}Spacing`;
}
function g(e) {
  return `--Grid-parent-${e}Spacing`;
}
const y = "--Grid-columns";
const O = "--Grid-parent-columns";
const w = ({ theme: e, ownerState: r }) => {
  const n = {};
  d(e.breakpoints, r.size, (e, r) => {
    let o = {};
    r === "grow" && (o = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" });
    r === "auto" &&
      (o = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      });
    typeof r === "number" &&
      (o = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${r} / var(${O}) - (var(${O}) - ${r}) * (var(${g("column")}) / var(${O})))`,
      });
    e(n, o);
  });
  return n;
};
const j = ({ theme: e, ownerState: r }) => {
  const n = {};
  d(e.breakpoints, r.offset, (e, r) => {
    let o = {};
    r === "auto" && (o = { marginLeft: "auto" });
    typeof r === "number" &&
      (o = {
        marginLeft:
          r === 0
            ? "0px"
            : `calc(100% * ${r} / var(${O}) + var(${g("column")}) * ${r} / var(${O}))`,
      });
    e(n, o);
  });
  return n;
};
const v = ({ theme: e, ownerState: r }) => {
  if (!r.container) return {};
  const n = { [y]: 12 };
  d(e.breakpoints, r.columns, (e, r) => {
    const o = r ?? 12;
    e(n, { [y]: o, "> *": { [O]: o } });
  });
  return n;
};
const h = ({ theme: e, ownerState: r }) => {
  if (!r.container) return {};
  const n = {};
  d(e.breakpoints, r.rowSpacing, (r, o) => {
    const t = typeof o === "string" ? o : e.spacing?.(o);
    r(n, { [b("row")]: t, "> *": { [g("row")]: t } });
  });
  return n;
};
const x = ({ theme: e, ownerState: r }) => {
  if (!r.container) return {};
  const n = {};
  d(e.breakpoints, r.columnSpacing, (r, o) => {
    const t = typeof o === "string" ? o : e.spacing?.(o);
    r(n, { [b("column")]: t, "> *": { [g("column")]: t } });
  });
  return n;
};
const T = ({ theme: e, ownerState: r }) => {
  if (!r.container) return {};
  const n = {};
  d(e.breakpoints, r.direction, (e, r) => {
    e(n, { flexDirection: r });
  });
  return n;
};
const $ = ({ ownerState: e }) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...(e.container && {
    display: "flex",
    flexWrap: "wrap",
    ...(e.wrap && e.wrap !== "wrap" && { flexWrap: e.wrap }),
    gap: `var(${b("row")}) var(${b("column")})`,
  }),
});
const S = (e) => {
  const r = [];
  Object.entries(e).forEach(([e, n]) => {
    n !== false && n !== void 0 && r.push(`grid-${e}-${String(n)}`);
  });
  return r;
};
const k = (e, r = "xs") => {
  function n(e) {
    return (
      e !== void 0 &&
      ((typeof e === "string" && !Number.isNaN(Number(e))) ||
        (typeof e === "number" && e > 0))
    );
  }
  if (n(e)) return [`spacing-${r}-${String(e)}`];
  if (typeof e === "object" && !Array.isArray(e)) {
    const r = [];
    Object.entries(e).forEach(([e, o]) => {
      n(o) && r.push(`spacing-${e}-${String(o)}`);
    });
    return r;
  }
  return [];
};
const E = (e) =>
  e === void 0
    ? []
    : typeof e === "object"
      ? Object.entries(e).map(([e, r]) => `direction-${e}-${r}`)
      : [`direction-xs-${String(e)}`];
const N = (e) =>
  ["item", "zeroMinWidth"].includes(e)
    ? `The \`${e}\` prop has been removed and is no longer necessary. You can safely remove it.`
    : `The \`${e}\` prop has been removed. See https://mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`;
const G = [];
/**
 * Deletes the legacy Grid component props from the `props` object and warns once about them if found.
 *
 * @param {object} props The props object to remove the legacy Grid props from.
 * @param {Breakpoints} breakpoints The breakpoints object.
 */ function z(e, r) {
  const n = [];
  if (e.item !== void 0) {
    delete e.item;
    n.push("item");
  }
  if (e.zeroMinWidth !== void 0) {
    delete e.zeroMinWidth;
    n.push("zeroMinWidth");
  }
  r.keys.forEach((r) => {
    if (e[r] !== void 0) {
      n.push(r);
      delete e[r];
    }
  });
  process.env.NODE_ENV !== "production" &&
    n.forEach((e) => {
      if (!G.includes(e)) {
        G.push(e);
        console.warn(`MUI Grid: ${N(e)}\n`);
      }
    });
}
("use client");
const _ = m();
const M = s("div", { name: "MuiGrid", slot: "Root" });
function W(e) {
  return a({ props: e, name: "MuiGrid", defaultTheme: _ });
}
function C(s = {}) {
  const {
    createStyledComponent: a = M,
    useThemeProps: m = W,
    useTheme: f = c,
    componentName: l = "MuiGrid",
  } = s;
  const d = (e, r) => {
    const { container: n, direction: o, spacing: s, wrap: a, size: c } = e;
    const p = {
      root: [
        "root",
        n && "container",
        a !== "wrap" && `wrap-xs-${String(a)}`,
        ...E(o),
        ...S(c),
        ...(n ? k(s, r.breakpoints.keys[0]) : []),
      ],
    };
    return i(p, (e) => t(l, e), {});
  };
  function b(e, r, n = () => true) {
    const o = {};
    if (e === null) return o;
    Array.isArray(e)
      ? e.forEach((e, t) => {
          e !== null && n(e) && r.keys[t] && (o[r.keys[t]] = e);
        })
      : typeof e === "object"
        ? Object.keys(e).forEach((r) => {
            const t = e[r];
            t !== null && t !== void 0 && n(t) && (o[r] = t);
          })
        : (o[r.keys[0]] = e);
    return o;
  }
  const g = a(v, x, h, w, T, $, j);
  const y = r.forwardRef(function (e, t) {
    const i = f();
    const s = m(e);
    const a = p(s);
    z(a, i.breakpoints);
    const {
      className: c,
      children: l,
      columns: y = 12,
      container: O = false,
      component: w = "div",
      direction: j = "row",
      wrap: v = "wrap",
      size: h = {},
      offset: x = {},
      spacing: T = 0,
      rowSpacing: $ = T,
      columnSpacing: S = T,
      unstable_level: k = 0,
      ...E
    } = a;
    const N = b(h, i.breakpoints, (e) => e !== false);
    const G = b(x, i.breakpoints);
    const _ = e.columns ?? (k ? void 0 : y);
    const M = e.spacing ?? (k ? void 0 : T);
    const W = e.rowSpacing ?? e.spacing ?? (k ? void 0 : $);
    const C = e.columnSpacing ?? e.spacing ?? (k ? void 0 : S);
    const D = {
      ...a,
      level: k,
      columns: _,
      container: O,
      direction: j,
      wrap: v,
      spacing: M,
      rowSpacing: W,
      columnSpacing: C,
      size: N,
      offset: G,
    };
    const A = d(D, i);
    return u(g, {
      ref: t,
      as: w,
      ownerState: D,
      className: n(A.root, c),
      ...E,
      children: r.Children.map(l, (e) =>
        r.isValidElement(e) && o(e, ["Grid"]) && O && e.props.container
          ? r.cloneElement(e, {
              unstable_level: e.props?.unstable_level ?? k + 1,
            })
          : e,
      ),
    });
  });
  process.env.NODE_ENV !== "production"
    ? (y.propTypes = {
        children: e.node,
        className: e.string,
        columns: e.oneOfType([e.arrayOf(e.number), e.number, e.object]),
        columnSpacing: e.oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
        component: e.elementType,
        container: e.bool,
        direction: e.oneOfType([
          e.oneOf(["column-reverse", "column", "row-reverse", "row"]),
          e.arrayOf(
            e.oneOf(["column-reverse", "column", "row-reverse", "row"]),
          ),
          e.object,
        ]),
        offset: e.oneOfType([
          e.string,
          e.number,
          e.arrayOf(e.oneOfType([e.string, e.number])),
          e.object,
        ]),
        rowSpacing: e.oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
        size: e.oneOfType([
          e.string,
          e.bool,
          e.number,
          e.arrayOf(e.oneOfType([e.string, e.bool, e.number])),
          e.object,
        ]),
        spacing: e.oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
        sx: e.oneOfType([
          e.arrayOf(e.oneOfType([e.func, e.object, e.bool])),
          e.func,
          e.object,
        ]),
        wrap: e.oneOf(["nowrap", "wrap-reverse", "wrap"]),
      })
    : void 0;
  y.muiName = "Grid";
  return y;
}
("use client");
const D = C();
process.env.NODE_ENV !== "production"
  ? (D.propTypes = {
      children: e.node,
      columns: e /* @typescript-to-proptypes-ignore */
        .oneOfType([e.arrayOf(e.number), e.number, e.object]),
      columnSpacing: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
      container: e.bool,
      direction: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.oneOf(["column-reverse", "column", "row-reverse", "row"]),
          e.arrayOf(
            e.oneOf(["column-reverse", "column", "row-reverse", "row"]),
          ),
          e.object,
        ]),
      offset: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.string,
          e.number,
          e.arrayOf(e.oneOfType([e.string, e.number])),
          e.object,
        ]),
      rowSpacing: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
      size: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.string,
          e.bool,
          e.number,
          e.arrayOf(e.oneOfType([e.string, e.bool, e.number])),
          e.object,
        ]),
      spacing: e /* @typescript-to-proptypes-ignore */
        .oneOfType([
          e.arrayOf(e.oneOfType([e.number, e.string])),
          e.number,
          e.object,
          e.string,
        ]),
      sx: e.oneOfType([
        e.arrayOf(e.oneOfType([e.func, e.object, e.bool])),
        e.func,
        e.object,
      ]),
      unstable_level: e.number,
      wrap: e.oneOf(["nowrap", "wrap-reverse", "wrap"]),
    })
  : void 0;
function A(e) {
  return t("MuiGrid", e);
}
const B = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const P = ["column-reverse", "column", "row-reverse", "row"];
const V = ["nowrap", "wrap-reverse", "wrap"];
const U = ["auto", "grow", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const L = f("MuiGrid", [
  "root",
  "container",
  "item",
  ...B.map((e) => `spacing-xs-${e}`),
  ...P.map((e) => `direction-xs-${e}`),
  ...V.map((e) => `wrap-xs-${e}`),
  ...U.map((e) => `grid-xs-${e}`),
  ...U.map((e) => `grid-sm-${e}`),
  ...U.map((e) => `grid-md-${e}`),
  ...U.map((e) => `grid-lg-${e}`),
  ...U.map((e) => `grid-xl-${e}`),
]);
export {
  C as createGrid,
  D as default,
  A as getGridUtilityClass,
  L as gridClasses,
  E as unstable_generateDirectionClasses,
  S as unstable_generateSizeClassNames,
  k as unstable_generateSpacingClassNames,
  d as unstable_traverseBreakpoints,
};
