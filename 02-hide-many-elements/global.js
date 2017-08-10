window.onload = function() {

  var hideButton = document.getElementById("button");

  hideButton.addEventListener("click", function() {  

    var hideDivs = document.getElementsByClassName("hide_me");

      for (var i = 0; i < hideDivs.length; i ++) {
        hideDivs[i].style.display = "none";
      }
  });

};