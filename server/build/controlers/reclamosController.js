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
exports.reclamosController = void 0;
const database_1 = __importDefault(require("../routes/database"));
class ReclamosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reclamo = yield database_1.default.query("SELECT reclamos.Id as 'N_reclamo', reclamos.Fecha as 'F_reclamo', reclamos.Contacto, CONCAT(`Agencia`,'-',LPAD(`Subagencia`, 3, '0'),'-',`Maquina`) AS 'Tj', reclamos.Problema, reclamos.Observaciones, reclamos.Id_Usuario as 'id_u_r', usuarios.Usuario as 'U_reclamo', reclamos.Estado, soluciones.Id as 'N_solucion', soluciones.Fecha as 'F_solucion', soluciones.Solucion, soluciones.Derivacion, soluciones.Id_Usuario as 'Id_u_s', (SELECT usuarios.Usuario FROM usuarios WHERE usuarios.Id = soluciones.Id_Usuario) as 'U_solucion' FROM `reclamos` LEFT JOIN `usuarios` ON (reclamos.Id_Usuario = usuarios.Id) LEFT JOIN `tjs` ON (reclamos.Id_tjs=tjs.Id) LEFT JOIN `soluciones` ON (reclamos.Id=soluciones.Id_reclamo)");
            res.json(reclamo);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reclamo = yield database_1.default.query("SELECT reclamos.Id as 'N_reclamo', reclamos.Fecha as 'F_reclamo', reclamos.Contacto, CONCAT(`Agencia`,'-',LPAD(`Subagencia`, 3, '0'),'-',`Maquina`) AS 'Tj', reclamos.Problema, reclamos.Observaciones, reclamos.Id_Usuario as 'id_u_r', usuarios.Usuario as 'U_reclamo', reclamos.Estado, soluciones.Id as 'N_solucion', soluciones.Fecha as 'F_solucion', soluciones.Solucion, soluciones.Derivacion, soluciones.Id_Usuario as 'Id_u_s', (SELECT usuarios.Usuario FROM usuarios WHERE usuarios.Id = soluciones.Id_Usuario) as 'U_solucion' FROM `reclamos` LEFT JOIN `usuarios` ON (reclamos.Id_Usuario = usuarios.Id) LEFT JOIN `tjs` ON (reclamos.Id_tjs=tjs.Id) LEFT JOIN `soluciones` ON (reclamos.Id=soluciones.Id_reclamo) WHERE reclamos.Id = ?", [id]);
            console.log(reclamo);
            if (reclamo.length > 0) {
                return res.json(reclamo[0]);
            }
            res.status(404).json({ text: "El reclamo no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Reclamos SET ?', [req.body]);
            res.json({ message: 'Creado con exito' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Reclamos WHERE Id = ?', [id]);
            res.json({ message: 'Reclamo eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const viejoReclamo = req.body;
            yield database_1.default.query('UPDATE Reclamos SET ? WHERE Id = ?', [req.body, id]);
            res.json({ message: "Reclamo actualizado con exito" });
        });
    }
}
exports.reclamosController = new ReclamosController();
