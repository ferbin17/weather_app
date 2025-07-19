// @emotion/use-insertion-effect-with-fallbacks@1.2.0 downloaded from https://ga.jspm.io/npm:@emotion/use-insertion-effect-with-fallbacks@1.2.0/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js

import * as r from "react";
var e = function syncFallback(r) {
  return r();
};
var t = !!r.useInsertionEffect && r.useInsertionEffect;
var a = t || e;
var f = t || r.useLayoutEffect;
export {
  a as useInsertionEffectAlwaysWithSyncFallback,
  f as useInsertionEffectWithLayoutFallback,
};
