import Stores from 'stores';


const { counterStore } = Stores;

export const incrementCounter = () => counterStore.increment();

export const resetCounter = () => counterStore.reset();
