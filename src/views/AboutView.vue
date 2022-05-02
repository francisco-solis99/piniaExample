<script>
  import { useCounterStore} from '@/stores/counter.js';
  import { mapWritableState, mapActions } from "pinia";

  export default {
    name: 'AboutView',
    computed: {
      ...mapWritableState(useCounterStore, ['counter']),
    },
     methods: {
      ...mapActions(useCounterStore, ['increment']),
    },
  };
</script>

<template>
  <div class="about">
    <h1>About Page</h1>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<style scoped>

button {
  font-size: 1.4rem;
}
</style>
