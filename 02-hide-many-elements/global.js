window.onload = function() {

  var hidden = document.querySelectorAll(".hide_me");
  
  var hidden_length = hidden.length;

  var hideThings = function(){
    for (var i = 0; i < hidden_length; i++) {
      hidden[i].style.display = "none";
    };
  };

  click_on_it = document.getElementById("button")
  click_on_it.addEventListener("click", hideThings)


};