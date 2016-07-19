# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Each line of text is set inside a div with a class called "hide_me" or "show_me". I can call up elements by class name and declare that array as a variable. In this case I used "document.getElementsbyClassName('hide_me')" to create an array of two divs with the "hide_me" class. The "contract" in this case is the "hide_me" because it describes the DOM elements to add to the array.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

When the button is clicked, the function fires and loops through the array, setting the "display" style for both elements to "none". The contracts for this event listener include the "click" action and the function that will loop through the array and change the appropriate styles.