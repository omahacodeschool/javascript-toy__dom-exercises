# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

The contract for finding the movies to toggle has to do with the querySelectorAll method. This particular method takes in a string as its argument, and in this string you can enter multiple selectors or elements to get a more specific match. In this case, we needed to get access to not only the div with the class of "second_five", but more specifically the li (list items) inside of the "second_five div" only (as opposed to the li's inside of the first div). So using "ul.second_five li" (note the spacing) gets us inside the ul with the class of "second five that is within"