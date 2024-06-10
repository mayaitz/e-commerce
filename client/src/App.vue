<template>
  <div id="app">
    <nav>
      <navbar-vue></navbar-vue>
    </nav>
    <router-view />
  </div>
</template>
<script>
import NavbarVue from "./components/Navbar.vue";

export default {
  components: {
    NavbarVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
