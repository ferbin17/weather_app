// @mui/utils/getValidReactChildren@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/getValidReactChildren/index.js

import * as r from "react";
/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */ function t(t) {
  return r.Children.toArray(t).filter((t) => r.isValidElement(t));
}
export { t as default };
