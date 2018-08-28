import {config} from "./config";
import { addEventListener } from "./vanilla/add-event-listener";

const d = document;

function runCookieConsent() {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#edeff5",
        "text": "#4F4F4F"
      },
      "button": {
        "background": "#004e92"
      }
    },
    "content": {
      "href": config.cookie_consent_url
    }
  });
}

function loadCookieConsent() {
  const s = d.createElement("link");
  s.rel = "stylesheet";
  s.type = "text/css";
  s.href = config.cookie_consent_css;

  addEventListener(s, "load", () => {
    const j = d.createElement("script");
    j.src = config.cookie_consent_js;
    addEventListener(j, "load", runCookieConsent);

    (d.head || d.body).appendChild(j);
  });

  (d.head || d.body).appendChild(s);
}

function embedCookieConsent() {
  if (d.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/))
    return;
  loadCookieConsent();
}

export {embedCookieConsent};
