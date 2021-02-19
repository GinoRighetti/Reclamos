import { Router } from 'express';

import { solucionesController } from '../controlers/solucionesController';

class SolucionesRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/soluciones/', solucionesController.list);
        this.router.get('/soluciones/:id', solucionesController.getOne);
        this.router.post('/soluciones/', solucionesController.create);
        this.router.post('/soluciones/nuevo/', solucionesController.createNew);
        this.router.get('/solucionesmaxid/', solucionesController.getMaxId);
        this.router.delete('/soluciones/:id',solucionesController.delete);
        this.router.put('/soluciones/:id',solucionesController.update);
       
    }

}

const solucionesRoutes = new SolucionesRouter();
export default solucionesRoutes.router;