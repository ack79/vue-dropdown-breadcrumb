<template>
  <div id="app">
    <span class="material-icons"> expand_more </span>
    <span class="material-icons"> chevron_right </span>
    <BreadCrumb />
  </div>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb.vue";
export default {
  name: "App",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss"></style>
