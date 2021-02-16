import { Router } from 'express';

import { reclamosController } from '../controlers/reclamosController';

class ReclamosRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/reclamos/', reclamosController.list);
        this.router.get('/reclamos/:id', reclamosController.getOne);
        this.router.post('/reclamos/', reclamosController.create);
        this.router.post('/reclamos/nuevo/', reclamosController.createNew);
        this.router.get('/reclamosmaxid/', reclamosController.getMaxId);
        this.router.delete('/reclamos/:id',reclamosController.delete);
        this.router.put('/reclamos/:id',reclamosController.update);
       
    }

}

const reclamosRoutes = new ReclamosRouter();
export default reclamosRoutes.router;