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

const aniversario = new Data(25, 2, 1999)
aniversario.dia = 27
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data() // posso omitir os parâmetros
casamento.ano = 2024
console.log(casamento)


