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

$('.mac-container').on('click touchend', function(e) {
	$('main').addClass('main-padder');
	$('.work-container').addClass('work-container-add');
	$('h3').hide();
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
});

$("#butts").click(function(){
	$(".animate").toggleClass("some-animation");
});