window.onload = function() {

  var name = document.getElementById("full_name");

  name.addEventListener("keypress", function() {

  var autoResponse = document.getElementById("greeting");

  autoResponse.textContent = `Hello, ${name.value}`;

});

};
