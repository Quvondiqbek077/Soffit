// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select DOM elements
const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const messageDisplay = document.querySelector('.message');
const againButton = document.querySelector('.again');

// Function to check the guess
function checkGuess() {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 100!';
    } else if (guess === randomNumber) {
        messageDisplay.textContent = 'Congratulations! You guessed the number!';
        numberDisplay.textContent = randomNumber;
        document.body.style.backgroundColor = 'green';
        checkButton.disabled = true;
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try again!';
    } else {
        messageDisplay.textContent = 'Too high! Try again!';
    }
}

// Event listener for check button
checkButton.addEventListener('click', checkGuess);

// Function to start a new game
function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    messageDisplay.textContent = '';
    document.body.style.backgroundColor = '#f0f0f0';
    checkButton.disabled = false;
    guessInput.disabled = false;
}

// Event listener for again button
againButton.addEventListener('click', newGame);


function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let month = now.toLocaleString('default', { month: 'short' });
    let day = now.getDate();
    let year = now.getFullYear();

    let hourHand = document.querySelector('.hour-hand');
    let minuteHand = document.querySelector('.minute-hand');
    let secondHand = document.querySelector('.second-hand');
    let monthElement = document.querySelector('.month');
    let dayElement = document.querySelector('.day');
    let yearElement = document.querySelector('.year');

    let hourDeg = (hour % 12) * 30 + (0.5 * minute);
    let minuteDeg = minute * 6 + (0.1 * second);
    let secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    monthElement.textContent = month;
    dayElement.textContent = day;
    yearElement.textContent = year;
}

setInterval(updateClock, 1000);


    