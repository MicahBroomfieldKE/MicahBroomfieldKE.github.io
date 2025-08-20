const Button = document.getElementById('clicker')
const Display = document.getElementById('counter')
let currentNumber = 0;

Button.addEventListener('click', () => {
  currentNumber++;
  Display.textContent = currentNumber;
});