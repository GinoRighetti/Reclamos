import { Request, Response } from 'express';

import pool from '../routes/database';

class UsuarioController{

    public async list (req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM Usuarios');
        res.json(usuarios);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM Usuarios WHERE Id = ?', [id]);
        console.log(usuario);
        if (usuario.length > 0) {
            return res.json(usuario[0]);
        }
        res.status(404).json({ text: "El usuario no existe" });
    }

    public async create (req: Request, res: Response) {
        const result = await pool.query('INSERT INTO Usuarios SET ?', [req.body]);
        res.json({ message: 'Creado con exito'})
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM Usuarios WHERE Id = ?', [id]);
        res.json({ message: 'Usuario eliminado con exito' });
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const viejoUsuario = req.body;
        await pool.query('UPDATE Usuarios SET ? WHERE Id = ?', [req.body, id]);
        res.json({ message: "Usuario actualizado con exito" });
    }

}
export const usuarioController = new UsuarioController();
