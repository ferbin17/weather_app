// @mui/styled-engine@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/styled-engine@7.2.0/esm/index.js

import e from "@emotion/styled";
import { serializeStyles as o } from "@emotion/serialize";
export { ThemeContext, css, keyframes } from "@emotion/react";
export { default as StyledEngineProvider } from "./StyledEngineProvider/index.js";
export { default as GlobalStyles } from "./GlobalStyles/index.js";
import "react";
import "prop-types";
import "@emotion/cache";
import "@emotion/sheet";
import "react/jsx-runtime";
/**
 * @mui/styled-engine v7.2.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ("use client");
function t(o, t) {
  const r = e(o, t);
  return process.env.NODE_ENV !== "production"
    ? (...e) => {
        const t = typeof o === "string" ? `"${o}"` : "component";
        e.length === 0
          ? console.error(
              [
                `MUI: Seems like you called \`styled(${t})()\` without a \`style\` argument.`,
                'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.',
              ].join("\n"),
            )
          : e.some((e) => e === void 0) &&
            console.error(
              `MUI: the styled(${t})(...args) API requires all its args to be defined.`,
            );
        return r(...e);
      }
    : r;
}
function r(e, o) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = o(e.__emotion_styles));
}
const s = [];
function n(e) {
  s[0] = e;
  return o(s);
}
export {
  t as default,
  r as internal_mutateStyles,
  n as internal_serializeStyles,
};
