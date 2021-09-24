var fitnessClick = $("#fitnessClick");
var foodClick = $("#foodClick");
var restartClick = $("#restartClick");
const container1 = $(".container1");
const container2 = $(".container2");

//This will display a restart click
function displayRestartGiphy() {
  var restartGiphyURL = "https://api.giphy.com/v1/gifs/search?q=restart&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1";
  fetch(restartGiphyURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);

      restartClick.html("");

      var restartClickEl = document.createElement('img');
      restartClickEl.setAttribute('src', response.data[0].images.fixed_height.url);

      restartClick.append(restartClickEl);
    });
}

foodClick.click(function () {
  container1.html("");

  var downForMaintenence = document.createElement('img');
  downForMaintenence.setAttribute('src', "../assets/images/Down-for-Maintenance.jpg");
  downForMaintenence.setAttribute('width', "300");
  downForMaintenence.setAttribute('height', "300");
  container1.append(downForMaintenence);

  displayRestartGiphy();
})

fitnessClick.click(function () {
  container1.html("");

  var downForMaintenence = document.createElement('img');
  downForMaintenence.setAttribute('src', "../assets/images/Down-for-Maintenance.jpg");
  downForMaintenence.setAttribute('width', "300");
  downForMaintenence.setAttribute('height', "300");
  container1.append(downForMaintenence);

  displayRestartGiphy();
})

restartClick.click(function () {
  window.location.reload();
})