<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}
const teachers = reactive({
  data: [
    {
      img: 'teacher1',
      name: 'Poor Puppy',
      detail: '4 hours lecture',
      price: '$100/hr',
    },
    {
      img: 'teacher2',
      name: 'Cute Kitty',
      detail: '8 hours lecture',
      price: '$120/hr',
    },
    {
      img: 'teacher3',
      name: 'Dog Doll',
      detail: '6 hours lecture',
      price: '$110/hr',
    },
  ],
});
</script>

<template>
  <div class="card">
    <header>
      <h1>Find Your Teacher</h1>
      <div class="select">
        <select name="language" id="language" required>
          <option value="english">English</option>
          <option value="chinese">Chinese</option>
        </select>
      </div>
    </header>
    <table>
      <tr v-for="t in teachers.data" :key="t.name">
        <td>
          <img :src="getImageUrl(t.img)" alt="teacher1" />
        </td>
        <td>
          <h3>{{ t.name }}</h3>
        </td>
        <td>
          <p>{{ t.detail }}</p>
        </td>
        <td>
          <h5>{{ t.price }}</h5>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="less" scoped>
.card {
  padding: 1rem 1rem 0 0;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
    }
    .select {
      position: relative;
      border: 0.05rem solid #a7a9af;
      border-radius: 100rem;
      font-weight: 300;
      &:before {
        content: '>';
        position: absolute;
        top: 50%;
        right: 0.7rem;
        transform: translateY(-50%) rotate(90deg);
        color: #a7a9af;
      }
      select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        outline: 0;
        box-shadow: none;
        border: none;
        color: #87898d;
        background-color: transparent;
        background-image: none;
        padding: 0.5rem 1.8rem 0.5rem 1rem;
      }
    }
  }
  table,
  tr,
  td {
    border-collapse: collapse;
  }
  table {
    margin-top: 1rem;
    width: 100%;
    tr {
      &:nth-child(even) td {
        background-color: #eceff5;
      }
      td {
        padding: 0.5rem 1rem;
        &:first-child {
          border-top-left-radius: 1.5rem;
          border-bottom-left-radius: 1.5rem;
        }
        &:last-child {
          border-top-right-radius: 1.5rem;
          border-bottom-right-radius: 1.5rem;
        }
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
        h5 {
          font-size: 0.8rem;
          font-weight: 400;
          color: #000000;
          text-align: end;
        }
      }
    }
  }
}
</style>
