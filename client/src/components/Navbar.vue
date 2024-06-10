<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img
        src="https://www.freeiconspng.com/thumbs/pen-png/pen-in-hand-png-9.png"
      />
      <router-link to="/">Shopen</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <div class="navbar-nav">
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 3rem;
  height: 4rem;
  margin-right: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
