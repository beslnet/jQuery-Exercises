$(document).ready(function($) {
	 
$(window).load(function() {
	$(".box").toggle();
});	 

/* Toggle al hacer click */
$(".btn_id").click(function(){
	btn_id = $(this).attr("id");
	if(btn_id === "b1"){
		$(".one").slideToggle(500);
	}
	else if(btn_id === "b2"){
		$(".two").slideToggle(500);
	}		
	else if(btn_id === "b3"){
		$(".three").slideToggle(500);
	}		
	else if(btn_id === "b4"){
		$(".four").slideToggle(500);
	}		
});	




});