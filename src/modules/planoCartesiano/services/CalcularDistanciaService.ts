import { injectable, inject } from "tsyringe";
import { IPlanoCartesianoRepository } from "../infra/interfaces/repository/IPlanoCartesianoRepository";
import { PlanoCartesianoDTO } from "../dto/PlanoCartesianoDTO";

@injectable()
class CalcularDistanciaService {

    constructor(
        @inject('PlanoCartesianoRepository')
        private planoCartesianoRepository: IPlanoCartesianoRepository
    ) { }

    public async execute(data: PlanoCartesianoDTO): Promise<number> {

        const pontoA = Math.pow((data.x2 - data.x1),2);
        const pontoB =  Math.pow((data.y2 - data.y1),2);

        const raizQuadradaEquacao = Math.sqrt((pontoA + pontoB));

        let total = parseFloat(raizQuadradaEquacao.toFixed(4));

        const valor = await this.planoCartesianoRepository.salvarDistanciaCalculada(total);

        return total;

    }

}

export { CalcularDistanciaService };