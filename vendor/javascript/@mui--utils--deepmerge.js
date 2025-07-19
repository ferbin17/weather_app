// @mui/utils/deepmerge@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/utils@7.2.0/esm/deepmerge/index.js

import * as t from "react";
import { isValidElementType as e } from "react-is";
function o(t) {
  if (typeof t !== "object" || t === null) return false;
  const e = Object.getPrototypeOf(t);
  return (
    (e === null ||
      e === Object.prototype ||
      Object.getPrototypeOf(e) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function r(n) {
  if (t.isValidElement(n) || e(n) || !o(n)) return n;
  const c = {};
  Object.keys(n).forEach((t) => {
    c[t] = r(n[t]);
  });
  return c;
}
/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */ function n(c, l, i = { clone: true }) {
  const a = i.clone ? { ...c } : c;
  o(c) &&
    o(l) &&
    Object.keys(l).forEach((f) => {
      t.isValidElement(l[f]) || e(l[f])
        ? (a[f] = l[f])
        : o(l[f]) && Object.prototype.hasOwnProperty.call(c, f) && o(c[f])
          ? (a[f] = n(c[f], l[f], i))
          : i.clone
            ? (a[f] = o(l[f]) ? r(l[f]) : l[f])
            : (a[f] = l[f]);
    });
  return a;
}
export { n as default, o as isPlainObject };
