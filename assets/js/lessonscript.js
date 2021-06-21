/*jshint esversion: 6 */

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