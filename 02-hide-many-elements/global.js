window.onload = function() {

  // 1. Get the DOM element which will be clicked.
  var click_it = document.getElementById("button");
  
  // 2. Add a listener for the 'click' event onto that element.
  click_it.addEventListener("click", function(){

  // 3. The block for the listener should get the DOM
  //    element containing the text to hide.
    var text_to_hide = document.getElementsByClassName("hide_me");

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a shown value to a hidden value.
    text_to_hide.style.display = "none";

  });

};
