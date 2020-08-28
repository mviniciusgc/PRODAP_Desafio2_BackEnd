import { IPlanoCartesianoRepository } from "@modules/planoCartesiano/infra/interfaces/repository/IPlanoCartesianoRepository";
import { IPlanoCartesianoDTO } from "@modules/planoCartesiano/infra/interfaces/dto/IPlanoCartesianoDTO";

class PlanoCartesianoRepository implements IPlanoCartesianoRepository {


    public async salvarDistanciaCalculada(total: number): Promise<number> {
        throw new Error("Method not implemented.");
    }

    
}

export { PlanoCartesianoRepository };