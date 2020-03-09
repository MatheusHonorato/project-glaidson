var previous = document.querySelector(".prev");
var next = document.querySelector(".next");
var slides = document.getElementsByClassName("slide");
var icon_menu = document.querySelector("#icon-menu");

var current = 0;

// Code that moves to the next slide
next.addEventListener("click", function () {
  slides[current].classList.remove("active");
  current ++;
  if (current === slides.length)
    current = 0;
  slides[current].classList.add("active");
});

// Code that moves to the previous slide
previous.addEventListener("click", function () {
  slides[current].classList.remove("active");
  current --;
  if (current < 0)
    current = (slides.length - 1);
  slides[current].classList.add("active");
});

let scrollPos = 0;
const nav = document.querySelector('#header');

function checkPosition() {
  let windowY = window.scrollY;
  
  if (windowY == 0) {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  } else {
    nav.style.background = "#FFF";
    nav.style.boxShadow = "0px 2px 9px rgba(0, 0, 0, 0.2)";
  }
}

window.addEventListener('scroll', checkPosition);

icon_menu.addEventListener('click', function () {
  var display_value = document.querySelector("#menu");
  if(display_value.style.display == "" || display_value.style.display == "block") {
    display_value.style.display = "none";
  } else {
    display_value.style.display = "block";
  }
});



