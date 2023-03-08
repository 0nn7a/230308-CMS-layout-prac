<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}

const date = reactive({
  data: [
    { num: '12', month: 'Dec', day: 'Mon' },
    { num: '13', month: 'Dec', day: 'Tue' },
    { num: '14', month: 'Dec', day: 'Wed' },
  ],
});
</script>

<template>
  <div class="card">
    <header>
      <h1>Schedule</h1>
      <div class="info">
        <p>Oct, 10, 1999</p>
        <div class="select">
          <select name="language" id="language" required>
            <option value="CuteKitty">Cute Kitty</option>
            <option value="PoorPuppy">Poor Puppy</option>
            <option value="DogDoll">Dog Doll</option>
          </select>
        </div>
      </div>
    </header>
    <section>
      <div class="left">
        <img :src="getImageUrl('teacher2')" alt="#" />
        <h3>Cute Kitty</h3>
        <p>a super vary cute kitty, just this.</p>
        <button>Book Online</button>
      </div>
      <div class="middle">
        <div class="date" v-for="(d, index) in date.data" :key="index">
          <h2>{{ d.num }}</h2>
          <div class="detail">
            <p>{{ d.month }}</p>
            <h4>{{ d.day }}</h4>
          </div>
        </div>
      </div>
      <div class="right">
        <p>10:00am - 12:00pm</p>
        <p>02:00pm - 04:00pm</p>
        <p>08:00pm - 10:00pm</p>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
.card {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 0;
  border-radius: 1.5rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
    }
    .info {
      display: flex;
      align-items: center;
      p {
        font-size: 0.5rem;
        font-weight: 300;
        color: #87898d;
        margin-right: 0.5rem;
      }
      .select {
        position: relative;
        background-color: #000000;
        border-radius: 100rem;
        font-weight: 300;
        &:before {
          content: '>';
          position: absolute;
          top: 50%;
          right: 0.7rem;
          transform: translateY(-50%) rotate(90deg);
          color: #ffffff;
        }
        select {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          outline: 0;
          box-shadow: none;
          border: none;
          color: #ffffff;
          background-color: transparent;
          background-image: none;
          padding: 0.5rem 1.8rem 0.5rem 1rem;
        }
      }
    }
  }
  section {
    display: flex;
    gap: 1rem;
    height: 100%;
    .left,
    .middle,
    .right {
      margin-top: 1rem;
    }
    .left {
      flex: 1 1 auto;
      background-color: #eceff5;
      border-radius: 1.5rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      img {
        width: 3.5rem;
        border-radius: 100rem;
      }
      h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #000000;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        color: #87898d;
        text-align: center;
      }
      button {
        border: none;
        background-color: #000000;
        border-radius: 100rem;
        color: #ffffff;
        padding: 0.5rem 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
        &:hover,
        &:active {
          background-color: #a7a9af;
          cursor: pointer;
        }
      }
    }
    .middle {
      flex: 1 0 auto;
      min-width: 8rem;
      max-width: 10rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .date {
        height: 33%;
        padding: 0 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 0.075rem solid #a7a9af;
        border-radius: 1.25rem;
        color: #000000;
        &:nth-child(even) {
          border: none;
          background-color: #000000;
          color: #ffffff;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 700;
        }
        p {
          font-size: 0.8rem;
          font-weight: 300;
        }
        h4 {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }
    .right {
      flex: 0 0 auto;
      min-width: 8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 1rem;
      p {
        font-size: 0.8rem;
        font-weight: 400;
        color: #87898d;
        text-align: end;
        padding-right: 1rem;
      }
    }
  }
}
</style>
