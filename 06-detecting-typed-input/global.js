
window.onload = function() {

function display_input(){
  var get_text = document.getElementById("greeting")
  get_text.innerHTML = ("Howdy, " + name.value + "!");
}

var name = document.getElementById("full_name");

name.addEventListener("keypress",display_input);

};
