window.onload = function() {

  var toggleButton = document.getElementById("toggle_button");

  toggleButton.addEventListener("click", function() {  

    var toggleList = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < toggleList.length; i ++) {
      if (toggleList[i].style.display === "list-item") {
        toggleList[i].style.display = "none"
      } 
      else {
        toggleList[i].style.display = "list-item";        
      }
    }
  });

};