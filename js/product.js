// window.onscroll = function () { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky')
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}
document.querySelector(".toggle-settings .fa-cog").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
  
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});
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