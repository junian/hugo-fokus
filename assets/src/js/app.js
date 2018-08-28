/*!Fokus v1.9.5 | MIT License | github.com/junian/fokus*/
import {ready} from "./vanilla/ready";
import {addEventListener} from "./vanilla/add-event-listener";
import {fadeOut} from "./vanilla/fade-out";
import {embedClipboardJS} from "./embed-clipboard";
import {loadDisqusCommentCount, loadDisqusComments} from "./disqus-ondemand";

function onButtonLoadDisqusClicked() {
  const elBtnLoadDisqus = document.getElementById("btn_load_disqus_thread");
  if (!elBtnLoadDisqus)
    return;

  addEventListener(elBtnLoadDisqus, "click", () => {
    // ajax request to load the disqus javascript
    loadDisqusComments();
    // hide the button once comments load
    fadeOut(elBtnLoadDisqus);
  });
}

ready(() => {
  // console.log("ready");
  embedClipboardJS();
  onButtonLoadDisqusClicked();
  loadDisqusCommentCount();
});
