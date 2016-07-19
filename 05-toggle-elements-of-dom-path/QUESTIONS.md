# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

By using .querySelectorAll(), I am able to select elements more specificly. Given the argument "ul.second_five li", the program looks through all the ul tags and selects the ul tag with the class of second_five then with the space and the li it selects the descendants of th ul tag and gives the toggling effect to those elements.