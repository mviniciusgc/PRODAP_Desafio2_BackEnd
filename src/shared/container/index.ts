import { container } from 'tsyringe';

import { IPlanoCartesianoRepository } from '@modules/planoCartesiano/infra/interfaces/repository/IPlanoCartesianoRepository';
import { PlanoCartesianoRepository } from '@modules/planoCartesiano/infra/repositories/PlanoCartesianoRepository';

container.registerSingleton<IPlanoCartesianoRepository>('PlanoCartesianoRepository',PlanoCartesianoRepository);