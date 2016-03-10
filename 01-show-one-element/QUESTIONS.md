# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

It is hidden again when the page reloads because the code to reveal the text doesn't execute until the user clicks the link. 

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

'window.onload = function() {};' allows you to define a function that will run after the web page has finished loading. It can get information from the DOM and use it within the function. 

---

> Describe the "contract" for `addEventListener`.

The `addEventListener` function in JS takes three parameters: event, function, and useCapture (optional). The event is a String that specifies the event being listened for, and function is the function that will run when the event occurs. The useCapture parameter is option and specifies whether the event should be executed in the capturing or the bubbling phase. The `addEventListener` function can be called on an element or on the document itself. 