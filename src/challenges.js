// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr.at(-1)}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(arr) {
  let hi = arr[0];
  let count = 0;
  for (let num of arr) {
    if (num > hi) {
      hi = num;
      count = 0;
    }
    if (num === hi) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  let retArr = [];
  for (let num of arr) {
    const div = (num % 3 === 0) + (num % 5 === 0) * 2;
    switch (div) {
    case 1: // div3
      retArr.push('fizz');
      break;
    case 2: // div5
      retArr.push('buzz');
      break;
    case 3: // div3 + div5
      retArr.push('fizzBuzz');
      break;
    default:
      retArr.push('bug!');
    }
  }
  return retArr;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
