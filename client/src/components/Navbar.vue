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

        <a href="" v-if="userConnected" @click="clearUser">
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </a>
        <div class="navbar-nav" v-else>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
        </div>
        <img :src="imageURL" id="profile" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["getUser"]),
    userConnected() {
      return this.getUser.id;
    },
    imageURL() {
      return (
        this.getUser.profileURL ||
        "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
      );
    },
  },
  methods: {
    ...mapActions(["clearUser"]),
  },
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

svg {
  color: black;
  width: 2rem;
  height: 2rem;
  margin: 1rem;
}

#profile {
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin: 0%;
}
</style>
