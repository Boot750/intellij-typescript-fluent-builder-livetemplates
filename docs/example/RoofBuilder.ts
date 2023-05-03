export class Roof {}

export class RoofBuilder {
    constructor(builderFunction: (builder: RoofBuilder) => void = (e) => e) {
        builderFunction(this);
    }

    build(): Roof {
        return {} as Roof;
    }
}
