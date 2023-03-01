function inverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  let stringExemplo = "Exemplo de string";
  let stringInvertida = inverterString(stringExemplo);
  console.log(stringInvertida); // "gnirts ed olpmxE"
