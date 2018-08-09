function loadDisqusOnDemand() {
    // Requires jQuery of course.
    // Replace this value with *your* username.
    // This is defined at fokus.js
    // var disqus_shortname = '{{ .Site.disqusShortname }}'; 
    
    var disqus_config = function () {
        this.page.url = pageUrl;
    };

    $('#btn_load_disqus_thread').on('click', function() {
        // ajax request to load the disqus javascript
        (function() {
            var disqus = document.createElement('script'); 
            disqus.type = 'text/javascript'; 
            disqus.async = true;
            disqus.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus);
        })();

        // hide the button once comments load
        $(this).fadeOut();
    });

    (function() {
        var dsqCount = document.createElement('script');
        dsqCount.type = 'text/javascript'; 
        dsqCount.async = true;
        dsqCount.src = "//" + disqus_shortname + ".disqus.com/count.js";
        dsqCount.id = "dsq-count-scr";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsqCount);
    })();
}
