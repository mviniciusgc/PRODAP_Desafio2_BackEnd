import { container } from 'tsyringe';

import { ICartesianPlaneRepository } from '@modules/cartesianPlane/infra/interfaces/repository/ICartesianPlaneRepository';
import { CartesianPlaneRepository } from '@modules/cartesianPlane/infra/repositories/CartesianPlaneRepository';

container.registerSingleton<ICartesianPlaneRepository>('CartesianPlaneRepository',CartesianPlaneRepository);