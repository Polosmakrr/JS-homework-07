const valueCounter = document.querySelector('#value');

const increment = document.querySelector('[data-action="increment"]');

const decrement = document.querySelector('[data-action="decrement"]');

let value = 0;
let step = 1;


increment.addEventListener('click', () => { value += step; counterValue() });

decrement.addEventListener('click', () => { value -=step; counterValue() });

const counterValue = () => {
    valueCounter.textContent = value;
}