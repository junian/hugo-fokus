import {config} from "./config";

const d = document;
const n = config.disqus_shortname;

function loadDisqusComments() {
  if (!n)
    return;
  (() => { // DON'T EDIT BELOW THIS LINE
    const s = d.createElement("script");
    s.src = "https://" + n + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
}

function loadDisqusCommentCount() {
  if (!n)
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

export {loadDisqusComments, loadDisqusCommentCount};
