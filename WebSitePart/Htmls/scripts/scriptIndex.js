window.addEventListener('scroll', function() {
    let bookingButton = document.getElementById('bookingButton');
    let headerBookingButtonContainer = document.getElementById('headerBookingButtonContainer');
    let main = document.querySelector('.main');
    
    if (window.scrollY > (main.offsetHeight - bookingButton.offsetHeight - 100)) {
        if (!headerBookingButtonContainer.contains(bookingButton)) {
            headerBookingButtonContainer.appendChild(bookingButton);
        }
    } else {
        if (!main.contains(bookingButton)) {
            document.querySelector('.ordering').appendChild(bookingButton);
        }
    }
});



document.getElementById('bookingButton').addEventListener('click', function() {
    window.location.href = "ordering.html";
});


//slider
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
       
       
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });
});
//slider end


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



/*Magic */

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class when element is in viewport
  function animateOnScroll() {
    const elements = document.querySelectorAll('.magictime');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);

// Initial check
animateOnScroll();







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


// Theme button


const themeToggleButton = document.getElementById('themeToggleButton');
const body = document.body;

// Function to toggle theme and save preference
function toggleTheme() {
    body.classList.toggle('dark-theme');
    

    let theme = 'light';
    if (body.classList.contains('dark-theme')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}

// Check saved theme preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Event listener for theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);
