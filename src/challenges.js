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
  return `${arr[arr.length-1]}, ${arr[0]}`;
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
function encode(str) {
  let arrStr = Array.from(str);
  const vowMap = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let letIndex in arrStr) {
    if (Object.prototype.hasOwnProperty.call(vowMap, arrStr[letIndex])) {
      arrStr[letIndex] = vowMap[arrStr[letIndex]];
    }
  }
  return arrStr.join('');
}
function decode(str) {
  let arrStr = Array.from(str);
  const vowMap = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letIndex in arrStr) {
    if (Object.prototype.hasOwnProperty.call(vowMap, arrStr[letIndex])) {
      arrStr[letIndex] = vowMap[arrStr[letIndex]];
    }
  }
  return arrStr.join('');
}

// Desafio 10
function techList(arr, nome) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  const sortArr = arr.sort();
  let obj;
  for (let techNome of sortArr) {
    obj = {};
    obj.tech = techNome;
    obj.name = nome;
    list.push(obj);
  }
  return list;
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
