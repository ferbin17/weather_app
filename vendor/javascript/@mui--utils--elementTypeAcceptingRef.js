// @mui/utils/elementTypeAcceptingRef@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/elementTypeAcceptingRef/index.js

import e from "prop-types";
import n from "../chainPropTypes/index.js";
function t(e) {
  const { prototype: n = {} } = e;
  return Boolean(n.isReactComponent);
}
function o(e, n, o, i, r) {
  const p = e[n];
  const a = r || n;
  if (p == null || typeof window === "undefined") return null;
  let l;
  typeof p !== "function" ||
    t(p) ||
    (l = "Did you accidentally provide a plain function component instead?");
  return l !== void 0
    ? new Error(
        `Invalid ${i} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`,
      )
    : null;
}
var i = n(e.elementType, o);
export { i as default };
