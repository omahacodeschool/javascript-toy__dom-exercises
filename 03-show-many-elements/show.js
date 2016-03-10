window.onload = function() {

  //Show Button 
  var showButton = document.getElementById('button');

    showButton.addEventListener("click", function(){

    var show = document.getElementsByClassName('show_me');

    for (var i = 0; i < show.length; i++); {
      show[i].style.display = "block";
    }
  });

};

