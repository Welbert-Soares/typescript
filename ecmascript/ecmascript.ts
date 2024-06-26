// let e const
let seraQuePode = '?' // hoisting
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    let segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)


{
    const def = 'def'
    console.log(def)
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i)

// Arrow Function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá!')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// this

// function normalComThis() {
//     console.log(this)
// }
// const normalComThisEspecial = normalComThis
//     .bind({nome:"Ana"})
// normalComThisEspecial()

// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//     .bind({nome: 'Ana'})
// arrowComThisEspecial()

// Parâmetros padrão
function contagemRegressiva(inicio: number = 5,
    fim: number = inicio - 5,
): void {
    console.log(inicio)
    while (inicio >= fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}
contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function returnarArray(...args: number[]): number[] {
    return args
}

const numeros = returnarArray(1, 2, 4, 5, 6, 7, 8, 9, 10)
console.log(numeros)
console.log(returnarArray(...numbers))

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zet 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas // Destructuring
console.log(motor)
console.log(ano)

// const [w, z] = [2, 3]

// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}
const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteristicas: { w } } = item
console.log(n)
console.log(p)
console.log(w)

const usuarioID: string = 'Welbert Soares'
const notificacoes: string = '9'
const boasVindas = `
    Boas Vidas ${usuarioID}, notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`
console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Exercício 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Exercício 2
const dizerOla = (nome:string | undefined = 'Pessoa'): void => console.log(`Olá, ${nome}`)
dizerOla()
dizerOla('Anna')

// Exercício 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercício 4
const array = [55, 20]
array.push(...nums)
console.log(array)

// Exercício 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercício 6
const cientista = {primeiroNome: 'Will', experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)

// Callback

// function esplerar3s(callback:(dado: string) => void) {
//     setTimeout(() => {
//         callback('3s depois...')
//     }, 3000)
// }

// esplerar3s(function(dado: string) {
//     console.log(dado)
// })

// // Promises

// function esplerar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s depois...')
//         }, 3000)
//     })
// }
// // esplerar3sPromise()
// //     .then(dado => console.log(dado))


// fetch('https://www.swapi.tech/api/people/2')
//     .then(resp => resp.json())
//     .then(dados => console.log(dados))
//     .catch(err => console.log('Catch!!!' + err))
