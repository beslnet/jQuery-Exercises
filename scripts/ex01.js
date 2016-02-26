$(document).ready(function($) {

var fadeElem = $('.fadeitem');
		
fadeElem.css({
	backgroundImage: 'url(images/vancouver1.jpg)',
	backgroundSize: 'cover',
	width: '300px',
	height: '300px',
	borderRadius: '50%',
	backgroundPosition: 'center center'
});

fadeElem.fadeTo(100, 0.5);

fadeElem.on({
	mouseenter: function() {
		$(this).fadeTo(300,1);
	},
	mouseleave: function() {
		$(this).fadeTo(300, 0.4);
	}
});



});