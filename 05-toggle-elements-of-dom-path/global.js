window.addEventListener("load", function() {

	//define the DOM element that will be clicked on
	var button = document.getElementById('toggle_button');

	//define variables for the elements to hide
	var secondFive = document.querySelectorAll('ul.second_five');
	var secondList = secondFive.getElementsByTagName('li');
	//define function that will hide those objects

	var toggle = function() {
		debugger;
		if (secondList[0].style.display == "none") {
			for (var i = secondList.length - 1; i >= 0; i--) {
				secondList[i].style.display = "block";}
		}

		else if (secondList[0].style.display == "block") {
			for (var i = secondList.length - 1; i >= 0; i--) {
				secondList[i].style.display = "none";}
		}
	};

	//create an event listener for the button
	button.addEventListener("click", toggle);

});