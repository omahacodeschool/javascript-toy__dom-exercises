# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

The method getElementsByClassName() in javaScript is a method called on a document (object) (would it work on other types of objects?) that takes one argument - the class name(s), as a String. To search for multiple class names, names must be separated with spaces. It will return a NodeList object representing a collection of elements.  

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I used a `for` loop. `For` loops in JS can be created with the word 'for' followed by three optional statements. The first executes before the loop starts and can be used to initialize a variable. The second defines the condition for the loop to run, and the third executes after the loop is run. 