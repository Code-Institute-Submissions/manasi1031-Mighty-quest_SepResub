/*jshint esversion: 6 */

/* The event listener helps to create collapsible tabs for viewing data
one section at a time and not flooding page with data.
See credit offered in the Readme.md for this from w3schools as reference*/
// Code has been referenced from W3Schools and mentioned in credits of README.md
let tab = document.getElementsByClassName("lesson");
let x;

for (x = 0; x < tab.length; x++) {
  tab[x].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}