$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

// MCTS Bus App

$( ".route-button" ).click(function() {
	$(".routes").toggleClass("routes-expand");
	$(this).toggleClass("routes-button-raise");
	$(".bus-subheader").toggleClass("subheader-move");
});

$( '.bus-menu' ).click(function() {
	$(this).hide();
	$('.drawer').toggleClass('drawer-expand');
	$('.overlay').toggleClass('overlay-display');
	$('.drawer-menu').addClass('display-block');
	$('.drawer-container').show();
	$('.screen-container').hide();
});

$('.row-favorites').click(function() {
	$('.screen-favorites').fadeIn(300);
	$('.drawer').toggleClass('drawer-expand');
	$('.drawer-container').hide();
	$('.overlay').toggleClass('overlay-display');
	$('.bus-menu').show();
});

$('.row-routes').click(function() {
	$('.screen-routes').fadeIn(300);
	$('.drawer').toggleClass('drawer-expand');
	$('.drawer-container').hide();
	$('.overlay').toggleClass('overlay-display');
	$('.bus-menu').show();
});

$('.row-map').click(function() {
	$('.screen-map').fadeIn(300);
	$('.drawer').toggleClass('drawer-expand');
	$('.drawer-container').hide();
	$('.overlay').toggleClass('overlay-display');
	$('.bus-menu').show();
});

$('.row-qr-code').click(function() {
	$('.screen-map').fadeIn(300);
	$('.drawer').toggleClass('drawer-expand');
	$('.drawer-container').hide();
	$('.overlay').toggleClass('overlay-display');
	$('.bus-menu').show();
});

$( '.drawer-menu' ).click(function() {
	$('.drawer').toggleClass('drawer-expand');
	$('.overlay').toggleClass('overlay-display');
	$('.bus-menu').removeClass('display-none');
	$('.drawer-container').show();
	$('.screen-container').hide();
});



$('.mcts-home').click(function() {
	$('.mcts-home-screen').show();
	$('.mcts-favorites-screen').hide();
	$('.mcts-routes-screen').hide();
	$('.mcts-map-screen').hide();
	$('#addfavorite').hide();
	$('.home-changefill').attr('fill','#34b262');
	$('.home-p').css('color', '#34b262');
	$('.fav-p').css('color', '#868686');
	$('.routes-p').css('color', '#868686');
	$('.changefill').attr('fill','#868686');
	$('.routes-changefill').attr('fill','#868686');
	$('.map-changefill').attr('fill','#868686');
	$('.map-p').css('color', '#868686');
});

$('.mcts-favorites').click(function() {
	$('.mcts-favorites-screen').show();
	$('.mcts-home-screen').hide();
	$('.mcts-map-screen').hide();
	$('.mcts-routes-screen').hide();
	$('.changefill').attr('fill','#34b262');
	$('.home-changefill').attr('fill','#868686');
	$('.routes-changefill').attr('fill','#868686');
	$('.map-changefill').attr('fill','#868686');
	$('.fav-p').css('color', '#34b262');
	$('.home-p').css('color', '#868686');
	$('.routes-p').css('color', '#868686');
	$('.map-p').css('color', '#868686')
});

$('.mcts-routes').click(function() {
	$('.mcts-routes-screen').show();
	$('.mcts-home-screen').hide();
	$('.mcts-favorites-screen').hide();
	$('.mcts-map-screen').hide();
	$('.routes-changefill').attr('fill','#34b262');
	$('.home-changefill').attr('fill','#868686');
	$('.changefill').attr('fill','#868686');
	$('.map-changefill').attr('fill','#868686');
	$('.routes-p').css('color', '#34b262');
	$('.home-p').css('color', '#868686');
	$('.fav-p').css('color', '#868686');
	$('.map-p').css('color', '#868686');
});


$('.mcts-map').click(function() {
	$('.mcts-map-screen').show();
	$('.mcts-routes-screen').hide();
	$('.mcts-home-screen').hide();
	$('.mcts-favorites-screen').hide();
	$('.map-changefill').attr('fill','#34b262');
	$('.home-changefill').attr('fill','#868686');
	$('.changefill').attr('fill','#868686');
	$('.routes-changefill').attr('fill','#868686');
	$('.map-p').css('color', '#34b262');
	$('.home-p').css('color', '#868686');
	$('.fav-p').css('color', '#868686');
	$('.routes-p').css('color', '#868686');
});

