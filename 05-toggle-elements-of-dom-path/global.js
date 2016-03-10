window.onload = function() {

  var toggleButton = document.getElementById("toggle_button");

  toggleButton.addEventListener("click", function() {  

    var toggleDivs = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < toggleDivs.length; i ++) {
      if (toggleDivs[i].style.display === "list-item") {
        toggleDivs[i].style.display = "none"
      } 
      else {
        toggleDivs[i].style.display = "list-item";        
      }
    }
  });

};