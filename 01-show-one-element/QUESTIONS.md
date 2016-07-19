# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The Text is hidden again because the JavaScript is using an Event Listener to display the hidden text when the link it clicked.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

No the link does not execute the function. The purpose of this code is to run the function once the page and its dependent resources have finished loading.

---

> Describe the "contract" for `addEventListener`.

I'm not sure I am reading the question correctly. To my understanding, the contract for addEventListener is an agreement that the function or style change that is to be executed to an element will not occur unitl an event triggers the client-side request.