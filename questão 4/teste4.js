const faturamentoMensalEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoMensalEstados).reduce((total, valor) => total + valor, 0);

Object.keys(faturamentoMensalEstados).forEach(estado => {
  const percentual = (faturamentoMensalEstados[estado] / totalFaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
