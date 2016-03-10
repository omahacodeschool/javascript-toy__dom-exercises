window.onload = function() {

  var firstBox = document.getElementById("first");
  var secondBox = document.getElementById("second");
  var thirdBox = document.getElementById("third");

  firstBox.addEventListener("input", function() {
    var typedIn = firstBox.value.length;
    var maxLength = parseInt(firstBox.getAttribute("maxlength"));

    if (typedIn === maxLength) {
      secondBox.focus();
    }
  });

  secondBox.addEventListener("input", function() {
    var typedIn = secondBox.value.length;
    var maxLength = parseInt(secondBox.getAttribute("maxlength"));

    if (typedIn === maxLength) {
      thirdBox.focus();
    }
  });

};  
