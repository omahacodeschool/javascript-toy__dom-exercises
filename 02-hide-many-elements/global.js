window.onload = function() {

  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function(){

  var element_to_hide = document.getElementsByClassName("hide_me");
    
    element_to_hide.forEach(function(element) {
      element.style.display = "none";
    })
  });

};