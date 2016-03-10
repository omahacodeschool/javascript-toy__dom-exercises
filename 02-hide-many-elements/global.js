window.onload = function() {

  var hideButton = document.getElementById('button');

  hideButton.addEventListener("click", function() {
    
    var hide = document.getElementsByClassName('hide_me');

    for (var i = 0; i < hide.length; i++) {
      hide[i].style.display = "none";
    }
  });
  
};


