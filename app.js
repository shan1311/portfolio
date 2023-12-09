const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Function to smoothly scroll to a target element
function scrollToTarget(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of anchor links
        const targetElementId = item.getAttribute('href');
        scrollToTarget(targetElementId);
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

// Add an event listener to execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page when the page is loaded
    window.scrollTo(0, 0);
});

// Show or hide the "Scroll to Top" button based on scroll position
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // If the scroll position is greater than 250, show the button, otherwise hide it
    if (scroll_position > 250) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
