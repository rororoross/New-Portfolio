$( "#menu" ).click(function() {
	$(".nav-list").toggleClass("show-menu");
});

$( ".bus-menu" ).click(function() {
	$(".drawer").toggleClass("drawer-expand");
	$(".bus-menu").toggleClass("bus-expand");
	$(".overlay").toggleClass("overlay-display");

});