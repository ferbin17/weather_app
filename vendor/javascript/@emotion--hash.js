// @emotion/hash@0.9.2 downloaded from https://ga.jspm.io/npm:@emotion/hash@0.9.2/dist/emotion-hash.esm.js

function murmur2(r){var t=0;var a,e=0,c=r.length;for(;c>=4;++e,c-=4){a=r.charCodeAt(e)&255|(r.charCodeAt(++e)&255)<<8|(r.charCodeAt(++e)&255)<<16|(r.charCodeAt(++e)&255)<<24;a=1540483477*(a&65535)+(59797*(a>>>16)<<16);a^=a>>>24;t=1540483477*(a&65535)+(59797*(a>>>16)<<16)^1540483477*(t&65535)+(59797*(t>>>16)<<16)}switch(c){case 3:t^=(r.charCodeAt(e+2)&255)<<16;case 2:t^=(r.charCodeAt(e+1)&255)<<8;case 1:t^=r.charCodeAt(e)&255;t=1540483477*(t&65535)+(59797*(t>>>16)<<16)}t^=t>>>13;t=1540483477*(t&65535)+(59797*(t>>>16)<<16);return((t^t>>>15)>>>0).toString(36)}export{murmur2 as default};

