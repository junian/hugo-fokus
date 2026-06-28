// @ts-check

/**
 * @fileoverview Native lazy-loading helper for images wrapped in
 * `.img-placeholder` containers.
 * Adds an `img-loaded` class to the wrapper once the image has finished
 * loading, enabling CSS skeleton/fade-in effects. Falls back gracefully
 * when the browser does not support the `loading` attribute.
 * @module img-lazyload
 */

/**
 * Marks the `.img-placeholder` ancestor of an image as loaded by adding
 * the `img-loaded` CSS class.
 *
 * If the image is already complete (cached or inline), the class is applied
 * immediately. Otherwise, `load` and `error` event listeners are attached so
 * the class is applied once the image settles.
 *
 * @param {Element} value - A DOM element expected to be an `<img>` inside an
 *   `.img-placeholder` wrapper. Non-`HTMLImageElement` values are ignored.
 * @returns {void}
 */
function handleLazyLoadImage(value) {
    if(!(value instanceof HTMLImageElement))
        return;

    const img = /** @type{HTMLImageElement} */ value;

    /** @returns {void} */
    function markLoaded() {
        const placeholder = img.closest('.img-placeholder');

        if (placeholder) {
            placeholder.classList.add('img-loaded');
        }
    }

    if (img.complete && img.naturalWidth > 0) {
        markLoaded();
    } else {
        img.addEventListener('load', markLoaded);
        img.addEventListener('error', markLoaded);
    }

}

/**
 * Initialises lazy-load handling for all images inside `.img-placeholder`
 * containers.
 *
 * When the browser does not support the native `loading` attribute, every
 * `.img-placeholder` is immediately marked as loaded (i.e. the skeleton
 * effect is skipped) to avoid permanently hidden images.
 *
 * @returns {void}
 */
function lazyLoadImages() {
    // Browser has no native lazy loading
    if (!('loading' in HTMLImageElement.prototype)) {
        document.querySelectorAll('.img-placeholder').forEach(function(el) {
            el.classList.add('img-loaded');
        });

        return;
    }

    const images = document.querySelectorAll('.img-placeholder img');

    images.forEach(handleLazyLoadImage);
}

export {lazyLoadImages};
