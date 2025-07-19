// @mui/utils/generateUtilityClasses@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/generateUtilityClasses/index.js

import e from "../generateUtilityClass/index.js";
import "../ClassNameGenerator/index.js";
function t(t, r, a = "Mui") {
  const i = {};
  r.forEach((r) => {
    i[r] = e(t, r, a);
  });
  return i;
}
export { t as default };
