"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off) `;
    }
}
const itemP = new Produto('Notebook', 4.299);
console.log(itemP);
console.log(itemP.resumo());
const itemP2 = new Produto('Celular', 2.299, 0.1);
console.log(itemP2);
console.log(itemP2.resumo());
//# sourceMappingURL=classes.js.map