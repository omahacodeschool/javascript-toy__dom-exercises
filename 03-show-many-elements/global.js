window.onload = function() {  
  var show_it = document.getElementById("button");
  show_it.addEventListener("click", function(){
    var things_to_show = document.getElementsByClassName("hide_me");
    for (var i = 0; i < things_to_show.length; i++) {
      things_to_show[i].style.display = "block"; 
    }    
  });  
};

//1. When the page loads initially, some elements should be hidden.
//  - No JavaScript is needed for this part of the feature.
//2. Find all of the elements you chose to hide.
//3. When you click a button, those elements should be shown.