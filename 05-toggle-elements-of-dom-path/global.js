

window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function changeButtonz() {

    var divs_to_toggle = document.querySelectorAll('ul.second_five li');

//added a little extra functionality to change the value (displayed text) of the button depending on the state of my divs.
    for (var i = 0; i < divs_to_toggle.length; i++) {
      if (divs_to_toggle[i].style.display === "list-item") {
        divs_to_toggle[i].style.display = "none";
        button.value = "Show"
      }
      else {
        divs_to_toggle[i].style.display = "list-item";
        button.value = "Hide"
      }
    }
  });

};