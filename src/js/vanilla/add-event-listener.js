// @ts-check

/**
 * @fileoverview Cross-browser utility for attaching DOM event listeners.
 * @module vanilla/add-event-listener
 */

/**
 * Attaches an event handler to an element in a cross-browser compatible way.
 *
 * Uses the standard `addEventListener` API when available, falls back to
 * IE's `attachEvent`, and ultimately assigns directly to the `on<event>`
 * property as a last resort for very old environments.
 *
 * @param {Element|Document|Window} el  - The target object to listen on.
 * @param {string}                  eventName - The event type (e.g. `"click"`, `"load"`).
 * @param {EventListener|Function}  handler   - The callback to invoke when the event fires.
 * @returns {void}
 */
export function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, handler);
  } else {
    el["on" + eventName] = handler;
  }
}
