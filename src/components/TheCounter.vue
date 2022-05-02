<script>
  import { useCounterStore} from '@/stores/counter.js';
  import { mapState } from "pinia";

  export default {
    name: 'TheCounter',
    computed: {
      ...mapState(useCounterStore, ['counter']),
    },
  };
</script>

<template>
   <p class="count">{{counter}}</p>
</template>
