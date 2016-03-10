window.onload = function() {

  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function(){

  var element_to_hide = document.getElementsByClassName("hide_me");
    
    for (var i = 0; i < element_to_hide.length; i++) {
      element_to_hide[i].style.display = "none";
    }
  });

};