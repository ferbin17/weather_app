// prop-types@15.8.1 downloaded from https://ga.jspm.io/npm:prop-types@15.8.1/index.js

import { _ as e } from "./_/eb83dd95.js";
var t = {};
var i = e;
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
t = function () {
  function shim(e, t, n, r, s, m) {
    if (m !== i) {
      var o = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      o.name = "Invariant Violation";
      throw o;
    }
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var e = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };
  e.PropTypes = e;
  return e;
};
var n = t;
var r = {};
r = n();
var s = r;
export { s as default };
