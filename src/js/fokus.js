// @ts-check

/*!Fokus v3.0.0 | MIT License | github.com/junian/fokus*/

/**
 * @fileoverview Main entry point for the Fokus theme JavaScript bundle.
 * Bootstraps all site features once the DOM is ready:
 * - Lazy image loading
 * - Clipboard copy buttons on code blocks
 * - On-demand Disqus comment loading and comment counts
 * - Native cookie consent banner
 * - Tabulator-powered HTML tables
 * @module fokus
 */

import { ready } from "./vanilla/ready";
import { embedClipboardJS } from "./embed-clipboard";
import { loadDisqusCommentCount, onButtonLoadDisqusClicked } from "./disqus-ondemand";
import { embedCookieConsent } from "./embed-native-cookie-consent";
import { initTabulator } from "./tabulator";
import { lazyLoadImages } from "./img-lazyload";

/**
 * Self-invoking initialiser — runs all feature bootstraps inside a
 * {@link module:vanilla/ready~ready} callback so they execute after the
 * DOM is fully parsed.
 */
(() => {
  ready(() => {
    lazyLoadImages();
    embedClipboardJS();
    onButtonLoadDisqusClicked();
    loadDisqusCommentCount();
    embedCookieConsent();
    initTabulator();
  });
})();
