import { observable, action, computed } from 'mobx';

export class CounterStore {

    @observable counter = 0;

    @computed get totalAmountOfClicks() {
        return this.counter;
    }

    @action click() {
        this.counter++;
    }
}

const counterStore = new CounterStore();

export default counterStore;
