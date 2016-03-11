window.onload = function() {

//looks like I need to get all of the pieces of the phone number separately in order to just get their lengths. Well maybe there is no point in getting the length of the last 4 we don't need it to jump to the next box. 
  var firstThreeDigits = document.getElementById("first");
  var secondThreeDigits = document.getElementById("second");
  var lastFourDigits = document.getElementById("third");

//since I learned how to count keystrokes I will do it again. I want to make my jump to the next text box when the user has made as many keystrokes as the character limit of the text box. New item: getAttribute. That was a solution lookup. I was looking for a way to get the value for "maxlength."
  firstThreeDigits.addEventListener("keyup", function() {
    firstBox = firstThreeDigits.value.length;
    firstBoxMax = parseInt(firstThreeDigits.getAttribute("maxlength"));

//this is where the magic happens. firstBoxMax is the "maxlength" for the box made into an integer. firstBox is the number of keystrokes so far. If the number of keystrokes hits the limit, "focus" moves the cursor to the next box and highlights it in blue. I had never heard of focus until this exercise. 
    if(firstBox === firstBoxMax) {
      secondThreeDigits.focus();
    } //closing curly bracket for if statement open bracket

  });//closing curly bracket for first addEventListender open bracket

//repeat of what I did for the jump from the first box to the second. This time it is to jump from the second box to the last.
  secondThreeDigits.addEventListener("keyup", function() {
    secondBox = secondThreeDigits.value.length;
    secondBoxMax = parseInt(secondThreeDigits.getAttribute("maxlength"));

    if(secondBox === secondBoxMax) {
      lastFourDigits.focus();
    } //closing curly bracket for second addEventListener open bracket
  
   });//closing curly bracket for the addEventListener open bracket
};//closing curly bracket for window.onload.







//doc.findElementByAttribute("myAttribute", "aValue");
//var x = document.getElementsByTagName("H1")[0].getAttribute("class");



//<script type="text/javascript">
//function ValidatePassKey(tb) {
//  if (tb.TextLength >= 4)
 //   document.getElementById(tb.id + 1).focus();
 // }
//}

//$('#txt1').keyup(function() {
  //   if(this.value.length == $(this).attr('maxlength')) {
 //        $('#txt2').focus();
 //    }
// });


//1. The user sees an HTML form, which has three separate fields for parts of a phone number (ex: 402-555-0000).
//2. Write JavaScript so that when a user types in enough characters for each of the first two fields, their cursor automatically moves to the next field.







// Your JavaScript goes here.