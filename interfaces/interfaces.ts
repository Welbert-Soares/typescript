interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any;
    sudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
    console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = "Joana";
}

const pessoa: Humano = {
    nome: "João",
    idade: 27,
    sudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome:'Welbert', idade: 27, sexo: 'M'})
pessoa.sudar("Skywalker");