// @ts-check

/**
 * @fileoverview Cross-browser utility for removing a CSS class from a DOM element.
 * @module vanilla/remove-class
 */

/**
 * Removes a CSS class from an element in a cross-browser compatible way.
 * Uses `classList.remove` when available, otherwise manipulates `className`
 * with a regex replacement for older browsers (e.g. IE 9).
 *
 * @param {Element} el        - The target DOM element.
 * @param {string}  className - The CSS class name to remove. May contain
 *   multiple space-separated class names when using the regex fallback path.
 * @returns {void}
 */
export function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
}
