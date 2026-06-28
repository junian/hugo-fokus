// @ts-check

/**
 * @fileoverview Cross-browser utility for setting an element's opacity.
 * @module vanilla/set-opacity
 */

/**
 * Sets the opacity of a DOM element in a cross-browser compatible way.
 *
 * Writes both the standard `style.opacity` property (modern browsers) and
 * the legacy IE `filter: alpha(opacity=…)` syntax.
 *
 * @param {Element} el - The target DOM element whose opacity will be changed.
 * @param {number}  o  - Opacity value between `0` (fully transparent) and
 *   `1` (fully opaque).
 * @returns {void}
 */
export function setOpacity(el, o) {
  el.style.opacity = o;
  el.style.filter = `alpha(opacity=${(100 * o) | 0}})`;
}
