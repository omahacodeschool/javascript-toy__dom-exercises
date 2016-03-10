window.onload = function() {

  // Here is some pseudo-code to help you get started:

  // 1. Find all elements on the page with 'hide_me' as a class.

  var hiddenElements = document.getElementsByClassName("hide_me");

  for(var i=0; i < hiddenElements.length; i++){
      hiddenElements[i].style.display = "none";
    };

  var click_it = document.getElementById("button");

  // 2. Hide all of those elements when a button is clicked.

  click_it.addEventListener("click", function(){

    for(var i=0; i < hiddenElements.length; i++){
      hiddenElements[i].style.display = "block";
    };
    });
  
};