// @mui/utils/mergeSlotProps@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/mergeSlotProps/index.js

import s from "clsx";
import e from "../extractEventHandlers/index.js";
import t from "../omitEventHandlers/index.js";
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function l(l) {
  const {
    getSlotProps: a,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: c,
  } = l;
  if (!a) {
    const e = s(n?.className, c, r?.className, o?.className);
    const t = { ...n?.style, ...r?.style, ...o?.style };
    const l = { ...n, ...r, ...o };
    e.length > 0 && (l.className = e);
    Object.keys(t).length > 0 && (l.style = t);
    return { props: l, internalRef: void 0 };
  }
  const m = e({ ...r, ...o });
  const i = t(o);
  const p = t(r);
  const y = a(m);
  const d = s(y?.className, n?.className, c, r?.className, o?.className);
  const N = { ...y?.style, ...n?.style, ...r?.style, ...o?.style };
  const f = { ...y, ...n, ...p, ...i };
  d.length > 0 && (f.className = d);
  Object.keys(N).length > 0 && (f.style = N);
  return { props: f, internalRef: y.ref };
}
export { l as default };
