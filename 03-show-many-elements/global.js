window.onload = function() {

  var click_it = document.getElementById("button");

  click_it.addEventListener("click", function(){

  var element_to_reveal = document.getElementsByClassName("reveal_me");

    for (var i = 0; i < element_to_reveal.length; i++) {
      element_to_reveal[i].style.display = "block";
    }

    click_it.style.display = "none";
  });
};