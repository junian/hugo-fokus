/*!Fokus v3.0.0 | MIT License | github.com/junian/fokus*/
import {ready} from "./vanilla/ready";
import {embedClipboardJS} from "./embed-clipboard";
import {loadDisqusCommentCount, onButtonLoadDisqusClicked} from "./disqus-ondemand";
import {embedCookieConsent} from "./embed-native-cookie-consent";
import { enforceCanonicalURL } from "./enforce-canonical";
import {initTabulator} from "./tabulator";
import { lazyLoadImages } from "./img-layload";

(() => {
  ready(() => {
    enforceCanonicalURL();
    lazyLoadImages();
    embedClipboardJS();
    onButtonLoadDisqusClicked();
    loadDisqusCommentCount();
    embedCookieConsent();
    initTabulator();
  });
})();
