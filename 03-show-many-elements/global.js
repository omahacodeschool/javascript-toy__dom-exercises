window.onload = function() {

  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function(){
    var textToHide = document.getElementsByClassName("hide_me");

    for (var text = 0, len = textToHide.length; text < len; ++text){
    textToHide[text].style.display = "block";
    }
  });
  
};