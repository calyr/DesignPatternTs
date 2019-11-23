export class TestSingleton {
    a: number;
    b: number;
     _instance: TestSingleton = new TestSingleton();
    constructor() {
        if(this._instance) {
            throw new Error('No se puede crear un objeto singleton');
        }
        this._instance = this;
    }

    public get instance(): TestSingleton {
        return this._instance;
    }
}