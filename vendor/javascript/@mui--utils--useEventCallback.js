// @mui/utils/useEventCallback@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/useEventCallback/index.js

import*as e from"react";import r from"../useEnhancedEffect/index.js";"use client";function t(t){const n=e.useRef(t);r((()=>{n.current=t}));return e.useRef(((...e)=>(0,n.current)(...e))).current}export{t as default};

