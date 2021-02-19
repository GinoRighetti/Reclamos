import { Request, Response } from 'express';

import pool from '../routes/database';

class SolucionesController{

    public async list (req: Request, res: Response) {
        const soluciones = await pool.query("SELECT * From soluciones ");
        res.json(soluciones);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const solucion = await pool.query("SELECT * FROM soluciones WHERE Id = ?", [id]);
        console.log(solucion);
        if (solucion.length > 0) {
            return res.json(solucion[0]);
        }
        res.status(404).json({ text: "La solucion no existe" });
    }

    public async create (req: Request, res: Response) {
        const result = await pool.query('INSERT INTO Soluciones SET ?', [req.body]);
        res.json({ message: 'Creado con exito'})
    }

    public async createNew (req: Request, res: Response) {
        const result = await pool.query('INSERT INTO Soluciones (Fecha) VALUES (null)');
        res.json({ message: 'Creado con exito'})
    }

    public async getMaxId (req: Request, res: Response) {
        const { id } = req.params;
        const solucion = await pool.query("SELECT * FROM soluciones WHERE Id = (SELECT MAX(Id) FROM Soluciones)");
        console.log(solucion);
        if (solucion.length > 0) {
            return res.json(solucion[0]);
        }
        res.status(404).json({ text: "La solución no existe" });
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM soluciones WHERE Id = ?', [id]);
        res.json({ message: 'Solución eliminada con exito' });
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const solucionVieja = req.body;
        await pool.query('UPDATE soluciones SET ? WHERE Id = ?', [req.body, id]);
        res.json({ message: "Solucion actualizada con exito" });
    }

}
export const solucionesController = new SolucionesController();