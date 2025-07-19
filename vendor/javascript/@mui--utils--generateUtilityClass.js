// @mui/utils/generateUtilityClass@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/generateUtilityClass/index.js

import e from "../ClassNameGenerator/index.js";
const d = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function r(r, o, c = "Mui") {
  const n = d[o];
  return n ? `${c}-${n}` : `${e.generate(r)}-${o}`;
}
function o(e) {
  return d[e] !== void 0;
}
export { r as default, d as globalStateClasses, o as isGlobalState };
