window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var text_to_show = document.getElementsByClassName('hide_me');

    for (var i = 0; i < text_to_show.length; i++) {
      text_to_show[i].style.display = "block";
    }

    button.style.display = "none";

  });

};