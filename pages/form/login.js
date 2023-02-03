'use strict';

//Element Input
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const loginBtn = document.getElementById('signin');
const regBtn = document.getElementById('signup');
const homeBtn = document.getElementById('home');

//Get userArr data from LocalStorage
const userArr = getFromStorage();

//LoginButton Event
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const user = checkUser();
    if (inputUsername.value.trim().length === 0) {
    window.alert('Hãy nhập tên người dùng của bạn!');
    } else if (!user) {
    window.alert('Tên người dùng không tồn tại!');
    } else if (inputPassword.value.trim().length === 0) {
    window.alert('Hãy nhập mật khẩu!');
    } else if (inputPassword.value !== user.password) {
    window.alert('Sai mật khẩu!');
    } else {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.alert('Đăng nhập thành công!');
    window.location.href = '../../index.html';
    }}
);

//homeButton Event 
homeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = '../../index.html';
})

//cancelButton Event
regBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './register.html';
})

//checkUser Function
function checkUser() {
    for (let i = 0; i < userArr.length; i++) {
        if (inputUsername.value == userArr[i].username) {
            return userArr[i];
        }
    }
}
