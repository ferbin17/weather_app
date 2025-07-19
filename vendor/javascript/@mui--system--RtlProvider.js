// @mui/system/RtlProvider@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/RtlProvider/index.js

import * as e from "react";
import o from "prop-types";
import { jsx as r } from "react/jsx-runtime";
("use client");
const t = e.createContext();
function n({ value: e, ...o }) {
  return r(t.Provider, { value: e ?? true, ...o });
}
process.env.NODE_ENV !== "production"
  ? (n.propTypes = { children: o.node, value: o.bool })
  : void 0;
const s = () => {
  const o = e.useContext(t);
  return o ?? false;
};
export { n as default, s as useRtl };
