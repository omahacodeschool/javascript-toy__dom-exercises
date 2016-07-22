window.addEventListener("load", function(){

	var button = document.getElementById("button")
	var showMe = document.getElementsByClassName("show_me")

	button.addEventListener("click", function(){

		for (var i=0; i < showMe.length; i++) {
			showMe[i].style.display = "block";
		}
	});
});