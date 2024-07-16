document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("enter").classList.add("unfolded");

  const enterButton = document.getElementById("enterButton");
  if (enterButton) {
    enterButton.addEventListener("click", function (event) {
      event.preventDefault(); // Запобігання стандартній поведінці форми

      const passwordInput = document.getElementById("enterPassword");
      const emailInput = document.getElementById("enterEmail");

      let password = passwordInput.value.trim();
      let email = emailInput.value.trim();

      // Отримання даних з localStorage
      let storedPassword = localStorage.getItem("userPassword");
      let storedEmail = localStorage.getItem("userEmail");

      // Перевірка даних
      if (storedPassword == password) {
        console.log("Password match");
        if (storedEmail == email) {
          console.log("Email match");
          window.location.href = "main.html";
        } else {
          let answer = confirm(
            "Невірний логін або пароль. \n\nЧи хочете зареєструватися?"
          );
          if (answer) {
            window.location.href = "index.html";
          }
        }
      }
    });
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
