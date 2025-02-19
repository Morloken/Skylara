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




    // animate__animated animate__backInRight
    const exitButton = document.getElementsByClassName("exitFromProfile")[0];
    
    exitButton.addEventListener("click", function() {
    
        if(exitButton) {
                let answer= confirm("Ви впевнені, що хочете вийти з профілю?");
                if(answer) {
                    let answer2 = confirm("Ви хочете видалити дані входу аккаунту?\n\nТак\nНі");
                    if(answer2) {
                    window.location.href = "index.html";
                    localStorage.clear();
                    }else{
                        window.location.href = "index.html";
                    }
                }
        }
    });
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