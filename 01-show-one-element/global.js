window.onload = function() {
  var click_it = document.getElementById("more_text_link");
  click_it.addEventListener("click", function(){
    var text_to_show = document.getElementById("more_text_content");
    text_to_show.style.display = "inline";
    click_it.style.display = "none";
  });
  
};