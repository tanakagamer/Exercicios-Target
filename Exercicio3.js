const fs = require('fs');

// Lê o arquivo JSON contendo os valores de faturamento diário
const dados = JSON.parse(fs.readFileSync('./dados.json'));

// Calcula a média mensal de faturamento diário
const mediaMensal = dados.reduce((total, valor) => total + valor, 0) / dados.length;

// Encontra o menor e o maior valor de faturamento diário no mês
const menorValor = Math.min(...dados);
const maiorValor = Math.max(...dados);

// Conta o número de dias em que o valor de faturamento diário foi superior à média mensal
const diasAcimaDaMedia = dados.filter(valor => valor > mediaMensal).length;

// Imprime os resultados obtidos
console.log(`Menor valor de faturamento diário no mês: ${menorValor}`);
console.log(`Maior valor de faturamento diário no mês: ${maiorValor}`);
console.log(`Número de dias em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);
