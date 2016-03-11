window.onload = function() {

  var first_text = document.getElementById("first");
  var second_text = document.getElementById("second");
  var third_text = document.getElementById("third");

  first_text.addEventListener("keyup", function() { 
    var firstLetters = first_text.value;
    if (firstLetters.length == first_text.getAttribute("maxlength")) {
      second_text.focus();
    };
  });

  second_text.addEventListener("keyup", function() { 
    var secondLetters = second_text.value;
    if (secondLetters.length == second_text.getAttribute("maxlength")) {
      third_text.focus();
    };
  });
  
}