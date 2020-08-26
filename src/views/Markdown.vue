<template>
  <div>
    <GithubCorner />
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div class="output" v-html="output"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import marked from "marked";
import _ from "lodash";

import GithubCorner from "@/components/GithubCorner.vue";

const delay = window.location.hash.includes("?delay=test") ? 16 : 300;

export default defineComponent({
  name: "Markdown",
  components: {
    GithubCorner,
  },
  setup() {
    const input = ref(
      `# 诗词一首 \n 
【醉落魄】 喜鹊调 \n
  正思汝\n
敢问人间几许愁？湿了思念，愁添愁。江岸二红泪，滴痛心头。
骑楼今夜听秋雨，风起只恨愁杀人；念此去烟波波，十里江南一路秋。 
明日风回更美，恰正时。\n
写于广州。
`
    );
    const output = computed(() => marked(input.value, { sanitize: true }));
    // event: HTMLTextAreaElement
    const update = _.debounce((event: any) => {
      input.value = event.target.value;
    }, delay);

    return {
      input,
      output,
      update,
    };
  },
});
</script>

<style lang="scss">
#editor {
  margin: 0;
  height: 100vh;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  ol,
  ul {
    list-style: initial !important;
  }
}
.output {
  background-color: #f6f6f6;
}
textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
