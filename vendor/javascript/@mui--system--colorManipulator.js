// @mui/system/colorManipulator@7.2.0 downloaded from https://ga.jspm.io/npm:@mui/system@7.2.0/esm/colorManipulator/index.js

import e from "@mui/utils/formatMuiErrorMessage";
import n from "@mui/utils/clamp";
/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */ function r(e, r = 0, t = 1) {
  process.env.NODE_ENV !== "production" &&
    (e < r || e > t) &&
    console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`);
  return n(e, r, t);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */ function t(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(n);
  r && r[0].length === 1 && (r = r.map((e) => e + e));
  process.env.NODE_ENV !== "production" &&
    e.length !== e.trim().length &&
    console.error(
      `MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`,
    );
  return r
    ? `rgb${r.length === 4 ? "a" : ""}(${r.map((e, n) => (n < 3 ? parseInt(e, 16) : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3)).join(", ")})`
    : "";
}
function o(e) {
  const n = e.toString(16);
  return n.length === 1 ? `0${n}` : n;
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */ function s(n) {
  if (n.type) return n;
  if (n.charAt(0) === "#") return s(t(n));
  const r = n.indexOf("(");
  const o = n.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(
      process.env.NODE_ENV !== "production"
        ? `MUI: Unsupported \`${n}\` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
        : e(9, n),
    );
  let c = n.substring(r + 1, n.length - 1);
  let u;
  if (o === "color") {
    c = c.split(" ");
    u = c.shift();
    c.length === 4 && c[3].charAt(0) === "/" && (c[3] = c[3].slice(1));
    if (
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(u)
    )
      throw new Error(
        process.env.NODE_ENV !== "production"
          ? `MUI: unsupported \`${u}\` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
          : e(10, u),
      );
  } else c = c.split(",");
  c = c.map((e) => parseFloat(e));
  return { type: o, values: c, colorSpace: u };
}
/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */ const c = (e) => {
  const n = s(e);
  return n.values
    .slice(0, 3)
    .map((e, r) => (n.type.includes("hsl") && r !== 0 ? `${e}%` : e))
    .join(" ");
};
const u = (e, n) => {
  try {
    return c(e);
  } catch (r) {
    n && process.env.NODE_ENV !== "production" && console.warn(n);
    return e;
  }
};
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */ function l(e) {
  const { type: n, colorSpace: r } = e;
  let { values: t } = e;
  if (n.includes("rgb")) t = t.map((e, n) => (n < 3 ? parseInt(e, 10) : e));
  else if (n.includes("hsl")) {
    t[1] = `${t[1]}%`;
    t[2] = `${t[2]}%`;
  }
  t = n.includes("color") ? `${r} ${t.join(" ")}` : `${t.join(", ")}`;
  return `${n}(${t})`;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */ function a(e) {
  if (e.startsWith("#")) return e;
  const { values: n } = s(e);
  return `#${n.map((e, n) => o(n === 3 ? Math.round(255 * e) : e)).join("")}`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */ function i(e) {
  e = s(e);
  const { values: n } = e;
  const r = n[0];
  const t = n[1] / 100;
  const o = n[2] / 100;
  const c = t * Math.min(o, 1 - o);
  const u = (e, n = (e + r / 30) % 12) =>
    o - c * Math.max(Math.min(n - 3, 9 - n, 1), -1);
  let a = "rgb";
  const i = [
    Math.round(u(0) * 255),
    Math.round(u(8) * 255),
    Math.round(u(4) * 255),
  ];
  if (e.type === "hsla") {
    a += "a";
    i.push(n[3]);
  }
  return l({ type: a, values: i });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */ function p(e) {
  e = s(e);
  let n = e.type === "hsl" || e.type === "hsla" ? s(i(e)).values : e.values;
  n = n.map((n) => {
    e.type !== "color" && (n /= 255);
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */ function h(e, n) {
  const r = p(e);
  const t = p(n);
  return (Math.max(r, t) + 0.05) / (Math.min(r, t) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */ function f(e, n) {
  e = s(e);
  n = r(n);
  (e.type !== "rgb" && e.type !== "hsl") || (e.type += "a");
  e.type === "color" ? (e.values[3] = `/${n}`) : (e.values[3] = n);
  return l(e);
}
function d(e, n, r) {
  try {
    return f(e, n);
  } catch (n) {
    r && process.env.NODE_ENV !== "production" && console.warn(r);
    return e;
  }
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */ function v(e, n) {
  e = s(e);
  n = r(n);
  if (e.type.includes("hsl")) e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - n;
  return l(e);
}
function g(e, n, r) {
  try {
    return v(e, n);
  } catch (n) {
    r && process.env.NODE_ENV !== "production" && console.warn(r);
    return e;
  }
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */ function y(e, n) {
  e = s(e);
  n = r(n);
  if (e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * n;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * n;
  return l(e);
}
function m(e, n, r) {
  try {
    return y(e, n);
  } catch (n) {
    r && process.env.NODE_ENV !== "production" && console.warn(r);
    return e;
  }
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */ function E(e, n = 0.15) {
  return p(e) > 0.5 ? v(e, n) : y(e, n);
}
function b(e, n, r) {
  try {
    return E(e, n);
  } catch (n) {
    r && process.env.NODE_ENV !== "production" && console.warn(r);
    return e;
  }
}
/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */ function $(e, n, r, t = 1) {
  const o = (e, n) =>
    Math.round((e ** (1 / t) * (1 - r) + n ** (1 / t) * r) ** t);
  const c = s(e);
  const u = s(n);
  const a = [
    o(c.values[0], u.values[0]),
    o(c.values[1], u.values[1]),
    o(c.values[2], u.values[2]),
  ];
  return l({ type: "rgb", values: a });
}
export {
  f as alpha,
  $ as blend,
  c as colorChannel,
  v as darken,
  s as decomposeColor,
  E as emphasize,
  h as getContrastRatio,
  p as getLuminance,
  t as hexToRgb,
  i as hslToRgb,
  y as lighten,
  d as private_safeAlpha,
  u as private_safeColorChannel,
  g as private_safeDarken,
  b as private_safeEmphasize,
  m as private_safeLighten,
  l as recomposeColor,
  a as rgbToHex,
};
