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
  const emailValue = email.value;
  if (emailValue.toLowerCase() === emailValue) {
    errorMessage.innerHTML = '';
    //  Submit the form
    contactForm.submit();
    // // Reset the form
    contactForm.reset();
    // Clear the localSotrage
    localStorage.removeItem('userData');
  } else {
    errorMessage.innerHTML = 'Please, enter your email in lower case. ( For example : stephanie@gmail.com)';
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 3000);
  }
});
