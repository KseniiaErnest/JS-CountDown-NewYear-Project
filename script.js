'use strict'

function NewYearCountDown() {
  const newYearDate = new Date('January 1, 2024 00:00');
  const now = new Date();
  const difference = newYearDate - now;
  
  
  const msInSeconds = 1000;
  const msInMinutes = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * msInHour;

  const displayDays = Math.floor(difference / msInDay);
  document.querySelector('#days').textContent = displayDays;

  const displayHours = Math.floor( (difference % msInDay) / msInHour);
  document.querySelector('#hours').textContent = displayHours;

  const displayMinutes = Math.floor((difference % msInHour) / msInMinutes);
  document.querySelector('#minutes').textContent = displayMinutes;

  const displaySeconds = Math.floor((difference % msInMinutes) / msInSeconds);
  document.querySelector('#seconds').textContent = displaySeconds;

  if (difference < 0) {
    document.querySelector('#days').textContent = 0;
    document.querySelector('#hours').textContent = 0;
    document.querySelector('#minutes').textContent = 0;
    document.querySelector('#seconds').textContent = 0;
    clearInterval(invervalId);
    happyNewYear();
  }

}

let invervalId = setInterval(NewYearCountDown, 1000);

function happyNewYear() {
const heading = document.querySelector('.heading');
heading.textContent = 'HAPPY NEW YEAR!!!';
heading.getElementsByClassName.add('newyear-style-heading');
}

NewYearCountDown();

