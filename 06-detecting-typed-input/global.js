window.onload = function() {

//looks like I need to get the user's name


  var userName = document.getElementById("full_name");
  
  userName.addEventListener("keyup", function() {

  var greeting = document.getElementById("greeting");

  greeting.innerHTML = ("Hail Citizen " + userName.value + " well met!");

  });//closing curly bracket for the addEventListener open bracket
};//closing curly bracket for window.onload.
  
//could not tell what was being asked of us for changing the greeting so had to look at the solution. Found an explanation of innerHTML on w3schools.



//Changing HTML Content
//The easiest way to modify the content of an HTML element is by using the innerHTML property.

//To change the content of an HTML element, use this syntax:

//document.getElementById(id).innerHTML = new HTML
