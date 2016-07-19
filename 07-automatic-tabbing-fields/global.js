window.addEventListener("load", function(){

  var area_code = document.getElementById('first');
  var prefix = document.getElementById('second');
  var line_numbers = document.getElementById('third');

  area_code.addEventListener("keyup", function() {
    input_numbers = area_code.value.length;
    max_characters = parseInt(area_code.getAttribute("maxlength"));

    if (input_numbers === max_characters) {
      prefix.focus();
    }
  });

  prefix.addEventListener("keyup", function() {
    input_numbers = prefix.value.length;
    max_characters = parseInt(prefix.getAttribute("maxlength"));

    if (input_numbers === max_characters) {
      line_numbers.focus();
    }
  });

});