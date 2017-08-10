// Onload event occurs when site is visited
window.onload = function() {

  // Getting the DOM element (by id name) which will be clicked
  var button = document.getElementById('button');

  // Adding an event listener for when a user clicks on "Toggle" button
  button.addEventListener("click", function() {

    // This block is within the listener function and it retrieves the DOM elements by the name of their class (in this case, toggle_me)
    var divs_to_toggle = document.getElementsByClassName('toggle_me');

    // for loop moves through this collection of elements incrementally
    for (var i = 0; i < divs_to_toggle.length; i++) {

      //  if the loop finds a toggle_me element with display set to "none," change from "none" to "block" (display property that fills entire line)
      if (divs_to_toggle[i].style.display === "none") {
        divs_to_toggle[i].style.display = "block";
      }
      
      // toggle_me elements with display values other than "none" are to be changed to "none"
      else {
        divs_to_toggle[i].style.display = "none";
      }
    }
  });

};