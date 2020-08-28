import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalcularDistanciaService } from '@modules/planoCartesiano/services/CalcularDistanciaService';

class PlanoCartesianoController {

    public async calcularDistancia(request: Request, response: Response): Promise<Response> {

        const { x1, y1, x2, y2 } = request.body;

        const calcularDistanciaService = container.resolve(CalcularDistanciaService);

        const total = await calcularDistanciaService.execute({ x1, y1, x2, y2 });

        return response.json(total);

    }

}

export { PlanoCartesianoController };