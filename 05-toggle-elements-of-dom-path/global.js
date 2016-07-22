window.addEventListener("load", function(){

	var secondFive = document.querySelectorAll("ul.second_five");
	var button = document.getElementById("toggle_button");

	button.addEventListener("click", function(){

		for (var i = 0; i < secondFive.length; i++) {
			if(secondFive[i].style.display === "none") {
				secondFive[i].style.display = "block";
			} else {
				secondFive[i].style.display = "none"
			}
		}
	});
});