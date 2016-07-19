window.addEventListener("load", function() {

	//define the DOM element that will be clicked on
	var button = document.getElementById('button');

	//define variables for the elements to hide
	var toggleitems = document.getElementsByClassName('toggle_me');

	//define function that will hide those objects

	var toggle = function() {
		if (toggleitems[0].style.display == "none") {
			for (var i = toggleitems.length - 1; i >= 0; i--) {
				toggleitems[i].style.display = "block";}
		}

		else if (toggleitems[0].style.display == "block") {
			for (var i = toggleitems.length - 1; i >= 0; i--) {
				toggleitems[i].style.display = "none";}
		}
	};

	//create an event listener for the button
	button.addEventListener("click", toggle);

});