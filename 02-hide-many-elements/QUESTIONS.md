# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

The DOM elements to hide are those with the class name hide_me. This is done by retrieving them by their class name: document.getElementsByClassName('hide_me');. I'm not quite sure if this is the right description of the contract, but I know that a class is a shared marker for a group of elements and retrieving something by a class name is a way to get a collection of all of those elements together.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

The solution code that I ended up using hides elements by first retrieving them by their hide_me class name, then looping through that collection incrementally and changing the elements' display values to "none" (which makes them not visible to the user). This block of code is inside the listener function. The addEventListener method "contract" dictates that it requires two pieces of information in order to work: 1)type (a type of event to listen for, such as a user click); 2) listener (this is the object that receives notfication when the specified type of event occurs which, in this case, triggers the block of code that finds all the hide_me class elements and changes their display values to "none.") 
