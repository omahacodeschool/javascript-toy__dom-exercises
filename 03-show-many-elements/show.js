window.onload = function() {

//Show Button 
var showButton = document.getElementById("button");

  showButton.addEventListener("click", function(){

  var show = document.getElementById("show_me");

  show.style.display = "block";
  showButton.style.display = "none";
  });

};