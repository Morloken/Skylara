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


document.addEventListener('DOMContentLoaded', function() {
    let nicknameText = "Default nickname"; 
    let emailText = "Default email";
    let idText = "Default ID";


    if(localStorage.getItem('username') != null){ 
        nicknameText = localStorage.getItem('username');
    }

    if(localStorage.getItem('email') != null){
        emailText = localStorage.getItem('email');
    }

    
        idText = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;

    
    
    
    
    document.querySelector('.nicknameText').textContent = nicknameText;
    
    document.querySelector('.emailText').textContent = emailText;
    
    document.querySelector('.idText').textContent = idText;

   
});





// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});