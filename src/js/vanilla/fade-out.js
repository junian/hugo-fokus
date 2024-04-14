import {remove} from "./remove";
import {setOpacity} from "./set-opacity";

export function fadeOut(el) {
  let opacity = 1;

  setOpacity(el, opacity);

  let last = +new Date();
  const tick = () => {
    opacity -= (new Date() - last) / 400;

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
