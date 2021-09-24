// Lefting works while mouse over

let works = document.getElementById("works-link");
let ul = document.getElementById("nav");
let subnav = document.getElementsByClassName("sub-nav");
let mainnav = document.getElementsByClassName("main-nav");

function leftout() {
    mainnav[0].style.left = "50px";
    mainnav[1].style.left = "50px";
    mainnav[2].style.left = "50px";
    subnav[0].style.opacity = '0';
    subnav[0].style.left = "200%";
    subnav[1].style.opacity = '0';
    subnav[1].style.left = "200%";
    subnav[2].style.opacity = '0';
    subnav[2].style.left = "200%";
};

function leftover() {
    mainnav[0].style.left = "0px";
    mainnav[2].style.left = "0px";
    subnav[0].style.opacity = '1';
    subnav[0].style.left = "15%";
    subnav[1].style.opacity = '1';
    subnav[1].style.left = "15%";
    subnav[2].style.opacity = '1';
    subnav[2].style.left = "15%";
};


works.addEventListener("mouseover", leftover);
works.addEventListener("mouseout", leftout);
subnav[0].addEventListener("mouseover", leftover);
subnav[0].addEventListener("mouseout", leftout);
subnav[1].addEventListener("mouseover", leftover);
subnav[1].addEventListener("mouseout", leftout);
subnav[2].addEventListener("mouseover", leftover);
subnav[2].addEventListener("mouseout", leftout);


// BANNER SLIDESHOW

var color = ['#92BCBA', '#530B75', '#E9CC96']
var slideIndex = 0;
var colorIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementById("bg-rect");
 
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
  };

  y.style.backgroundColor = color[colorIndex];
  colorIndex++;
  if (colorIndex +1 > x.length) {colorIndex = 0};

  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1 };
  x[slideIndex-1].style.opacity = "1";
  setTimeout(carousel, 3000); // Change image every 2 seconds
};

// BANNER FIRST LOAD

function firstLoad() {
  document.getElementsByClassName("titleFirstLoad")[0].style.opacity = '1';
  document.getElementById("nav").style.opacity = '1';
  document.getElementById("imgFirstLoad").style.left = '0';
  document.getElementById("imgFirstLoad").style.opacity = '1';
};


// BANNER SCROLL

var windowHeight = window.innerHeight;
var triggerHeight = Math.floor(windowHeight) * 0.2;

function scrollingBannerUp() {
  if (document.body.scrollTop > triggerHeight || document.documentElement.scrollTop > triggerHeight) {
    document.getElementsByClassName("titleFirstLoad")[0].style.top = '-300px';
    document.getElementById("nav").style.top = '-300px';
    document.getElementById("imgFirstLoad").style.top = '-300px';
  }
};

function scrollingBannerDown() {
  if (document.body.scrollTop < triggerHeight || document.documentElement.scrollTop < triggerHeight) {
    document.getElementsByClassName("titleFirstLoad")[0].style.top = '0px';
    document.getElementById("nav").style.top = '0px';
    document.getElementById("imgFirstLoad").style.top = '0px';
  }
};

window.onscroll = function() {scrollingBannerUp()};
window.onscroll = function() {scrollingBannerDown()};

// SLIDER SELECTOR

let landscape = document.getElementById('label-land').getBoundingClientRect();
let food = document.getElementById('label-food').getBoundingClientRect();
let events = document.getElementById('label-events').getBoundingClientRect();
let sliderSel = document.getElementById("moving-check");
let sliderProp = sliderSel.getBoundingClientRect();

function landscapeClick() {
  sliderSel.style.width = `calc(${landscape.width}px)`;
  sliderSel.style.left = `calc(${sliderProp.x - landscape.x}px)`
};

function foodClick() {
  sliderSel.style.width = `calc(${food.width}px)`;
  sliderSel.style.left = `calc(${food.x - sliderProp.x}px)`
};

function eventsClick() {
  sliderSel.style.width = `calc(${events.width}px)`;
  sliderSel.style.left = `calc(${events.x - sliderProp.x}px)`
};

document.getElementById('label-land').addEventListener("click", landscapeClick);
document.getElementById('label-food').addEventListener("click", foodClick);
document.getElementById('label-events').addEventListener("click", eventsClick);

landscapeClick();

//$(document).ready(function(){
//  $(window).resize(landscape())});


// OPEN CLOSE SLIDES

carouselLand = document.getElementById('carouselLand');
carouselFood = document.getElementById('carouselFood');
carouselEvents = document.getElementById('carouselEvents');
anim = document.getElementsByClassName('sliderAnimation');


function landscapeSlide() {
  carouselLand.style.height = '60vh';
  carouselLand.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0.5s';
  carouselFood.style.height = '0';
  carouselFood.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';
  carouselEvents.style.height = '0';
  carouselEvents.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';
  
}

function foodSlide() {
  carouselLand.style.height = '0';
  carouselLand.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';  
  carouselFood.style.height = '60vh';
  carouselFood.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0.5s';
  carouselEvents.style.height = '0';
  carouselEvents.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';
}

function eventsSlide() {
  carouselLand.style.height = '0';
  carouselLand.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';  
  carouselFood.style.height = '0';
  carouselFood.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1)';
  carouselEvents.style.height = '60vh';
  carouselEvents.style.transition = 'height 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0.5s';
}

landscapeSlide();

document.getElementById('label-land').addEventListener('click', landscapeSlide);
document.getElementById('label-food').addEventListener('click', foodSlide);
document.getElementById('label-events').addEventListener('click', eventsSlide);

