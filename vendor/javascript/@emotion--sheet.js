// @emotion/sheet@1.4.0 downloaded from https://ga.jspm.io/npm:@emotion/sheet@1.4.0/dist/emotion-sheet.esm.js

var e = false;
function sheetForTag(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function createStyleElement(e) {
  var t = document.createElement("style");
  t.setAttribute("data-emotion", e.key);
  e.nonce !== void 0 && t.setAttribute("nonce", e.nonce);
  t.appendChild(document.createTextNode(""));
  t.setAttribute("data-s", "");
  return t;
}
var t = (function () {
  function StyleSheet(t) {
    var n = this;
    this._insertTag = function (e) {
      var t;
      t =
        n.tags.length === 0
          ? n.insertionPoint
            ? n.insertionPoint.nextSibling
            : n.prepend
              ? n.container.firstChild
              : n.before
          : n.tags[n.tags.length - 1].nextSibling;
      n.container.insertBefore(e, t);
      n.tags.push(e);
    };
    this.isSpeedy = t.speedy === void 0 ? !e : t.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = t.nonce;
    this.key = t.key;
    this.container = t.container;
    this.prepend = t.prepend;
    this.insertionPoint = t.insertionPoint;
    this.before = null;
  }
  var t = StyleSheet.prototype;
  t.hydrate = function hydrate(e) {
    e.forEach(this._insertTag);
  };
  t.insert = function insert(e) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
      this._insertTag(createStyleElement(this));
    var t = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n = sheetForTag(t);
      try {
        n.insertRule(e, n.cssRules.length);
      } catch (e) {}
    } else t.appendChild(document.createTextNode(e));
    this.ctr++;
  };
  t.flush = function flush() {
    this.tags.forEach(function (e) {
      var t;
      return (t = e.parentNode) == null ? void 0 : t.removeChild(e);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet;
})();
export { t as StyleSheet };
