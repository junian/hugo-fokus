import {before} from "./vanilla/before";
import {text} from "./vanilla/text";
import {removeClass} from "./vanilla/remove-class";
import {remove} from "./vanilla/remove";
import {imagesLoaded} from "imagesloaded";

function onAdBlockDetected() {
  console.log("adblock detected");
  var bmcNoScript = document.querySelector("noscript#buymeacoffee");
  if (bmcNoScript)
    before(bmcNoScript, text(bmcNoScript));

  var elBab = document.querySelector("#blockadblock");
  if (elBab)
    removeClass(elBab, "hidden");

  remove(document.querySelector("#image-tests"));
}

function onAdBlockNotDetected() {
  console.log("adblock NOT detected");

  remove(document.querySelector("#image-tests"));
}

// function to check if image has loaded, taken from http://stackoverflow.com/a/1977898
function isImageOk(img) {
  // Image was removed from the page code (issue #1)
  if (typeof img === "undefined") {
    return false;
  }
  // During the onload event, IE correctly identifies any images that
  // weren’t downloaded as not complete. Others should too. Gecko-based
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
  // No other way of checking: assume it’s ok.
  return true;
}

function fivefilterCheck() {
  var isMobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  // var isPiHole = (window.location.search.substring(1) == 'pihole');
  var isPiHole = true;

  var elTestAd = document.querySelector("img#test-ad");
  var elTestWhitelist = document.querySelector("img#test-whitelist");

  if (elTestAd)
    elTestAd.setAttribute("src", "https://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png?advertiser=1&" + escape(new Date()));

  if (elTestWhitelist)
    elTestWhitelist.setAttribute("src", "https://gstatic.com/webp/gallery3/1.png?ads=1&" + escape(new Date()));

  var elImgTest = document.querySelector("#image-tests");
  if (!elImgTest)
    return;

  imagesLoaded(elImgTest, () => {
    var adLoaded = isImageOk(elTestAd);
    var whitelistAdLoaded = isImageOk(elTestWhitelist);

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

function detectAdBlockWithABCheck() {
  var importFAB = document.createElement("script");

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

export {detectAdBlockWithABCheck};
