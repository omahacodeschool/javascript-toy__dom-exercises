# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

First by calling for their "unique" class name, usign the getElementsByClassName method. This function selects all elements with that class name and create an array with those elements.
---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Use the getElementsByClassName method, creating an array of all elements with that class.
Then write a loop function to execute the change in style to each of those elements after the button is clicked.