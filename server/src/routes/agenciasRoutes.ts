import { Router } from 'express';

import { agenciasController } from '../controlers/agenciasController';

class AgenciasRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/agencias/', agenciasController.list);
        this.router.get('/agencias/:id', agenciasController.getOne);
    }

}

const agenciasRoutes = new AgenciasRouter();
export default agenciasRoutes.router;