window.addEventListener("load", function(){

	var first = document.getElementById("first");
	var second = document.getElementById("second");
	var third = document.getElementById("third");

	first.addEventListener("keyup", function(){
		if(first.value.length == first.maxLength) {
			second.focus();
		}
	});
	
	second.addEventListener("keyup", function(){
		if (second.value.length == second.maxLength) {
			third.focus();
		}
	});

});