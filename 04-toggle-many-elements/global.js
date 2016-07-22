window.addEventListener("load", function(){

	var button = document.getElementById("button");
	var toggleMe = document.getElementsByClassName("toggle_me");

	button.addEventListener("click", function(){

		for (var i = 0; i < toggleMe.length; i++) {

			if(toggleMe[i].style.display === "none"){
				toggleMe[i].style.display = "block";
			} else {
				toggleMe[i].style.display = "none";
			}
		}
	});
});