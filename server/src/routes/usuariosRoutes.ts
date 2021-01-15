import { Router } from 'express';
import { config } from 'process';

import { usuarioController } from '../controlers/usuariosController';

class UsuariosRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/usuarios/', usuarioController.list);
        this.router.get('/usuarios/:id', usuarioController.getOne);
        this.router.post('/usuarios/', usuarioController.create);
        this.router.delete('/usuarios/:id',usuarioController.delete);
        this.router.put('/usuarios/:id',usuarioController.update);
    }

}

const usuariosRoutes = new UsuariosRouter();
export default usuariosRoutes.router;
