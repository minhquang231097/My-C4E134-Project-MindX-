const menuList = document.querySelector("select#menu-list");
const imgList = document.querySelectorAll('.right img');
const productList = document.querySelectorAll('.right p');

menuList.addEventListener('change', () => {
    switch (menuList.value) {
        case "all":
            window.location.href = '../menu.html';
            break;
        case "coffee":
            window.location.href = './coffee.html';
            break;
        case "tea":
            window.location.href = './tea.html';
            break;
        case "juice":
            window.location.href = './juice.html';
            break;
        case "others":
            window.location.href = './others.html';
            break;
        default:
            window.location.href = '../menu.html';
            break;
    }
})

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', () => window.location.href = `../product/product-${i + 5}.html`)
}

for (let i = 0; i < productList.length; i++) {
    productList[i].addEventListener('click', () => window.location.href = `../product/product-${i + 5}.html`)
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
window.onclick = function (e) {
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