class Thing {
    private name: string;
    private completed: boolean;
    static finished: boolean;
    private static numberID: number = 0;
    private number: number;

    constructor(name: string) {
        this.name = name;
        Thing.numberID++;
        this.number = Thing.numberID;
    }

    public complete() {
        this.completed = true;
    }
    public finished() {
        return this.completed;
    }
    public numberTag() {
        return this.number;
    }
    public nameTag() {
        return this.name;
    }
}

export { Thing };
