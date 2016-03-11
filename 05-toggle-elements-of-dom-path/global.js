// Your JavaScript goes here.
window.onload = function() {

  var button = document.getElementById('toggle_button');

  button.addEventListener("click", function() {

    var elementsToToggle = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < elementsToToggle.length; i++) {
      if (elementsToToggle[i].style.display === "list-item") {
        elementsToToggle[i].style.display = "none";
      }
      else {
        elementsToToggle[i].style.display = "list-item";
      }
    }
  });

};