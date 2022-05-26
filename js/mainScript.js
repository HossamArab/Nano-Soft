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
// start slider
let slideIndex = 0;
showSlidesauto();
showSlides(slideIndex)
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function showSlidesauto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesauto, 6000); // Change image every 6 seconds
}
// slideshow
// var slideIndextest = 0;
// showSlidesTest();

// function showSlidesTest() {
//     var i;
//     var slides = document.getElementsByClassName("mySlidesTest");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndextest++;
//     if (slideIndextest > slides.length) { slideIndextest = 1 }
//     slides[slideIndextest - 1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }
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
