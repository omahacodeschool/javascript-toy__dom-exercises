window.onload = function() {  
  var mirror_text = document.getElementById("full_name");
  mirror_text.addEventListener("keyup", function() {
    var letter = document.getElementById("full_name").value;
    document.getElementById("greeting").innerHTML = letter
  })//ends function in event listener    
};//ends window.onload// Your JavaScript goes here.