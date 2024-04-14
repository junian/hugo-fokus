export function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, handler);
  } else {
    el["on" + eventName] = handler;
  }
}
