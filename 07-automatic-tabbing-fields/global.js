window.onload = function() {  
  var first_nums = document.getElementById('first');
  var second_nums = document.getElementById('second');
  var third_nums =  document.getElementById('third');

  first_nums.addEventListener("keyup", function() {
    if (first_nums.value.length === 3){
      second_nums.focus();
    }//ends if statement
  })//ends function in event listener   

  second_nums.addEventListener("keyup", function() {
    if (second_nums.value.length === 3){
      third_nums.focus();
    }//ends if statement
  })//ends function in event listener  
};//ends window.onload// Your JavaScript goes here.


