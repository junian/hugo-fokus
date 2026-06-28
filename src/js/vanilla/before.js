// @ts-check

/**
 * @fileoverview Utility for inserting HTML content immediately before a DOM element.
 * @module vanilla/before
 */

/**
 * Inserts an HTML string as a sibling immediately before the given element
 * in the DOM, using `insertAdjacentHTML` with the `"beforebegin"` position.
 *
 * @param {Element} el         - The reference element. The new content will
 *   appear directly before this node in the DOM tree.
 * @param {string}  htmlString - A valid HTML string to insert.
 * @returns {void}
 */
export function before(el, htmlString) {
  el.insertAdjacentHTML("beforebegin", htmlString);
}
