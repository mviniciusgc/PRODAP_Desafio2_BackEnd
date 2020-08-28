
import { PlanoCartesianoRepository } from '../repositories/PlanoCartesiano';
import { CalcularDistanciaService } from '@modules/planoCartesiano/services/CalcularDistanciaService';
import { PlanoCartesianoDTO } from '@modules/planoCartesiano/dto/PlanoCartesianoDTO';

describe("Calcular a distancia", () => {

    let fakePlanoCartesianoRepository: PlanoCartesianoRepository;
    let calcularDistanciaService: CalcularDistanciaService;

    beforeEach(() => {
        fakePlanoCartesianoRepository = new PlanoCartesianoRepository();
        calcularDistanciaService = new CalcularDistanciaService(fakePlanoCartesianoRepository);
    })

    it('deve calcular a distancia apartir de quatro valores dos eixo x e Y no placo cartesiano', async () => {

        const pontosPlanoCatesiano = new PlanoCartesianoDTO(1.0, 7.0, 5.0, 9.0);

        const valorTotal = await calcularDistanciaService.execute(pontosPlanoCatesiano);

        expect(valorTotal).toBe(4.4721)



    })
})