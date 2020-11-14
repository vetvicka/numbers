export function additions(input) {
  const pairs = [];
  // const end = Math.ceil(input / 2);
  for(let i = 0; i <= input; i++) {
    pairs.push([i, input - i]);
  }
  return pairs;
}

export function subtractions(input, domain = 100) {
  const pairs = [];
  for(let i = input; i <= domain; i++) {
    pairs.push([i, i - input]);
  }
  return pairs;
}

function digits(number) {
  const arr = [];
  let i = number;
  while(i / 10 > 0) {
    arr.push(i % 10);
    i = Math.floor(i / 10);
  }
  return arr;
}

export function isCarry(a, b, op) {
  const aDigits = digits(a);
  const bDigits = digits(b);
  const end = Math.min(aDigits.length, bDigits.length);

  for (let i = 0; i < end; i++) {
    if(op === 'minus' && aDigits[i] - bDigits[i] < 0) {
      return true;
    }
    if(op === 'plus' && aDigits[i] + bDigits[i] > 9) {
      return true;
    }
  }
  return false;
}

