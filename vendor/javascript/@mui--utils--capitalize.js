// @mui/utils/capitalize@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/capitalize/index.js

import r from "@mui/utils/formatMuiErrorMessage";
function t(t) {
  if (typeof t !== "string")
    throw new Error(
      process.env.NODE_ENV !== "production"
        ? "MUI: `capitalize(string)` expects a string argument."
        : r(7),
    );
  return t.charAt(0).toUpperCase() + t.slice(1);
}
export { t as default };
