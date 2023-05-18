import { Roof, RoofBuilder } from "./RoofBuilder";
import { Pool, PoolBuilder } from "./PoolBuilder";
import { Room, RoomBuilder } from "./RoomBuilder";

export class House {
    constructor(readonly number: number, roof: Roof, pool?: Pool, rooms: Room[] = []) {}
}

export class HouseBuilder {
    private number: number;
    private roofBuilder: RoofBuilder = new RoofBuilder();
    private poolBuilder: PoolBuilder = undefined;
    private roomBuilders: RoomBuilder[] = [];

    constructor(builderFunction: (builder: HouseBuilder) => void = (e) => e) {
        builderFunction(this);
    }

    // withField
    withNumber(number: number): this {
        this.number = number;
        return this;
    }

    // withBuild
    withRoof(builderFunction: (builder: RoofBuilder) => void = (e) => e): this {
        builderFunction(this.roofBuilder);
        return this;
    }

    withPool(builderFunction: (builder: PoolBuilder) => void = (e) => e): this {
        const newBuilder = new PoolBuilder();
        builderFunction(newBuilder);
        this.poolBuilder = newBuilder;
        return this;
    }

    // withArr
    withRoom(builderFunction: (builder: RoomBuilder) => void = (e) => e): this {
        const newBuilder = new RoomBuilder();
        builderFunction(newBuilder);
        this.roomBuilders.push(newBuilder);
        return this;
    }

    build(): House {
        return new House(
            this.number,
            this.roofBuilder.build(),
            this.poolBuilder?.build(),
            this.roomBuilders.map((b) => b.build())
        );
    }
}
