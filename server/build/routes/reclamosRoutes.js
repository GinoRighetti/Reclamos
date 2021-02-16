"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reclamosController_1 = require("../controlers/reclamosController");
class ReclamosRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/reclamos/', reclamosController_1.reclamosController.list);
        this.router.get('/reclamos/:id', reclamosController_1.reclamosController.getOne);
        this.router.post('/reclamos/', reclamosController_1.reclamosController.create);
        this.router.post('/reclamos/nuevo/', reclamosController_1.reclamosController.createNew);
        this.router.get('/reclamosmaxid/', reclamosController_1.reclamosController.getMaxId);
        this.router.delete('/reclamos/:id', reclamosController_1.reclamosController.delete);
        this.router.put('/reclamos/:id', reclamosController_1.reclamosController.update);
    }
}
const reclamosRoutes = new ReclamosRouter();
exports.default = reclamosRoutes.router;
