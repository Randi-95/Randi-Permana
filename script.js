const hamburger = document.querySelector('.hamburger')
const menuNav = document.querySelector('.nav-isi')
const closeIcon = document.querySelector('.close')
const footer = document.querySelector('.footer')

hamburger.addEventListener('click', function(){
    menuNav.classList.add('active')
})

closeIcon.addEventListener('click', function(){
    menuNav.classList.remove('active')
})

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function(){
    const windowScrool = window.scrollY > 0;
    navbar.classList.toggle('scrolling-active', windowScrool);
})

const navLinks = document.querySelectorAll('.menu a')

navLinks.forEach(link => {                      
    link.addEventListener('click', function(){
        menuNav.classList.remove('active')
    })
})


const project = document.querySelector('.card-portofolio')
const sertif = document.querySelector('.card-portofolio.sertif')

function showProject() {
    project.style.display = 'flex';
    sertif.style.display = 'none'; 
    project.style.justifyContent = 'center'
}
function showSertif(){
    sertif.style.display = 'flex';
    project.style.display = 'none';
    sertif.style.justifyContent = 'center'
}