# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Because I wanted some practice using the advance query thing I used document.querySelectorAll(".hide_me"); to find all things witht the class "hide_me".

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I chose to use a loop, which is not as easy as it is in Ruby. In order to use a 'for' loop I needed to find the lenth of the array and increment another variable to find the index of the object in the array I wanted to modify. There has got to be a better way of doing that. Where are the pipes!?