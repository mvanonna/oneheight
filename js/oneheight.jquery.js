(function($){ 

	$.fn.oneheight = function(){

       
		this.each(function(){
		
        var children = $('.one-height').children('.one-height-element');

        var heights = $(children).map(function() {

            return $(this).height();

        }).get();

        var maxheight =  Math.max.apply( Math, heights );
        
        for(i = 0; i < children.length; i++){
            $(children[i]).css( "height", maxheight );
           
        }

		});

		return this;
	};
})(jQuery);


