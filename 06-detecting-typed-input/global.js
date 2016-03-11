// As the user types in their name into the form field, immediately mirror their typed value into the empty `p`.
window.onload = function() {

  
  var inputField = document.getElementById("full_name");
  var outputParagraph = document.getElementById("greeting");

  inputField.onkeyup = function(){
    var letter = inputField.value;
    outputParagraph.innerHTML = "Well hello, " + letter + "!";
    };

  
};

