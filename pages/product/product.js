'use strict';

const menu = document.querySelector("div.header-menu");
const clickbtn = document.querySelector("button.dropbtn");
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

let priceList = document.querySelector('.product-info span strong');
let price = Number(priceList.textContent) * 1000;
let priceThousand;

const selectbtn1 = document.querySelector('.product-size .select-1');
const selectbtn2 = document.querySelector('.product-size .select-2');
const selectbtn3 = document.querySelector('.product-size .select-3');

selectbtn1.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('prices', price);
    selectbtn1.style.backgroundColor = 'orange';
    selectbtn2.disabled = true;
    selectbtn3.disabled = true;
    priceThousand = price / 1000;
    priceList.textContent = priceThousand + '.000';
})

selectbtn2.addEventListener('click', (e) => {
    e.preventDefault();
    price += 10000;
    localStorage.setItem('prices', price);
    selectbtn2.style.backgroundColor = 'orange';
    selectbtn1.disabled = true;
    selectbtn3.disabled = true;
    priceThousand = price / 1000;
    priceList.textContent = priceThousand + '.000';
})

selectbtn3.addEventListener('click', (e) => {
    e.preventDefault();
    price += 20000;
    localStorage.setItem('prices', price);
    selectbtn3.style.backgroundColor = 'orange';
    selectbtn1.disabled = true;
    selectbtn2.disabled = true;
    priceThousand = price / 1000;
    priceList.textContent = priceThousand + '.000';
})

const orderbtn = document.querySelector('.product-order button');
const userData = JSON.parse(localStorage.getItem('currentUser'));

orderbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!userData) {
        alert ('Bạn phải đăng nhập để tiếp tục.');
        window.location.href = '../form/login.html';
    } else {
        let confirmOrder = confirm('Bạn có chắc chắn đặt hàng không?');
        if (confirmOrder) {
            alert ('Cảm ơn bạn đã đặt hàng');
            window.location.href = '../cart/payment.html';
        }
    }
})

