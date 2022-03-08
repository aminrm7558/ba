const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".Items-of-Web");
hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('active');
    navbar.classList.toggle("active");

})