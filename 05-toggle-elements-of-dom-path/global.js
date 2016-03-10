// You have some starter HTML code. When the page loads initially, some of the movies in the list will be hidden. Your job is to write code that toggles the display of the second set of movies whenever the button is clicked.
window.onload = function() {


  // 1. Find all elements on the page that you want to toggle.

  var toggledElements = document.querySelectorAll("ul.second_five li");

  //When you click a button, those elements should either be shown or hidden.
  
  var click_it = document.getElementById("toggle_button");

  click_it.addEventListener("click", function(){


    for(var i=0; i < toggledElements.length; i++){
      var el = toggledElements[i];
      el.style.display = (el.style.display != 'none' ? 'none' : '' );

        }
    });
  
};