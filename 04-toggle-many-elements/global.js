window.onload = function() {

  var toggles = document.querySelectorAll(".toggle_me");
  
  var hidden_length = toggles.length;

  click_on_it = document.getElementById("button")


  var hideThings = function(){
    for (var i = 0; i < hidden_length; i++) {
      if (toggles[i].style.display == "none") {
        toggles[i].style.display = "inherit";
        click_on_it.innerHTML = "They're back!";
      }
      else {
        toggles[i].style.display = "none";
        click_on_it.innerHTML = "Oh No! They're gone!";
      };
    }; 
  };

  click_on_it.addEventListener("click", hideThings)



};