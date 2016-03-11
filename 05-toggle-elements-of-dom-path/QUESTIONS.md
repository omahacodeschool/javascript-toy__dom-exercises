# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Well, in this case, instead of using what I have been using, .getElementsByClassName(), I used .querySelectorAll().  .getElementsByClassName() only takes one argument, so you can't really work your way through the tree.  However, .querySelectorAll() allows you to get more specific.  In this case, for the argument we put in "ul.second_five li", broken out, this is telling the computer to find all tags with the class "ul", then of those tags only take those that are labeled "second_five", the space is a descendant character telling it further to take only those elements with the first two attributes that are labeled as list items.