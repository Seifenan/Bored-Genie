var startBtn = document.getElementById("startBtn");

var homeContainer = document.querySelector(".homeContainer");

var mainContainer = document.querySelector(".mainContainer");

startBtn.addEventListener("click", startApp);

function startApp() {
  homeContainer.setAttribute("id", "hide");
  mainContainer.setAttribute("id", "show");
}
// End; Navigation to Main Page

// Start; Navigation to Body Page 
var bodyIcon = document.querySelector(".bodyIcon");

var mindIcon = document.querySelector(".mindIcon");

var mainContainer = document.querySelector(".mainContainer");

var bodyContainer = document.querySelector(".bodyContainer");

var mindContainer = document.querySelector(".mindContainer");

bodyIcon.addEventListener("click", loadBody);

mindIcon.addEventListener("click", loadMind);

function loadBody() {
  loadGenie();

  mainContainer.setAttribute("id", "hide");
  bodyContainer.setAttribute("id", "show");
}

function loadMind() {
  loadGenie();

  mainContainer.setAttribute("id", "hide");
  mindContainer.setAttribute("id", "show");
}
// End; Navigation to Body Page

// Start; Testing Loading Genie

var loadingGenie = document.querySelector(".loadingGenie");

var loadingGenie2 = document.querySelector(".loadingGenie2");

function loadGenie() {
  loadingGenie.setAttribute("id", "show");
  setTimeout(function () { loadingGenie.setAttribute("id", "hide"); }, 1400);
  setTimeout(function () { loadingGenie2.setAttribute("id", "show"); }, 1400);
  setTimeout(function () { loadingGenie2.setAttribute("id", "hide"); }, 2500);
}
