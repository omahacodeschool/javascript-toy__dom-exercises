# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Well at first I attempted to find the elements in question using the 'getElementsByClassName' method, but this didn't work. I'm still not sure why but I believe it has something to do with the elements being list items of an unordered list. Going back to today's notes, I remembered the 'querySelectorAll' method, which got me one step closer. I knew that I then needed to refine the search parameters of 'second_five' with the a 'ul' tacked on front to search for unordered list elements with the class of 'second_five', then the list items within. This resulted in the search being 'ul.second_five li'. Now I was able to toggle the elements as I liked, but they were listed without their bullets. Having a peak at the solution, I found that I needed to set the style.display to 'list-item' instead of 'block' or 'inline'. Now it works as it should.