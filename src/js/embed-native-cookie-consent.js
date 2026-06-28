// @ts-check

/**
 * @fileoverview Native (no third-party library) cookie consent banner.
 * Renders a fixed bottom navbar with an "Accept" button. When accepted,
 * it stores a `cookieconsent_status` cookie and fades the banner out.
 * Skips rendering if consent has already been given or the feature is disabled.
 * @module embed-native-cookie-consent
 */

import {config} from "./config";
import {setOpacity} from "./vanilla/set-opacity";
import {addEventListener} from "./vanilla/add-event-listener";
import {fadeOut} from "./vanilla/fade-out";
import { fadeIn } from "./vanilla/fade-in";
import { isEnabled } from "./is-enabled";

/** @type {string} Default consent banner message. */
const defaultMessage = "This website uses cookies to ensure you get the best experience on our website.";

/** @type {string} Default "learn more" link label. */
const defaultLearnMore = "Learn more";

/** @type {string} Default accept button label. */
const defaultAccept = "Got It!";

/**
 * HTML string for the cookie consent banner element.
 * Interpolates {@link defaultMessage}, {@link defaultLearnMore},
 * {@link defaultAccept}, and `config.cookie_consent_url` at module load time.
 * @type {string}
 */
const ccElement =
`<div class="navbar-fixed-bottom navbar-cookie">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-10 col-md-11">
        <p class="navbar-text">${defaultMessage}
          <a href="${config.cookie_consent_url}" aria-label="learn more about cookies" role="button" tabindex="0" rel="noopener noreferrer nofollow" target="_blank" class="lined-link">${defaultLearnMore}</a>
        </p>
      </div>
      <div class="col-sm-2 col-md-1">
        <button id="btnAcceptCookie" type="button" class="btn btn-default btn-primary navbar-btn btn-block" aria-label="dismiss cookie message" role="button">
          ${defaultAccept}
        </button>
      </div>
    </div>
  </div>
</div>`;

const d = document;

/**
 * Sets a browser cookie with the given parameters.
 * @param {string}  name       - Cookie name.
 * @param {string}  value      - Cookie value.
 * @param {number}  expiryDays - Days until expiry. Use -1 for session cookie.
 * @param {string}  domain     - Cookie domain scope (empty string = current domain).
 * @param {string}  path       - Cookie path scope.
 * @param {boolean} secure     - Whether to add the `Secure` flag.
 * @returns {void}
 */
function setCookie(name, value, expiryDays, domain, path, secure) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + (expiryDays || 365));

  var cookie = [
    name + "=" + value,
    "expires=" + exdate.toUTCString(),
    "path=" + (path || "/")
  ];

  if (domain) {
    cookie.push("domain=" + domain);
  }
  if (secure) {
    cookie.push("secure");
  }
  document.cookie = cookie.join(";");
}

/**
 * Creates a DOM element from an HTML string.
 * Wraps the string in a `<div>`, then returns its first child node.
 * @param {string} htmlString - A valid HTML string representing a single root element.
 * @returns {ChildNode} The parsed DOM node.
 */
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

/**
 * Builds and injects the cookie consent banner into the page.
 * The banner fades in on load. When the user clicks "Accept", the consent
 * cookie is written (using settings from {@link module:config}) and the
 * banner fades out.
 * @returns {void}
 */
function loadCookieConsent() {
  const el = createElementFromHTML(ccElement);
  setOpacity(el, 0);
  (d.body).appendChild(el);
  fadeIn(el);
  addEventListener(document.getElementById("btnAcceptCookie"), "click", () => {
    let status = "dismiss";
    setCookie(
      config.cookie.name,
      status,
      config.cookie.expiryDays,
      config.cookie.domain,
      config.cookie.path,
      config.cookie.secure
    );
    fadeOut(el);
  });
}

/**
 * Entry point for the native cookie consent banner.
 *
 * Skips rendering when:
 * - `config.is_cookie_consent_enabled` is not `"true"`.
 * - The consent cookie (`cookieconsent_status`) is already present.
 *
 * Otherwise delegates to {@link loadCookieConsent}.
 * @returns {void}
 */
function embedCookieConsent() {
  if(!isEnabled(config.is_cookie_consent_enabled))
    return;

  if (d.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/))
    return;

  loadCookieConsent();
}

export {embedCookieConsent};
