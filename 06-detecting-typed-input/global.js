window.addEventListener("load", function(){

	//get DOM element to be acted on (the textfield)
	var textfield = document.getElementById('full_name');

	//get the element that will change with typed content
	var textdisplay = document.getElementById('greeting');

	//define a function that will insert the typed text into the textdisplay
	var displayText = function(){
		textdisplay.innerHTML = "Hello " + textfield.value; //textfield.value returns a string of whatever text is in the field
	};

	textfield.addEventListener("keyup", displayText); //executes when a key is released

});