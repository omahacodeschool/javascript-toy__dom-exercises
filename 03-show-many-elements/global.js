window.addEventListener("load", function(){

  // 1. Get the DOM element which will be clicked.
  var show_button = document.getElementById('button');

  // 2. Add a listener for the 'click' event onto that element.
  show_button.addEventListener("click", function(){

    // 3. The block for the listener should get the DOM
    //    element containing the text to show, creating an array.
    var show_text = document.getElementsByClassName("show_me");

    // 4. Loop through the array, select all elements with the
    // specific class name.
    for(var i = 0; i < show_text.length; i++){

    // 5. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
      show_text[i].style.display = "block";
    }
  });
  
});