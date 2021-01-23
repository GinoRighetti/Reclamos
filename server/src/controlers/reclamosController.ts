import { Request, Response } from 'express';

import pool from '../routes/database';

class ReclamosController{

    public async list (req: Request, res: Response) {
        const reclamo = await pool.query('SELECT * FROM Reclamos');
        res.json(reclamo);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const reclamo = await pool.query('SELECT * FROM Reclamos WHERE Id = ?', [id]);
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