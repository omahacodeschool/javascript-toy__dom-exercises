window.addEventListener("load", function(){

	var button = document.getElementById("button")
	var hideMe = document.getElementsByClassName("hide_me")

	button.addEventListener("click", function(){

		for(var i=0; i < hideMe.length; i++) {
			hideMe[i].style.display = "none";
		}
	});
});