import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    isEvenOrOdd: (state) => state.counter % 2 ? 'Odd' : 'Even',
  },
  actions: {
    increment() {
      this.counter += 1;
    },

    decrement(){
      this.counter -= 1;
    }
  }
});
