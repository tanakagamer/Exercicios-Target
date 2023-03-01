function fibonacci(numero) {
    let a = 0, b = 1, temp;
  
    if (numero === a) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
  
    while (b <= numero) {
      if (numero === b) {
        return `${numero} pertence à sequência de Fibonacci.`;
      }
      temp = b;
      b = a + b;
      a = temp;
    }
  
    return `${numero} não pertence à sequência de Fibonacci.`;
  }
  
  console.log(fibonacci(5)); // Exemplo de uso: 5 pertence à sequência de Fibonacci.
  