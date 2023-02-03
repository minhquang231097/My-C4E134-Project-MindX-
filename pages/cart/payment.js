'use strict';
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