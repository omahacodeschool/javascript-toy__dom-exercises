window.onload = function() {

  var numOne   = document.getElementById("first")
  var numTwo   = document.getElementById("second")
  var numThree = document.getElementById("third")

  numArr = [numOne, numTwo, numThree];

  for (var i = 0; i < numArr.length; i++) {
    numArr[i].addEventListener("keyup", function() {
      inputNums = numArr[i].value.length;
      maxNums   = parseInt(numArr[i].getAttribute("maxlength"));

      if (inputNums === maxNums) {
        numArr[i + 1].focus();
      }
    });   
  };
  // })


  // numTwo.addEventListener("keyup", function() {
  //   inputNums = numTwo.value.length;
  //   maxNums   = parseInt(numTwo.getAttribute("maxlength"));

  //   if (inputNums === maxNums) {
  //     numThree.focus();
  //   }
  // });
};