import { ICartesianPlaneRepository } from "../interfaces/repository/ICartesianPlaneRepository";

class CartesianPlaneRepository implements ICartesianPlaneRepository {

    private calculatedDistance: Array<number>;

    constructor() {
        this.calculatedDistance = [];
    }

    public async saveCalculatedDistance(total: number): Promise<number> {

        this.calculatedDistance.push(total);
        return total;
    }

}

export { CartesianPlaneRepository };