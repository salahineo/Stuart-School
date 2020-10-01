/* ---------------------------------------- Slider Images --------------------------------------- */

// Get Slider Components
let sliderImage = document.querySelector('.sliderImage');
let firstBullet = document.getElementById('firstBullet');
let secondBullet = document.getElementById('secondBullet');
let thirdBullet = document.getElementById('thirdBullet');

// On First Bullet Click
firstBullet.onclick = function (e) {
  // Change Slider Image
  sliderImage.setAttribute('style', 'background-image: url("images/slider-1.jpg")');
  // Trigger Remove Active Class Function
  removeActive();
  // Add Active Class To Current Clicked Item
  e.target.classList.add('active');
};

// On Second Bullet Click
secondBullet.onclick = function (e) {
  // Change Slider Image
  sliderImage.setAttribute('style', 'background-image: url("images/slider-2.png")');
  // Trigger Remove Active Class Function
  removeActive();
  // Add Active Class To Current Clicked Item
  e.target.classList.add('active');
};

// On Third Bullet Click
thirdBullet.onclick = function (e) {
  // Change Slider Image
  sliderImage.setAttribute('style', 'background-image: url("images/slider-3.jpg")');
  // Trigger Remove Active Class Function
  removeActive();
  // Add Active Class To Current Clicked Item
  e.target.classList.add('active');
};

// Remove Active Class From All Items
function removeActive() {
  // Get All Items
  let bullets = document.querySelectorAll('.bullets li');
  // Loop Through Items
  for (let i = 0; i < bullets.length; i++) {
    // Remove Active Class From Current In Loop
    bullets[i].classList.remove('active');
  }
}

/* -------------------------------------- Subscibed Button -------------------------------------- */
// Get Email Field
let subscribeInput = document.getElementById('newsletterEmail');
// Get Subscribe Button
let subscribButton = document.getElementById('subscribe');
// Get Subscribed Message Container
let subscribedMessage = document.querySelector('.subscribed-message');
// Show Message On Click
subscribButton.onclick = function () {
  if (subscribeInput.value.split('@').length !== 2) {
    // Show Error Message -- Same As Footer Email Error Message --
    // ! This Function Exist In Main Script (Contact Form Validation)
    setError('Please Enter A Valid Email');
  } else {
    // Remove Any Error Message
    // ! This Function Exist In Main Script (Contact Form Validation)
    removeError();
    // Show Success Message
    subscribedMessage.style.display = 'flex';
  }
};
