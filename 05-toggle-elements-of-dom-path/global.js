window.onload = function() {

  var toggle = document.getElementById('toggle_button');

    toggle.addEventListener("click", function() {

    var textToToggle = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < textToToggle.length; i++) {
      if (textToToggle[i].style.display === "list-item") {
        textToToggle[i].style.display = "none";
      }
      else {
        textToToggle[i].style.display = "list-item";
      }
    }

  });

};
