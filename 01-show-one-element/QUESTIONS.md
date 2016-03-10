# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text gets hidden again. 

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

No, the link does not reveal the text and the console shows error: Uncaught TypeError: Cannot read propery 'addEventListener'... The purpose of the windown.onload code is 

---

> Describe the "contract" for `addEventListener`.

The contract for addEventListener is 