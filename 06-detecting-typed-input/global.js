window.onload = function() {

var textField = document.getElementById("full_name")
var greetingText = document.getElementById("greeting")

textField.addEventListener("keyup", function() {

greetingText.innerHTML = ("Howdy there, " + textField.value + "!");

})
}