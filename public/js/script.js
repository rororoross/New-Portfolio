// Home Page
if (document.body.classList.contains('home')) {

  var wordSwap = [
    "developing",
    "designing",
    "prototyping",
    "creating"
  ], i = -1;

  (function f(){

  var getWord = document.getElementById('word__change');
     i = (i + 1) % wordSwap.length;
     getWord.innerHTML = (wordSwap[i]);
     setTimeout(f, 1600);
  })();

  // Circle Animation
  var getCircle = document.querySelector(".anim");
  var getButton = document.querySelector(".check-out-work");
  getButton.onclick = circleAnimation;
  function circleAnimation() {
    getCircle.classList.add("circle-expand");
  }
}

  // Nav Links
  // var getAbout = document.querySelector(".link-about");
  // var getHomeContainer = document.querySelector(".home__container");
  // getAbout.onclick = aboutAnimation;
  // function aboutAnimation() {
  //   getHomeContainer.classList.add("hometoabout");
  // }

// Work Page
if (document.body.classList.contains('work')) {
  var getWorkPieces = document.querySelectorAll(".work__piece");
  var i;
	for (i = 0; i < getWorkPieces.length; i++) {
		getWorkPieces[i].addEventListener("click", workPieceAnimation);
	}

		function workPieceAnimation() {
      var workContainer = document.querySelector(".work__container");
      workContainer.classList.add("work__container-transformer");
      var workContainerSpans = document.querySelectorAll("work__piece-span");
      var i;
    	for (i = 0; i < workContainerSpans.length; i++) {
        workContainerSpans[i].classList.add("coolcool");
      }
}

}

// Mobile - Prototype

  // Main CTA button
  var routeButton = document.querySelector(".route-button");
  var routes = document.querySelector(".routes");
  var busSubheader = document.querySelector(".bus-subheader");

  routeButton.addEventListener("click", function()
    {
      routes.classList.toggle("routes-expand");
      this.classList.toggle("routes-button-raise");
      busSubheader.classList.toggle("subheader-move");
    }, false);

  // Home Tab
  var home = document.querySelector(".mcts-home");
  var homeScreen = document.querySelector(".mcts-home-screen");
  var favorites = document.querySelector(".mcts-favorites");
  var favoritesScreen = document.querySelector(".mcts-favorites-screen");
  var routesTab = document.querySelector(".mcts-routes");
  var routesScreen = document.querySelector(".mcts-routes-screen");
  var mapsTab = document.querySelector(".mcts-map");
  var mapsScreen = document.querySelector(".mcts-map-screen");

  var homeFill = document.querySelector(".home-changefill");
  var routeFill = document.querySelector(".changefill");

  home.addEventListener('click', function(){
    homeScreen.style.display = "block";
    favoritesScreen.style.display = "none";
    routesScreen.style.display = "none";
    homeFill.style.fill = "#34b262";
    console.log("homes");

  }, false);

  favorites.addEventListener('click', function(){
    favoritesScreen.style.display = "block";
    homeScreen.style.display = "none";
    routesScreen.style.display = "none";
    mapsScreen.style.display = "none";
    routeFill.style.fill = "#34b262";
    console.log("favs");
  }, false);

  routesTab.addEventListener('click', function(){
    routesScreen.style.display = "block";
    homeScreen.style.display = "none";
    favoritesScreen.style.display = "none";
    mapsScreen.style.dispaly = "none";
    console.log("routes");
  }, false);

  mapsTab.addEventListener('click', function(){
    mapsScreen.style.display = "block";
    homeScreen.style.display = "none";
    favoritesScreen.style.display = "none";
    routesScreen.style.display = "none";
    console.log("maps");
  }, false);

// $('.mcts-home').click(function() {
// 	$('.mcts-home-screen').show();
// 	$('.mcts-favorites-screen').hide();
// 	$('.mcts-routes-screen').hide();
// 	$('.mcts-map-screen').hide();
// 	$('#addfavorite').hide();
// 	$('.home-changefill').attr('fill','#34b262');
// 	$('.home-p').css('color', '#34b262');
// 	$('.fav-p').css('color', '#868686');
// 	$('.routes-p').css('color', '#868686');
// 	$('.changefill').attr('fill','#868686');
// 	$('.routes-changefill').attr('fill','#868686');
// 	$('.map-changefill').attr('fill','#868686');
// 	$('.map-p').css('color', '#868686');
// });

