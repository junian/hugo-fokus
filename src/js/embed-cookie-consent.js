//@ts-check

/**
 * @fileoverview Embeds the third-party CookieConsent library dynamically.
 * Loads the CookieConsent CSS and JS from the URLs defined in {@link module:config},
 * then initialises the consent popup. Skips loading if consent has already
 * been recorded in the browser cookie or if the feature is disabled.
 * @module embed-cookie-consent
 */

import { config } from "./config";
import { isEnabled } from "./is-enabled";
import { addEventListener } from "./vanilla/add-event-listener";

const d = document;

/**
 * Initialises the CookieConsent popup using the global `window.cookieconsent`
 * object (provided by the dynamically loaded library).
 * Applies the site's colour palette and links to the configured consent URL.
 * @returns {void}
 */
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

/**
 * Dynamically loads the CookieConsent stylesheet and script.
 * The script is injected only after the stylesheet finishes loading to avoid
 * a flash of unstyled consent UI. Calls {@link runCookieConsent} once the
 * script is ready.
 * @returns {void}
 */
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

/**
 * Entry point for the third-party CookieConsent integration.
 *
 * Skips loading when:
 * - `config.is_cookie_consent_enabled` is not `"true"`.
 * - The consent cookie (`cookieconsent_status`) is already present.
 *
 * Otherwise delegates to {@link loadCookieConsent}.
 * @returns {void}
 */
function embedCookieConsent() {
  if (!isEnabled(config.is_cookie_consent_enabled))
    return;

  if (d.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/))
    return;

  loadCookieConsent();
}

export { embedCookieConsent };
