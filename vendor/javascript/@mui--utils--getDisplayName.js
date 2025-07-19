// @mui/utils/getDisplayName@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/getDisplayName/index.js

import{Memo as e,ForwardRef as t}from"react-is";function r(e,t=""){return e.displayName||e.name||t}function n(e,t,n){const o=r(t);return e.displayName||(o!==""?`${n}(${o})`:n)}function o(o){if(o!=null){if(typeof o==="string")return o;if(typeof o==="function")return r(o,"Component");if(typeof o==="object")switch(o.$$typeof){case t:return n(o,o.render,"ForwardRef");case e:return n(o,o.type,"memo");default:return}}}export{o as default};

