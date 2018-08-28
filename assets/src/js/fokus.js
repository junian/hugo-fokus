/*!Fokus v1.9.7 | MIT License | github.com/junian/fokus*/
import {ready} from "./vanilla/ready";
import {embedClipboardJS} from "./embed-clipboard";
import {loadDisqusCommentCount, onButtonLoadDisqusClicked} from "./disqus-ondemand";
import {embedCookieConsent} from "./embed-cookie-consent";

(() => {
  ready(() => {
    embedClipboardJS();
    onButtonLoadDisqusClicked();
    loadDisqusCommentCount();
    embedCookieConsent();
  });
})();
