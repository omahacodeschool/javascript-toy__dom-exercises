# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

Since the method for moving the cursor from the first cell to the second is identical for the method used to move the curson from the second cell to the third with only the id shifting, I'd probably vote for putting the ids in an array and looping through it.  As it stands, the solution isn't DRY.