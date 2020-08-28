interface IPlanoCartesianoRepository {
    salvarDistanciaCalculada(total: number): Promise<number>;
}

export { IPlanoCartesianoRepository };