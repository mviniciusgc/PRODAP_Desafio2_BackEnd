import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalculateDistanceService } from '@modules/cartesianPlane/services/CalculateDistanceService';

class CartesianPlaneController {

    public async calculateDistance(request: Request, response: Response): Promise<Response> {

        const { x1, y1, x2, y2 } = request.body;

        const calculateDistanceService = container.resolve(CalculateDistanceService);

        const total = await calculateDistanceService.execute({ x1, y1, x2, y2 });

        return response.json(total);

    }

}

export { CartesianPlaneController };