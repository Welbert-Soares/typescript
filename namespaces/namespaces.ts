namespace Geometria {
  export namespace Area {
    const PI = 3.1416;

    export function Circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }

    export function Retangulo(base: number, altura: number): number {
      return base * altura;
    }
  }
}

const PI = 2.99;
console.log(Geometria.Area.Circunferencia(10));
console.log(Geometria.Area.Retangulo(10, 20));
console.log(PI);


