window.addEventListener('scroll', function() {
    var bookingButton = document.getElementById('bookingButton');
    var headerBookingButtonContainer = document.getElementById('headerBookingButtonContainer');
    var main = document.querySelector('.main');
    
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
