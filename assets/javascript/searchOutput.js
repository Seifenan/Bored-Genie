//I will try to pass this through if needed in the query param
var searchParam = "";
//https://theaudiodb.com/api/v1/json/1/discography.php?s=coldplay
//'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'
//use giphy for image
//https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBVZVUd-QRbIypXWwCXNxqj3VkHiJKKhqg&part=snippet,contentDetails,statistics,status
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


/*fetch(
    'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
  */

