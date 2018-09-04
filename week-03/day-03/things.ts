class Thing {
    private name: string;
    private completed: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public complete() {
        this.completed = true;
    }
    public returnStatus(): string {
        if (this.completed) {
            return '[X]';
        } else {
            return '[ ]';
        }
    }
    public getName(): string {
        return this.name;
    }
}

export { Thing };
