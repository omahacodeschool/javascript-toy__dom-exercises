window.onload = function() {

  var firstBox = document.getElementById("first");
  var secondBox = document.getElementById("second");
  var thirdBox = document.getElementById("third");

  function focusBox(box, nextBox){
    box.addEventListener("input", function() {
    var typedIn = box.value.length;
    var maxLength = parseInt(box.getAttribute("maxlength"));

    if (typedIn === maxLength) {
      nextBox.focus();
    }
  });
  }

  focusBox(firstBox, secondBox);
  focusBox(secondBox, thirdBox);

};  



