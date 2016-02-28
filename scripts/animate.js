$(document).ready(function($) {
	
$(document).keydown(function(e) {
	
  if(e.keyCode === 37){
	positionLeft = $("#rocket").position();
	positionLeft = parseInt(positionLeft.left) - (parseInt(positionLeft.left) * 0,10);
  	$("#rocket").offset({
				left: positionLeft
			})
  }
  else if(e.keyCode === 38){
	positionTop = $("#rocket").position();
	positionTop = parseInt(positionTop.top) - (parseInt(positionTop.top) * 0,10);
  	$("#rocket").offset({
				top: positionTop
			})

  }
  else if(e.keyCode === 39){
  	positionRigth = $("#rocket").position();
	positionRigth = parseInt(positionRigth.left) + (parseInt(positionRigth.left) * 0,10);
  	$("#rocket").offset({
				left: positionRigth
			})
  }
  else if(e.keyCode === 40){
  	positionDown = $("#rocket").position();
	positionDown = parseInt(positionDown.top) + (parseInt(positionDown.top) * 0,10);
  	$("#rocket").offset({
				top: positionDown
			})
  }
});

});