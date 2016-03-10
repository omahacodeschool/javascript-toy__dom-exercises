window.onload = function() {

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  var hide_button = document.getElementById("button");

  var text = document.getElementByClass("hide_me")

  // 2. Add a listener for the 'click' event onto that element.
  hide_button.addEventListener("click",text.hide);
    
    // 3. The block for the listener should get the DOM
    //    element containing the text to hide.
    

      
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    
   
    // 5. Also modify the DOM to hide the "More info..." link.
    

};


ruby method

def hide_text
  texts = Element.where(Class = "hide_me")
  texts.each do |text|
    text.hide
  end

end