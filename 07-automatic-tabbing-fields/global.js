window.onload = function() {

  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var third = document.getElementById("third");

  first.addEventListener("keyup", function(){
    input_char = first.value.length;
    full_cell = parseInt(first.getAttribute("maxlength"));

    if (input_char === full_cell) {
      second.focus();
    }
  });

  second.addEventListener("keyup", function(){
    input_char = second.value.length;
    full_cell = parseInt(second.getAttribute("maxlength"));

    if (input_char === full_cell) {
      third.focus();
    }
  });

};
