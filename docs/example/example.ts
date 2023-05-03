import { HouseBuilder } from "./HouseBuilder";

const houseWith2rooms = new HouseBuilder()
    .withRoom((r) => r.withFloorType("tiles"))
    .withRoom((r) => r.withFloorType("carpet"));

const houseWith2roomsAndPool = new HouseBuilder()
    .withRoom((r) => r.withFloorType("tiles"))
    .withRoom((r) => r.withFloorType("carpet"))
    .withPool((p) => p);

// Reuse of builder functions
const reuseHouseNumber: (reusableFunction: HouseBuilder) => any = (b) => b.withNumber(2);

const firstHouseWithNumber2 = new HouseBuilder(reuseHouseNumber);
const secondHouseWithNumber2 = new HouseBuilder(reuseHouseNumber);
