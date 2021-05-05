<template>
  <div class="counter">
    <div>
      Total: <span class="total">{{ total }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalCounts",
  computed: {
    total() {
      return (
        this.$store.direct.getters.counter1.total +
        this.$store.direct.getters.counter2.total
      );
    },
  },
};
</script>

<style>
.total {
  margin: 10px;
  font-size: 80px;
}
</style>
