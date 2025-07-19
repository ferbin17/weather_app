// @mui/utils/extractEventHandlers@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/extractEventHandlers/index.js

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function t(t, e = []) {
  if (t === void 0) return {};
  const n = {};
  Object.keys(t)
    .filter(
      (n) =>
        n.match(/^on[A-Z]/) && typeof t[n] === "function" && !e.includes(n),
    )
    .forEach((e) => {
      n[e] = t[e];
    });
  return n;
}
export { t as default };
