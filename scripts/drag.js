$(document).ready(function($) {
	
	$(".dragger").mousedown(function() {
		
		$(window).mousemove(function(e) {	

			$(".dragger").offset({
				left: e.pageX,
				top: e.pageY

			})
		});

  });

  $(".dragger").mouseup(function(e) {
  	$(window).unbind('mousemove');
  });

});