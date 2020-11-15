import { additions, subtractions, isCarry, Operator } from './utils.js';
 
const input = document.querySelector('#input')! as HTMLInputElement;
const noCarry = document.querySelector('#no-carry')! as HTMLInputElement;
const carry = document.querySelector('#carry')! as HTMLInputElement;
const copyNotification = document.querySelector('#copyNotification')! as HTMLElement;
const operator = document.querySelector('#operator')! as HTMLSelectElement;
const refresh = document.querySelector('#refresh')!;
const domain = document.querySelector('#domain')! as HTMLInputElement;

function recalculate() {
    const sign = operator.value === 'plus' ? '+' : '-';
    const method = operator.value === 'plus' ? additions : subtractions;
    const value = parseInt(input.value);
    const domainValue = parseInt(domain.value);
    const pairs = method(value, domainValue);
    const noCarryPairs = pairs.filter(([a, b]) => !isCarry(a, b, operator.value as Operator));
    if (noCarryPairs.length) {
        const randomNoCarryPair = noCarryPairs[Math.floor( Math.random() * noCarryPairs.length )];
        const [a, b] = randomNoCarryPair;
        noCarry.value = `${a} ${sign} ${b}`;
    } else {
        noCarry.value = "not possible";
    }
    const carryPairs = pairs.filter(([a, b]) => isCarry(a, b, operator.value as Operator));
    if (carryPairs.length === 0) {
        carry.value = "not possible";
        return;
    }
    const randomCarryPair = carryPairs[Math.floor( Math.random() * carryPairs.length )];
    const [c, d] = randomCarryPair;
    carry.value = `${c} ${sign} ${d}`;
}

input.addEventListener('input', (e) => {
    recalculate();
});

function copy(text: string) {
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

refresh.addEventListener('click', () => {
    recalculate();
});

operator.addEventListener('change', (e) => {
    recalculate();
});

domain.addEventListener('change', (e) => {
    recalculate();
});

recalculate();