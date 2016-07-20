# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

It may not be necessary to declare a variable for the maximum length of each field. Standard phone numbers all use the 3/3/4 notation for area code/line prefix/line number. It is much simpler to just use "if (typed_characters === 3){..."  than it is to define a constant variable and use it. It'll also shave down your filesize a little if that's what you're into.

One could also create a function that iterates the movement of the cursor between fields. Both event listeners could call this function instead of having separate functions that do almost the same thing.