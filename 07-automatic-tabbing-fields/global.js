window.addEventListener("load", function(){

	//the text fields that will be affected by an action
	var areacode = document.getElementById('first');
	var prefix = document.getElementById('second');
	var line = document.getElementById('line');

	//create function that will move the cursor if the field is maxxed out
	var moveCursor = function() {

	};

	//add an Event Listener for each field that will activate on keyup and fire the function to move the cursor
	areacode.addEventListener("keyup", moveCursor);
	prefix.addEventListener("keyup", moveCursor);
	line.addEventListener("keyup", moveCursor);

});