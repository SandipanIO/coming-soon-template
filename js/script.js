/*******************************************************************/
/* Countdown Timer */
/*******************************************************************/

const launchDate = new Date('June 30, 2023 23:59:59');

const daysLeft = document.querySelector('.countdown__days');
const hoursLeft = document.querySelector('.countdown__hours');
const minutesLeft = document.querySelector('.countdown__minutes');
const secondsLeft = document.querySelector('.countdown__seconds');

const countdown = () => {
   const now = new Date();
   const diff = launchDate.getTime() - now.getTime();

   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((diff % (1000 * 60)) / 1000);

   // Add a zero in front of single digit numbers
   const addZero = num => {
      if(num < 10) {
         num = '0' + num;
      }
      return num;
   }

   //Days
   daysLeft.innerHTML = (days === 1) ? 
                        `${addZero(days)}<span>Day</span>` : 
                        `${addZero(days)}<span>Days</span>`;

   //Hours
   hoursLeft.innerHTML = (hours === 1) ? 
                        `${addZero(hours)}<span>Hour</span>` : 
                        `${addZero(hours)}<span>Hours</span>`;

   //Minutes
   minutesLeft.innerHTML = (minutes === 1) ? 
                           `${addZero(minutes)}<span>Minute</span>` : 
                           `${addZero(minutes)}<span>Minutes</span>`;

   //Seconds
   secondsLeft.innerHTML = (seconds === 1) ? 
                           `${addZero(seconds)}<span>Second</span>` : 
                           `${addZero(seconds)}<span>Seconds</span>`;
   
   // If date is reached, set time to zero
   if(diff < 0) {
      daysLeft.innerHTML = `00<span>Days</span>`;
      hoursLeft.innerHTML = `00<span>Hours</span>`;
      minutesLeft.innerHTML = `00<span>Minutes</span>`;
      secondsLeft.innerHTML = `00<span>Seconds</span>`;
   }
}

setInterval(countdown, 1000);

/*******************************************************************/
/* Subscribe Popup Form */
/*******************************************************************/

const btnPopup = document.querySelector('#btn-popup');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('#popup-close');
const popupOverlay = document.querySelector('#popup-overlay');

btnPopup.addEventListener('click', e => {
   popup.setAttribute('data-visible', 'true');
   popupOverlay.classList.add('overlay--active');
});

closePopup.addEventListener('click', e => {
   popup.setAttribute('data-visible', 'false');
   popupOverlay.classList.remove('overlay--active');
});

popupOverlay.addEventListener('click', e => {
   popup.setAttribute('data-visible', 'false');
   popupOverlay.classList.remove('overlay--active');
});

/*******************************************************************/
/* Sliding Contact Form */
/*******************************************************************/

const btnContact = document.querySelector('#btn-contact');
const contact = document.querySelector('.contact');
const closeContact = document.querySelector('#contact-close');
const contactOverlay = document.querySelector('#contact-overlay');

btnContact.addEventListener('click', e => {
   contact.setAttribute('data-show-form', 'true');
   contactOverlay.classList.add('overlay--active');
});

closeContact.addEventListener('click', e => {
   contact.setAttribute('data-show-form', 'false');
   contactOverlay.classList.remove('overlay--active');
});

contactOverlay.addEventListener('click', e => {
   contact.setAttribute('data-show-form', 'false');
   contactOverlay.classList.remove('overlay--active');
});