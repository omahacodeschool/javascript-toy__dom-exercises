window.onload = function() {

	var button = document.getElementById("button");

	button.addEventListener("click", function() {

		var hide_these_objects = document.getElementsByClassName("hide_me");

		for (var i = 0; i < hide_these_objects.length; i++) {
			hide_these_objects[i].style.display = "none";
		}
	});

};