<template>
  <div class="home">
    <GithubCorner />
    <HelloWorld msg="Welcome to Your Vue-next.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GithubCorner from "@/components/GithubCorner.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    GithubCorner,
  },
};
</script>
