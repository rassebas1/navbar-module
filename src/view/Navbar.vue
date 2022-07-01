<template>
  <nav class="navbar-container">
    <ul>
      <li
        class="list-item"
        :class="selectedItem === 1 ? 'active' : ''"
        @click="changeSelection(1)"
      >
        <router-link to="#">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="text"> Home </span>
        </router-link>
      </li>
      <li
        class="list-item"
        :class="selectedItem === 2 ? 'active' : ''"
        @click="changeSelection(2)"
      >
        <router-link to="#">
          <span class="icon">
            <ion-icon name="logo-vue"></ion-icon>
          </span>
          <span class="text">Vue</span>
        </router-link>
      </li>
      <li
        class="list-item"
        :class="selectedItem === 3 ? 'active' : ''"
        @click="changeSelection(3)"
      >
        <router-link to="#">
          <span class="icon">
            <ion-icon name="logo-react"></ion-icon>
          </span>
          <span class="text">React</span>
        </router-link>
      </li>
      <li
        class="list-item"
        :class="selectedItem === 4 ? 'active' : ''"
        @click="changeSelection(4)"
      >
        <router-link to="#">
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

<script lang="ts">
  import { ref } from "vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Navbar",
    setup() {
      const selectedItem = ref(1);
      const changeSelection = (index: number) => {
        selectedItem.value = index;
      };

      return {
        selectedItem,
        changeSelection,
      };
    },
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
    width: calc((100% - 5px) / 4);
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
    color: #222327;
    transition: 0.5s, ease-in-out;
  }
  .navbar-container ul li.active a .icon {
    transform: translateY(25px);
  }
  .navbar-container ul li a .text {
    position: absolute;
    color: #222327;
    font-weight: 400px;
    font-size: 1rem;
    opacity: 0;
    transform: translateY(25px);
    letter-spacing: 0.05em;
    transition: 0.5;
  }
  .navbar-container ul li.active a .text {
    opacity: 1;
    transform: translateY(-10px);
  }
  .indicator {
    position: absolute;
    top: 50px;
    left: calc(0% + (100% - 50px) / 8 - 25px);
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-radius: 50%;
    border: 6px solid #222327;
    transition: 0.5s;
  }
  .indicator::before {
    content: "";
    position: absolute;
    top: 4px;
    left: -16px;
    width: 15px;
    height: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 5px #222327;
    background-color: transparent;
  }
  .indicator::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -17px;
    width: 15px;
    height: 20px;
    background-color: transparent;
    border-bottom-left-radius: 20px;
    box-shadow: -3px 5px #222327;
  }
  .navbar-container ul li:nth-child(1).active ~ .indicator {
    left: calc(0% + (100% - 20px) / 8 - 25px);
  }
  .navbar-container ul li:nth-child(2).active ~ .indicator {
    left: calc(25% + (100% - 30px) / 8 - 25px);
  }
  .navbar-container ul li:nth-child(3).active ~ .indicator {
    left: calc(50% + (100% - 55px) / 8 - 25px);
  }
  .navbar-container ul li:nth-child(4).active ~ .indicator {
    left: calc(75% + (100% - 70px) / 8 - 25px);
  }
</style>
