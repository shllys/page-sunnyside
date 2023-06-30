const nav = document.querySelector('.navegation');
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-link');

const navToggleFunc = function () {
    nav.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}

toggleBtn.addEventListener('click', navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', navToggleFunc);
}