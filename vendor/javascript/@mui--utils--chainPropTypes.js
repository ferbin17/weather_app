// @mui/utils/chainPropTypes@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/chainPropTypes/index.js

function n(n, r) {
  return process.env.NODE_ENV === "production"
    ? () => null
    : function (...t) {
        return n(...t) || r(...t);
      };
}
export { n as default };
