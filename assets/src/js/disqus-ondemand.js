import {config} from "./config";
import {fadeOut} from "./vanilla/fade-out";
import {addEventListener} from "./vanilla/add-event-listener";

const d = document,
  n = config.disqus_shortname,
  t = d.getElementById("disqus_thread");

function loadDisqusComments() {
  if (!n || !t)
    return;
  (() => { // DON'T EDIT BELOW THIS LINE
    const s = d.createElement("script");
    s.src = "https://" + n + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
}

function onButtonLoadDisqusClicked() {
  const bd = d.getElementById("btn_load_disqus_thread");
  if (!bd)
    return;

  addEventListener(bd, "click", () => {
    // ajax request to load the disqus javascript
    loadDisqusComments();
    // hide the button once comments load
    fadeOut(bd);
  });
}

function loadDisqusCommentCount() {
  if (!n || !t)
    return;
  (() => {
    const s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://" + n + ".disqus.com/count.js";
    s.id = "dsq-count-scr";
    (d.body || d.head).appendChild(s);
  })();
}

export {
  onButtonLoadDisqusClicked,
  loadDisqusCommentCount
};
