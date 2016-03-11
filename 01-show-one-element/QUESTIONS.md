# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The hiding of the text is driven by the event of you clicking on the link.  When you refresh the page it restores it to a state in which that click hasn't occurred, so the text is still hidden.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Basically, you're removing the event that loads all that follows it.  In this case, the window.onload loads all the JS when the page is done loading.  Without that, it's just an uncalled function.

---

> Describe the "contract" for `addEventListener`.

You need to tell it what event it's listening for and what to do when the event occurs.