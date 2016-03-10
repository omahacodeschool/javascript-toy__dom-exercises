window.onload = function() {

    var my_function = function(){
    texts = document.getElementsByClassName("hide_me");
    var i = 0;
    if (texts.length > i) {
      texts.style.display = "none";
    }
  }

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  var hide_button = document.getElementById("button");

  // 2. Add a listener for the 'click' event onto that element.
  hide_button.addEventListener("click",my_function);

  
    
    // 3. The block for the listener should get the DOM
    //    element containing the text to hide.
    
  

      
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    
   
    // 5. Also modify the DOM to hide the "More info..." link.
    

};

