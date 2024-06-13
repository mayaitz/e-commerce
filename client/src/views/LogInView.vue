<template>
  <div id="app">
    <form
      @submit.prevent="login"
      class="position-absolute top-50 start-50 translate-middle"
    >
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control mb-3"
          :class="{ 'is-invalid': email == '' }"
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          :class="{ 'is-invalid': password == '' }"
        />
      </div>
      <button type="submit" class="btn btn-info mt-5">Submit</button>
      <div class="invalid-feedback" v-show="!isValid">
        email or password are incorrect.
      </div>
    </form>
  </div>
</template>

<script>
import { ApiService } from "@/api/api";
import router from "@/router/routes";

export default {
  data() {
    return {
      email: "",
      password: "",
      isValid: true,
    };
  },
  methods: {
    async login() {
      if (this.email === "" || this.password === "") {
        this.isValid = false;
      } else {
        if (
          (await ApiService.Users.login(this.email, this.password)).status ==
          200
        ) {
          router.push("/");
        } else {
          this.isValid = false;
        }
      }
    },
  },
};
</script>
<style>
input {
  background-color: lightblue !important;
}
</style>
