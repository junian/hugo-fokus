import {config} from "./config";

const d = document;

function embedCookieConsent() {
  if (!d.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/))
    return;

  (() => {
    const s = d.createElement("link");
    s.rel = "stylesheet";
    s.type = "text/css";
    s.href = config.cookie_consent_css;
    (d.head || d.body).appendChild(s);
  })();

  (() => {
    const s = d.createElement("script");
    s.src = config.cookie_consent_js;
    (d.head || d.body).appendChild(s);
  })();

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

export {embedCookieConsent};
