import { Thing } from "./things";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    print(): string {
        for (let i: number = 0; i < this.things.length; i++) {
            if (this.things[i].complete()) {
                return `[x] ${this.things[i]}`
            } else {
                return `[ ] ${this.things[i]}`
            }
        }
    }
}

export { Fleet };