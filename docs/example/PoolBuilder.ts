export class Pool {}

export class PoolBuilder {
    constructor(builderFunction: (builder: PoolBuilder) => void = (e) => e) {
        builderFunction(this);
    }

    build(): Pool {
        return {} as Pool;
    }
}
