// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let count = new Array(10).fill(0);
  for (let num of arr) {
    count[num] += 1;
    if (Number.isNaN(count[num]) || count[num] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const ddd = `${arr[0]}${arr[1]}`;
  const num1 = `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
  const num2 = `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return `(${ddd}) ${num1}-${num2}`;
}

console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
