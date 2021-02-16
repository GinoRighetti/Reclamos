import { Request, Response } from 'express';

import pool from '../routes/database';

class ReclamosController{

    public async list (req: Request, res: Response) {
        const reclamo = await pool.query("SELECT reclamos.Id as 'N_reclamo', reclamos.Fecha as 'F_reclamo', reclamos.Contacto, reclamos.Metodo_Contacto, CONCAT(`Agencia`,'-',LPAD(`Subagencia`, 3, '0'),'-',`Maquina`) AS 'Tj', reclamos.Motivo,  reclamos.Problema, reclamos.Observaciones, reclamos.Id_Usuario as 'id_u_r', usuarios.Usuario as 'U_reclamo', reclamos.Llamar, reclamos.Estado, soluciones.Id as 'N_solucion', soluciones.Fecha as 'F_solucion', soluciones.Solucion, soluciones.Derivacion, soluciones.Id_Usuario as 'Id_u_s', (SELECT usuarios.Usuario FROM usuarios WHERE usuarios.Id = soluciones.Id_Usuario) as 'U_solucion' FROM `reclamos` LEFT JOIN `usuarios` ON (reclamos.Id_Usuario = usuarios.Id) LEFT JOIN `tjs` ON (reclamos.Id_tjs=tjs.Id) LEFT JOIN `soluciones` ON (reclamos.Id=soluciones.Id_reclamo)");
        res.json(reclamo);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const reclamo = await pool.query("SELECT reclamos.Id as 'N_reclamo', reclamos.Fecha as 'F_reclamo', reclamos.Contacto, reclamos.Metodo_Contacto, CONCAT(`Agencia`,'-',LPAD(`Subagencia`, 3, '0'),'-',`Maquina`) AS 'Tj', reclamos.Motivo, reclamos.Problema, reclamos.Observaciones, reclamos.Id_Usuario as 'id_u_r', usuarios.Usuario as 'U_reclamo', reclamos.Llamar, reclamos.Estado, soluciones.Id as 'N_solucion', soluciones.Fecha as 'F_solucion', soluciones.Solucion, soluciones.Derivacion, soluciones.Id_Usuario as 'Id_u_s', (SELECT usuarios.Usuario FROM usuarios WHERE usuarios.Id = soluciones.Id_Usuario) as 'U_solucion' FROM `reclamos` LEFT JOIN `usuarios` ON (reclamos.Id_Usuario = usuarios.Id) LEFT JOIN `tjs` ON (reclamos.Id_tjs=tjs.Id) LEFT JOIN `soluciones` ON (reclamos.Id=soluciones.Id_reclamo) WHERE reclamos.Id = ?", [id]);
        console.log(reclamo);
        if (reclamo.length > 0) {
            return res.json(reclamo[0]);
        }
        res.status(404).json({ text: "El reclamo no existe" });
    }

    public async create (req: Request, res: Response) {
        const result = await pool.query('INSERT INTO Reclamos SET ?', [req.body]);
        res.json({ message: 'Creado con exito'})
    }

    public async createNew (req: Request, res: Response) {
        const result = await pool.query('INSERT INTO Reclamos (Fecha) VALUES (null)');
        res.json({ message: 'Creado con exito'})
    }

    public async getMaxId (req: Request, res: Response) {
        const { id } = req.params;
        const reclamo = await pool.query("SELECT reclamos.Id as 'N_reclamo', reclamos.Fecha as 'F_reclamo', reclamos.Contacto, reclamos.Metodo_Contacto, CONCAT(`Agencia`,'-',LPAD(`Subagencia`, 3, '0'),'-',`Maquina`) AS 'Tj', reclamos.Motivo, reclamos.Problema, reclamos.Observaciones, reclamos.Id_Usuario as 'id_u_r', usuarios.Usuario as 'U_reclamo', reclamos.Llamar, reclamos.Estado, soluciones.Id as 'N_solucion', soluciones.Fecha as 'F_solucion', soluciones.Solucion, soluciones.Derivacion, soluciones.Id_Usuario as 'Id_u_s', (SELECT usuarios.Usuario FROM usuarios WHERE usuarios.Id = soluciones.Id_Usuario) as 'U_solucion' FROM `reclamos` LEFT JOIN `usuarios` ON (reclamos.Id_Usuario = usuarios.Id) LEFT JOIN `tjs` ON (reclamos.Id_tjs=tjs.Id) LEFT JOIN `soluciones` ON (reclamos.Id=soluciones.Id_reclamo) WHERE reclamos.Id = (SELECT MAX(Id) FROM reclamos)");
        console.log(reclamo);
        if (reclamo.length > 0) {
            return res.json(reclamo[0]);
        }
        res.status(404).json({ text: "El reclamo no existe" });
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM Reclamos WHERE Id = ?', [id]);
        res.json({ message: 'Reclamo eliminado con exito' });
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const viejoReclamo = req.body;
        await pool.query('UPDATE Reclamos SET ? WHERE Id = ?', [req.body, id]);
        res.json({ message: "Reclamo actualizado con exito" });
    }

}
export const reclamosController = new ReclamosController();