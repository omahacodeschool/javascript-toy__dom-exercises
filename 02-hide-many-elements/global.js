window.addEventListener("load", function(){

  // 1. Get the DOM element which will be clicked.
  var hide_button = document.getElementById('button');

  // 2. Add a listener for the 'click' event onto that element.
  hide_button.addEventListener("click", function(){

    // 3. The block for the listener should get the DOM
    //    element containing the text to hide, creating an array.
    var hide_text = document.getElementsByClassName("hide_me");

    // 4. Loop through the array, select all elements with the
    // specific class name.
    for(var i = 0; i < hide_text.length; i++){

    // 5. Modify that DOM element's style to change it's 'display'
    //    from a shown value to a hidden value.
      hide_text[i].style.display = "none";
    }
  });
  
});