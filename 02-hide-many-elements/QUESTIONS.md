# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

We didn't have any specific IDs, so I basically needed to create an array of all the items with the "hide_me" class.
It's necessary to use query called document.getElementsByClassName (rather than by ID).


---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Once you have an array of the items you need to hide, it's important to then set up a for loop
and iterate through each element in the array. Inside the for loop,
you update the visibility style of each element to hidden until there are no more
div elements in the array.