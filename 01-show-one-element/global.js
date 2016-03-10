window.onload = function() {

  var click_it = document.getElementById("more_text_link");

  click_it.addEventListener("click", function(){
    var textToShow = document.getElementById("more_text_content");

    textToShow.style.display = "inline";

    click_it.style.display = "none";
  });
  
};