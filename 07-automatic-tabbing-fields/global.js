window.addEventListener("load", function(){

	//the text fields that will be affected by an action
	var areacode = document.getElementById('first');
	var prefix = document.getElementById('second');
	var linenumber = document.getElementById('third');

	//create function that will move the cursor if the field is maxxed out
	var moveCursor = function() {
		if (areacode.value.length >= 3) {prefix.focus();}
		if (prefix.value.length >= 3) {linenumber.focus();}
	};

	//add an Event Listener for each field that will activate on keyup and fire the function to move the cursor
	areacode.addEventListener("keyup", moveCursor);
	prefix.addEventListener("keyup", moveCursor);

});