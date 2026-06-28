// @ts-check

/**
 * @fileoverview Site-wide configuration object populated by Hugo template
 * variables at build time.
 * @module config
 */

/**
 * @typedef {Object} DisqusConfig
 * @property {string} is_show_comment_count - Hugo template value indicating
 *   whether comment counts should be shown ("true"/"false" string).
 * @property {string} is_on_demand - Hugo template value indicating whether
 *   Disqus should be loaded on demand ("true"/"false" string).
 * @property {string} shortname - The Disqus shortname for this site.
 */

/**
 * @typedef {Object} CookieConfig
 * @property {string} name   - Cookie name used to store consent status.
 * @property {string} path   - URL path scope for the cookie.
 * @property {string} domain - Domain scope for the cookie.
 * @property {number} expiryDays - Number of days until the cookie expires
 *   (-1 for no expiry).
 * @property {boolean} secure - Whether the cookie should only be sent over
 *   HTTPS.
 */

/**
 * @typedef {Object} SiteConfig
 * @property {DisqusConfig} disqus              - Disqus integration settings.
 * @property {string}       base_url            - The canonical base URL of the
 *   site, injected by Hugo.
 * @property {string}       is_redirect_to_canonical - Hugo template value
 *   controlling canonical redirect behaviour ("true"/"false" string).
 * @property {CookieConfig} cookie              - Default cookie options.
 * @property {string}       cookie_consent_url  - URL for the cookie policy
 *   page shown in the consent banner.
 * @property {string}       is_cookie_consent_enabled - Hugo template value
 *   indicating whether the cookie consent banner is active
 *   ("true"/"false" string).
 */

/**
 * Site configuration object.
 *
 * Values wrapped in `{{...}}` are Hugo template directives replaced with real
 * values during the site build. JavaScript consumers should treat all
 * `is_*` fields as strings and use {@link module:is-enabled~isEnabled} to
 * coerce them to booleans.
 *
 * @type {SiteConfig}
 */
var config = {
  disqus: {
    is_show_comment_count: "{{.Site.Params.services.disqus.isShowCommentCount}}",
    is_on_demand:          "{{.Site.Params.services.disqus.isOnDemand}}",
    shortname:             "{{.Site.Params.services.disqus.shortname}}",
  },
  
  base_url: "{{.Site.BaseURL}}",
  is_redirect_to_canonical: "{{.Site.Params.IsRedirectToCanonical}}",
  // cookie_consent_css: "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css",
  // cookie_consent_js: "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js",
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: "cookieconsent_status",
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: "/",
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: "",
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false
  },
  cookie_consent_url: "{{.Site.Params.CookieConsent.Url}}",
  is_cookie_consent_enabled: "{{.Site.Params.CookieConsent.IsEnabled}}"
};

export {config};
