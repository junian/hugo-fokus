export function setOpacity(el, o) {
  el.style.opacity = o;
  el.style.filter = `alpha(opacity=${(100 * o) | 0}})`;
}
