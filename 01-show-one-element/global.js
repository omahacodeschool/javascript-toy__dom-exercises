window.onload = function() {


  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  var click_it = document.getElementById("more_text_link");
  click_it.addEventListener("click", function(){
    var text_to_show = document.getElementById("more_text_content");
    text_to_show.style.display = "inline";
    click_it.style.display = "none";
  });
  
};