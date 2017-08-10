window.onload = function() {

  var click_it = document.getElementById("toggle_button");

  click_it.addEventListener("click", function() {

  var element_to_toggle = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < element_to_toggle.length; i++) {
      if (element_to_toggle[i].style.display == "list-item") {
        element_to_toggle[i].style.display = "none";
      }
      else {
        element_to_toggle[i].style.display = "list-item";
      }
    }
  });
};