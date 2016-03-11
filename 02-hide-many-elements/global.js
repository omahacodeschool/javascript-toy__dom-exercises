window.onload = function(){

var button = document.getElementById("button");

button.addEventListener("click", function() {

var hideThese = document.getElementsByClassName("hide_me");

for (var i = 0; i < hideThese.length; i++) {
  hideThese[i].style.display = "none"};

});
}