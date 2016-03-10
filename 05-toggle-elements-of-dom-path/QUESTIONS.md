# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

The querySelectorAll method allows you to pass in selectors as parameters. In your selectors, you can specify a class name or object type (html tag type) that you would like to return. It returns a nodeList collection of elements matching the given parameters. The querySelectorAll method is different because you can specify a type of element that you wish to return as well as a class name or id. 