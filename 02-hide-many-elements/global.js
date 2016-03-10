
window.onload = function() {

//if use of the button is the triggering event, I need an event listener for the button. 

  button.addEventListener("click", function()) {

//things to hide findByClass("hide_me") I see now in js that is getElementsByClassName.

    var hideMe = document.getElementsByClassName("hide_me")

//getElementsByClassName makes an array? 
//so everything in the array hideMe I want to hide. We don't do each-do?
//Courtesy of w3schools description of for loops:
    for (count = 0; count < hideMe.length; count++) {
      hideMe[count].style.display = none

    }//end of for loop curly bracket
  }//end of add event listener curly bracket
}//end of window.onload curly bracket














}
