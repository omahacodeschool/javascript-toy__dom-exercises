window.onload = function() {

  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function() {

  var element_to_toggle = document.getElementsByClassName("toggle_me");

    for (var i = 0; i < element_to_toggle.length; i++) {
      if (element_to_toggle[i].style.display == "block") {
        element_to_toggle[i].style.display = "none";
      }
      else {
        element_to_toggle[i].style.display = "block";
      }
    }
  });
};