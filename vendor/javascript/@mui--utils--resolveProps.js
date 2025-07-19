// @mui/utils/resolveProps@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/resolveProps/index.js

import s from"clsx";
/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @param mergeClassNameAndStyle If `true`, merges `className` and `style` props instead of overriding them.
 *   When `false` (default), props override defaultProps. When `true`, `className` values are concatenated
 *   and `style` objects are merged with props taking precedence.
 * @returns resolved props
 */function e(t,o,l=false){const c={...o};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const a=n;if(a==="components"||a==="slots")c[a]={...t[a],...c[a]};else if(a==="componentsProps"||a==="slotProps"){const s=t[a];const n=o[a];if(n)if(s){c[a]={...n};for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)){const o=t;c[a][o]=e(s[o],n[o],l)}}else c[a]=n;else c[a]=s||{}}else a==="className"&&l&&o.className?c.className=s(t?.className,o?.className):a==="style"&&l&&o.style?c.style={...t?.style,...o?.style}:c[a]===void 0&&(c[a]=t[a])}return c}export{e as default};

