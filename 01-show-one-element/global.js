window.addEventListener("load", function(){

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.
var click_it = document.getElementById("more_text_link");
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.
click_it.addEventListener("click", function(){ 
  var text_to_show = document.getElementById("more_text_content")

text_to_show.style.display = "inline";

click_it.style.display = "none";
});
  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  
});