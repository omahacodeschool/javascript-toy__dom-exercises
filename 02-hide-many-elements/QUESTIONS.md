# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.
I used _getElementsByClassName_ which finds elements by thier class names.
_var hide = document.getElementsByClassName('hide_me')_

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I changed the html file to so the hide_me classes had display styles. Then I attempted to use an _if_ loop to see if the _hide_me_ classes had a display style of _"none"_ or _"block"_ or "hide" them accordingly. I failed. So I changed it to your for loop soultion as to move on with the exercises.

