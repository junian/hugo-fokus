// @ts-check

/**
 * @fileoverview Cross-browser DOM-ready helper.
 * @module vanilla/ready
 */

/**
 * Executes a callback as soon as the DOM is fully parsed and ready to be
 * manipulated, in a cross-browser compatible way.
 *
 * - If the document is already interactive or complete the callback is
 *   invoked synchronously.
 * - Otherwise `DOMContentLoaded` is used when available.
 * - Falls back to IE's `onreadystatechange` event for legacy browsers.
 *
 * @param {Function} fn - The callback to invoke when the DOM is ready.
 * @returns {void}
 */
export function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    document.attachEvent("onreadystatechange", () => {
      if (document.readyState !== "loading")
        fn();
    });
  }
}
