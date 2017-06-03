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
if (document.body.classList.contains('mobile-work')) {
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
var navItems = document.querySelectorAll(".mcts-nav");
var screenList = document.querySelectorAll(".screen");
var iconList = document.querySelectorAll(".changefill");
var navList = document.querySelectorAll(".nav-p");

navItems[0].addEventListener('click', function(){
  for (i = 0; i < screenList.length; i++) {
    screenList[i].style.display = "none";
  }
  screenList[0].style.display = "block";

  for (i = 0; i < iconList.length; i++) {
    iconList[i].style.fill = "#838383";
  }
  iconList[0].style.fill="#34b262";

  for (i = 0; i < iconList.length; i++) {
    navList[i].style.color = "#838383";
  }
  navList[0].style.color="#34b262";
}, false);

navItems[1].addEventListener('click', function(){
  for (i = 0; i < screenList.length; i++) {
    screenList[i].style.display = "none";
  }
  screenList[1].style.display = "block";

  for (i = 0; i < iconList.length; i++) {
    iconList[i].style.fill = "#838383";
  }
  iconList[1].style.fill="#34b262";

  for (i = 0; i < iconList.length; i++) {
    navList[i].style.color = "#838383";
  }
  navList[1].style.color="#34b262";
}, false);

navItems[2].addEventListener('click', function(){
  for (i = 0; i < screenList.length; i++) {
    screenList[i].style.display = "none";
  }
  screenList[2].style.display = "block";

  for (i = 0; i < iconList.length; i++) {
    iconList[i].style.fill = "#838383";
  }
  iconList[2].style.fill="#34b262";

  for (i = 0; i < iconList.length; i++) {
    navList[i].style.color = "#838383";
  }
  navList[2].style.color="#34b262";
}, false);

navItems[3].addEventListener('click', function(){
  for (i = 0; i < screenList.length; i++) {
    screenList[i].style.display = "none";
  }
  screenList[3].style.display = "block";

  for (i = 0; i < iconList.length; i++) {
    iconList[i].style.fill = "#838383";
  }
  iconList[3].style.fill="#34b262";

  for (i = 0; i < iconList.length; i++) {
    navList[i].style.color = "#838383";
  }
  navList[3].style.color="#34b262";
}, false);
}

if (document.body.classList.contains('web-work')) {
  var getProjects = document.querySelectorAll(".project");
  var i;
  for (i = 0; i < getProjects.length; i++) {
    getProjects[i].addEventListener("click", addFade);
  }

    function addFade() {
      console.log("heyyyy");
      var getMonitorContainer = document.querySelector(".monitor__container")
        getMonitorContainer.classList.add("project__selected");
    }
}
