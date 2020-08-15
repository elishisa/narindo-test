<template>
  <div class="container">
    <slide />
    <menuhome />
    <newslist />
  </div>
</template>
<script>
import slide from "../components/slideshow";
import menuhome from "../components/menuhome";
import newslist from "../components/newlist";

export default {
  name: "App",
  components: {
    slide,
    menuhome,
    newslist,
  },
  methods: {},
};
</script>
<style scoped>
</style>