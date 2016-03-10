







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



//This is the exact reverse of the previous atomic: Instead of hiding many elements with a shared class, you should show those elements.

//## Tasks

//Write code that accomplishes the following:

//1. When the page loads initially, some elements should be hidden.
//  - No JavaScript is needed for this part of the feature.
//2. Find all of the elements you chose to hide.
//3. When you click a button, those elements should be shown.

//There is no starter HTML for you. However, we recommend copy/pasting the HTML from the previous exercise and modifying it to suit this exercise.


