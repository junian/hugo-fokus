//@ts-check

/**
 * @fileoverview Enforces the site's canonical URL by redirecting visitors
 * who land on a non-canonical hostname (e.g. a staging or mirror domain).
 * Local development hosts are always exempted from the redirect.
 * @module enforce-canonical
 */

import {config} from "./config";
import { isEnabled } from "./is-enabled";

/**
 * Redirects the browser to the canonical origin when the current hostname
 * does not match the canonical hostname defined in `config.base_url`.
 *
 * The redirect preserves the original pathname and query string.
 * Local hostnames (`localhost`, `127.0.0.1`, and `192.168.x.x` ranges)
 * are always exempted so development workflows are unaffected.
 *
 * Does nothing when `config.is_redirect_to_canonical` is not `"true"`.
 *
 * @returns {void}
 */
function enforceCanonicalURL() {
    if(!isEnabled(config.is_redirect_to_canonical))
        return;
    
    var canonicalURL = new URL(config.base_url);
    var canonicalHostname = canonicalURL.hostname;
    var currentHostname = window.location.hostname;

    var isLocal = currentHostname === "localhost" ||
        currentHostname === "127.0.0.1" ||
        currentHostname.indexOf("192.168.") !== -1;

    if (currentHostname !== canonicalHostname && !isLocal) {
        window.location.replace(
            canonicalURL.origin + window.location.pathname + window.location.search
        );
    }
}

export {enforceCanonicalURL};
