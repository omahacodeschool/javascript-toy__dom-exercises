 window.onload = function() {

//Get the DOM element to be clicked
var clickIt = document.getElementById("button");

//Add a listener for the click
clickIt.addEventListener("click", function(){

  //Identify the text to be hidden
  var textToShow = document.getElementsByClassName("show_me");

  for (var i = 0; i < textToShow.length; i++) {
      textToShow[i].style.display = "block";
  }

});

};