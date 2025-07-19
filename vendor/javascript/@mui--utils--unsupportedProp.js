// @mui/utils/unsupportedProp@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/unsupportedProp/index.js

function e(e, n, r, o, t) {
  if (process.env.NODE_ENV === "production") return null;
  const u = t || n;
  return typeof e[n] !== "undefined"
    ? new Error(`The prop \`${u}\` is not supported. Please remove it.`)
    : null;
}
export { e as default };