// $('.mcts-favorites').click(function() {
// 	$('.mcts-favorites-screen').show();
// 	$('.mcts-home-screen').hide();
// 	$('.mcts-map-screen').hide();
// 	$('.mcts-routes-screen').hide();
// 	$('.changefill').attr('fill','#34b262');
// 	$('.home-changefill').attr('fill','#868686');
// 	$('.routes-changefill').attr('fill','#868686');
// 	$('.map-changefill').attr('fill','#868686');
// 	$('.fav-p').css('color', '#34b262');
// 	$('.home-p').css('color', '#868686');
// 	$('.routes-p').css('color', '#868686');
// 	$('.map-p').css('color', '#868686')
// });
//
// $('.mcts-routes').click(function() {
// 	$('.mcts-routes-screen').show();
// 	$('.mcts-home-screen').hide();
// 	$('.mcts-favorites-screen').hide();
// 	$('.mcts-map-screen').hide();
// 	$('.routes-changefill').attr('fill','#34b262');
// 	$('.home-changefill').attr('fill','#868686');
// 	$('.changefill').attr('fill','#868686');
// 	$('.map-changefill').attr('fill','#868686');
// 	$('.routes-p').css('color', '#34b262');
// 	$('.home-p').css('color', '#868686');
// 	$('.fav-p').css('color', '#868686');
// 	$('.map-p').css('color', '#868686');
// });


// $('.mcts-map').click(function() {
// 	$('.mcts-map-screen').show();
// 	$('.mcts-routes-screen').hide();
// 	$('.mcts-home-screen').hide();
// 	$('.mcts-favorites-screen').hide();
// 	$('.map-changefill').attr('fill','#34b262');
// 	$('.home-changefill').attr('fill','#868686');
// 	$('.changefill').attr('fill','#868686');
// 	$('.routes-changefill').attr('fill','#868686');
// 	$('.map-p').css('color', '#34b262');
// 	$('.home-p').css('color', '#868686');
// 	$('.fav-p').css('color', '#868686');
// 	$('.routes-p').css('color', '#868686');
// });

// $(function() {
//
// 	if ($('main').hasClass('web-main')){
// 	$('.work__container').addClass('work-container-add');
// 	$('h3').addClass('header-hide');
// 	$('.web-container').show().addClass('web-container-transition');
// 	$('.mobile-container').hide();
// 	$('body').addClass('work-bg');
// 	$('header').addClass('work-header');
// 	$('.mac').addClass('mac-resize').addClass('current-border');
// 	$('.iphone').addClass('iphone-resize');
// 	$('.animate-container').addClass('animate-container-resize');
// 	$('.left-bar').addClass('left-bar-resize');
// 	$('.right-bar').addClass('right-bar-resize');
// 	$('.ball').addClass('ball-resize');
// 	$('body').addClass('scroll-vis');
// 	}
// });

// See Routes Direction
var getRouteList = document.querySelectorAll(".route-list-name"), i;
for (i = 0; i < getRouteList.length; ++i) {
  // getRouteList[i].style.backgroundColor = "green";
}
// getRouteList.addEventListener("click", routeDetails);
// function routeDetails() {
//   console.log("ayy lmao");
// }
	// var getWorkContainers = document.querySelectorAll(".work_piece");
	// var i;
	// for (i = 0; i < getWorkContainers.length; i++) {
	// 	getWorkContainers[i].addEventListener("click", addAnimation);
	// }
  //
	// 	function addAnimation() {
	// 		var getWork = document.querySelector(".work__container");
	// 		getWork.classList.add("work__container-animate");
	// 		var getHeadings = document.getElementsByTagName("h3");
	// 		var x;
	// 		for (x = 0; x < getHeadings.length; x++) {
	// 			getHeadings[x].style.display = "none";
	// 		}
	// 	}



if (document.body.classList.contains('web-work')) {
  var getProjects = document.querySelectorAll(".project");
  var i;
  for (i = 0; i < getProjects.length; i++) {
    getProjects[i].addEventListener("click", addFade);
  }

    function addFade() {
      var getMonitorContainer = document.querySelector(".monitor__container")
      console.log("hey dere");
        getMonitorContainer.classList.add("project__selected");
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
