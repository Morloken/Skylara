document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup").classList.add("unfolded");




    document.getElementById("signupButton").addEventListener("click", function() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let email = document.getElementById("email").value;
        




       // window.location.href = "../Htmls/index.html"; перехід на головну сторінку
        

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("email").value = "";
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







document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", function(event) {
            event.preventDefault(); // Запобігання стандартній поведінці форми

            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const emailInput = document.getElementById("email");

            let username = usernameInput.value.trim();
            let password = passwordInput.value.trim();
            let email = emailInput.value.trim();

            console.log("Username:", username);
            console.log("Password:", password);
            console.log("Email:", email);

            if (username && password && email) {
                let user = {
                    username: username,
                    password: password,
                    email: email
                };

                try {
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log("User saved to localStorage");
                } catch (e) {
                    console.error("Error saving user to localStorage", e);
                }

                document.getElementById("signupForm").reset();

                try {
                    window.location.href = "../Htmls/index.html"; // Переконайтеся, що шлях правильний
                    console.log("Redirecting to main page");
                } catch (e) {
                    console.error("Error redirecting to main page", e);
                }
            } else {
                alert("Будь ласка, заповніть усі поля.");
            }
        });
    } else {
        console.error("Signup button not found");
    }
});
