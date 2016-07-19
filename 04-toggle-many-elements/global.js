window.addEventListener("load", function(){

  // 1. Get the DOM element which will be clicked.
  var toggle_button = document.getElementById('button');

  // 2. Add a listener for the 'click' event onto that element.
  toggle_button.addEventListener("click", function(){

    // 3. The block for the listener should get the DOM
    //    element containing the text to show, creating an array.
    var toggle_text = document.getElementsByClassName("toggle_me");

    // 4. Loop through the array, select all elements with the
    // specific class name.
    for(var i = 0; i < toggle_text.length; i++){

    // 5. Modify that DOM element's style to change it's 'display'
    //    if a shown value to a hidden value and vice versa.
      if(toggle_text[i].style.display === "none") {
      	toggle_text[i].style.display = 'block';
      }else {
      	toggle_text[i].style.display = "none";
      }
	}
  });
  
});