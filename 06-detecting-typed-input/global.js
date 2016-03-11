window.onload = function(){

  var enterYourName = document.getElementById("full_name");

  enterYourName.addEventListener("keyup", function(){

    var greetings = document.getElementById("greeting");

    greetings.innerHTML = ("Greetings and salutations, " + enterYourName.value + "!");
  });

};