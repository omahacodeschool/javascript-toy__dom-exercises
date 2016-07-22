window.addEventListener("load", function(){

  var showMore = document.getElementById("more_text_link")
  var moreText = document.getElementById("more_text_content")

  showMore.addEventListener("click", function(){

    moreText.style.display = "inline";
    showMore.style.display = "none";

  });

});