window.onload = function() {

var textField = document.getElementById("full_name");

textField.addEventListener("keyup", function() {

  var echoField = document.getElementById("greeting");

  echoField.innerHTML = ("Hello " + textField.value + ".");





});


};


//document.getElementById("mytext").value = test;