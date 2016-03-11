# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text hides again and the link is revealed. The DOM appears to refresh as the page refreshes. Since the defualt html is to hide the text, the refreshed page reverts to that state.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

The page loads but the link to reveal text does not work. My guess is the javascript is being loaded before the html is finished loading so when the js trys to set variable based on the nonexistant html nothing happens.

---

> Describe the "contract" for `addEventListener`.

Add event listen when called on something needs 2 aruments ("what it's listening for", "block of code to run when it hears what it's listening for"). It then runs that block of code.