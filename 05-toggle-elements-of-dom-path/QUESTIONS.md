# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Instead of using just IDs or classes or tags, we can call up DOM elements with querySelectorAll. This way I can find identify the right ul and the items within it to toggle. From my code:

	var secondFive = document.querySelectorAll('ul.second_five li');

Here I'm defining a variable by first finding the ul with the class of "second-five" and finding all the 'li' tags within that ul. Those 'li' tags populate an array that I'm defining as "secondFive"

It is important to use  "querySelectorAll" because "querySelector" will only return the first result.