<script>
  import { useCounterStore} from '@/stores/counter.js';
  import { mapState, mapActions, mapWritableState } from "pinia";
  import TheCounter from '@/components/TheCounter.vue';

  export default {
    name: 'HomeView',
    components: {
      TheCounter,
    },
    computed: {
      ...mapState(useCounterStore, ['isEvenOrOdd']),
      ...mapWritableState(useCounterStore, ['counter']),
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', 'decrement']),
    },
  };
</script>

<template>
  <main>
    <h1>Home</h1>
    <TheCounter></TheCounter>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <hr>
    <p class="type">The number is {{isEvenOrOdd}}</p>
    <hr>
    <div>
      <h3>Edit counter:</h3>
      <input type="number" v-model="counter">
    </div>
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

  hr {
    margin: 10px 0;
  }

  .type {
    margin: 10px 0;
    font-size: 1.6rem;
  }

  input {
    font-size: 1.2rem;
  }

</style>
