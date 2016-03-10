window.onload = function() {

  // Here is some pseudo-code to help you get started:
var click_it = document.getElementById("more_text_link");
  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.
click_it.addEventListener("click", function(){
 var text_to_show = document.getElementbyId("more_text_content");

 text_to_show.style.display = "inline";   //the defaults are block and inline
 //inline continues on same line, block starts new line 
 click_it.style.display = "none";
 
});
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  
};