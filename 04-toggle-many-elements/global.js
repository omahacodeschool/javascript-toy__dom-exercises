window.onload = function() {


  var button = document.getElementById("button");

  button.addEventListener("click", function(){

    var toggle = document.getElementsByClassName("toggle_me");

    for (var i = 0; i < toggle.length; i++) {
      if (toggle[i].style.display === "none") {
      toggle[i].style.display = "block";
      } 
      else { 
      toggle[i].style.display = "none";
      }
    }
  });
};

