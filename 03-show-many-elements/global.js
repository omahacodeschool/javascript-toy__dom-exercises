// Onload event occurs when site is visited
window.onload = function() {

  // Getting the DOM element (by id name) which will be clicked
  var button = document.getElementById('button');

  // Adding an event listener for when a user clicks on "Show" button
  button.addEventListener("click", function() {

    // This block is within the listener function and it retrieves the DOM elements by the name of their class (in this case, show_me)
    var divs_to_show = document.getElementsByClassName('show_me');
   
    // for loop moves through this collection of elements incrementally and changes their display to "block" (a display property that fills the entire line)
    for (var i = 0; i < divs_to_show.length; i++) {
      divs_to_show[i].style.display = "block";
    }
  });

};