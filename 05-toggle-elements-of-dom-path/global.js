window.onload = function() {  
  var show_hide_switch = document.getElementById("toggle_button");
  show_hide_switch.addEventListener("click", function(){
    var things_to_show = document.querySelectorAll(".second_five li");
    for (var i = 0; i < things_to_show.length; i++) {
      if (things_to_show[i].style.display === "none") {
       things_to_show[i].style.display = "block"; 
      } else { 
        things_to_show[i].style.display = "none"     
      }//ends else   
    }//ends for loop
  });//ends show_hide_switch 
};//ends window.onload
