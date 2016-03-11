# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Well, you need to use .getElementsByClassName().  Within the () you indicate which class you'd like to collect.  That will return a collection and you need to loop through the collection to hide all the elements within it.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

A loop was used to move through the collected elements.  It was necessary to indicate the size of the loop and what was to be done to each attribute of the class.