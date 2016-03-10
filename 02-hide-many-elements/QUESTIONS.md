# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Honestly, I am trying to understand this stuff but just ended up copy/pasting the solution in to see how it works. Obviously, though, the ones with class "hide_me" are the ones that needed hidden.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I was not able to do this on my own. I understand everything up until this:

    for (var i = 0; i < divs_to_hide.length; i++) {
      divs_to_hide[i].style.display = "none";
    }

How does arithmetic have anything to do with hiding something or not? I thought it was just, like, "this has class 'hide_me' so hide it. I don't get this code AT. ALL. I watched the videos, I watched them again... if it's in there I missed it. I guess learning JS is going to be every bit as painful as learning Ruby. Yay.