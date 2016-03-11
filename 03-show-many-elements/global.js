window.onload = function() {

//if use of the button is the triggering event, I need an event listener for the button. 
  var button = document.getElementById("button");

  button.addEventListener("click", function() {

//things to show getElementsByClassName.

    var hidden = document.getElementsByClassName("hidden");

//getElementsByClassName makes an array? 
//so everything in the array hideMe I want to hide. We don't do each-do?
//Courtesy of w3schools description of for loops:
    for (index = 0; index < hidden.length; index+=1) {
      hidden[index].style.display = "block";

    }//end of for loop curly bracket
  });//end of add event listener curly bracket
};//end of window.onload curly bracket


