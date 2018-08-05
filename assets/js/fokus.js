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


$(function() {

    function adBlockDetected() {
        console.log("adblock detected");
        $('noscript').before($('noscript').text());
        $('#blockadblock').removeClass('hidden');
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
    
    function checkAgain() {
        $('#block-adb-enabled').hide();
        $('#block-adb-not-enabled').hide();
        // setTimeout 300ms for the recheck is visible when you click on the button
        setTimeout(function() {
            if(typeof blockAdBlock === 'undefined') {
                adBlockDetected();
            } else {
                blockAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
                blockAdBlock.check();
            }
        }, 300);
    }

 });
