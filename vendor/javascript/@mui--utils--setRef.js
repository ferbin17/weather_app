// @mui/utils/setRef@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/setRef/index.js

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function t(t, n) {
  typeof t === "function" ? t(n) : t && (t.current = n);
}
export { t as default };
