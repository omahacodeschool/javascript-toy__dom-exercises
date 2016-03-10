# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used .querySelectorAll(".second_five li") 
".second_five" finds every object with the ".second_five" class
"li" (no dot!) gets all the <li> tags within the .second_five class
Using .querySelectorAll() gave me a more advanced search function than the 
.getElementsByClassName() I was using in previous examples.