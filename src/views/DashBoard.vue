<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}
</script>

<template>
  <main>
    <header>
      <h1>Dashboard</h1>
      <div class="search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="Search" />
      </div>
      <div class="user-info">
        <font-awesome-icon icon="fa-solid fa-circle-plus" />
        <span class="dot">
          <font-awesome-icon icon="fa-regular fa-bell"
        /></span>
        <div class="avatar">
          <img :src="getImageUrl('avatar')" alt="avatar" />
          <p>0nn 7a</p>
        </div>
      </div>
    </header>

    <div class="cards">
      <div class="left">
        <FirstCard></FirstCard>
        <ThirdCard></ThirdCard>
      </div>
      <SecondCard></SecondCard>
    </div>

    <footer></footer>
  </main>
</template>

<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }
  .search {
    display: flex;
    align-items: center;
    background-color: #eceff5;
    color: #a7a9af;
    font-size: 0.8rem;
    border-radius: 100rem;
    width: 10rem;
    padding: 0.5rem;
    margin-left: 1rem;
    svg {
      width: 1rem;
      margin-right: 0.3rem;
    }
    input {
      flex: 1 1 auto;
      color: #87898d;
      font-weight: 500;
      background-color: transparent;
      border: none;
      outline: none;
      &::placeholder {
        color: #a7a9af;
      }
    }
  }
  .user-info {
    display: flex;
    margin-left: auto;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
    span {
      font-size: 1.2rem;
      position: relative;
    }
    .dot {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0.5rem;
        border: 0.2rem solid #de343b;
        border-radius: 100rem;
      }
    }
    .avatar {
      display: flex;
      align-items: center;
      img {
        width: 2rem;
        border-radius: 100rem;
        object-position: 50% bottom;
        margin: 0 0.5rem;
      }
      p {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

.cards {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
