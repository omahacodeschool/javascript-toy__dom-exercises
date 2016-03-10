# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

No, it's hidden again. I assume since we are refreshing the page and thus reloading the code we would need to code it to remain in the changed state if we wanting it to do so.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

It's to load the js file before the page is loaded.
---

> Describe the "contract" for `addEventListener`.

addEventListener is a method that you can run on var that "listens" for a specific action from the user. Once the action is detect then method runs that action's block of code