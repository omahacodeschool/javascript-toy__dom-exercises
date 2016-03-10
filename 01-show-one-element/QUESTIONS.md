# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text gets hidden again. The page refreshes and it's back to it's original state -- aka, nobody has clicked "more" yet.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

No, the link does not reveal the text and the console shows error: Uncaught TypeError: Cannot read properly 'addEventListener'... The purpose of the windown.onload code is to load the entire page and it's content. I guess if you don't include this it will mess up some of the content.

---

> Describe the "contract" for `addEventListener`.

The contract for addEventListener is a method that attaches an event handler to the document. I don't know about the contract. I'm finding the "contract" stuff to be too vague. To me, there's not really a "contract" (i.e., a document that I could read through and reference to understand what a thing means). Where's my reference document? Is it meant to be my innate understanding of code? Or does it come from the dozens and dozens of different resources I've used to try to learn code? I don't have "contract" knowledge yet. 