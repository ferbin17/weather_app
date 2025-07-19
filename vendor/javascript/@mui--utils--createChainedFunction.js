// @mui/utils/createChainedFunction@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/createChainedFunction/index.js

function t(...t) {
  return t.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...u) {
            t.apply(this, u);
            n.apply(this, u);
          },
    () => {},
  );
}
export { t as default };
