"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solucionesController_1 = require("../controlers/solucionesController");
class SolucionesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/soluciones/', solucionesController_1.solucionesController.list);
        this.router.get('/soluciones/:id', solucionesController_1.solucionesController.getOne);
        this.router.post('/soluciones/', solucionesController_1.solucionesController.create);
        this.router.post('/soluciones/nuevo/', solucionesController_1.solucionesController.createNew);
        this.router.get('/solucionesmaxid/', solucionesController_1.solucionesController.getMaxId);
        this.router.delete('/soluciones/:id', solucionesController_1.solucionesController.delete);
        this.router.put('/soluciones/:id', solucionesController_1.solucionesController.update);
    }
}
const solucionesRoutes = new SolucionesRouter();
exports.default = solucionesRoutes.router;
