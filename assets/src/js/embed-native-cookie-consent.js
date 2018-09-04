import {config} from "./config";
import {setOpacity} from "./vanilla/set-opacity";
import {addEventListener} from "./vanilla/add-event-listener";
import {fadeOut} from "./vanilla/fade-out";
import { fadeIn } from "./vanilla/fade-in";

const defaultMessage = "This website uses cookies to ensure you get the best experience on our website.";
const defaultLearnMore = "Learn more";
const defaultAccept = "Got It!";

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

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

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

function embedCookieConsent() {
  if (d.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/))
    return;
  loadCookieConsent();
}

export {embedCookieConsent};
