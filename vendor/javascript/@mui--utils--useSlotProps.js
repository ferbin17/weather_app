// @mui/utils/useSlotProps@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/useSlotProps/index.js

import e from"../useForkRef/index.js";import o from"../appendOwnerState/index.js";import t from"../mergeSlotProps/index.js";import r from"../resolveComponentProps/index.js";import"react";import"../isHostComponent/index.js";import"clsx";import"../extractEventHandlers/index.js";import"../omitEventHandlers/index.js";"use client";
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */function n(n){const{elementType:s,externalSlotProps:i,ownerState:p,skipResolvingSlotProps:m=false,...l}=n;const a=m?{}:r(i,p);const{props:d,internalRef:f}=t({...l,externalSlotProps:a});const x=e(f,a?.ref,n.additionalProps?.ref);const c=o(s,{...d,ref:x},p);return c}export{n as default};

