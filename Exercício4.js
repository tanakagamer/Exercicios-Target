const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let totalFaturamento = 0;
  
  for (const estado in faturamento) {
    totalFaturamento += faturamento[estado];
  }
  
  for (const estado in faturamento) {
    const percentual = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  }
  