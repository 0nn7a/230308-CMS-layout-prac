<script setup>
import * as echarts from 'echarts';
provide('echarts', echarts);
</script>

<template>
  <NavBar></NavBar>
  <DashBoard></DashBoard>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #d8d9e5;
  overflow: hidden;
  margin: 0;
  div#app {
    display: flex;
    width: 90vw;
    height: 90vh;
    background-color: rgba(255, 255, 254, 0.55);
    box-shadow: 0 0 2rem #c5c9d5;
    border-radius: 1.5rem;
    nav {
      width: 4.5rem;
      margin: auto 0;
    }
    main {
      flex: 1 1 auto;
      margin: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.5rem;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: -0.3rem 0.3rem 2rem #dcdee7;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
