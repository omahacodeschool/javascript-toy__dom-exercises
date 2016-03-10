// Your JavaScript goes here.
window.onload = function() {

  var toggles = document.querySelectorAll("ul.second_five li");
  
  var hidden_length = toggles.length;

  click_on_it = document.getElementById("toggle_button");


  var hideThings = function(){
    for (var i = 0; i < hidden_length; i++) {
      if (toggles[i].style.display == "none") {
        toggles[i].style.display = "list-item";
      }
      else {
        toggles[i].style.display = "none";
      };
    }; 
  };

  click_on_it.addEventListener("click", hideThings);



};