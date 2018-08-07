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
    $('noscript#buymeacoffee').before($('noscript#buymeacoffee').text());
    $('#blockadblock').removeClass('hidden');
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

function detectAdBlockWithABCheck() {

    function adBlockNotDetected() {
        console.log("adblock not detected");
    }

    function adBlockDetected() {
        console.log("adblock detected");
        onAdBlockDetected();
    }

    var importFAB = document.createElement('script');

    importFAB.onload = function() {
        if(typeof abcheck === 'undefined') {
            console.log("abcheck undefined");
            adBlockDetected();
        }
        else {
            if(abcheck === true) {
                adBlockNotDetected();
            } else {
                adBlockDetected();
            }
        }
    };
    
    importFAB.onerror = function() {
        console.log("import abcheck error");
        adBlockDetected(); 
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
});
