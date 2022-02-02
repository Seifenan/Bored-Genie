//Declaring page elements.
var fitnessClick = $("#fitnessClick");
var foodClick = $("#foodClick");
const container1 = $(".container1");
const container2 = $(".container2");


//This area was not completed because it was out of scope. Hence we have  placeholder image.
foodClick.click(function () {
  container1.html("");

  var downForMaintenence = document.createElement('img');
  downForMaintenence.setAttribute('src', "../assets/images/maintenance.png");
  downForMaintenence.setAttribute('class', "downMaintenance");
  downForMaintenence.setAttribute('width', "300");
  downForMaintenence.setAttribute('height', "300");
  container1.append(downForMaintenence);
})

//This area was not completed because it was out of scope. Hence we have  placeholder image.
fitnessClick.click(function () {
  container1.html("");

  var downForMaintenence = document.createElement('img');
  downForMaintenence.setAttribute('src', "../assets/images/maintenance.png");
  downForMaintenence.setAttribute('class', "downMaintenance");
  downForMaintenence.setAttribute('width', "300");
  downForMaintenence.setAttribute('height', "300");
  container1.append(downForMaintenence);
})
