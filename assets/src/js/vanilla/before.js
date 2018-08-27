export function before(el, htmlString) {
  el.insertAdjacentHTML("beforebegin", htmlString);
}
