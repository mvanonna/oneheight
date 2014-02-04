(function($){ 

	$.fn.oneheight = function(options){

        //default settings
        var defaults = {
            children: "*" //
        };

        //merge the settings
        var settings = $.extend({}, defaults, options);

		this.each(function(){
            var container   = jQuery(this),
                children    = container.children(settings.children);

            //create array of all heights
            var heights = $(children).map(function() {
                return $(this).outerHeight(true);
            }).get();

            //calculate maximum height
            var maxheight       = Math.max.apply(Math, heights),
                largestChildNum = heights.indexOf(maxheight)
                largestChild    = $(children[largestChildNum]);

            //check for borders (top, bottom)
            var borderTop       = parseInt(largestChild.css("border-top-width")),
                borderBottom    = parseInt(largestChild.css("border-bottom-width")),
                totalBorder     = parseInt(borderTop + borderBottom);
            if (totalBorder > 0) {
                maxheight = maxheight - totalBorder;
            }

            //apply maximum height to all children elements
            for(i = 0; i < children.length; i++){
                if (i != largestChildNum) {
                    $(children[i]).css("height", maxheight);
                }
            }
		});

		return this;
	};
})(jQuery);
