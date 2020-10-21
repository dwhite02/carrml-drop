/*
    PARALLAX SCROLL EFFECTS 
*/

window.addEventListener("scroll", function () {
    scroll();

    parallax("#bannerScroll", window.scrollY, .155, "#scrollBox");
    parallax("#imageScroll", window.scrollY, -.44, "#scrollBox");

});

// Parallax Image

function scroll() {
    var wrapper = document.getElementById('wrapper')
    var parallax_image = document.querySelector('.cd-hero');

    if (window.pageYOffset < wrapper.clientHeight) {
        parallax_image.style.backgroundPosition = "50% " + (Math.floor(window.pageYOffset / 2.5)) + "px";
        //parallax_image.style.backgroundSize = 100 + (window.pageYOffset * .0125) + "vw";
    }
}

// Elements Scroll

function parallax(el, distance, speed, location) {
    const item = document.querySelector(el);
    const view = document.querySelector(location);
    const offset = view.offsetTop - 75

    if (window.scrollY > offset) {
        item.classList.add("active");
        item.style.transform = `translateY(${(distance - offset) * speed}px)`;
    } else {
        item.classList.remove("active");
    }
}

/* 
    HAMBURGER BUTTON ICON NAVIGATION 
*/

const navIcon = document.querySelector('.nav-icon');
const navToggle = document.querySelector('.nav-toggle');
const myNav = document.querySelector('#myNav');

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navIcon.classList.toggle('active');
    myNav.classList.toggle('nav-open');
    document.querySelector('body').classList.toggle('active');
})

/*
    VIDEO TOGGLE
*/

const videoBox = document.querySelector('.cd-video-box')

videoBox.addEventListener('click', function () {
    document.querySelector('.cd-image-container').style.display = "none";
    document.querySelector('.cd-video-container').style.display = "block";
})

