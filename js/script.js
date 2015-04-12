$( "#menu" ).click(function() {
	$(".nav-list").toggleClass("show-menu");
});

$( ".bus-menu" ).click(function() {
	$(this).addClass("display-none");
	$(".drawer").toggleClass("drawer-expand");
	$(".overlay").toggleClass("overlay-display");
	$(".drawer-menu").addClass("display-block");
	$(".drawer-container").addClass("visible-element");
});

$( ".drawer-menu" ).click(function() {
	$(".drawer").toggleClass("drawer-expand");
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").removeClass("display-none");
	$(".drawer-container").removeClass("visible-element");
});

$( ".route-button-link" ).click(function() {
	$(".routes").toggleClass("routes-expand");
	$(".route-button").toggleClass("routes-button-raise");
});