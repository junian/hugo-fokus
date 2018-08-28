
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

    


    ready(function() {
        console.log( "ready!" );
        runCookieConsent();
        // detectAdBlockWithABCheck();
        disqusOnDemandButton();
        runClipboardjs();
    });
    
})();
