$( "#menu" ).click(function() {
	$(".nav-list").toggleClass("show-menu");
});

$( ".bus-menu" ).click(function() {
	$(this).hide();
	$(".drawer").toggleClass("drawer-expand");
	$(".overlay").toggleClass("overlay-display");
	$(".drawer-menu").addClass("display-block");
	$(".drawer-container").show();
	$(".screen-container").hide();
});

$(".row-favorites").click(function() {
	$(".screen-favorites").fadeIn(300);
	$(".drawer").toggleClass("drawer-expand");
	$(".drawer-container").hide();
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").show();
});

$(".row-routes").click(function() {
	$(".screen-routes").fadeIn(300);
	$(".drawer").toggleClass("drawer-expand");
	$(".drawer-container").hide();
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").show();
});

$(".row-map").click(function() {
	$(".screen-map").fadeIn(300);
	$(".drawer").toggleClass("drawer-expand");
	$(".drawer-container").hide();
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").show();
});

$(".row-qr-code").click(function() {
	$(".screen-map").fadeIn(300);
	$(".drawer").toggleClass("drawer-expand");
	$(".drawer-container").hide();
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").show();
});

$( ".drawer-menu" ).click(function() {
	$(".drawer").toggleClass("drawer-expand");
	$(".overlay").toggleClass("overlay-display");
	$(".bus-menu").removeClass("display-none");
	$(".drawer-container").show();
	$(".screen-container").hide();
});

$( ".route-button-link" ).click(function() {
	$(".routes").toggleClass("routes-expand");
	$(".route-button").toggleClass("routes-button-raise");
});

$( "button" ).click(function() {
	$(".anim").addClass("plz").delay( 600 ).fadeOut( 300 );
	$(".home").delay( 600 ).fadeOut( 300 );
	$(".mac-container").addClass("fade-in");
	$(".iphone-container").addClass("fade-in-two");
	$(".animation-container").addClass("fade-in");
});

$( ".work-link" ).click(function() {
	$(".anim").addClass("plz").delay( 600 ).fadeOut( 300 );
	$(".home").delay( 600 ).fadeOut( 300 );
	$(".mac-container").addClass("fade-in");
	$(".iphone-container").addClass("fade-in-two");
	$(".animation-container").addClass("fade-in");
	$(".mobile-container").show();
});

$( ".mac-container" ).click(function() {
	$(".work-container").addClass("work-container-add");
	$("h3").hide();
	$("main").css("padding-top", "5vh");
	$(".mac").addClass("current-border");
	$(".web-container").addClass("web-container-transition");
	$("body").addClass("work-bg");
	$("header").addClass("work-header");
	$(".iphone-container").addClass("iphone-min-slide")
});

$( ".iphone-container" ).click(function() {
	$(".work-container").addClass("work-container-add");
	$("h3").hide();
	$("main").css("padding-top", "5vh");
	$(".iphone").addClass("current-border");
	$(".mobile-container").addClass("web-container-transition");
	$("body").addClass("work-bg");
	$("header").addClass("work-header");
	$(".web-container").hide();
	$(".mobile-container").show();
});




// $( ".mac-container" ).click(function() {
// 	$(".mac-container").addClass("work-action-container-fix");
// 	$(".iphone-container").addClass("work-action-container-fix");
// 	$(".animation-container").addClass("work-action-container-fix");
// 	$(".work-container").addClass("work-container-add");
// 	$(".mac").addClass("work-action-mac");
// 	$(".mac-link").addClass("work-action-mac");
// 	$(this).css("width: auto")
// 	$(".iphone").addClass("work-action");
// 	$(".animation").addClass("work-action");
// 	$("h3").hide();
// });