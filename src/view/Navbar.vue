<template>
  <nav class="navbar-container">
    <ul>
      <li>algo</li>
      <li>algo1</li>
      <li>algo2</li>
      <li>algo3</li>
      <li>algo4</li>
      <li>algo5</li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { defineComponent } from "vue";

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<script lang="ts">
  export default defineComponent({
    name: "navbar",
  });
</script>

<style lang="scss" scoped>
  .navbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
  }
</style>
