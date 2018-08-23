import { Thing } from "./things";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    printIt() {
        this.things.forEach(element => {
            let addThick: string = String(element.numberTag());
            addThick += ' .';
            if (element.finished() == true) {
                addThick += '[x]';
            } else {
                addThick += '[ ]';
            }
            console.log(addThick, element, element.nameTag)
        });
    }
}

export { Fleet };