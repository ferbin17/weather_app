// @babel/runtime/helpers/esm/inheritsLoose@7.27.6 downloaded from https://ga.jspm.io/npm:@babel/runtime@7.27.6/helpers/esm/inheritsLoose.js

import t from "./setPrototypeOf.js";
function o(o, e) {
  ((o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    t(o, e));
}
export { o as default };
