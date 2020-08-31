interface ICartesianPlaneRepository {
    saveCalculatedDistance(total: number): Promise<number>;
}

export { ICartesianPlaneRepository };