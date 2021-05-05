<template>
  <div id="app">
    <TotalCounts />
    <Counter
      :total="total1"
      target="counter1"
      @increment="increment"
      @decrement="decrement"
      @reset="reset"
    />
    <Counter
      :total="total2"
      target="counter2"
      @increment="increment"
      @decrement="decrement"
      @reset="reset"
    />
  </div>
</template>

<script lang="ts">
import Counter from "./components/Counter.vue";
import TotalCounts from "./components/TotalCounts.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    Counter,
    TotalCounts,
  },
  methods: {
    increment(target: "counter1" | "counter2") {
      store.dispatch[target].increase();
    },
    decrement(target: "counter1" | "counter2") {
      store.dispatch[target].decrease();
    },
    reset(target: "counter1" | "counter2") {
      store.dispatch[target].reset({
        value: 0,
      });
    },
  },
  computed: {
    total1(): number {
      const total = store.getters.counter1.total;
      return total;
    },
    total2(): number {
      const total = store.getters.counter2.total;
      return total;
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Ubuntu:500);
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);

* {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  font-family: "Ubuntu";
}
</style>
