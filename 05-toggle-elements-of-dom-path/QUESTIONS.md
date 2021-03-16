# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Okay, this was the first one I really wanted to cheat on, because ul / li stuff was just completely foreign to me.
After spending some time on W3Schools, I learned that ul classes represented unordered lists.
The items in the list are identified with the li tag.
The next problem I had was not knowing how to "show/hide" the li items in the other class.
getElementsByTagName('li') was my first attempt and it wouldn't leave the other li items alone.

I confess, after what felt like more than enough googling with no results, I peeked at the solution and saw that 
it invoked querySelectorAll. The class first had to be defined: "ul.second_five" followed by the li element identifier.
This stopped the function form involving the li items belonging to the other ul class
As soon as i plugged in that query, everything worked wonderfully. 
After reading up on querySelectorAll, I've got to say it looks like a really handy method, as it appears you can query multiple things at once, by separating each item with a comma. 