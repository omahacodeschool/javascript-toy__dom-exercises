
window.onload = function() {

//if use of the button is the triggering event, I need an event listener for the button. 
  var button = document.getElementById("button");

  button.addEventListener("click", function() {

//things to toggle getElementsByClassName.

    var toggle = document.getElementsByClassName("toggle_me");

//getElementsByClassName makes an array? 
//so everything in the array toggle I want to be able to toggle with the button
//Courtesy of stack overflow description of toggling:
for (var index = 0; index < toggle.length; index+=1) {
      if (toggle[index].style.display === "none") {
        toggle[index].style.display = "block"; 
      }//end of for loop curly bracket?
      else {
        toggle[index].style.display = "none";
      }
    } //end of if-else curly bracket
  }); //end of event listener curly bracket
};//end of window.onload curly bracket
