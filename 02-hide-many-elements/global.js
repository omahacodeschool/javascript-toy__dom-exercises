window.addEventListener("load", function(){

	//define the DOM element that will be clicked on
	var hidebutton = document.getElementById('button');

	//define variables for the elements to hide
	var hideableitems = document.getElementsByClassName('hide_me');

	//define function that will hide those objects

	var hideit = function() {
		for (var i = hideableitems.length - 1; i >= 0; i--) {
			hideableitems[i].style.display = "none";
		}
	}

	//create an event listener for the button
	hidebutton.addEventListener("click", hideit);


});