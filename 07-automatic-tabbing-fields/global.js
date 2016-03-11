window.onload = function() {

var numBox1 = document.getElementById("first")

var numBox2 = document.getElementById("second")

var numBox3 = document.getElementById("third")

var inputFields = document.querySelectorAll("input")

var i = 0

debugger;

//Check the value of the text box, and count length. 
numBox1.addEventListener("keyup", function() {
  
  var box1Value = numBox1.value 

  if(box1Value.length == 3){
    switchInputField()
    //DO THAT THING WHERE IT TABS.
    // next("inputs")  ?
  }
  else{
    //DO NOTHING
  } 
})
function switchInputField(){
  i++
  inputFields[i]

  

}



}