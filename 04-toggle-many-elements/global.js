window.onload = function() {

  var toggleButton = document.getElementById("button");

  toggleButton.addEventListener("click", function() {  

    var toggleDivs = document.getElementsByClassName("toggle_me");

    for (var i = 0; i < toggleDivs.length; i ++) {
      if (toggleDivs[i].style.display === "none") {
        toggleDivs[i].style.display = "block"
      } 
      else {
        toggleDivs[i].style.display = "none";        
      }
    }
  });

};