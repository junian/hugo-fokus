// @ts-check

/**
 * @fileoverview Utility for reading the text content of a DOM element.
 * @module vanilla/text
 */

/**
 * Returns the plain-text content of a DOM element.
 *
 * Prefers the standard `textContent` property, falling back to the legacy
 * IE `innerText` property for older browsers.
 *
 * @param {HTMLElement} el - The DOM element whose text content should be retrieved.
 * @returns {string} The text content of the element.
 */
export function text(el) {
  return el.textContent || el.innerText;
}
