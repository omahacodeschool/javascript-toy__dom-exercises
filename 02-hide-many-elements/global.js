// Onload event occurs when site is visited
window.onload = function() {

  // Getting the DOM element (by id name) which will be clicked
  var button = document.getElementById('button');

  // Adding an event listener for when a user clicks on "Hide" button
  button.addEventListener("click", function() {

    // This block is within the listener function and it retrieves the DOM elements by the name of their class (in this case, hide_me)
    var divs_to_hide = document.getElementsByClassName('hide_me');

    // for loop moves through this collection of elements incrementally and changes their display to none (hidden)
    for (var i = 0; i < divs_to_hide.length; i++) {
      divs_to_hide[i].style.display = "none";
    }
  });

};