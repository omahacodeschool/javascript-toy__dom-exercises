window.onload = function() {

  var current_text = document.getElementById("full_name");

  current_text.addEventListener("keyup", function() {
    
    var letters = current_text.value;

    var mirrored_text = document.getElementById("greeting");
    mirrored_text.innerHTML = "Greetings: " + letters;
  });
};