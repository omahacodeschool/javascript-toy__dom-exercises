window.onload = function() {

  var paramsOne = document.getElementById("first");
  var paramsTwo = document.getElementById("second");
  var paramsThree = document.getElementById("third");

  paramsOne.addEventListener("keyup", function(){

  if (paramsOne.value.length == paramsOne.getAttribute("maxlength")) {
    paramsTwo.focus()
  }

});

  paramsTwo.addEventListener("keyup", function(){

  if (paramsTwo.value.length == paramsTwo.getAttribute("maxlength")) {
    paramsThree.focus()
  }

});

};