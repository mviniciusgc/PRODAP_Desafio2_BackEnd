import { Router } from 'express';

import { PlanoCartesianoController } from '../controllers/PlanoCartesianoController';

const planoCartesianoRouter = Router();
const planoCartesianoController = new PlanoCartesianoController();

planoCartesianoRouter.post('/calcularDistancia', planoCartesianoController.calcularDistancia);

export { planoCartesianoRouter };