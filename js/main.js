/* ------------------------------------- Responsive Nav Menu ------------------------------------ */

// Get Responsive Nav Icon
let responsiveIcon = document.querySelector('.responsive-icon');

// Trigger Function On Click
responsiveIcon.addEventListener('click', toggleNav);

// Toggle Nav Function
function toggleNav() {
  // Get Nav Menu
  let navMenu = document.querySelector('ul.nav');

  // Toggle Class On Nav Menu
  navMenu.classList.toggle('responsive-nav');

  // Slide It With Increasing The Height To Its Scroll Height
  if (navMenu.style.maxHeight) {
    navMenu.style.maxHeight = null;
  } else {
    navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
  }
}

/* -------------------------------------- Smooth Scrolling -------------------------------------- */

// Smooth Scrolling To Footer On Contact Click
let contactNav = document.getElementById('contact');
let footer = document.getElementById('footer');
contactNav.onclick = function (e) {
  e.preventDefault();
  smoothScrolling(footer.offsetTop);
};

// Smooth Scrolling On Go To Top Arrow
let topArrow = document.querySelector('.topArrow');
topArrow.onclick = function () {
  smoothScrolling(0);
};

// Fade Go To Top Arrow
window.onscroll = function () {
  if (window.pageYOffset >= 300) {
    topArrow.setAttribute('style', 'opacity: 1');
  } else {
    topArrow.setAttribute('style', 'opacity: 0');
  }
};

// Smooth Scrolling Function
function smoothScrolling(elementTop) {
  window.scrollTo({
    top: elementTop,
    behavior: 'smooth',
  });
}

/* ----------------------------------- Footer Form Validation ----------------------------------- */

// Get Error Message Container
let errorMessage = document.querySelector('.errorMessage');
// Get Error Message Close Button
let closeMessage = document.querySelectorAll('.closeMessage');
// Get Error Message Text
let errorMessageText = document.querySelector('.errorMessage p');
// Get Success Message
let successMessage = document.querySelector('.successMessage');
// Get Form Submit Button
let formSubmit = document.querySelector('#footer-submit');
// Get Name Input
let formName = document.getElementById('name');
// Get Email Input
let formEmail = document.getElementById('email');
// Get Message Textarea
let formMessage = document.getElementById('message');

// On Form Submit
formSubmit.onclick = function (e) {
  e.preventDefault();
  if (formName.value === '' || formEmail.value === '' || formMessage.value === '') {
    // Trigger Error Function
    setError('All Fields Are Required');
  } else if (formName.value.length < 3) {
    // Trigger Error Function
    setError('Your Name Should Not Be Less Than 3 Characters');
  } else if (formEmail.value.split('@').length !== 2) {
    // Trigger Error Function
    setError('Please Enter A Valid Email');
  } else {
    // Remove Any Error Message
    removeError();
    // Show Success Message
    successMessage.style.display = 'flex';
  }
};

// Close Button Event Listener On Click
for (let i = 0; i < closeMessage.length; i++) {
  closeMessage[i].addEventListener('click', destroyMessage);
}

// Set Error Message Function
function setError(message) {
  // Hide Success Message
  successMessage.style.display = 'none';
  // Set Error Text
  errorMessageText.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
  // Show Error Message
  errorMessage.style.display = 'flex';
}

function removeError() {
  // Hide Error Message
  errorMessage.style.display = 'none';
}

// Close Error / Success Message
function destroyMessage(e) {
  e.target.parentElement.style.display = 'none';
}
