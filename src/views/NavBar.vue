<script setup>
const fa = reactive({
  icons: [
    'fa-regular fa-bookmark',
    'fa-regular fa-user',
    'fa-regular fa-comment-dots',
    'fa-regular fa-calendar',
    'fa-regular fa-bell',
    'fa-regular fa-envelope-open',
  ],
});

const isFocus = ref(0);
const toggleFocus = index => {
  isFocus.value = index;
};
</script>

<template>
  <nav>
    <ul>
      <li v-for="(i, index) in fa.icons" :key="index">
        <button
          :class="isFocus === index ? 'btn-focus' : ''"
          @click="toggleFocus(index)"
        >
          <font-awesome-icon :icon="i" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0;
  list-style: none;
  li {
    button {
      width: 3rem;
      height: 3rem;
      margin: 0;
      border: none;
      border-radius: 5rem;
      background-color: transparent;
      color: #000000;
      transition: all 0.2s ease;
      &:hover {
        color: #999999;
        cursor: pointer;
      }
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
    .btn-focus {
      margin: 0.6rem 0;
      background-color: #000000;
      color: white;
    }
  }
}
</style>
