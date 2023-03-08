<script setup>
const fa = reactive({
  data: [
    { icon: 'fa-solid fa-comment', name: 'listen', hour: '30' },
    { icon: 'fa-solid fa-music', name: 'speak', hour: '15' },
    { icon: 'fa-solid fa-pen-nib', name: 'write', hour: '60' },
    { icon: 'fa-solid fa-tag', name: 'other', hour: '22' },
  ],
});

const BarChartRef = ref();
const option = {
  tooltip: {
    trigger: 'item',
    position: 'right',
    textStyle: {
      fontFamily: 'Lexend Deca',
    },
  },
  legend: {
    show: true,
    bottom: '5%',
    left: 'center',
    itemWidth: 14,
    textStyle: {
      fontFamily: 'Lexend Deca',
      fontSize: 12,
      fontWeight: 500,
    },
  },
  series: [
    {
      name: 'Progress',
      type: 'pie',
      top: -70,
      radius: ['40%', '70%'],
      color: ['#000000', '#555555', '#777777', '#b9b9b9'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontFamily: 'Lexend Deca',
          fontWeight: 500,
        },
      },
      data: [
        { value: 30, name: 'Listen' },
        { value: 15, name: 'Speak' },
        { value: 60, name: 'Write' },
        { value: 22, name: 'Other' },
      ],
    },
  ],
};
onMounted(() => {
  const echarts = inject('echarts');
  const BarChart = echarts.init(BarChartRef.value);
  BarChart.setOption(option);
});
</script>

<template>
  <div class="card">
    <header>
      <h1>My Courses</h1>
    </header>
    <div class="course">
      <div class="list" v-for="(i, index) in fa.data" :key="index">
        <font-awesome-icon :icon="i.icon" />
        <div class="detail">
          <h6>{{ i.name }}</h6>
          <p>{{ i.hour }} Hours</p>
        </div>
        <span></span>
      </div>
    </div>

    <header>
      <h1>Account Progress</h1>
    </header>
    <div ref="BarChartRef" class="echart"></div>
  </div>
</template>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 12rem;
  padding: 1.5rem;
  background-color: #eceff5;
  border-radius: 1.5rem;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    h1 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
    }
  }
  .course {
    display: flex;
    flex-direction: column;
    .list {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      &:nth-last-child(1) {
        margin-bottom: 2rem;
      }
      svg {
        background-color: #000000;
        color: #ffffff;
        padding: 0.75rem;
        margin-right: 0.5rem;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 100rem;
      }
      h6 {
        font-size: 0.8rem;
        font-weight: 600;
        color: #000000;
      }
      p {
        font-size: 0.5rem;
        font-weight: 500;
        color: #87898d;
      }
      span {
        position: relative;
        margin-left: auto;
        &:after {
          position: absolute;
          content: '';
          border-top: 0.25rem dotted #000000;
          width: 0.7rem;
          transform: rotate(90deg);
        }
      }
    }
  }
}

.echart {
  flex: 1 1 auto;
  width: 100%;
}
</style>
