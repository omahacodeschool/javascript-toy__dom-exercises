window.onload = function() {

  var numOne   = document.getElementById("first")
  var numTwo   = document.getElementById("second")
  var numThree = document.getElementById("third")

  numArr = [numOne, numTwo, numThree];

  numArr.forEach(function(n) {
    n.addEventListener("keyup", function() {
      inputNums = n.value.length;
      maxNums   = parseInt(n.getAttribute("maxlength"));

      if (inputNums === maxNums) {
        n[n + 1].focus();
      }
    });   
  });
  // })


  // numTwo.addEventListener("keyup", function() {
  //   inputNums = numTwo.value.length;
  //   maxNums   = parseInt(numTwo.getAttribute("maxlength"));

  //   if (inputNums === maxNums) {
  //     numThree.focus();
  //   }
  // });
};