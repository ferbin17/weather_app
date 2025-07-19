// @babel/runtime/helpers/esm/objectWithoutPropertiesLoose@7.27.6 downloaded from https://ga.jspm.io/npm:@babel/runtime@7.27.6/helpers/esm/objectWithoutPropertiesLoose.js

function n(n, r) {
  if (null == n) return {};
  var e = {};
  for (var f in n)
    if ({}.hasOwnProperty.call(n, f)) {
      if (-1 !== r.indexOf(f)) continue;
      e[f] = n[f];
    }
  return e;
}
export { n as default };
