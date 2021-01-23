"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controlers/usuariosController");
class UsuariosRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarios/', usuariosController_1.usuarioController.list);
        this.router.get('/usuarios/:id', usuariosController_1.usuarioController.getOne);
        this.router.post('/usuarios/', usuariosController_1.usuarioController.create);
        this.router.delete('/usuarios/:id', usuariosController_1.usuarioController.delete);
        this.router.put('/usuarios/:id', usuariosController_1.usuarioController.update);
        this.router.get('/usuarios/:usuario', usuariosController_1.usuarioController.getUsuario);
    }
}
const usuariosRoutes = new UsuariosRouter();
exports.default = usuariosRoutes.router;
