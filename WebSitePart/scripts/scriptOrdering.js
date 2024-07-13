//toogle menu
function toggleMenu() {
    const navUl = document.querySelector('.navUl');
    navUl.classList.toggle('mobile-visible');
}

window.addEventListener('resize', function() {
    const navUl = document.querySelector('.navUl');
    if (window.innerWidth > 768) {
        
        navUl.classList.remove('mobile-visible');
    }
});



