# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I selected the DOM elements to hide by searching the document with the 'getElementsbyClassName' method with the argument "hide_me". 

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Originally I had tried to hide each of the elements with the 'forEach' method as I was under the assumption that what was returned by the document search method was an Array. This didn't work and when I asked Sumeet, he informed me that what is actually reutrned by this method is another type of collection. He suggested to use the 'for' loop which happens to be the method used in the solution provided. 