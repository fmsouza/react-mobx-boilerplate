import { counterStore } from '../stores';

export const incrementCounter = () => counterStore.increment();

export const resetCounter = () => counterStore.reset();
