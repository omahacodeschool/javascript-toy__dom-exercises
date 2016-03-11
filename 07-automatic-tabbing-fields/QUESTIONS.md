# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

1. We use if (typed_characters === max_characters) twice.  We could Refactor this into it's own method and call that method twice.

2. We use

area_code.addEventListener("keyup", function() {
    typed_characters = area_code.value.length;
    max_characters = parseInt(area_code.getAttribute("maxlength"));

    and

 middle_numbers.addEventListener("keyup", function() {
    typed_characters = middle_numbers.value.length;
    max_characters = parseInt(middle_numbers.getAttribute("maxlength"));

Here, we could devise a method that takes an argument for either area_code or middle_numbers.
