<script>
  import { useCounterStore} from '@/stores/counter.js';
  import { mapState, mapActions } from "pinia";

  export default {
    name: 'HomeView',
    computed: {
      ...mapState(useCounterStore, ['counter', 'isEvenOrOdd']),
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', 'decrement']),
    },
  };
</script>

<template>
  <main>
    <h1>Home</h1>
    <p class="count">{{counter}}</p>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <p>The number is {{isEvenOrOdd}}</p>
  </main>
</template>



<style scoped>
  .count {
    font-size: 2.5rem;
    font-weight: bold;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
  }

</style>
