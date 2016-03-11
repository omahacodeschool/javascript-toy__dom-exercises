# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text gets hidden again. The page refreshes and it's back to it's original state -- before anyone has clicked "more" yet.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

No, the link does not reveal the text and the console shows error: Uncaught TypeError: Cannot read properly 'addEventListener'... The purpose of the windown.onload code is to load the entire page and it's content. If you don't include this, the content can't load

---

> Describe the "contract" for `addEventListener`.

addEventListener requires two pieces of information in order to work: 1)type: a type of event to listen for (such as a user click); 2) listener: this is the object that receives notfication when the specified type of event occurs (triggering a block of code to run). 