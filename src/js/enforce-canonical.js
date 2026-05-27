import {config} from "./config";

function enforceCanonicalURL() {
    if(config.is_redirect_to_canonical.toString().trim().toLowerCase() !== "true")
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
