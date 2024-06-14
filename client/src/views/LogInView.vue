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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      isValid: true,
    };
  },
  methods: {
    ...mapActions(["setUser", "setCart"]),
    async login() {
      if (this.email === "" || this.password === "") {
        this.isValid = false;
      } else {
        const response = await ApiService.Users.login(
          this.email,
          this.password
        );
        if (response.status == 200) {
          this.setUser(response.data);
          router.push("/");
          this.setCart(await ApiService.Users.getCart(response.data.id));
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
