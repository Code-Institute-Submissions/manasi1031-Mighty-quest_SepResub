/*jshint esversion: 6 */

/* The event listener helps to create collapsible tabs for viewing data
one section at a time and not flooding page with data.
See credit offered in the Readme.md for this */
var tab = document.getElementsByClassName("lesson");
var x;

for (x = 0; x < tab.length; x++) {
  tab[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}