function funcFibonacci(numero) {
  let a = 0, b = 1;
  while (b < numero) {
    [a, b] = [b, a + b];
  }
  return b === numero;
}

const numeroInformado = 21;

if (funcFibonacci(numeroInformado)) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
