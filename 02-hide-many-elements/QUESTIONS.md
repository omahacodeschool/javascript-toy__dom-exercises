# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I used the document.getElementsByClassName("hide_me") function.
This function is contracted to search the DOM for any element that contains the class="hide_me".

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I tried to hide each element via one operation, but that didn't work.  I eventually had to give up and use the solution provided to us.  We use a loop, but I don't understand what it is doing.