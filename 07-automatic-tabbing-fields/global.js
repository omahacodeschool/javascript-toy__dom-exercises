window.onload = function() {

	var first_input = document.getElementById("first");
	var second_input = document.getElementById("second");
	var third_input = document.getElementById("third");

	first_input.addEventListener("keyup", function() {
		typed_characters = first_input.value.length
		max_length = parseInt(first_input.getAttribute("maxlength"));

		if (typed_characters === max_length) {
			second_input.focus();
		}
	});
	second_input.addEventListener("keyup", function() {
		typed_characters = second_input.value.length
		max_length = parseInt(second_input.getAttribute("maxlength"));

		if (typed_characters === max_length) {
			third_input.focus();
		}
	});

};