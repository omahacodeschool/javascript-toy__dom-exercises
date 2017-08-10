window.onload = function() {

  var revealButton = document.getElementById("button");

  revealButton.addEventListener("click", function() {  

    var revealDivs = document.getElementsByClassName("reveal_me");

      for (var i = 0; i < revealDivs.length; i ++) {
        revealDivs[i].style.display = "block";
      }
  });

};