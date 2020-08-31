import { Router } from 'express';
import { cartesianPlaneRouter } from '@modules/cartesianPlane/infra/http/routes/CartesianPlane.route';

const routes = Router();

routes.use('/cartesianPlane', cartesianPlaneRouter);

export { routes };
