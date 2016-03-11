window.onload = function() {

  var hidden = document.querySelectorAll(".hide_me");
  
  var hidden_length = hidden.length;

  click_on_it = document.getElementById("button")


  var hideThings = function(){
    for (var i = 0; i < hidden_length; i++) {
      hidden[i].style.display = "inherit";
    };
    
    click_on_it.innerHTML = "They're back!";
    
  };

  click_on_it.addEventListener("click", hideThings)



};