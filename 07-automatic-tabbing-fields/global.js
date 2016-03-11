window.onload = function() {

  var areaCode = document.getElementById('first')
  areaCodeMaxLength = areaCode.getAttribute("maxlength"),
  localExchange = document.getElementById('second'),
  localExchangeMaxLength = localExchange.getAttribute("maxlength"),
  lineNumber = document.getElementById('third');
  
  function fieldShift (element, length, otherElement) {
    element.addEventListener("keydown", function() {
        if (element.value.length == length) {
            otherElement.focus();
        }
    });
  }


  fieldShift(areaCode, areaCodeMaxLength, localExchange)
  fieldShift(localExchange, localExchangeMaxLength, lineNumber)

}