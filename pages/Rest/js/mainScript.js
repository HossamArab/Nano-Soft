// global js
// haeder start
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}


// shuffle
// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("filter");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace("selected", " ");
        this.className += " selected";
    });
}
var mixer = mixitup('.suffle-container');