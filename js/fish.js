// Javascript file

jQuery(document).ready(function($){
		$('body').prepend('<div id="fullscreen"><div class="salmon"><div id="salmonbody"><div id="salmontail"></div></div></div><div id="mountain"></div></div>');
		$('.salmon').before('<div class="egg"></div>');
		var $egg = $('.egg');

		$egg.hide();
		// $egg.delay(1000).show();
		// need to put the class addition on a timer, this has to be put inside of a function for delay to work
		$egg.delay(1000).show(function(){
   			$(this).fadeIn().delay(3000).addClass('splat');
		});
	
});