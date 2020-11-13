import { additions, isCarry } from './utils.js';
 
const input = document.querySelector('#input');
const noCarry = document.querySelector('#no-carry');
const carry = document.querySelector('#carry');
const copyNotification = document.querySelector('#copyNotification');

input.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    const pairs = additions(value);
    const noCarryPairs = pairs.filter(([a, b]) => !isCarry(a, b));
    const randomNoCarryPair = noCarryPairs[Math.floor( Math.random() * noCarryPairs.length )];
    const [a, b] = randomNoCarryPair;
    noCarry.value = `${a} + ${b}`;
    const carryPairs = pairs.filter(([a, b]) => isCarry(a, b));
    if (carryPairs.length === 0) {
        carry.value = "not possible";
        return;
    }
    const randomCarryPair = carryPairs[Math.floor( Math.random() * carryPairs.length )];
    const [c, d] = randomCarryPair;
    carry.value = `${c} + ${d}`;
});

function copy(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        copyNotification.innerHTML = `"${text}" copied`
        copyNotification.classList.remove('run-animation');
        copyNotification.offsetWidth;
        copyNotification.classList.add('run-animation');
    });
}

carry.addEventListener('click', () => {
    carry.select();
    copy(carry.value);
});

noCarry.addEventListener('click', () => {
    noCarry.select();
    copy(noCarry.value);
});

console.log(additions(10))