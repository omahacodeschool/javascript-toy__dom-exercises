window.addEventListener("load", function(){

  var yourName = document.getElementById('full_name');

  yourName.addEventListener("keyup", function(){

    var greeting = document.getElementById("greeting");

    greeting.innerHTML = ("Welcome, " + yourName.value + "!")
  });
  
});