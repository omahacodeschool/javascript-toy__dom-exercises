window.onload = function() {

//Get the DOM element to be clicked
var clickIt = document.getElementById("button");

//Add a listener for the click
clickIt.addEventListener("click", function(){

  //Identify the text to be hidden
  var textToHide = document.getElementsByClassName("hide_me");

  for (var i = 0; i < textToHide.length; i++) {
      textToHide[i].style.display = "none";
  }

});

};