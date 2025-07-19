// @mui/utils/useId@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/useId/index.js

import * as t from "react";
("use client");
let e = 0;
function n(n) {
  const [u, o] = t.useState(n);
  const s = n || u;
  t.useEffect(() => {
    if (u == null) {
      e += 1;
      o(`mui-${e}`);
    }
  }, [u]);
  return s;
}
const u = { ...t };
const o = u.useId;
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */ function s(t) {
  if (o !== void 0) {
    const e = o();
    return t ?? e;
  }
  return n(t);
}
export { s as default };
