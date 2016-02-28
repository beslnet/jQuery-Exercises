$(document).ready(function($) {
	


$( ".fadeitem" ).click(function() {
	var fadeitems = $(this).attr("id");
	if(fadeitems === "item1"){
  		$( "#item1" ).fadeOut(1500);
	}
	else if(fadeitems === "item2"){
  		$( "#item2" ).fadeOut(1500);
	}
	else if(fadeitems === "item3"){
  		$( "#item3" ).fadeOut(1500);
	}
	else if(fadeitems === "item4"){
  		$( "#item4" ).fadeOut(1500);
	}
});


});