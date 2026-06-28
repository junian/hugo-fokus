// @ts-check

/**
 * @fileoverview Disqus on-demand loader and comment-count initialiser.
 * Provides utilities to defer loading Disqus until the user explicitly
 * requests it, and to lazily inject the comment-count script.
 * @module disqus-ondemand
 */

import { isEnabled } from "./is-enabled";
import { config } from "./config";
import { fadeOut } from "./vanilla/fade-out";
import { addEventListener } from "./vanilla/add-event-listener";

const d = document,
  n = config.disqus.shortname,
  t = d.getElementById("disqus_thread");

/**
 * Injects the Disqus embed script (`embed.js`) into the page, which
 * renders the comment thread inside `#disqus_thread`.
 * Does nothing when the Disqus shortname or thread element is absent.
 * @returns {void}
 */
function loadDisqusComments() {
  if (!n || !t)
    return;
  (() => { // DON'T EDIT BELOW THIS LINE
    const s = d.createElement("script");
    s.src = "https://" + n + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", (+new Date()).toString());
    (d.head || d.body).appendChild(s);
  })();
}

/**
 * Attaches a click handler to the "Load Comments" button (`#btn_load_disqus_thread`).
 * When clicked, the Disqus comments are loaded and the button is faded out.
 * Does nothing if the button element is not found in the DOM.
 * @returns {void}
 */
function onButtonLoadDisqusClicked() {
  const bd = d.getElementById("btn_load_disqus_thread");
  if (!bd)
    return;

  addEventListener(bd, "click", () => {
    // ajax request to load the disqus javascript
    loadDisqusComments();
    // hide the button once comments load
    fadeOut(bd);
  });
}

/**
 * Injects the Disqus comment-count script (`count.js`) into the page.
 *
 * Only runs when both of the following conditions are met:
 * - `config.disqus.is_on_demand` is enabled.
 * - `config.disqus.is_show_comment_count` is enabled.
 *
 * Also requires the Disqus shortname and thread element to be present.
 * @returns {void}
 */
function loadDisqusCommentCount() {
  if (!isEnabled(config.disqus.is_on_demand))
    return;

  if (!isEnabled(config.disqus.is_show_comment_count))
    return;

  if (!n || !t)
    return;
  (() => {
    const s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://" + n + ".disqus.com/count.js";
    s.id = "dsq-count-scr";
    (d.body || d.head).appendChild(s);
  })();
}

export {
  onButtonLoadDisqusClicked,
  loadDisqusCommentCount
};
