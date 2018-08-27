export function fadeOut(el) {
  var opacity = 1;

  el.style.opacity = 1;
  el.style.filter = "";

  var last = +new Date();
  var tick = () => {
    opacity -= (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = "alpha(opacity=" + (100 * opacity) | 0 + ")";

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else if (opacity <= 0) {
      remove(el);
    }
  };

  tick();
}
