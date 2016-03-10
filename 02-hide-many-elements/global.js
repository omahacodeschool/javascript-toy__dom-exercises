window.onload = function() {  
  var hide_it = document.getElementById("button");
  hide_it.addEventListener("click", function(){
    var things_to_hide = document.getElementsByClassName("hide_me");
    for (var i = 0; i < things_to_hide.length; i++) {
      things_to_hide[i].style.display = "none"; 
    }    
  });  
};

