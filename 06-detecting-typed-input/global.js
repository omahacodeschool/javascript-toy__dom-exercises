window.addEventListener("load", function(){
	
	var fullName = document.getElementById("full_name");
	var greeting = document.getElementById("greeting");

	fullName.addEventListener("keyup", function(){

		greeting.innerHTML = ("Hiya, " + fullName.value + "!");
	});
});