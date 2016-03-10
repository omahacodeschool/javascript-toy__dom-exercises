window.onload = function() {

  var hideButton = document.getElementById("button");

  hideButton.addEventListener("click", function{
    
    var hide = document.getElementsByClassName("hide_me");

    if (hide.style.display == "none") {
      hide.style.display = "block";
    }
    else {
      hide.style.display = "none";
    }
  

  });

};

