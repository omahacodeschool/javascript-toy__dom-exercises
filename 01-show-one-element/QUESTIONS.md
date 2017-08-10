# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Once the page is refreshed, whatever had been changed on the DOM will be reset upon the page being refreshed. So in this case, the text will not remain revealed, and will be hidden again, because the source code is such that it has dictated that it start out as being hidden. 

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

If I remove the window.onload function from the file, clicking the link no longer reveals the text. This is because the script tags for the JavaScript file are at the beginning of the html doc and is therefore trying to be run *prior* to the page loading, and because of this, the code doesn't work right.

The purpose of the window.onload code (and its resepective bits of code that follow) is to create an even that is NOT initiated by the user, per se, but is rather initialized by the loading of the page itself. It basically tells the browser to wait to execute the code *until* the page has loaded. 

---

> Describe the "contract" for `addEventListener`.

The "contract" for `addEventListener` is one that takes in two arguments, which can basically be summed up as 1). What event will initialize this code? and 2). What do you want to have happen once the event occurs?