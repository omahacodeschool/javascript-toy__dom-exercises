window.onload = function() {

  var button = document.getElementById("button");
  
  button.addEventListener("click", function(){

    var elementsToToggle = document.getElementsByClassName("toggle_me");

    for(var i = 0; i < elementsToToggle.length; i++){
      if (elementsToToggle[i].style.display === "none"){
        elementsToToggle[i].style.display = "block";
      }
      else {
        elementsToToggle[i].style.display = "none";
    









      }





    }

  })

}