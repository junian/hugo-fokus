// @ts-check

/**
 * @fileoverview Vanilla JS fade-out animation using `requestAnimationFrame`.
 * @module vanilla/fade-out
 */

import {remove} from "./remove";
import {setOpacity} from "./set-opacity";

/**
 * Gradually decreases an element's opacity from 1 to 0 over ~400 ms,
 * then removes it from the DOM.
 *
 * Uses `requestAnimationFrame` when available, falling back to
 * `setTimeout` with a ~16 ms interval (≈60 fps) for older browsers.
 * Once opacity reaches 0 the element is removed via {@link module:vanilla/remove~remove}.
 *
 * @param {Element} el - The DOM element to fade out and remove.
 * @returns {void}
 */
export function fadeOut(el) {
  let opacity = 1;

  setOpacity(el, opacity);

  let last = +new Date();
  const tick = () => {
    opacity -= (+new Date() - last) / 400;

    setOpacity(el, opacity);

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else if (opacity <= 0) {
      remove(el);
    }
  };

  tick();
}
