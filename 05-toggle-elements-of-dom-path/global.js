window.onload = function() {

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.
var click_it = document.getElementById('toggle_button');
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.
click_it.addEventListener("click", function(){ 
  var movieList = document.querySelectorAll("ul.second_five li");

for (var n = 0; n < movieList.length; n++){
  if (movieList[n].style.display === "list-item") {
    movieList[n].style.display = "none";
}
else {
  movieList[n].style.display = "list-item";
}
}
});
};
  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  // Your JavaScript goes here.
 // Your JavaScript goes here.