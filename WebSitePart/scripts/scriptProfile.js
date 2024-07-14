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
    
    
    
    
    document.querySelector('.nicknameText').textContent = nicknameText;
    
    document.querySelector('.emailText').textContent = emailText;
    
    document.querySelector('.idText').textContent = idText;

   
});
