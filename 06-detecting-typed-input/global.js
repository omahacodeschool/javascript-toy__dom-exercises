window.onload = function() {

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.
var name = document.getElementById("full_name");
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.
name.addEventListener("keyup", function(){ 
  var greeting = document.getElementById("greeting");
greeting.innerHTML = ("Hello there, " + name.value + "!");


});
};
  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  // Your JavaScript goes here.
 // Your JavaScript goes here.// Your JavaScript goes here.