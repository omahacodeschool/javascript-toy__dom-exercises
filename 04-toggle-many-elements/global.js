window.onload = function() {

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.
var click_it = document.getElementById('button');
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.
button.addEventListener("click", function(){ 
  var divs_to_toggle = document.getElementByClassName('toggle_me');

for (var n = 0; n < divs_to_toggle.length; n++){
  if (divs_to_toggle[n].style.display === "none") {
    divs_to_toggle[n].style.display = "block";
}
else {
  divs_to_toggle[n].style.display = "none";
}
}
});
};
  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  // Your JavaScript goes here.
 