import { IPlanoCartesianoRepository } from "../interfaces/repository/IPlanoCartesianoRepository";

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