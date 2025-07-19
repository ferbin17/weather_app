// @mui/utils/elementAcceptingRef@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/elementAcceptingRef/index.js

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
  const u = p.type;
  typeof u !== "function" ||
    t(u) ||
    (l =
      "Did you accidentally use a plain function component for an element instead?");
  return l !== void 0
    ? new Error(
        `Invalid ${i} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`,
      )
    : null;
}
const i = n(e.element, o);
i.isRequired = n(e.element.isRequired, o);
export { i as default };
