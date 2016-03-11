window.onload = function() {

    var toggle_text = function(){
    texts = document.getElementsByClassName("toggle_me");

    for (var counter = 0; counter < texts.length; counter = counter + 1)
      if (texts[counter].style.display==="none")
        texts[counter].style.display = "block";
      else 
        texts[counter].style.display = "none";
    }
  

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  var hide_button = document.getElementById("button");

  // 2. Add a listener for the 'click' event onto that element.
  hide_button.addEventListener("click",toggle_text);

  
    
    // 3. The block for the listener should get the DOM
    //    element containing the text to hide.
    
  

      
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    
   
    // 5. Also modify the DOM to hide the "More info..." link.
    

};
