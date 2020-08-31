import { injectable, inject } from "tsyringe";
import { ICartesianPlaneRepository } from "../infra/interfaces/repository/ICartesianPlaneRepository";
import { CartesianPlaneDTO } from "../dto/CartesianPlane";

@injectable()
class CalculateDistanceService {

    constructor(
        @inject('CartesianPlaneRepository')
        private cartesianPlaneRepository: ICartesianPlaneRepository
    ) { }

    public async execute(data: CartesianPlaneDTO): Promise<number> {

        const scoreA = Math.pow((data.x2 - data.x1),2);
        const scoreB =  Math.pow((data.y2 - data.y1),2);

        const raizQuadradaEquacao = Math.sqrt((scoreA + scoreB));

        let total = parseFloat(raizQuadradaEquacao.toFixed(4));

        const valor = await this.cartesianPlaneRepository.saveCalculatedDistance(total);

        return total;

    }

}

export { CalculateDistanceService };