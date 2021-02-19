"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solucionesController = void 0;
const database_1 = __importDefault(require("../routes/database"));
class SolucionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const soluciones = yield database_1.default.query("SELECT * From soluciones ");
            res.json(soluciones);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const solucion = yield database_1.default.query("SELECT * FROM soluciones WHERE Id = ?", [id]);
            console.log(solucion);
            if (solucion.length > 0) {
                return res.json(solucion[0]);
            }
            res.status(404).json({ text: "La solucion no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Soluciones SET ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    createNew(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Soluciones (Fecha) VALUES (null)');
            res.json({ message: 'Creado con exito' });
        });
    }
    getMaxId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const solucion = yield database_1.default.query("SELECT * FROM soluciones WHERE Id = (SELECT MAX(Id) FROM Soluciones)");
            console.log(solucion);
            if (solucion.length > 0) {
                return res.json(solucion[0]);
            }
            res.status(404).json({ text: "La solución no existe" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM soluciones WHERE Id = ?', [id]);
            res.json({ message: 'Solución eliminada con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const solucionVieja = req.body;
            yield database_1.default.query('UPDATE soluciones SET ? WHERE Id = ?', [req.body, id]);
            res.json({ message: "Solucion actualizada con exito" });
        });
    }
}
exports.solucionesController = new SolucionesController();
