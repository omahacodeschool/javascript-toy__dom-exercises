window.onload = function() {

  var name_field = document.getElementById("full_name");

  name_field.addEventListener("keyup", function() {

    var greeting_div = document.getElementById("greeting");

    greeting_div.innerHTML = ("Hello there, " + name_field.value + "!");

  });

};


<img class="alignnone wp-image-2195 size-full" src="//www.bsbdesign.com.s3.amazonaws.com/wp-content/uploads/2015/08/Leader_Dan_Swift.jpg" alt="Dan Swift" width="780" height="300">