//  Target the form and its children
const contactForm = document.querySelector('#contact-form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorMessage = document.querySelector('#error-msg');

contactForm.addEventListener('submit', (e) => {
  //  Prevent the form submit
  e.preventDefault();
  
  // Verify the email
  