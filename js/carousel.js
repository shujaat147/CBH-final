// Initialize the carousel
var carousel = new bootstrap.Carousel(document.querySelector('#carouselSlider'), {
 interval: 2000, // Set the interval time (in milliseconds)
 wrap: true,     // Allow looping
 keyboard: false // Disable keyboard navigation
});

// Auto slide to the left on each interval
carousel._config.keyboard = true; // Re-enable keyboard navigation
setInterval(function () {
 carousel.prev();
}, carousel._config.interval);