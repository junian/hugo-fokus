function loadDisqusOnDemand() {
    // Requires jQuery of course.
    // Replace this value with *your* username.
    // This is defined at fokus.js
    // var disqus_shortname = '{{ .Site.disqusShortname }}'; 

    var dsqCount = document.createElement('script');
    
    dsqCount.src = "https://" + disqus_shortname + ".disqus.com/count.js";
    dsqCount.id = "dsq-count-scr";
    dsqCount.async = true;

    document.body.appendChild(dsqCount);

    $('#btn_load_disqus_thread').on('click', function() {
        // ajax request to load the disqus javascript
        $.ajax({
            type: "GET",
            url: "https://" + disqus_shortname + ".disqus.com/embed.js",
            dataType: "script",
            cache: true
        });
        // hide the button once comments load
        $(this).fadeOut();
    });
}
