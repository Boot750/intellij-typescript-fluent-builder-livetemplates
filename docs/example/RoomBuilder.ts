export class Room {
    constructor(readonly floorType: string) {}
}

export class RoomBuilder {
    private floorType: string;

    constructor(builderFunction: (builder: RoomBuilder) => void = (e) => e) {
        builderFunction(this);
    }

    withFloorType(floorType: string): RoomBuilder {
        this.floorType = floorType;
        return this;
    }

    build(): Room {
        return new Room(this.floorType);
    }
}
