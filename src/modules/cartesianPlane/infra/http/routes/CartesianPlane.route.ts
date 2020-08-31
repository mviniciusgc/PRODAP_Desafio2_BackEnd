import { Router } from 'express';

import { CartesianPlaneController } from '../controllers/CartesianPlaneController';

const cartesianPlaneRouter = Router();
const cartesianPlaneController = new CartesianPlaneController();

cartesianPlaneRouter.post('/calculateDistance', cartesianPlaneController.calculateDistance);

export { cartesianPlaneRouter };