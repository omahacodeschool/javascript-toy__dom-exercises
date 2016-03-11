window.onload = function() {

  var numOne   = document.getElementById("first")
  var numTwo   = document.getElementById("second")
  var numThree = document.getElementById("third")

  numOne.addEventListener("keyup", function() {
    inputNums = numOne.value.length;
    maxNums   = parseInt(numOne.getAttribute("maxlength"));

    if (inputNums === maxNums) {
      numTwo.focus();
    }
  });

  numTwo.addEventListener("keyup", function() {
    inputNums = numTwo.value.length;
    maxNums   = parseInt(numTwo.getAttribute("maxlength"));

    if (inputNums === maxNums) {
      numThree.focus();
    }
  });
};