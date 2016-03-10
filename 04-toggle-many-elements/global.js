window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var text_to_toggle = document.getElementsByClassName('toggle_me');

    if (text_to_toggle[0].style.display == "none") {
      for (var i = 0; i < text_to_toggle.length; i++) {
        text_to_toggle[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < text_to_toggle.length; i++) {
        text_to_toggle[i].style.display = "none";
      }
    }

  });

};