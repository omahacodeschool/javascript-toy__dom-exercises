window.onload = function() {

  var numOne   = document.getElementById("first")
  var numTwo   = document.getElementById("second")
  var numThree = document.getElementById("third")

  numArr = [numOne, numTwo, numThree];

  for (var i = 0; i < numArr.length; i++) {
    numArr[i].addEventListener("keyup", function(event) {
      inputNums = event.target.value.length;
      maxNums   = parseInt(event.target.getAttribute("maxlength"));

      if (inputNums === maxNums) {
        nextElement = event.target.nextElementSibling
        nextElement.focus();
        console.log("foo")
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