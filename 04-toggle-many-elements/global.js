window.onload = function() {

  var clickIt = document.getElementById("button");

    clickIt.addEventListener("click", function(){

      var textToToggle = document.getElementsByClassName("toggle_me");

      for (var i = 0; i <textToToggle.length; i++) {
        if (textToToggle[i].style.display === "none") {
          textToToggle[i].style.display = "block";
         } 
        else {
          textToToggle[i].style.display = "none"
        }
      }
    });
};