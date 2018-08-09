if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
    }
}(jQuery);

function runCookieConsent() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#edeff5",
                "text": "#838391"
            },
            "button": {
                "background": "#4b81e8"
            }
        },
        "content": {
            "href": "https://www.junian.net/privacy-policy#cookies-and-web-beacons"
        }
    });
}

function onAdBlockDetected() {
    console.log("adblock detected");
    $('noscript#buymeacoffee').before($('noscript#buymeacoffee').text());
    $('#blockadblock').removeClass('hidden');
    $('#image-tests').remove();
}

function onAdBlockNotDetected() {
    console.log("adblock NOT detected");
    $('#image-tests').remove();
}

/*
function detectAdBlockWithBlockAdblock() {
    // Function called if AdBlock is not detected
    function adBlockNotDetected() {
        console.log("adblock not detected");
    }

    // Function called if AdBlock is detected
    function adBlockDetected() {
        console.log("adblock detected");
        onAdBlockDetected();
    }

    // Otherwise, you import the script BlockAdBlock
    var importFAB = document.createElement('script');

    importFAB.onload = function() {
        // If all goes well, we configure BlockAdBlock
        if(typeof blockAdBlock === 'undefined' || typeof BlockAdBlock === 'undefined') {
            // If this is the case, it means that something tries to usurp are identity
            // So, considering that it is a detection
            console.log("FAB undefined");
            adBlockDetected();
        }
        else {
            blockAdBlock.onDetected(adBlockDetected);
            blockAdBlock.onNotDetected(adBlockNotDetected);
        }
    };
    
    importFAB.onerror = function() {
        // If the script does not load (blocked, integrity error, ...)
        // Then a detection is triggered
        console.log("importFAB error");
        adBlockDetected(); 
    };

    importFAB.integrity = fabintegrity;
    importFAB.crossOrigin = 'anonymous';
    importFAB.src = fabjs;
    
    document.head.appendChild(importFAB);
}
*/

// function to check if image has loaded, taken from http://stackoverflow.com/a/1977898
function isImageOk(img) {
    // Image was removed from the page code (issue #1)
    if (typeof img === 'undefined') {
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

    $("img#test-ad").attr('src', 'https://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png?advertiser=1&' + escape(new Date()));
    $("img#test-whitelist").attr('src', 'https://gstatic.com/webp/gallery3/1.png?ads=1&' + escape(new Date()));

    $('#image-tests').imagesLoaded(function() {
        var adLoaded = isImageOk($("img#test-ad")[0]);
        var whitelistAdLoaded = isImageOk($("img#test-whitelist")[0]);
        
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
    var importFAB = document.createElement('script');

    importFAB.onload = function() {
        if(typeof abcheck === 'undefined') {
            console.log("abcheck undefined");
            onAdBlockDetected();
        }
        else {
            if(abcheck === true) {
                fivefilterCheck();
            } else {
                console.log("abcheck value is not true");
                onAdBlockDetected();
            }
        }
    };
    
    importFAB.onerror = function() {
        console.log("import abcheck error");
        onAdBlockDetected(); 
    };

    importFAB.integrity = fabintegrity;
    importFAB.crossOrigin = 'anonymous';
    importFAB.src = fabjs;
    
    document.head.appendChild(importFAB);
}

/*
function detectAdblockByDiv() {
    var adBlockEnabled = false;
    var testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(function() {
        if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
        }
        testAd.remove();
        console.log('AdBlock Enabled? ', adBlockEnabled);
        if(adBlockEnabled === true) {
            onAdBlockDetected();
        }
    }, 100);
}
*/

/*
function detectAdblockWithGA() {
    if (typeof ga === 'undefined') {
        console.log("ga undefined");
        var ga = [0];
    }

    null == document.getElementsByTagName("iframe").item(ga.length - 1) && onAdBlockDetected();
}
*/

$( document ).ready(function() {
    console.log( "ready!" );
    runCookieConsent();
    // detectAdBlockWithBlockAdblock();
    detectAdBlockWithABCheck();
    if(loadDisqusOnDemand !== 'undefined')
        loadDisqusOnDemand();
});
