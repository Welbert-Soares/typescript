"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangular } from "./retangulo";
// import { areaCircular } from "./circuferencia";
const circuferencia_1 = require("./circuferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log('Módulo carregado...');
console.log((0, retangulo_1.default)(7, 8));
console.log((0, circuferencia_1.areaCircular)(2));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map