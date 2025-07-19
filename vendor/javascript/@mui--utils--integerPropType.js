// @mui/utils/integerPropType@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/integerPropType/index.js

function n(n){const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":Number.isFinite(n)?n!==Math.floor(n)?"float":"number":"Infinity";case"object":return n===null?"null":n.constructor.name;default:return e}}function e(e,t,r,u){const o=e[t];if(o==null||!Number.isInteger(o)){const e=n(o);return new RangeError(`Invalid ${u} \`${t}\` of type \`${e}\` supplied to \`${r}\`, expected \`integer\`.`)}return null}function t(n,t,r,u){const o=n[t];return o===void 0?null:e(n,t,r,u)}function r(){return null}t.isRequired=e;r.isRequired=r;const u=process.env.NODE_ENV==="production"?r:t;export{u as default,n as getTypeByValue};

