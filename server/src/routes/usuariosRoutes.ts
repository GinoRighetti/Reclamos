import { Router } from 'express';

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
        this.router.get('/usuarios/:usuario', usuarioController.getUsuario);
    }

}

const usuariosRoutes = new UsuariosRouter();
export default usuariosRoutes.router;
