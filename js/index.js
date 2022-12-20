// Target the hamburger menu
const modal = document.querySelector('#modal-menu')

// Target the hamburger menu
const hamburger = document.querySelector('.hamburger-btn')

// Target the close btn 
const closeBtn = document.querySelector('.modal-header')

// Target the portfolio menu
const portfolio = document.querySelector('.modal-portfolio')

// Target the about menu
const about = document.querySelector('.modal-about')

// Target the contact menu
const contact = document.querySelector('.modal-contact')



// Funtion to display the menu
function display() {
    modal.style.display='flex';
}

// Funtion to hide the menu
function hide() {
    modal.style.display='none';
}

// Add event on the hamburger btn
hamburger.addEventListener('click',display);
// Add event on the close btn
closeBtn.addEventListener('click',hide);

// Add event on the portfolio
portfolio.addEventListener('click', () => {
        modal.style.display='none';
});

about.addEventListener('click',hide);

contact.addEventListener('click', () => {
        modal.style.display='none';
});
