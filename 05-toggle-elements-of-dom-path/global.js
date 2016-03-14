window.onload = function() {

    var toggle_text = function(){
    texts = document.getElementsByClassName("movies second_five");

    for (var counter = 0; counter < texts.length; counter = counter + 1)
      if (texts[counter].style.display=="none")
        texts[counter].style.display = "block";
      else 
        texts[counter].style.display = "none";
    }
  
  var hide_button = document.getElementById("toggle_button");

  hide_button.addEventListener("click",toggle_text);

};
