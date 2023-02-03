"use strict";

//slideshow
let timeOut = 3000;
let slideIndex = 0;
let autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 3000;
    if (autoOn == true && timeOut <= 0) {
        showSlides();
    }
    setTimeout(autoSlides, 3000);
}

function prevSlide() {
    timeOut = 3000;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 5
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {
    timeOut = 3000;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const menu = document.querySelector("div.header-menu")
const clickbtn = document.querySelector("button.dropbtn")
clickbtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickbtn.style.color = "inherit"
    if (menu.className === "header-menu") {
        menu.className += " show"
    } else {
        menu.className = "header-menu"
    }
})

// Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("header-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


