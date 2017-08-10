window.onload = function() {

  var nameInput= document.getElementById('full_name');

  nameInput.addEventListener("input", function() {

    var greeting = document.getElementById("greeting");

    greeting.innerHTML = ("Hi, " + nameInput.value + "!!!");

  });

};