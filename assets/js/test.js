function initGoogle() {
  var location = {lat: 40.00, lng: -79.000}

  var options = {center: location, zoom: 9}

  if(navigator.geolocation) {
      console.log("Geolocation is here!");
      navigator.geolocation.getCurrentPosition((loc) => {
          location.lat = loc.coords.latitude;
          location.lng = loc.coords.longitude;

          //write map
          map = new google.maps.Map(document.getElementById("map"), options);
      },
      (err) => {
          console.log("user clicked on lol");
          map = new google.maps.Map(document.getElementById("map"), options);

      })
    } else {
        console.log("geolocation not supported :(");
        new google.maps.Map(document.getElementById("map"), options);
    }
autocomplete = new google.maps.laces.Autocomplete(document.getElementById("input"), 
{
    componentRestrictions: { 'country': ['us']},
    fields: ['geometry', 'name'],
    types: ['establishment']
})

}