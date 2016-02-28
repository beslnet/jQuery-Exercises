$(document).ready(function($) {
	 
$(window).load(function() {
	$(".character").toggle();
});	 

$(".name").hover(function(){
	var data_person = $(this).attr('data-person');
	$(""+data_person+"").toggle(500);
});	

});