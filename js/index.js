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
  var div_menu = document.querySelector("#div-menu");
  var display_value = document.querySelector("#menu");
  
  if (windowY == 0) {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
    div_menu.style.background = "transparent";
    display_value.style.backgroundColor = "#F0F0F0";

  } else {
    nav.style.background = "#FFF";
    nav.style.boxShadow = "0px 2px 9px rgba(0, 0, 0, 0.2)";
    div_menu.style.background = "#FFF";
    display_value.style.backgroundColor = "#FFF";

  }
}

window.addEventListener('scroll', checkPosition);

icon_menu.addEventListener('click', function () {
  var display_value = document.querySelector("#menu");
  var div_menu = document.querySelector("#div-menu");
  if(display_value.style.display == "" || display_value.style.display == "block") {
    display_value.style.display = "none";
    div_menu.style.marginTop = "0px";
    div_menu.style.backgroundColor = "transparent";
  } else {
    display_value.style.display = "block";
    div_menu.style.marginTop = "140px";
    div_menu.style.backgroundColor = "#FFF";
  }

});



