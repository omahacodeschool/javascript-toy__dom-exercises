# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

When the reveal link is clicked and then the page reloaded, the text is hidden again. I'm guessing this is the case because the index.html code resets with the code "<span id="more_text_content" style="display: none">". Maybe if the state of the page post-click-event were saved as variable, the text would remain revealed upon reloading. Though I'm sure there is a simple command to achieve this result...

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

When removed, the reveal link no longer functions. From my understanding, the purpose of this code is to not implement code block within until the page itself has loaded completely. I believe that since the global.js page is loaded in at the top of index.html, and all of the global.js code is run before the pieces it's referencing on the index.html is even loaded. Therefor, when the click is made with the 'onload' removed, the conenction between the click-event and the object being clicked was never made.

---

> Describe the "contract" for `addEventListener`.

The contract for 'addEventListener' says that upon a "click", a function's block of code is run. This block sets a variable which is set to a search for the span object with the id 'more_text_content' in the index.hmtl. This variable, 'text_to_show', is then told to display the previously hidden contents of the span object "inline" with the previously loaded text. Finally, the original click-event link is told to hide.