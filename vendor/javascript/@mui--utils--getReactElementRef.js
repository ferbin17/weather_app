// @mui/utils/getReactElementRef@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/getReactElementRef/index.js

import * as r from "react";
/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */ function e(e) {
  return parseInt(r.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
export { e as default };
