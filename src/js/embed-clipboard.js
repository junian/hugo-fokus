// @ts-check

/**
 * @fileoverview Initialises ClipboardJS on code-block copy buttons.
 * Adds visual feedback when a copy action succeeds and removes buttons
 * in environments where the Clipboard API is not supported.
 * @module embed-clipboard
 */

import ClipboardJS from "clipboard";
import { remove } from "./vanilla/remove";
import { addClass } from "./vanilla/add-class";
import { removeClass } from "./vanilla/remove-class";

/**
 * Sets up ClipboardJS on all `.btn-clipboard` elements inside `.highlight` blocks.
 *
 * - If the Clipboard API is not supported by the browser, all copy buttons are
 *   removed from the DOM.
 * - On a successful copy, the button's `.msg-clipboard` child element briefly
 *   shows a "Copied" message (auto-hidden after 2 seconds).
 *
 * @returns {void}
 */
function embedClipboardJS() {
  if (!ClipboardJS.isSupported()) {
    // console.log("Clipboard js not supported");
    const blocks = document.querySelectorAll(".highlight > .btn-clipboard");
    Array.prototype.forEach.call(blocks, (block, index) => {
      remove(block);
    });
    return;
  }

  const clipboard = new ClipboardJS(".btn-clipboard", {
    /**
     * Resolves the copy target as the element immediately following the
     * trigger button (i.e. the code block itself).
     * @param {Element} trigger - The clicked copy button.
     * @returns {Element} The sibling element whose text will be copied.
     */
    target: (trigger) => {
      return trigger.nextElementSibling;
    }
  });

  clipboard.on("success", (e) => {
    // console.info("Action:", e.action);
    // console.info('Text:', e.text);
    // console.info("Trigger:", e.trigger);

    e.clearSelection();

    const message = e.trigger.querySelector(".msg-clipboard");

    if (!message) return;

    if (message.getAttribute("data-cbtimer")) clearTimeout(parseInt(message.getAttribute("data-cbtimer"), 10));

    /* Set message indicating success and show it */
    addClass(message, "msg-clipboard--active");
    message.innerHTML = "Copied";

    /* Hide message after two seconds */
    message.setAttribute("data-cbtimer", setTimeout(() => {
      removeClass(message, ("msg-clipboard--active"));
      message.setAttribute("data-cbtimer", "");
    }, 2000).toString());
  });

  // clipboard.on("error", (e) => {
  //   console.error("Action:", e.action);
  //   console.error("Trigger:", e.trigger);
  // });
}

export { embedClipboardJS };
