window.addEventListener("load", function(){

  var moreLink = document.getElementById("more_text_link");  // 1. Get the DOM element which will be clicked.
  var moreText = document.getElementById("more_text_content");  // 3. The block for the listener should get the DOM element containing the text to reveal.

  var expandLink = function (){
  	moreText.style.display = "block";  // 4. Modify that DOM element's style to change it's 'display' from a hidden value to a shown value.
  	moreLink.style.display = "none";  // 5. Also modify the DOM to hide the "More info..." link.
  };

  moreLink.addEventListener("click", expandLink);  // 2. Add a listener for the 'click' event onto that element.

});