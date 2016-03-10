window.onload = function() {

	var form = document.getElementById("full_name");

	form.addEventListener("keyup", function() {

		var greeting_para = document.getElementById("greeting");

		greeting_para.innerHTML = ("Hi, " + form.value + "!");
	});


};
