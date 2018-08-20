/*!
 * Fokus Hugo Theme v1.7.3 (https://github.com/junian/fokus)
 * Copyright 2018 Junian Triajianto
 * Licensed under MIT (https://github.com/junian/fokus/blob/master/LICENSE)
 */

(function() {

    function addEventListener(el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent("on" + eventName, handler);
        } else {
            el["on" + eventName] = handler;
        }
    }

    function text(el) {
        return el.textContent || el.innerText;
    }

    function before(el,htmlString) {
        el.insertAdjacentHTML('beforebegin', htmlString);
    }

    function addClass(el,className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    }

    function removeClass(el,className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    function remove(el) {
        if(!el)
            return;
        
        if(!el.parentNode)
            return;
        
        el.parentNode.removeChild(el);
    }

    function fadeOut(el) {
        var opacity = 1;

        el.style.opacity = 1;
        el.style.filter = '';

        var last = +new Date();
        var tick = function() {
            opacity -= (new Date() - last) / 400;
            el.style.opacity = opacity;
            el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

            last = +new Date();

            if (opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else if(opacity <= 0) {
                remove(el);
            }
        };

        tick();
    }

    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
            });
        }
    }

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
        var bmcNoScript = document.querySelector('noscript#buymeacoffee');
        if(bmcNoScript)        
            before(bmcNoScript, text(bmcNoScript));
        
        var elBab = document.querySelector('#blockadblock');
        if(elBab)
            removeClass(elBab, 'hidden');

        remove(document.querySelector('#image-tests'));
    }

    function onAdBlockNotDetected() {
        console.log("adblock NOT detected");

        remove(document.querySelector('#image-tests'));
    }

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

        var elTestAd = document.querySelector("img#test-ad");
        var elTestWhitelist = document.querySelector("img#test-whitelist");

        if(elTestAd)
            elTestAd.setAttribute('src', 'https://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png?advertiser=1&' + escape(new Date()));
        
        if(elTestWhitelist)
            elTestWhitelist.setAttribute('src', 'https://gstatic.com/webp/gallery3/1.png?ads=1&' + escape(new Date()));

        var elImgTest = document.querySelector('#image-tests');
        if(!elImgTest)
            return;
        
        imagesLoaded(elImgTest, function() {
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

    function runClipboardjs() {
        if (!ClipboardJS.isSupported()) {
            console.log("Clipboard js not supported");
            var blocks = document.querySelectorAll("figure.highlight > .btn-clipboard");
            Array.prototype.forEach.call(blocks, function (block, index) {
                remove(block);
            });
            return;
        }
    
        var clipboard = new ClipboardJS('.btn-clipboard', {
            target: function(trigger) {
                return trigger.nextElementSibling;
            }
        });
    
        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            // console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
    
            e.clearSelection();
    
            var message = e.trigger.querySelector(".msg-clipboard");
    
            if (!message) return;
    
            if (message.getAttribute('data-cbtimer')) clearTimeout(parseInt(message.getAttribute('data-cbtimer'), 10));
    
            /* Set message indicating success and show it */
            addClass(message, "msg-clipboard--active");
            message.innerHTML = "Copied to clipboard";
    
            /* Hide message after two seconds */
            message.setAttribute('data-cbtimer', setTimeout(function () {
                removeClass(message, ("msg-clipboard--active"));
                message.setAttribute('data-cbtimer', "");
            }, 2000).toString());
        });
    
        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
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
