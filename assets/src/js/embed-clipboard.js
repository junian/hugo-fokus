import {ClipboardJS} from "clipboard";
import {remove} from "./vanilla/remove";
import {addClass} from "./vanilla/add-class";
import {removeClass} from "./vanilla/remove-class";

function embedClipboardJS() {
  if (!ClipboardJS.isSupported()) {
    // console.log("Clipboard js not supported");
    var blocks = document.querySelectorAll("figure.highlight > .btn-clipboard");
    Array.prototype.forEach.call(blocks, (block, index) => {
      remove(block);
    });
    return;
  }

  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: (trigger) => {
      return trigger.nextElementSibling;
    }
  });

  clipboard.on("success", (e) => {
    // console.info("Action:", e.action);
    // console.info('Text:', e.text);
    // console.info("Trigger:", e.trigger);

    e.clearSelection();

    var message = e.trigger.querySelector(".msg-clipboard");

    if (!message) return;

    if (message.getAttribute("data-cbtimer")) clearTimeout(parseInt(message.getAttribute("data-cbtimer"), 10));

    /* Set message indicating success and show it */
    addClass(message, "msg-clipboard--active");
    message.innerHTML = "Copied to clipboard";

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

export {embedClipboardJS};
