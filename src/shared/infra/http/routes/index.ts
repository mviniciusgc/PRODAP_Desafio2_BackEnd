import { Router } from 'express';
import { planoCartesianoRouter } from '@modules/planoCartesiano/infra/http/routes/PlanoCartesiano.route';

const routes = Router();

routes.use('/planoCartesiano', planoCartesianoRouter);

export { routes };
