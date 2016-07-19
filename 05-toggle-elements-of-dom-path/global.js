window.addEventListener("load", function() {

	//define the DOM element that will be clicked on
	var button = document.getElementById('toggle_button');

	//define variables for the elements to hide
	var secondFive = document.querySelectorAll('ul.second_five li');
	//define function that will hide those objects

	var toggle = function() {
		if (secondFive[0].style.display == "none") {
			for (var i = secondFive.length - 1; i >= 0; i--) {
				secondFive[i].style.display = "list-item";}
		}

		else if (secondFive[0].style.display == "list-item") {
			for (var i = secondFive.length - 1; i >= 0; i--) {
				secondFive[i].style.display = "none";}
		}
	};

	//create an event listener for the button
	button.addEventListener("click", toggle);

});