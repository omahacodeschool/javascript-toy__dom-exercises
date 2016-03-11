window.onload = function() {


  var button = document.getElementById("toggle_button");

  button.addEventListener("click", function(){

    var toggle = document.querySelectorAll(" .movies .second_five ");

    for (var i = 0; i < toggle.length; i++) {
      if (toggle[i].style.display === "none") {
        toggle[i].style.display = "block";
        var children = toggle[i].children;
        for (var c = 0;c < children.length; c++) {
          if (children[c].style.display === "none") {
            children[c].style.display = "block";
          }
        }
      }
      else { 
      toggle[i].style.display = "none";
      }
    }
  });
};