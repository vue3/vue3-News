<template>
  <div class="l-pixel" :style="pixelStyle" @click="onPixelClick"></div>
</template>

<script>
export default {
  props: {
    // could be "props: ['color', 'size']" if there no need for "type" and "required".
    color: {
      // RGB color - i.e. "255, 255, 255"
      // applied in "pixelStyle()" computed data
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  computed: {
    pixelStyle() {
      // style binding in template
      return {
        "background-color": `rgb(${this.color})`, // this.color is "color" in "props"
        width: this.size,
        height: this.size,
      };
    },
  },
  methods: {
    onPixelClick() {
      // click event handler
      this.$emit("pixel-click", this.color);
    },
  },
};
</script>

<style scoped>
.l-pixel {
  display: inline-block;
}
</style>
