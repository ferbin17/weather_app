// @mui/utils/appendOwnerState@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/appendOwnerState/index.js

import t from "../isHostComponent/index.js";
/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function o(o, e, n) {
  return o === void 0 || t(o)
    ? e
    : { ...e, ownerState: { ...e.ownerState, ...n } };
}
export { o as default };
