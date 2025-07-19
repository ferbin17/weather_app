// @mui/utils/debounce@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/debounce/index.js

function t(t, e = 166) {
  let o;
  function u(...u) {
    const a = () => {
      t.apply(this, u);
    };
    clearTimeout(o);
    o = setTimeout(a, e);
  }
  u.clear = () => {
    clearTimeout(o);
  };
  return u;
}
export { t as default };
