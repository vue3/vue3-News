<template>
  <div>
    <div>
      <h2>Vue3 快速介绍-超级马里奥像素艺术</h2>
      <p>Tips: 点击不同色块会改变相同色块的颜色。</p>
      <p>快来试试！</p>
    </div>
    <n-canvas :pixel-data="pixelData" :colors="colors" background="rgb(229, 230, 232)"></n-canvas>
    <p>来自：</p>
    <p>
      🎃Vue.js快速介绍-超级马里奥像素艺术：
      <a
        href="https://itemsets.github.io/vue2-pixel-art/"
      >https://itemsets.github.io/vue2-pixel-art/</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NCanvas from "../components/Canvas.vue";

export default defineComponent({
  name: "hello pixel art",
  components: { NCanvas },
  setup() {
    const C = "C"; //Hat & Shirt
    const B = "B"; //Brown Hair & Boots
    const S = "S"; //Skin Tone
    const O = "O"; //Blue Overalls
    const Y = "Y"; //Yellow Buckles
    const W = "W"; //White Gloves
    const _ = "_";
    const pixelData = [
      [_, _, _, _, _, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, C, C, C, C, C, _, _, _, _, _],
      [_, _, _, C, C, C, C, C, C, C, C, C, _, _],
      [_, _, _, B, B, B, S, S, B, S, _, _, _, _],
      [_, _, B, S, B, S, S, S, B, S, S, S, _, _],
      [_, _, B, S, B, B, S, S, S, B, S, S, B, _],
      [_, _, B, B, S, S, S, S, B, B, B, B, _, _],
      [_, _, _, _, S, S, S, S, S, S, S, _, _, _],
      [_, _, _, C, C, O, C, C, C, C, _, _, _, _],
      [_, _, C, C, C, O, C, C, O, C, C, C, _, _],
      [_, C, C, C, C, O, O, O, O, C, C, C, C, _],
      [_, W, W, C, O, Y, O, O, Y, O, C, W, W, _],
      [_, W, W, W, O, O, O, O, O, O, W, W, W, _],
      [_, W, W, O, O, O, O, O, O, O, O, W, W, _],
      [_, _, _, O, O, O, _, _, O, O, O, _, _, _],
      [_, _, B, B, B, _, _, _, _, B, B, B, _, _],
      [_, B, B, B, B, _, _, _, _, B, B, B, B, _]
    ];

    const colors = {
      [C]: "255, 0, 0",
      [B]: "100, 50, 0",
      [S]: "255, 200, 150",
      [O]: "0, 0, 255",
      [Y]: "255, 255, 0",
      [W]: "255, 255, 255",
      [_]: "229, 230, 232"
    };
    return {
      pixelData,
      colors
    };
  }
});
</script>
