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






//buying using localstorage
document.addEventListener('DOMContentLoaded', function () {
    const salesContainer = document.querySelector('.sales');
    const cartItemsContainer = document.querySelector('.cartItems');
  
    const countries = [
      { name: 'USA', image: '../Images/usa.jpg' },
      { name: 'France', image: '../Images/france.jpg' },
      { name: 'Japan', image: '../Images/japan.jpg' },
      { name: 'Australia', image: '../Images/australia.jpg' },
      { name: 'Italy', image: '../Images/italy.jpg' }
    ];
  
    function getRandomCountry() {
      return countries[Math.floor(Math.random() * countries.length)];
    }
  
    function getRandomPrice(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function addSale() {
      const country = getRandomCountry();
      const price = getRandomPrice(800, 1500);
      const sale = document.createElement('div');
      sale.classList.add('sale');
      sale.innerHTML = `
        <h2 class="saleName">Special Offer</h2>
        <h3 class="saleCountry">${country.name}</h3>
        <img src="${country.image}" alt="${country.name}" />
        <div class="saleInfo">
          <p class="saleDescription">Great deals to ${country.name}!</p>
          <p class="salePrice">$${price}</p>
          <p class="saleDiscount">$${price + 200}</p>
        </div>
        <button class="saleBuyButton">Buy Now</button>
      `;
  
      salesContainer.appendChild(sale);
  
      // Додати обробник подій для нової кнопки
      sale.querySelector('.saleBuyButton').addEventListener('click', function (event) {
        const saleInfo = {
          name: sale.querySelector('.saleName').innerText,
          country: sale.querySelector('.saleCountry').innerText,
          price: sale.querySelector('.salePrice').innerText,
          discount: sale.querySelector('.saleDiscount').innerText,
          description: sale.querySelector('.saleDescription').innerText,
          image: sale.querySelector('img').src
        };
  
        cartItems.push(saleInfo);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems(cartItems);
        sale.remove();
        addSale(); // Додати нову продажу після покупки
      });
    }
  
    function renderCartItems(cartItems) {
      cartItemsContainer.innerHTML = '';
      cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');
        cartItem.innerHTML = `
          <h2 class="saleName">${item.name}</h2>
          <h3 class="saleCountry">${item.country}</h3>
          <img src="${item.image}" alt="salePhoto" />
          <div class="saleInfo">
            <p class="saleDescription">${item.description}</p>
            <p class="salePrice">${item.price}</p>
            <p class="saleDiscount">${item.discount}</p>
          </div>
          <button class="removeButton">Видалити</button>
        `;
  
        cartItem.querySelector('.removeButton').addEventListener('click', function () {
          const index = cartItems.indexOf(item);
          if (index > -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems(cartItems);
          }
        });
  
        cartItemsContainer.appendChild(cartItem);
      });
    }
  
    // Load cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderCartItems(cartItems);
  
    // Initial call to add sales
    for (let i = 0; i < 5; i++) {
      addSale();
    }
  });
  