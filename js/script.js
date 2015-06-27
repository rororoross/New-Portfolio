$( "#menu" ).click(function() {
	$(".nav-list").toggleClass("show-menu");
});

// MCTS Bus App
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
	$(".bus-subheader").toggleClass("subheader-move");
});

$(".mcts-home").click(function() {
	$(".mcts-home-screen").show();
	$(".mcts-favorites-screen").hide();
	$(".mcts-routes-screen").hide();
	$(".mcts-map-screen").hide();
	$("#addfavorite").hide();
	$(".home-changefill").attr("fill","#34b262");
	$(".home-p").css("color", "#34b262");
	$(".fav-p").css("color", "#868686");
	$(".routes-p").css("color", "#868686");
	$(".changefill").attr("fill","#868686");
	$(".routes-changefill").attr("fill","#868686");
	$(".map-changefill").attr("fill","#868686");
	$(".map-p").css("color", "#868686");
});

$(".mcts-favorites").click(function() {
	$(".mcts-favorites-screen").show();
	$(".mcts-home-screen").hide();
	$(".mcts-map-screen").hide();
	$(".mcts-routes-screen").hide();
	$(".changefill").attr("fill","#34b262");
	$(".home-changefill").attr("fill","#868686");
	$(".routes-changefill").attr("fill","#868686");
	$(".map-changefill").attr("fill","#868686");
	$(".fav-p").css("color", "#34b262");
	$(".home-p").css("color", "#868686");
	$(".routes-p").css("color", "#868686");
	$(".map-p").css("color", "#868686");
});

$(".mcts-routes").click(function() {
	$(".mcts-routes-screen").show();
	$(".mcts-home-screen").hide();
	$(".mcts-favorites-screen").hide();
	$(".mcts-map-screen").hide();
	$(".routes-changefill").attr("fill","#34b262");
	$(".home-changefill").attr("fill","#868686");
	$(".changefill").attr("fill","#868686");
	$(".map-changefill").attr("fill","#868686");
	$(".routes-p").css("color", "#34b262");
	$(".home-p").css("color", "#868686");
	$(".fav-p").css("color", "#868686");
	$(".map-p").css("color", "#868686");
});


$(".mcts-map").click(function() {
	$(".mcts-map-screen").show();
	$(".mcts-routes-screen").hide();
	$(".mcts-home-screen").hide();
	$(".mcts-favorites-screen").hide();
	$(".map-changefill").attr("fill","#34b262");
	$(".home-changefill").attr("fill","#868686");
	$(".changefill").attr("fill","#868686");
	$(".routes-changefill").attr("fill","#868686");
	$(".map-p").css("color", "#34b262");
	$(".home-p").css("color", "#868686");
	$(".fav-p").css("color", "#868686");
	$(".routes-p").css("color", "#868686");
});

$(".route-row").click(function() {
	$(this).next.toggle();
});


// My Work
$( ".check-out-work" ).click(function() {
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
	$("main").addClass("main-padder");
	$(".web-container").addClass("web-container-transition");
	$("body").addClass("work-bg");
	$("header").addClass("work-header");
	$(".mac").addClass("mac-resize").addClass("current-border");
	$(".iphone").addClass("iphone-resize");
	$(".animate-container").addClass("animate-container-resize");
	$(".left-bar").addClass("left-bar-resize");
	$(".right-bar").addClass("right-bar-resize");
	$(".ball").addClass("ball-resize");
});

$( ".iphone-container" ).click(function() {
	$(".work-container").addClass("work-container-add");
	$("h3").hide();
	$("main").addClass("main-padder");
	$(".iphone").addClass("iphone-resize").addClass("current-border");
	$(".mac").addClass("mac-resize");
	$(".mobile-container").addClass("web-container-transition");
	$("body").addClass("work-bg");
	$("header").addClass("work-header");
	$(".web-container").hide();
	$(".mobile-container").show();
	$(".animate-container").addClass("animate-resize");
});

$( ".design" ).click(function() {
	$( ".process-detail" ).text( "design Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, minus, numquam! Laboriosam earum, ratione illo culpa nam dolores corporis eos necessitatibus natus similique consectetur minus voluptatum alias. Eligendi, placeat, dolor." );
	$(".svg-design").addClass("icon-bubble").removeClass("icon-bubble-disappear");
	$(this).css("color", "#fde876");
	$(".idea").css("color", "white");
	$(".sketch").css("color", "white");
	$(".research").css("color", "white");
	if ( $( ".svg-container" ).hasClass( "selected" ) ) {
			$( ".selected" )
            .addClass("icon-bubble-disappear");
	}
	$(".svg-design").addClass("selected");
	$(".svg-bright").removeClass("selected");
	$(".svg-sketch").removeClass("selected");
	$(".svg-research").removeClass("selected");
});

