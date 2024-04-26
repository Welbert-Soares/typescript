"use strict";
// let e const
let seraQuePode = '?'; // hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    let segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
//# sourceMappingURL=ecmascript.js.map