// Onload event occurs when site is visited
window.onload = function() {

  // Getting the DOM element (by id name) which will be clicked
  var button = document.getElementById('toggle_button');

  // Adding an event listener for when a user clicks on toggle button
  button.addEventListener("click", function() {

    // This block is within the listener function and it creates a variable that contains a list of all of the DOM elements from a ul class
    var movieList = document.querySelectorAll("ul.second_five li");

    // for loop moves through this list incrementally
    for (var i = 0; i < movieList.length; i++) {

      //  if the loop finds a ul class element with (default?) display set to "list-item" it changes it to "none"
      if (movieList[i].style.display === "list-item") {
        movieList[i].style.display = "none";
      }
      
      // otherwise it continues to show the element
      else {
        movieList[i].style.display = "list-item";
      }
    }
  });

};