# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text is hidden again.  This is because the hidden text's initial inline style is set to "display: none".

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?
 
Clicking the link does not reveal the text anymore.  The link simply shows as a hyperlink to #.  We also get the following error message in console Uncaught TypeError: Cannot read property 'addEventListener' of null(anonymous function) @ global.js:9.

The purpose of the code we just removed is to implement the function when the page is loaded.

---

> Describe the "contract" for `addEventListener`.

Listen for a click on DOM element "more_text_link".  Once clicked, first execute function that sets the variable 'text_to_show' equal to our document's id = "more_text_content". Then change the style of our document's element id = "more_text_content" from style="display: none" to style="display: inline".  Finally, take variable 'click_it' (which is element id="more_text_link") and set the link style="display: none".