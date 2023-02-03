const userOn = document.querySelector('.header-meta-list .user');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const cartbtn = document.getElementById('cart');

userOn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  userOn.style.color = 'orange';
  userOn.style.transition = '0.5s';
  userOn.style.cursor = 'pointer';
})

userOn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  userOn.style.color = 'black';
  userOn.style.transition = '0.5s';
  userOn.style.cursor = 'context-menu';
})

//if there is a current user
if (currentUser) {
  userOn.innerText = `${currentUser.username}`;

  userOn.addEventListener('click', (e) => {
    e.preventDefault();
    let isLogOut = confirm('Bạn có muốn đăng xuất không?');
    console.log(isLogOut)
    if (isLogOut) {
      localStorage.removeItem('currentUser');
      window.location.href = './form/login.html'; 
    }
  });
} else {
  userOn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './form/login.html'; 
  });
  cartbtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert ('Bạn phải đăng nhập để tiếp tục.');
    window.location.href = './form/login.html'; 
  });
}