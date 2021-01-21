import { Request, Response } from 'express';

import pool from '../routes/database';

class AgenciasController{

    public async list (req: Request, res: Response) {
        const agencias = await pool.query('SELECT * FROM agencias WHERE Baja <=> null');
        res.json(agencias);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const agencias = await pool.query('SELECT * FROM agencias WHERE Id = ?', [id]);
        console.log(agencias);
        if (agencias.length > 0) {
            return res.json(agencias[0]);
        }
        res.status(404).json({ text: "La agencia no existe" });
    }
}
export const agenciasController = new AgenciasController();