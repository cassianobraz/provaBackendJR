const fs = require('fs');

fs.readFile('./dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const faturamento = JSON.parse(data);

  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  faturamento.forEach(dia => {
    if (dia.valor > 0) {
      if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
      if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
      somaFaturamento += dia.valor;
      diasComFaturamento++;
    }
  });

  const mediaFaturamento = somaFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = 0;
  faturamento.forEach(dia => {
    if (dia.valor > mediaFaturamento) {
      diasAcimaDaMedia++;
    }
  });

  console.log(`Menor faturamento: ${menorFaturamento}`);
  console.log(`Maior faturamento: ${maiorFaturamento}`);
  console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
});
