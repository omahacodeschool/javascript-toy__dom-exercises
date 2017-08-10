# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

In the provided solution, there is a large amount of code that is almost identical that is used twice. I also did this in my first solution (which, I admit took its queues from the provided solution). I realized this could be refactored by taking those two repeated blocks of code and turning them into a function that takes in two arguments, one for the first box, and one for the second. There's probably a lot more that can be done to refactor this code and make it dryer, but I'm still not very familiar with JavaScript.