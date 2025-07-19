// @mui/utils/requirePropFactory@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/requirePropFactory/index.js

function n(n,e){if(process.env.NODE_ENV==="production")return()=>()=>null;const o=e?{...e.propTypes}:null;const r=e=>(r,t,u,p,s,...c)=>{const f=s||t;const l=o?.[f];if(l){const n=l(r,t,u,p,s,...c);if(n)return n}return typeof r[t]==="undefined"||r[e]?null:new Error(`The prop \`${f}\` of \`${n}\` can only be used together with the \`${e}\` prop.`)};return r}export{n as default};

