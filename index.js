class Calculadora {
  constructor() {}

  convertToDecimal(valor, base) {
    switch (base) {
      case "binary":
        return Number(`0b${valor}`);
      case "octal":
        return Number(`0o${valor}`);
      case "decimal":
        return Number(`${valor}`);
      case "hexadecimal":
        return Number(`0x${valor}`);
    }
    return undefined;
  }

  convertToBaseFinal(valor, baseFinal) {
    switch (baseFinal) {
      case "binary":
        return valor.toString(2);
      case "octal":
        return valor.toString(8);
      case "decimal":
        return valor.toString(10);
      case "hexadecimal":
        return valor.toString(16);
    }
    return undefined;
  }

  converter(valor, base, baseFinal) {
    const valDecimal = this.convertToDecimal(valor, base);

    return this.convertToBaseFinal(valDecimal, baseFinal);
  }

  somar(valor, valor2, base) {
    const valDecimal = this.convertToDecimal(valor, base);
    const valDecimal2 = this.convertToDecimal(valor2, base);
    const somaDecimal = valDecimal + valDecimal2;

    return this.convertToBaseFinal(somaDecimal, base)
  }

  subtrair(valor, valor2, base) {
    const valDecimal = this.convertToDecimal(valor, base);
    const valDecimal2 = this.convertToDecimal(valor2, base);
    const subtracaoDecimal = valDecimal - valDecimal2;

    return this.convertToBaseFinal(subtracaoDecimal, base)
  }

  multiplicar(valor, valor2, base) {
    const valDecimal = this.convertToDecimal(valor, base);
    const valDecimal2 = this.convertToDecimal(valor2, base);
    const multiplicacaoDecimal = valDecimal * valDecimal2;

    return this.convertToBaseFinal(multiplicacaoDecimal, base)
  }

  dividir(valor, valor2, base) {
    const valDecimal = this.convertToDecimal(valor, base);
    const valDecimal2 = this.convertToDecimal(valor2, base);
    const divisaoDecimal = valDecimal / valDecimal2;

    return this.convertToBaseFinal(divisaoDecimal, base)
  }

  operar(valor, valor2, base, tipo){
    switch (tipo){
      case "somar":
        return this.somar(valor, valor2, base);
      case "subtrair":
        return this.subtrair(valor, valor2, base);
      case "multiplicar":
        return this.multiplicar(valor, valor2, base);
      case "dividir":
        return this.dividir(valor, valor2, base);
    }
  }
}

