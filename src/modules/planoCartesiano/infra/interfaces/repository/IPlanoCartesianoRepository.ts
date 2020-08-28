import { IPlanoCartesianoDTO } from "../dto/IPlanoCartesianoDTO";

interface IPlanoCartesianoRepository {

    salvarDistanciaCalculada(total: number): Promise<number>;

}

export { IPlanoCartesianoRepository };