window.onload = function() {

	var button = document.getElementById("button");

	button.addEventListener("click", function() {

		var toggle_these_objects = document.getElementsByClassName("toggle_me");

		for (var i = 0; i < toggle_these_objects.length; i++) {
			if (toggle_these_objects[i].style.display === "none") {
				toggle_these_objects[i].style.display = "block";
			}
			else {
				toggle_these_objects[i].style.display = "none";
			}
		}
	});

};