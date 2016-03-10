# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I started by trying to find by the classes of the objects using a (".movies .second_five") search. Eventually I realized that this was returning the whole unorderd list of movies as one object and that what I acutally needed to do was loop through the individual movies that had an <li> tag. So I needed to refine my search to first find that chunk of movies, then pick out each of those movies and add them to the array.