(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
	if ($(".post-title").hasClass("linkedlist")) {
            var text = $(".post-title").html();
            var re = /\[([^\[]+)\]\(([^\)]+)\)/;
            var tx = text.replace(re,"<a href='$2' target='_blank'>$1</a>");
            $(".post-title").html(tx);
        }

		$('.post-date').each(function(i, date) {
			var $date = $(date);
			$date.html(
				moment($date.attr('datetime'))
					.format('dddd, MMMM DD, YYYY')
			);
		});
        $.bigfoot({
	    actionOriginalFN : "ignore"
	});
    });

}(jQuery));
