# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Once refreshed, the text goes away, since that change was on the surface of the dom only and not to the actual code that loads onto the page.

---

> Remove `window.onload = function() {` (and the closing `}`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

It breaks the link! I'm not totally clear as to why but here's what I think is happening: the removed code is *establishing* what that link does when the page loads, and then doing it when it's clicked. So if you don't establish what it's going to do, it won't do it? (Is...is that right? Or way off?)

---

> Describe the "contract" for `addEventListener`.

addEventListener requires two things--what it's listening for (in this case, a "click"), and what to do once it "hears" it (in this case a function that hides 