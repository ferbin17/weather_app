// @mui/utils/composeClasses@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/composeClasses/index.js

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function t(t, e, n = void 0) {
  const o = {};
  for (const r in t) {
    const f = t[r];
    let l = "";
    let s = true;
    for (let t = 0; t < f.length; t += 1) {
      const o = f[t];
      if (o) {
        l += (s === true ? "" : " ") + e(o);
        s = false;
        n && n[o] && (l += " " + n[o]);
      }
    }
    o[r] = l;
  }
  return o;
}
export { t as default };
