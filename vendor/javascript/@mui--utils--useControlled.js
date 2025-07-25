// @mui/utils/useControlled@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/useControlled/index.js

import * as e from "react";
("use client");
function t(t) {
  const { controlled: o, default: n, name: r, state: s = "value" } = t;
  const { current: c } = e.useRef(o !== void 0);
  const [i, l] = e.useState(n);
  const u = c ? o : i;
  if (process.env.NODE_ENV !== "production") {
    e.useEffect(() => {
      c !== (o !== void 0) &&
        console.error(
          [
            `MUI: A component is changing the ${c ? "" : "un"}controlled ${s} state of ${r} to be ${c ? "un" : ""}controlled.`,
            "Elements should not switch from uncontrolled to controlled (or vice versa).",
            `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`,
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            "More info: https://fb.me/react-controlled-components",
          ].join("\n"),
        );
    }, [s, r, o]);
    const { current: t } = e.useRef(n);
    e.useEffect(() => {
      c ||
        Object.is(t, n) ||
        console.error(
          [
            `MUI: A component is changing the default ${s} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`,
          ].join("\n"),
        );
    }, [JSON.stringify(n)]);
  }
  const d = e.useCallback((e) => {
    c || l(e);
  }, []);
  return [u, d];
}
export { t as default };
