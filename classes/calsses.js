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
//# sourceMappingURL=calsses.js.map