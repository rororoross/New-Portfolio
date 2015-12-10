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
	$('.work-container').addClass('work-container-add');
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

$("#butts").click(function(){
	$(".animate").toggleClass("some-animation");
});