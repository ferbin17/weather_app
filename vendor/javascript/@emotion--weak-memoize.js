// @emotion/weak-memoize@0.4.0 downloaded from https://ga.jspm.io/npm:@emotion/weak-memoize@0.4.0/dist/emotion-weak-memoize.esm.js

var e=function weakMemoize(e){var r=new WeakMap;return function(a){if(r.has(a))return r.get(a);var t=e(a);r.set(a,t);return t}};export{e as default};

