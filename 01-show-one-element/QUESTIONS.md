# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

It will be hidden again. When the browser refreshes the page it resets the DOM to the way it appeared when it received the page from the server. The event listener has not been activated yet.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

The link does not work. That first event listener loads the original state of the document, including setting the variables and defining the functions within.

---

> Describe the "contract" for `addEventListener`.

The "contract" for addEventListener is the action (click, load, mousedown, etc), and the function to execute on that action.