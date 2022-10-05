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
//JS Swiper
const wrapper = document.querySelector(".wrapper-cat");
const buttons = document.querySelectorAll(".btns-cat > span");

const back = buttons[0];
const forward = buttons[1];

back.onclick = function () {
  wrapper.appendChild(wrapper.firstElementChild);
};
forward.onclick = function () {
    wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild);
};
function swiperAuto() {
    wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild);
    setTimeout(swiperAuto, 5000);
};

swiperAuto();