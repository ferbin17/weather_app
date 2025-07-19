// @mui/utils/isMuiElement@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/isMuiElement/index.js

import * as e from "react";
function a(a, t) {
  return (
    e.isValidElement(a) &&
    t.indexOf(a.type.muiName ?? a.type?._payload?.value?.muiName) !== -1
  );
}
export { a as default };
