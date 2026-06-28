// @ts-check

/**
 * @fileoverview Ad block detection utilities using image-loading heuristics
 * and the FiveFilter/ABCheck approach.
 * @module adblock-detect
 */

import { before } from "./vanilla/before";
import { text } from "./vanilla/text";
import { removeClass } from "./vanilla/remove-class";
import { remove } from "./vanilla/remove";
import { imagesLoaded } from "imagesloaded";

/**
 * Called when an ad blocker is detected.
 * Shows the "blockadblock" element, injects the Buy Me a Coffee noscript
 * fallback inline, and removes the image test container.
 * @returns {void}
 */
function onAdBlockDetected() {
  console.log("adblock detected");
  const bmcNoScript = document.querySelector("noscript#buymeacoffee");
  if (bmcNoScript)
    before(bmcNoScript, text(bmcNoScript));

  const elBab = document.querySelector("#blockadblock");
  if (elBab)
    removeClass(elBab, "hidden");

  remove(document.querySelector("#image-tests"));
}

/**
 * Called when no ad blocker is detected.
 * Removes the image test container from the DOM.
 * @returns {void}
 */
function onAdBlockNotDetected() {
  console.log("adblock NOT detected");

  remove(document.querySelector("#image-tests"));
}

/**
 * Checks whether an image element has loaded successfully.
 * Uses `naturalWidth` as the primary signal — a value of 0 or 1 typically
 * indicates the image was blocked or failed to load.
 *
 * Inspired by http://stackoverflow.com/a/1977898
 *
 * @param {HTMLImageElement|undefined} img - The image element to check.
 * @returns {boolean} `true` if the image appears to have loaded, `false` otherwise.
 */
function isImageOk(img) {
  // Image was removed from the page code (issue #1)
  if (typeof img === "undefined") {
    return false;
  }
  // During the onload event, IE correctly identifies any images that
  // weren't downloaded as not complete. Others should too. Gecko-based
  // browsers act like NS4 in that they report this incorrectly.
  // NOTE: This check doesn't seem to be needed - and doesn't work 
  // reliably in MS Edge in my tests. So disabling for now.
  //if (!img.complete) {
  //    return false;
  //}
  // However, they do have two very useful properties: naturalWidth and
  // naturalHeight. These give the true size of the image. If it failed
  // to load, either of these should be zero.
  if (typeof img.naturalWidth !== "undefined" && img.naturalWidth <= 1) {
    return false;
  }
  // No other way of checking: assume it's ok.
  return true;
}

/**
 * Performs ad-block detection by loading two known ad-network images and
 * inspecting whether they were blocked.
 *
 * Logic:
 * - Both blocked → ad blocker detected (unless mobile or Pi-hole context).
 * - Ad image loaded → no ad blocker.
 * - Only whitelist image loaded → partial blocking → treated as blocked.
 *
 * @returns {void}
 */
function fivefilterCheck() {
  const isMobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  const isPiHole = true;

  const elTestAd = document.querySelector("img#test-ad");
  const elTestWhitelist = document.querySelector("img#test-whitelist");

  if (elTestAd)
    elTestAd.setAttribute("src", "https://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png?advertiser=1&" + escape(new Date()));

  if (elTestWhitelist)
    elTestWhitelist.setAttribute("src", "https://gstatic.com/webp/gallery3/1.png?ads=1&" + escape(new Date()));

  const elImgTest = document.querySelector("#image-tests");
  if (!elImgTest)
    return;

  imagesLoaded(elImgTest, () => {
    const adLoaded = isImageOk(elTestAd);
    const whitelistAdLoaded = isImageOk(elTestWhitelist);

    // all-good if both ads failed
    // Unless we're testing on mobile, or for Pi-hole.net users.
    if (!adLoaded && (!whitelistAdLoaded || (isMobile || isPiHole))) {
      onAdBlockDetected();
    } else if (adLoaded) {
      onAdBlockNotDetected();
    } else if (whitelistAdLoaded) {
      console.log("PARTIAL blocking");
      onAdBlockDetected();
    }
  });
}

/**
 * Primary ad-block detection entry point.
 *
 * Dynamically loads the `abcheck` script (whose URL and SRI integrity hash
 * are expected to be available as global variables `fabjs` and `fabintegrity`).
 * On successful load it delegates to {@link fivefilterCheck}; on any failure
 * it falls back to {@link onAdBlockDetected}.
 *
 * @returns {void}
 */
function detectAdBlockWithABCheck() {
  const importFAB = document.createElement("script");

  importFAB.onload = () => {
    if (typeof abcheck === "undefined") {
      console.log("abcheck undefined");
      onAdBlockDetected();
    } else {
      if (abcheck === true) {
        fivefilterCheck();
      } else {
        console.log("abcheck value is not true");
        onAdBlockDetected();
      }
    }
  };

  importFAB.onerror = () => {
    console.log("import abcheck error");
    onAdBlockDetected();
  };

  importFAB.integrity = fabintegrity;
  importFAB.crossOrigin = "anonymous";
  importFAB.src = fabjs;

  document.head.appendChild(importFAB);
}

export { detectAdBlockWithABCheck };
