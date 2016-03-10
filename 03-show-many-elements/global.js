window.onload = function() {

	var button = document.getElementById("button");

	button.addEventListener("click", function() {

		var show_these_objects = document.getElementsByClassName("hide_me");

		for (var i = 0; i < show_these_objects.length; i++) {
			show_these_objects[i].style.display = "block";
		}
	});

};