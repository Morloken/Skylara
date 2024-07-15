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
    const totalAmountElement = document.querySelector('.totalAmount');
  
    const countries = [
      { name: 'USA', image: '../Images/usa.jpg' },
      { name: 'France', image: '../Images/france.jpg' },
      { name: 'Japan', image: '../Images/japan.jpg' },
      { name: 'Australia', image: '../Images/australia.jpg' },
      { name: 'Italy', image: '../Images/italy.jpg' },
      { name: 'Ukraine', image: '../Images/ukraine.jpg' }
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
              <label for="rowSelect">Row:</label>
              <select class="rowSelect">
                ${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
              </select>
              <label for="seatSelect">Seat:</label>
              <select class="seatSelect">
                ${['A', 'B', 'C', 'D', 'E', 'F'].map(seat => `<option value="${seat}">${seat}</option>`).join('')}
              </select>
            </div>
            <button class="saleBuyButton" disabled title="Виберіть місце або ряд">Buy Now</button>
          `;
      
          salesContainer.appendChild(sale);
      
          const rowSelect = sale.querySelector('.rowSelect');
          const seatSelect = sale.querySelector('.seatSelect');
          const buyButton = sale.querySelector('.saleBuyButton');
      
          rowSelect.addEventListener('change', updateButtonState);
          seatSelect.addEventListener('change', updateButtonState);
      
          function updateButtonState() {
            if (rowSelect.value && seatSelect.value) {
              buyButton.disabled = false;
            } else {
              buyButton.disabled = true;
            }
          }
      
          // Додати обробник подій для нової кнопки
          buyButton.addEventListener('click', function (event) {
            const saleInfo = {
              name: sale.querySelector('.saleName').innerText,
              country: sale.querySelector('.saleCountry').innerText,
              price: sale.querySelector('.salePrice').innerText,
              discount: sale.querySelector('.saleDiscount').innerText,
              description: sale.querySelector('.saleDescription').innerText,
              image: sale.querySelector('img').src,
              row: rowSelect.value,
              seat: seatSelect.value,
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString() // Додавання часу покупки
            };
      
            cartItems.push(saleInfo);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems(cartItems);
            sale.remove();
            addSale(); // Додати нову продажу після покупки
            updateTotalAmount(); // Оновити загальну суму
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
                <p class="seatInfo">Row: ${item.row}, Seat: ${item.seat}</p>
                <p class="purchaseDate">Date: ${item.date}</p> <!-- Додавання дати в кошик -->
                <p class="purchaseTime">Time: ${item.time}</p> <!-- Додавання часу в кошик -->
              </div>
              <button class="removeButton">Видалити</button>
            `;
      
            cartItem.querySelector('.removeButton').addEventListener('click', function () {
              const index = cartItems.indexOf(item);
              if (index > -1) {
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderCartItems(cartItems);
                updateTotalAmount(); // Оновити загальну суму після видалення
              }
            });
      
            cartItemsContainer.appendChild(cartItem);
          });
        }
      
        function updateTotalAmount() {
          const totalAmount = cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
          }, 0);
      
          totalAmountElement.innerText = `$${totalAmount.toFixed(2)}`;
        }
      
        // Load cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        renderCartItems(cartItems);
        updateTotalAmount();
      
        // Initial call to add sales
        for (let i = 0; i < 5; i++) {
          addSale();
        }
      });
      