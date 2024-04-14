export function remove(el) {
  if (!el)
    return;

  if (!el.parentNode)
    return;

  el.parentNode.removeChild(el);
}
