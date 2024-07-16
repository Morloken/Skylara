document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enter").classList.add("unfolded");





    const enterButton = document.getElementById("enterButton");
    if (enterButton) {
        enterButton.addEventListener("click", function(event) {
            event.preventDefault(); // Запобігання стандартій поведінці форми

            
            const passwordInput = document.getElementById("enterPassword");
            const emailInput = document.getElementById("enterEmail");

            
            let password = passwordInput.value.trim();
            let email = emailInput.value.trim();

            
            if(localStorage.getItem(password) == password && localStorage.getItem(email) == email) {
                window.location.href = "main.html";
            }else{
                let answer = confirm("Невірний логін або пароль. \n\nЧи хочете зареєструватися?");
                if(answer) {
                    window.location.href = "index.html";
                }
            }
            
            

           

            
        });
    } 
});


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