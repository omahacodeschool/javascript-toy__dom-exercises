window.onload = function() {

var click_link = document.getElementById("more_text_link");

click_link.addEventListener("click", function(){

	var more_text = document.getElementById("more_text_content");
	more_text.style.display = "inline";

	click_link.style.display = "none";
});

};