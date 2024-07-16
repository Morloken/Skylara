document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup").classList.add("unfolded");

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






document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", function(event) {
            event.preventDefault(); // Запобігання стандартій поведінці форми

            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const emailInput = document.getElementById("email");
0
            let username = usernameInput.value.trim();
            let password = passwordInput.value.trim();
            let email = emailInput.value.trim();

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("email", email);

            console.log("Username:", username);
            console.log("Password:", password);
            console.log("Email:", email);

            window.location.href = "../Htmls/index.html";
        });
    } else {
        console.error("Signup button not found");
    }



    
});
