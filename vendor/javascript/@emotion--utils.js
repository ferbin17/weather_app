// @emotion/utils@1.4.2 downloaded from https://ga.jspm.io/npm:@emotion/utils@1.4.2/dist/emotion-utils.browser.esm.js

var e = true;
function getRegisteredStyles(e, t, r) {
  var i = "";
  r.split(" ").forEach(function (r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : r && (i += r + " ");
  });
  return i;
}
var t = function registerStyles(t, r, i) {
  var s = t.key + "-" + r.name;
  (i !== false && e !== false) ||
    t.registered[s] !== void 0 ||
    (t.registered[s] = r.styles);
};
var r = function insertStyles(e, r, i) {
  t(e, r, i);
  var s = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var n = r;
    do {
      e.insert(r === n ? "." + s : "", n, e.sheet, true);
      n = n.next;
    } while (n !== void 0);
  }
};
export { getRegisteredStyles, r as insertStyles, t as registerStyles };
