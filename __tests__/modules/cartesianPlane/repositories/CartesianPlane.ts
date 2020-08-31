import { ICartesianPlaneRepository } from "@modules/cartesianPlane/infra/interfaces/repository/ICartesianPlaneRepository";

class CartesianPlaneRepository implements ICartesianPlaneRepository {

    private calculatedDistances: Array<number>;

    constructor() {
        this.calculatedDistances = [];
    }

    public async saveCalculatedDistance(total: number): Promise<number> {
        this.calculatedDistances.push(total);
        return total;
    }


}

export { CartesianPlaneRepository };