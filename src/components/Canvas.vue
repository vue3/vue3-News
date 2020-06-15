<template>
  <div class="l-canvas-container" :style="{ background: background }">
    <div v-for="(row, rowIndex) in pixelData" :key="rowIndex" :style="{ height: pixelSize }">
      <n-pixel
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :color="colors[col]"
        :size="pixelSize"
        @pixel-click="onPixelClick"
      ></n-pixel>
    </div>
  </div>
</template>

<script>
import NPixel from "./Pixel";

export default {
  components: { NPixel },
  props: {
    pixelData: { type: Array, required: true },
    colors: { type: Object, required: true },
    pixelSize: { type: String, default: "20px" },
    background: { type: String, default: "white" }
  },
  methods: {
    onPixelClick(color) {
      const newColor = this.getRandomColor();
      const colors = this.colors;
      for (const c in colors) {
        if (colors[c] === color) {
          colors[c] = newColor;
        }
      }
    },
    getRandomColor() {
      return (
        this.getRandom() + ", " + this.getRandom() + ", " + this.getRandom()
      );
    },
    getRandom() {
      return Math.floor(Math.random() * 256);
    }
  }
};
</script>

<style scoped>
.l-canvas-container {
  background: rgb(229, 230, 232);
  width: 280px;
  margin: 0 auto;
  margin-top: 50px;
  height: 340px;
}
</style>