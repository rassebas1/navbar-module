<template>
  <nav class="navbar-container">
    <ul>
      <li class="list-item active">
        <router-link to="/">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="text"> Home </span>
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/vue">
          <span class="icon">
            <ion-icon name="logo-vue"></ion-icon>
          </span>
          <span class="text">Vue</span>
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/react">
          <span class="icon">
            <ion-icon name="logo-react"></ion-icon>
          </span>
          <span class="text">React</span>
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/about">
          <span class="icon">
            <ion-icon name="person-circle-outline"></ion-icon>
          </span>
          <span class="text">About</span>
        </router-link>
      </li>
      <div class="indicator"></div>
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
    name: "Navbar",
  });
</script>

<style lang="scss" scoped>
  :root {
    --bg-color: #222327;
  }
  .navbar-container {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    height: 80px;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  .navbar-container ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    margin: 5px;
  }
  .navbar-container ul li {
    width: 100%;
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }
  .navbar-container ul li a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }
  .navbar-container ul li a .icon {
    font-size: 30px;
    width: 50px;
    height: 50px;
    position: relative;
    line-height: 80px;
    text-align: center;
    font-size: 1rem;
    color: var(--bg-color);
    transition: 0.5s, ease-in-out;
  }
  .navbar-container ul li.active a .icon {
    transform: translateY(25px);
  }
  .navbar-container ul li a .text {
    position: absolute;
    color: var(--bg-color);
    font-weight: 400px;
    font-size: 1rem;
    opacity: 0;
    transform: translateY(25px);
    letter-spacing: 0.05em;
    transition: 0.5;
  }
  .navbar-container ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
  }
</style>
