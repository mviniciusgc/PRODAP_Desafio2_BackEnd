import { injectable, inject } from "tsyringe";
import { IPlanoCartesianoDTO } from "../infra/interfaces/dto/IPlanoCartesianoDTO";
import { IPlanoCartesianoRepository } from "../infra/interfaces/repository/IPlanoCartesianoRepository";

@injectable()
class CalcularDistanciaService {

    constructor(
        @inject('PlanoCartesianoRepository')
        private planoCartesianoRepository: IPlanoCartesianoRepository
    ) { }

    public async execute(data: IPlanoCartesianoDTO): Promise<number> {

        const equacao = ((data.x2 - data.x1) ^ 2 + (data.y2 - data.y1) ^ 2) / 2;

        let total = parseFloat((equacao.toFixed(4)));

        total = Math.round(total * 100) / 100;

        const valor = await this.planoCartesianoRepository.salvarDistanciaCalculada(total);

        return total;

    }

}

export { CalcularDistanciaService };