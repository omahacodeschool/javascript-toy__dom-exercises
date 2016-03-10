// Find all of the elements that you want to toggle.
//When you click a button, those elements should either be shown or hidden.
// When you click that button again, those elements should be toggled again.
// You can repeat as many times as you like--the button always "toggles" the display state of the elements.

window.onload = function() {


  // 1. Find all elements on the page that you want to toggle.

  var toggledElements = document.getElementsByClassName("toggle_me");

  //When you click a button, those elements should either be shown or hidden.
  
  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function(){


    for(var i=0; i < toggledElements.length; i++){
      var el = toggledElements[i];
      el.style.display = (el.style.display != 'none' ? 'none' : '' );

        }
    });
  
};