$('.route-row').click(function() {
	$(this).next.toggle();
});


$('.check-out-work').click(function() {
	$('.anim').addClass('plz');
	$('.home').delay( 600 ).fadeOut( 300 );
	$('.work').show();
	$('.mac-container').addClass('fade-in');
	$('.iphone-container').addClass('fade-in-two');
	$('.animation-container').addClass('fade-in');
});

$('.work-link').click(function() {
	$('.anim').addClass('plz').delay( 600 ).fadeOut( 300 );
	$('.home').delay( 600 ).fadeOut( 300 );
	$('.mac-container').addClass('fade-in');
	$('.iphone-container').addClass('fade-in-two');
	$('.animation-container').addClass('fade-in');
	$('.mobile-container').show();
});

$(function() {

	if ($('main').hasClass('web-main')){
	$('.work__container').addClass('work-container-add');
	$('h3').addClass('header-hide');
	$('.web-container').show().addClass('web-container-transition');
	$('.mobile-container').hide();
	$('body').addClass('work-bg');
	$('header').addClass('work-header');
	$('.mac').addClass('mac-resize').addClass('current-border');
	$('.iphone').addClass('iphone-resize');
	$('.animate-container').addClass('animate-container-resize');
	$('.left-bar').addClass('left-bar-resize');
	$('.right-bar').addClass('right-bar-resize');
	$('.ball').addClass('ball-resize');
	$('body').addClass('scroll-vis');

	}
});

// adding active states to header links
if (document.body.classList.contains('work')) {
	var getHomeLink = document.querySelector('.active__home');
	var getWorkLink = document.querySelector('.header__link-work');
	getHomeLink.className = "";
	getWorkLink.classList.add("active__home");
}


if (document.body.classList.contains('web-work')) {
// web select view animations
	var getBluemix = document.querySelector(".project__bluemix");
	var getBlrt = document.querySelector(".project__blrt");
	var getNFL = document.querySelector(".project__nfl");

	getBluemix.addEventListener("click", bluemixFunc);

	function bluemixFunc() {
		getBluemix.className = "web__project-bluemix-select";
		getBlrt.className = "web-project__animate";
		getNFL.className = "web-project__animate";
	}
}

// bluemix expand
if (document.body.classList.contains('bluemix')) {
	var getBluemixmonitor = document.querySelector(".monitor__web-item");
	var getHeader = document.querySelector("header");
	var getWorkSelect = document.querySelector(".work__container");

	getBluemixmonitor.addEventListener("click", bluemixExpand);

	function bluemixExpand() {
		getHeader.classList.add("blur");
		getWorkSelect.classList.add("blur-extra");

		var makeOnboard = document.createElement("img");
		makeOnboard.src = "../img/bluemix-onboard.jpg";
		makeOnboard.className = "web__project-view";
		document.body.appendChild(makeOnboard);
		var getOnboard = document.querySelector(".web__project-view");

		// make previous arrow button for expanded view
		var makePreviousButton = document.createElement("button");
		makePreviousButton.className = "view__button";
		document.body.appendChild(makePreviousButton);

		// make next arrow button for expanded view
		var makeNextButton = document.createElement("button");
		makeNextButton.className = "button__next";
		document.body.appendChild(makeNextButton);

		// make close button for expanded view
		var makeClose = document.createElement("button");
		makeClose.className = "close__icon";
		document.body.appendChild(makeClose);

		var getClose = document.querySelector(".close__icon");
		var getPreviousButton = document.querySelector(".view__button");
		var getNextButton = document.querySelector(".button__next");

		// event for close button
		getClose.addEventListener("click", bluemixShrink);

			function bluemixShrink() {
				console.log("butt stuff");
				getClose.style.display = "none";
				getOnboard.classList.add("web__view-shrink");
				getPreviousButton.style.display = "none";
				getNextButton.style.display = "none";
				getHeader.className = ("");
				getWorkSelect.className = ("work__container work__container-animate");
			}
	}


}

// text swapping for homepage
// var wordSwap = [
// 	"developing", 
// 	"designing", 
// 	"rapid prototyping", 
// 	"creating"
// ], i = -1;

// (function f(){
// var getWord = document.getElementById('word__change');
//    i = (i + 1) % wordSwap.length;
//    getWord.innerHTML = (wordSwap[i]);
//    setTimeout(f, 2200);
// })();