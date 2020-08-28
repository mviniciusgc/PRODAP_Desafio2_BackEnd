import { IPlanoCartesianoRepository } from "@modules/planoCartesiano/infra/interfaces/repository/IPlanoCartesianoRepository";
import { IPlanoCartesianoDTO } from "@modules/planoCartesiano/infra/interfaces/dto/IPlanoCartesianoDTO";

class PlanoCartesianoRepository implements IPlanoCartesianoRepository {

    private distanciasCalculadas: Array<number>;

    constructor() {
        this.distanciasCalculadas = [];
    }

    public async salvarDistanciaCalculada(total: number): Promise<number> {
        this.distanciasCalculadas.push(total);
        return total;
    }


}

export { PlanoCartesianoRepository };