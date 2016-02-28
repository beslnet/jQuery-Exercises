$(document).ready(function($) {
	 
$(window).load(function() {
	$(".panel").toggle();
});	 

/* Toggle al hacer click */
$(".btn_id").click(function(){
	btn_id = $(this).attr("id");
	if(btn_id === "p1"){
		$(".one").toggle(500);
		$(".two").hide(500);
		$(".three").hide(500);
		$(".four").hide(500);
	}
	else if(btn_id === "p2"){
		$(".one").hide(500);
		$(".two").toggle(500);
		$(".three").hide(500);
		$(".four").hide(500);
	}		
	else if(btn_id === "p3"){
		$(".one").hide(500);
		$(".two").hide(500);
		$(".three").toggle(500);
		$(".four").hide(500);
	}		
	else if(btn_id === "p4"){
		$(".one").hide(500);
		$(".two").hide(500);
		$(".three").hide(500);
		$(".four").toggle(500);
	}		
});	




});