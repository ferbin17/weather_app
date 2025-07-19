// @emotion/memoize@0.9.0 downloaded from https://ga.jspm.io/npm:@emotion/memoize@0.9.0/dist/emotion-memoize.esm.js

function memoize(e){var t=Object.create(null);return function(n){t[n]===void 0&&(t[n]=e(n));return t[n]}}export{memoize as default};

