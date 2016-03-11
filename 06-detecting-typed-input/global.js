window.onload = function() {

  var name = document.getElementById("full_name");

  name.addEventListener("keyup", function() {

    var greeting_div = document.getElementById("greeting");

    greeting_div.innerHTML = ("Hello, " + name.value + "!");

  });

};