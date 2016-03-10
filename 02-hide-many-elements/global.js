window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var text_to_hide = document.getElementsByClassName('hide_me');

    for (var i = 0; i < text_to_hide.length; i++) {
      text_to_hide[i].style.display = "none";
    }
  });

};