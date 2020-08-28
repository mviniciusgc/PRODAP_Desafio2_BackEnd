
import 'reflect-metadata';
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

        const pontosPlanoCatesiano1 = new PlanoCartesianoDTO(1.0, 7.0, 5.0, 9.0);
        const pontosPlanoCatesiano2 = new PlanoCartesianoDTO(-2.5, 0.4, 12.1, 7.3);
        const pontosPlanoCatesiano3 = new PlanoCartesianoDTO(2.5, -0.4, -12.2, 7.0);

        const valorTotal1 = await calcularDistanciaService.execute(pontosPlanoCatesiano1);
        const valorTotal2 = await calcularDistanciaService.execute(pontosPlanoCatesiano2);
        const valorTotal3 = await calcularDistanciaService.execute(pontosPlanoCatesiano3);

        expect(valorTotal1).toBe(4.4721)
        expect(valorTotal2).toBe(16.1484)
        expect(valorTotal3).toBe(16.4575)



    })
})