// Process 
$( ".research" ).click(function() {
	$( ".process-detail" ).text( "research Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, minus, numquam! Laboriosam earum, ratione illo culpa nam dolores corporis eos necessitatibus natus similique consectetur minus voluptatum alias. Eligendi, placeat, dolor." );
	$(".svg-research").addClass("icon-bubble").removeClass("icon-bubble-disappear");
	$(this).css("color", "#fde876");
	$(".idea").css("color", "white");
	$(".sketch").css("color", "white");
	$(".design").css("color", "white");
	if ( $( ".svg-container" ).hasClass( "selected" ) ) {
			$( ".selected" )
            .addClass("icon-bubble-disappear");
	}
	$(".svg-research").addClass("selected");
	$(".svg-bright").removeClass("selected");
	$(".svg-sketch").removeClass("selected");
	$(".svg-design").removeClass("selected");
});

$( ".sketch" ).click(function() {
	$( ".process-detail" ).text( "sketch Llllorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, minus, numquam! Laboriosam earum, ratione illo culpa nam dolores corporis eos necessitatibus natus similique consectetur minus voluptatum alias. Eligendi, placeat, dolor." );
	$(".svg-sketch").addClass("icon-bubble").removeClass("icon-bubble-disappear");
	$(this).css("color", "#fde876");
	$(".idea").css("color", "white");
	$(".research").css("color", "white");
	$(".design").css("color", "white");
	if ( $( ".svg-container" ).hasClass( "selected" ) ) {
			$( ".selected" )
            .addClass("icon-bubble-disappear");
	}
	$(".svg-sketch").addClass("selected");
	$(".svg-bright").removeClass("selected");
	$(".svg-research").removeClass("selected");
	$(".svg-design").removeClass("selected");
});

$( ".design" ).click(function() {
	$( ".process-detail" ).text( "design Llllorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, minus, numquam! Laboriosam earum, ratione illo culpa nam dolores corporis eos necessitatibus natus similique consectetur minus voluptatum alias. Eligendi, placeat, dolor." );
	$(".svg-design").addClass("icon-bubble").removeClass("icon-bubble-disappear");
	$(this).css("color", "#fde876");
	$(".idea").css("color", "white");
	$(".research").css("color", "white");
	$(".sketch").css("color", "white");
	if ( $( ".svg-container" ).hasClass( "selected" ) ) {
			$( ".selected" )
            .addClass("icon-bubble-disappear");
	}
	$(".svg-design").addClass("selected");
	$(".svg-bright").removeClass("selected");
	$(".svg-research").removeClass("selected");
	$(".svg-sketch").removeClass("selected");
});

$( ".idea" ).click(function() {
	$( ".process-detail" ).text( "text txt" );
	$(this).css("color", "#fde876");
	$(".research").css("color", "white");
	$(".sketch").css("color", "white");
	$(".design").css("color", "white");
	$(".svg-bright").removeClass("icon-bubble-disappear").addClass("icon-bubble");
	if ( $( ".svg-container" ).hasClass( "selected" ) ) {
			$( ".selected" )
            .addClass("icon-bubble-disappear");
	}
	$(".svg-bright").addClass("selected");
	$(".svg-research").removeClass("selected");
	$(".svg-sketch").removeClass("selected");
	$(".svg-design").removeClass("selected");
});





$( ".idea" ).click(function() {
	$( ".process-detail" ).text( "idea Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere mollitia maiores, odio quis voluptate! Natus quibusdam officiis ea doloribus ipsam rerum odit, quidem facilis ullam sed sapiente. Minus, facere." );
});

$( ".develop" ).click(function() {
	$( ".process-detail" ).text( "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere mollitia maiores, odio quis voluptate! Natus quibusdam officiis ea doloribus ipsam rerum odit, quidem facilis ullam sed sapiente. Minus, facere." );
});

$( ".launch" ).click(function() {
	$( ".process-detail" ).text( "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere mollitia maiores, odio quis voluptate! Natus quibusdam officiis ea doloribus ipsam rerum odit, quidem facilis ullam sed sapiente. Minus, facere." );
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