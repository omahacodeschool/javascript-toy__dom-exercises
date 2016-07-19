window.addEventListener("load", function() {

	//define the DOM element that will be clicked on
	var showbutton = document.getElementById('button');

	//define variables for the elements to hide
	var showableitems = document.getElementsByClassName('show_me');

	//set the display for the items to "none" until click
	for (var i = showableitems.length - 1; i >= 0; i--) {
		showableitems[i].style.display = "none";
	}

	//define function that will hide those objects

	var showit = function() {
		for (var i = showableitems.length - 1; i >= 0; i--) {
			showableitems[i].style.display = "block";
		}
	}

	//create an event listener for the button
	showbutton.addEventListener("click", showit);

});