class Data {
  // publico por padrão
  public dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(25, 2, 1999);
aniversario.dia = 27;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // posso omitir os parâmetros
casamento.ano = 2024;
console.log(casamento);

//Refatorando a classe Data
class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) { }
}

const aniversarioEsperto = new DataEsperta(25, 2, 1999);
aniversarioEsperto.dia = 27;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // posso omitir os parâmetros
casamentoEsperto.ano = 2024;
console.log(casamentoEsperto);

// Desafio Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1: Desconto é opcional (valor padrão 0)
// Obs 2: Criar dois produtos: passando dois e três params

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) { }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off) `
  }
}

const itemP = new Produto('Notebook', 4.299);
console.log(itemP);
console.log(itemP.resumo());

const itemP2 = new Produto('Celular', 2.299, 0.1);
console.log(itemP2);
console.log(itemP2.resumo());