window.onload = function() {
  var current_text = document.getElementById("full_name")

  var mirror = document.getElementById("greeting")

  var returnedText = function(){
    for (var i = 0; i < current_text.length; i++) {
    mirror.innerHTML = mirrored_text[i];
    };
  };
};