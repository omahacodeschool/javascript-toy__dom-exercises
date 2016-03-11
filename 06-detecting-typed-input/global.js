window.onload = function() {

  var type_it = document.getElementById("full_name");

  type_it.addEventListener("keyup", function() {
    
    var greet_it = document.getElementById("greeting");
    
    greet_it.innerHTML = ("Hi, " + type_it.value);

  });
};