"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.1416;
        function Circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.Circunferencia = Circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCrc.js.map