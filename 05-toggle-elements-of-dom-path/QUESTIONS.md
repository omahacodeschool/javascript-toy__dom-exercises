# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used var movies = document.querySelectorAll("ul.second_five li"); because these had the inline style="display: none".  Here, I had to use document.querySelectorAll and search first for all <ul> tags, then class "second_five" to differentiate from "first_five", finally all <li> tags within <ul class="second_five">.  As far as I know, only document.querySelectorAll() can do this.