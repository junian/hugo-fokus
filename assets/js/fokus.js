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

function detectAdBlockWithFAdblock() {
    function adBlockDetected() {
        console.log("adblock detected");
        onAdBlockDetected();
    }

    function adBlockNotDetected() {
        console.log("adblock not detected");
    }
    
    if(typeof blockAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        blockAdBlock.setOption({ debug: false });
        blockAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
    }
}

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

function detectAdblockWithGA() {
    if (typeof ga === 'undefined') {
        console.log("ga undefined");
        var ga = [0];
    }

    null == document.getElementsByTagName("iframe").item(ga.length - 1) && onAdBlockDetected();
}

$(window).load(function () {
    runCookieConsent();
    detectAdblockWithGA();
});
