//I will try to pass this through if needed in the query param
var searchParam = "";

fetch(
    'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBVZVUd-QRbIypXWwCXNxqj3VkHiJKKhqg&part=snippet,contentDetails,statistics,status'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
  

