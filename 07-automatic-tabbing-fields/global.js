// The user sees an HTML form, which has three separate fields for parts of a phone number (ex: 402-555-0000).
//Write JavaScript so that when a user types in enough characters for each of the first two fields, their cursor automatically moves to the next field.

window.onload = function() {

  
  var inputFieldOne = document.getElementById("first");
  var inputFieldTwo = document.getElementById("second");
  var inputFieldThree = document.getElementById("third");

    inputFieldOne.onkeyup = function(){
    
    var maxLength = parseInt(inputFieldOne.attributes["maxlength"].value, 10);
    var myLength = inputFieldOne.value.length;
    if (myLength >= maxLength) {
        inputFieldTwo.focus();
        }
    }

 inputFieldTwo.onkeyup = function(){
    
    var maxLength = parseInt(inputFieldTwo.attributes["maxlength"].value, 10);
    var myLength = inputFieldTwo.value.length;
    if (myLength >= maxLength) {
        inputFieldThree.focus();
        }
    }


  
};

