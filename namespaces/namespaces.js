var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.1416;
        function Circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.Circunferencia = Circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var PI = 2.99;
console.log(Geometria.Area.Circunferencia(10));
console.log(Geometria.Area.Retangulo(10, 20));
console.log(PI);
