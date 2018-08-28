import {config} from "./config";

function loadDisqusComments() {
  if (!config.disqus_shortname)
    return;
  (() => { // DON'T EDIT BELOW THIS LINE
    const d = document, s = d.createElement("script");
    s.src = "https://" + config.disqus_shortname + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
}

function loadDisqusCommentCount() {
  if (!config.disqus_shortname)
    return;
  (() => {
    const d = document, s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://" + config.disqus_shortname + ".disqus.com/count.js";
    s.id = "dsq-count-scr";
    (document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(s);
  })();
}

export {loadDisqusComments, loadDisqusCommentCount};
