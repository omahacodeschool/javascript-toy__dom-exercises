# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I used "document.getElementsByClassName("hide_me")" which is returning an array of objects that have the class "hide_me". getElementsByClassName asks for a string of the classes you're looking for, and if you want more than one, you can separate them with spaces, or .newclassname if you want ONLY objects that fit all that criteria.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I used a for loop, which I'm learning is what is going to replace my beloved .each in ruby. For loops require three things: setting the appropriate variable, asking how long the loop should continue, and what should happen at the end of each loop to move it along.
So from my code:
for (var i = 0; i < things_to_hide.length; i++)
i = 0 (since it's looping through an array, it needs to start with the 0 index)
i < things_to_hide.length = it should continue until the number of things it has considered/acted upon is equal to the number of things in the array
i++ = add one to i, so when you go back to the beginning of the loop you're working on the NEXT object instead of the one you just finished (like i = i +1 or i += 1)
