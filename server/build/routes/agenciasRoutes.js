"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agenciasController_1 = require("../controlers/agenciasController");
class AgenciasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/agencias/', agenciasController_1.agenciasController.list);
        this.router.get('/agencias/:id', agenciasController_1.agenciasController.getOne);
    }
}
const agenciasRoutes = new AgenciasRouter();
exports.default = agenciasRoutes.router;
