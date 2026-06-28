// @ts-check

/**
 * @fileoverview Vanilla JS fade-in animation using `requestAnimationFrame`.
 * @module vanilla/fade-in
 */

import { setOpacity } from "./set-opacity";

/**
 * Gradually increases an element's opacity from 0 to 1 over ~400 ms.
 *
 * Uses `requestAnimationFrame` when available, falling back to
 * `setTimeout` with a ~16 ms interval (≈60 fps) for older browsers.
 * Opacity is clamped to `1` once the animation completes.
 *
 * @param {Element} el - The DOM element to fade in. Must already be present
 *   in the document so its `style` property is accessible.
 * @returns {void}
 */
export function fadeIn(el) {
  let opacity = 0;

  setOpacity(el, opacity);

  let last = +new Date();
  const tick = () => {
    opacity += (+new Date() - last) / 400;

    setOpacity(el, opacity);

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else if (opacity >= 1) {
      setOpacity(el, 1);
    }
  };

  tick();
}
