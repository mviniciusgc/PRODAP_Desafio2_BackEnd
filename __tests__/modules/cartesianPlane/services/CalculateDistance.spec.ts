
import 'reflect-metadata';
import { CartesianPlaneRepository } from '../repositories/CartesianPlane';
import { CalculateDistanceService } from '@modules/cartesianPlane/services/CalculateDistanceService';
import { CartesianPlaneDTO } from '@modules/cartesianPlane/dto/CartesianPlane';

describe("Calcular a distancia", () => {

    let fakeCartesianPlaneRepository: CartesianPlaneRepository;
    let calculateDistanceService: CalculateDistanceService;

    beforeEach(() => {
        fakeCartesianPlaneRepository = new CartesianPlaneRepository();
        calculateDistanceService = new CalculateDistanceService(fakeCartesianPlaneRepository);
    })

    it('deve calcular a distancia apartir de quatro valores dos eixo x e Y no placo cartesiano', async () => {

        const pontosPlanoCatesiano1 = new CartesianPlaneDTO(1.0, 7.0, 5.0, 9.0);
        const pontosPlanoCatesiano2 = new CartesianPlaneDTO(-2.5, 0.4, 12.1, 7.3);
        const pontosPlanoCatesiano3 = new CartesianPlaneDTO(2.5, -0.4, -12.2, 7.0);

        const valorTotal1 = await calculateDistanceService.execute(pontosPlanoCatesiano1);
        const valorTotal2 = await calculateDistanceService.execute(pontosPlanoCatesiano2);
        const valorTotal3 = await calculateDistanceService.execute(pontosPlanoCatesiano3);

        expect(valorTotal1).toBe(4.4721)
        expect(valorTotal2).toBe(16.1484)
        expect(valorTotal3).toBe(16.4575)



    })
})