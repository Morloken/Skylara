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