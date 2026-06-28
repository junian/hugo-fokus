// @ts-check

/**
 * @fileoverview Cross-browser utility for adding a CSS class to a DOM element.
 * @module vanilla/add-class
 */

/**
 * Adds a CSS class to an element in a cross-browser compatible way.
 * Uses `classList.add` when available, otherwise falls back to string
 * concatenation on `className` for older browsers (e.g. IE 9).
 *
 * @param {Element} el        - The target DOM element.
 * @param {string}  className - The CSS class name to add.
 * @returns {void}
 */
export function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += " " + className;
}
