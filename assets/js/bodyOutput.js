//I will try to pass this through if needed in the query param
//https://theaudiodb.com/api/v1/json/1/discography.php?s=coldplay
//'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'
//use giphy for image
//https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBVZVUd-QRbIypXWwCXNxqj3VkHiJKKhqg&part=snippet,contentDetails,statistics,status

var fitnessClick = $("#fitnessClick");
var foodClick = $("#foodClick");
var restartClick = $("#restartClick");
const container1 = $(".container1");

//This function will give us the restaurant type. 
function getFoodName() {
  var restaurantTypeList = ["AMERICAN", "ASIAN", "AUSTRIAN", "BARBECUE", "BURGER", "CARIBBEAN", "CHICKEN", "CHINESE", "DELI", "DIM SUM", "FRENCH", "FRENCH BISTRO", "GERMAN", "GREEK", "INDIAN", "ITALIAN", "JAPANESE", "KOREAN", "MEDITERRANEAN", "MEXICAN", "MIDDLE EASTERN", "PIZZA", "RAMEN", "SANDWICH", "SOUL", "SOUTH AMERICAN", "SOUTHERN", "SPANISH", "STEAKHOUSE", "SUSHI", "SWISS", "TAPAS", "THAI", "TURKISH", "VEGETARIAN", "VIETNAMESE"];
  var selectRandom = Math.floor(Math.random() * 36);
  return restaurantTypeList[selectRandom];
}

//This will bring a giphy back of the restuarant type
function displayFoodGiphy(foodSearchParam) {
  var restartGiphyURL = "https://api.giphy.com/v1/gifs/search?q=" + foodSearchParam + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1';
  fetch(restartGiphyURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {

      var foodGiphyContainer = $(".container1");
      foodGiphyContainer.html("");

      var foodGifEl = document.createElement('img');
      foodGifEl.setAttribute('src', response.data[0].images.fixed_height.url);

      foodGiphyContainer.append(foodGifEl);
    });
}

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

//This function will call the API and get the artist data and then append it to the page.
function displayRestaurantData() {

}

function displayRestaurant() {
  var restaurantSearchParam = getFoodName();
  displayFoodGiphy(restaurantSearchParam);
}

foodClick.click(function () {
  displayRestaurant();
  displayRestartGiphy();
});

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

//Google maps pins

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);