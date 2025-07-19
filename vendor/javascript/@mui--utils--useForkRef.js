// @mui/utils/useForkRef@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/useForkRef/index.js

import * as n from "react";
("use client");
/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */ function r(...r) {
  const t = n.useRef(void 0);
  const u = n.useCallback((n) => {
    const t = r.map((r) => {
      if (r == null) return null;
      if (typeof r === "function") {
        const t = r;
        const u = t(n);
        return typeof u === "function"
          ? u
          : () => {
              t(null);
            };
      }
      r.current = n;
      return () => {
        r.current = null;
      };
    });
    return () => {
      t.forEach((n) => n?.());
    };
  }, r);
  return n.useMemo(
    () =>
      r.every((n) => n == null)
        ? null
        : (n) => {
            if (t.current) {
              t.current();
              t.current = void 0;
            }
            n != null && (t.current = u(n));
          },
    r,
  );
}
export { r as default };
