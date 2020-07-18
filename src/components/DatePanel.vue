<template>
  <div class="date-panel">
    <div class="cell-list week-list">
      <div class="cell-item" v-for="item in weeks" :key="item">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="cell-list date-list">
      <div class="cell-item" v-for="item in dateList" :key="item">
        <div class="date-cell">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="mask" :style="maskStyle"></div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, 
  onMounted, getCurrentInstance, onUnmounted,
  createApp, h } from "vue";

import dayjs from "dayjs";

// 获取鼠标位置
function useMousePosition(vm) {
  const x = ref(0);
  const y = ref(0);
  const enter = ref(false);
  const height = ref(600);
  let rect = {
    top: 0,
    left: 0,
  };
  function onEnter(e) {
    const el = vm.ctx.$el;
    if (!el) return;
    enter.value = true;
    rect = el.getBoundingClientRect();
    height.value = rect.width * 2;
    // height.value = rect.height;
  }
  function onMove(e) {
    const { clientX, clientY } = e;
    x.value = clientX - rect.left - rect.width;
    y.value = clientY - rect.top - rect.width;
  }
  function onLeave() {
    enter.value = false;
  }

  onMounted(() => {
    const el = vm.ctx.$el;
    if (!el) return;
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });

  onUnmounted(() => {
    const el = vm.ctx.$el;
    if (!el) return;
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseenter", onEnter);
    el.removeEventListener("mouseleave", onLeave);
  });

  return {
    x,
    y,
    enter,
    height,
  };
}

// 生成日历表
function getDateList() {
  // 本月第一天
  const day0 = dayjs().startOf("month");
  // 本月第一个星期的星期日
  const firstDay = day0.subtract(day0.get("day"), "day");
  // 星期数,以上月剩余天数+本月天数
  const rows = Math.ceil((day0.get("day") + day0.daysInMonth()) / 7);
  return Array(rows * 7)
    .fill(0)
    .map((n, i) => firstDay.add(i, "day"));
}

export default {
  name: "DatePanel",
  props: {
    radius: {
      type: Number,
      default: 60,
    },
  },
  setup(props, ctx) {
    const list = getDateList();
    const vm = getCurrentInstance(); // vue3.0 中使用 getCurrentInstance 方法获取当前组件实例; 你可以console它。
    const { x, y, enter, height } = useMousePosition(vm);
    const maskStyle = computed(() => {
      return {
        transform: `translate(${x.value}px, ${y.value}px)`,
        backgroundImage: enter.value
          ? `radial-gradient(transparent, rgba(0, 0, 0, 1) ${props.radius}px, #000)`
          : "",
        backgroundColor: enter.value ? "" : "#000",
        height: height.value + "px",
      };
    });
    return {
      dateList: list.map((it) => it.date()),
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      maskStyle,
      x,
      y,
    };
  },
};
</script>

<style lang="scss">
.date-panel {
  position: relative;
  user-select: none;
  overflow: hidden;
  width: 350px;
  color: #fff;
  .cell-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    .cell-item {
      width: 14.286%;
      background-color: #000;
      &:hover {
        position: relative;
        z-index: 1;
      }
      span {
        z-index: 1;
        position: relative;
      }
    }
  }
  .week-list {
    .cell-item {
      line-height: 24px;
      padding: 5px 0;
    }
  }

  .date-list {
    .cell-item {
      padding: 2px;
      .date-cell {
        height: 42px;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .mask {
    width: 200%;
    height: 200%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
