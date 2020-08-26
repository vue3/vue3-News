<template>
  <div class="win10-datepanel">
    <GithubCorner />
    <div class="panel-box">
      <DatePanel />
    </div>
    <div>
      <p>布局：</p>
      <p>
        div: 日期 <br />
        div: mark
      </p>
      <p>
        层级问题：使用 position: relative; 和 z-index: 1;
        将数字浮在mark上，hover的时候也是利用了它。
      </p>
      <p>
        利用 radial-gradient(transparent, rgba(0, 0, 0, 1) 60px, #000);
        圆圈渐变透明。
      </p>
      <p>
        来自：<a href="https://github.com/xty1992a/win10-calendar"
          >xty1992a/win10-calendar</a
        >
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCorner from "@/components/GithubCorner.vue";
import DatePanel from "@/components/DatePanel";

export default {
  name: "Win10DatePanel",
  components: {
    GithubCorner,
    DatePanel,
  },
};
</script>

<style lang="scss">
.win10-datepanel {
  height: 100vh;
  .panel-box {
    display: flex;
    margin-top: 10em;
    justify-content: center;
  }
  // align-items: center

  * {
    box-sizing: border-box;
  }
}
</style>
