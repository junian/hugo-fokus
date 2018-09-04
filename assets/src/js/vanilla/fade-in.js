import {setOpacity} from "./set-opacity";

export function fadeIn(el) {
  let opacity = 0;

  setOpacity(el, opacity);

  let last = +new Date();
  const tick = () => {
    opacity += (new Date() - last) / 400;

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
