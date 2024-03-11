"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//inicializador
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
const PORT = 4321;
app.get('/api', (req, res) => {
    console.log('algo paso aqui');
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`El servidoer esta corriendo en el puerto:${PORT}`);
});
