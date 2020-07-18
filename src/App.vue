<template>
  <div class="view">
    <div id="nav">
      <div>
        <b>🚀 [vue3, vuex, router, ts]</b>
      </div>
      <div>
        <router-link to="/">(🍉 ) => Home</router-link>
      </div>
      <div>
        <router-link to="/vue">(🥝 ) => Vue Info</router-link>
      </div>
      <div>
        <router-link to="/react">(🍇 ) => React Info</router-link>
      </div>
      <div>
        <router-link to="/vue3-pixel-art">(🍓 ) => Pixel Art</router-link>
      </div>
      <div>
        <router-link to="/vue3-todomvc">(📚 ) => Todos MVC</router-link>
      </div>
      <div>
        <router-link to="/vue3-markdown">(📖 ) => Markdown</router-link>
      </div>
      <div>
        <router-link to="/vue3-apexcharts">(⛱ ) => ApexCharts</router-link>
      </div>
      <div>
        <router-link to="/vue3-win10-DatePanel">(🍒 ) => win10 Date</router-link>
      </div>
      <div>
        <router-link to="/about">(🌽 ) => About</router-link>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
*,
:after,
:before {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #040609;
  color: #92abcf;
}
.view {
  position: relative;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  // color: #2c3e50;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #1d2636;
  padding: 24px 12px 12px;
  flex: 0 0 auto;
  height: 100vh;
  z-index: 99;
  div {
    display: flex;
    height: 46px;
    line-height: 46px;
    color: #92abcf;
  }
  a {
    width: 100%;
    font-weight: bold;
    color: #92abcf;
    text-decoration: none;
    cursor: pointer;
    padding-left: 30px;
    &:hover {
      color: #11ece5;
    }
    &.router-link-exact-active {
      color: #11ece5;
      background-color: #2d405d;
    }
  }
}
#content {
  position: relative;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  padding-left: 230px;
}

ol,
ul {
  list-style: none;
}
</style>
