// @ts-check

/**
 * @fileoverview Utility for safely removing a DOM element from the document.
 * @module vanilla/remove
 */

/**
 * Removes an element from the DOM by calling `parentNode.removeChild`.
 *
 * Safe to call with a `null` or `undefined` element, or one that has no
 * parent (e.g. already detached) — both cases are silently ignored.
 *
 * @param {Element|null|undefined} el - The DOM element to remove.
 * @returns {void}
 */
export function remove(el) {
  if (!el)
    return;

  if (!el.parentNode)
    return;

  el.parentNode.removeChild(el);
}
