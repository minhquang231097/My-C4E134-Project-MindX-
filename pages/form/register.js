'use strict';

//Element Input
const inputName = document.getElementById('name');
const inputPhonenumber = document.getElementById('phonenumber');
const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const regBtn = document.getElementById('register');
const cancelBtn = document.getElementById('cancel');
const homeBtn = document.getElementById('home');

//Get userArr data from LocalStorage
const userArr = getFromStorage();

//registerButton Event
regBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const data = {
        name: inputName.value,
        phonenumber: inputPhonenumber.value,
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    const validated = validateForm(data);
    if (validated.ok) {
    userArr.push(data);
    saveToStorage(userArr);
    console.log(userArr);
    window.location.href = './login.html';
    } else {
    window.alert(validated.message);
    }
})

//homeButton Event 
homeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = '../../index.html';
})

//cancelButton Event
cancelBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './login.html';
})

//validateForm Function
function validateForm(data) {
    let validated = {};
    validated.ok = false;
    validated.message = '';
    if (!data.name) {
        validated.message = 'Hãy nhập tên của bạn!';
    } else if (!data.phonenumber) {
        validated.message = 'Hãy nhấp số điện thoại!';
    } else if (!data.email) {
        validated.message = 'Hãy nhập email của bạn!';
    } else if (!data.username) {
        validated.message = 'Hãy nhập tên người dùng của bạn!';
    } else if (isUnique(data)) {
        validated.message = 'Tên người dùng không được trùng lặp!';
    } else if (!data.password) {
        validated.message = 'Hãy nhập mật khẩu!';
    } else if (data.password.length < 8) {
        validated.message = 'Mật khẩu phải có ít nhất 8 ký tự!';
    } else if (!confirmPassword.value) {
        validated.message = 'Hãy nhập lại mật khẩu!';
    } else if (data.password !== confirmPassword.value) {
        validated.message = 'Mật khẩu không khớp!';
    } else {
        validated.ok = true;
    }
    return validated;
}

//The function checks if the username is the same or not
function isUnique(data) {
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].username == data.username) return true;
    }
    return false;
}