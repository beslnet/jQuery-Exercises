$(document).ready(function() {
	$(window).load(function() {
		$("td:nth-child(2)").children().hide();
	});

	$("td:nth-child(2)").mouseenter(function() {
		$(this).children().show();
	}).mouseleave(function() {
		$(this).children().hide();
	});
});