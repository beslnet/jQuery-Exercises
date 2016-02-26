$(document).ready(function($) {
	 
$(window).load(function() {
	$("#rama").toggle();
	$("#sita").toggle();
	$("#hanuman").toggle();
	$("#lakshmana").toggle();
	$("#ravana").toggle();

});	 

$(".name").hover(function(){
	var data_person = $(this).attr('data-person');
	$(""+data_person+"").toggle();
});	

});