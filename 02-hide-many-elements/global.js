
window.onload = function() {

//if use of the button is the triggering event, I need an event listener for the button. 
  var button = document.getElementById("button");

  button.addEventListener("click", function() {

//things to hide findByClass("hide_me") no that's more ruby I see now in js that is getElementsByClassName.

    var hideMe = document.getElementsByClassName("hide_me");

//getElementsByClassName makes an array? 
//so everything in the array hideMe I want to hide. We don't do each-do?
//Courtesy of w3schools description of for loops:
    for (index = 0; index < hideMe.length; index+=1) {
      hideMe[index].style.display = "none";

    }//end of for loop curly bracket
  });//end of add event listener curly bracket
};//end of window.onload curly bracket


