export function additions(input) {
  const pairs = [];
  // const end = Math.ceil(input / 2);
  for(let i = 0; i <= input; i++) {
    pairs.push([i, input - i]);
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

export function isCarry(a, b) {
  const aDigits = digits(a);
  const bDigits = digits(b);
  const end = Math.min(aDigits.length, bDigits.length);

  for (let i = 0; i < end; i++) {
    if(aDigits[i] + bDigits[i] > 9) {
      return true;
    }
  }
  return false;
}

