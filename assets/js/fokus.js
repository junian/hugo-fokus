
(function() {

    

    function runCookieConsent() {
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#edeff5",
                    "text": "#4F4F4F"
                },
                "button": {
                    "background": "#004e92"
                }
            },
            "content": {
                "href": "https://www.junian.net/privacy-policy#cookies-and-web-beacons"
            }
        });
    }

    

    function disqusOnDemandButton() {
        var elBtnLoadDisqus = document.querySelector('#btn_load_disqus_thread');
        if(!elBtnLoadDisqus)
            return;
        
        addEventListener(elBtnLoadDisqus, 'click', function() {
            // ajax request to load the disqus javascript
            if(loadDisqusOnDemand !== 'undefined')
                loadDisqusOnDemand();
            // hide the button once comments load
            fadeOut(elBtnLoadDisqus);
        });
    }

    ready(function() {
        console.log( "ready!" );
        runCookieConsent();
        // detectAdBlockWithABCheck();
        disqusOnDemandButton();
        runClipboardjs();
    });
    
})();
