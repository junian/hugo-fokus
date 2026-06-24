function lazyLoadImages() {
    // Browser has no native lazy loading
    if (!('loading' in HTMLImageElement.prototype)) {
        document.querySelectorAll('.img-placeholder').forEach(function(el) {
            el.classList.add('img-loaded');
        });

        return;
    }

    var images = document.querySelectorAll('.img-placeholder img');

    images.forEach(function (img) {

        function markLoaded() {
            var placeholder = img.closest('.img-placeholder');

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

    });
}

export {lazyLoadImages};
