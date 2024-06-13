<template>
  <form
    class="position-absolute top-50 start-50 translate-middle"
    @submit.prevent="register"
  >
    <div class="row">
      <div class="mb-3 col">
        <label class="form-label">First name</label>
        <input
          class="form-control"
          id="first-name-input"
          type="text"
          v-model="firstName"
          :class="{ 'is-invalid': firstName == '' || firstName.length > 50 }"
        />
      </div>
      <div class="mb-3 col">
        <label class="form-label">Last name</label>
        <input
          class="form-control"
          id="last-name-input"
          type="text"
          v-model="lastName"
          :class="{ 'is-invalid': lastName == '' || lastName.length > 50 }"
        />
      </div>
      <div class="mb-3 col">
        <label class="form-label">Phone number</label>
        <input
          class="form-control"
          id="phone-number-input"
          type="text"
          v-model="phoneNumber"
        />
      </div>
    </div>
    <div class="row">
      <div class="mb-3 col">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          v-model="email"
          :class="{ 'is-invalid': email == '' }"
        />
      </div>
      <div class="mb-3 col">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password-input"
          v-model="password"
          :class="{ 'is-invalid': password == '' }"
        />
      </div>
    </div>

    <div class="row">
      <label class="form-label">Credit card</label>
      <div class="mb-3 row">
        <div class="col">
          <input
            type="text"
            class="form-control col"
            id="credit-number-input"
            placeholder="credit card number"
            v-model="creditNumber"
            :class="{
              'is-invalid': creditNumber == '' || creditNumber.length > 16,
            }"
          />
        </div>
        <div class="col row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="cvc-input"
              placeholder="cvc"
              v-model="cvc"
              :class="{ 'is-invalid': cvc == '' || cvc.length > 3 }"
            />
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control"
              id="experation-date-input"
              v-model="experationDate"
              :class="{ 'is-invalid': experationDate == '' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <label class="form-label">Address</label>
      <div class="mb-2 row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="country-input"
            placeholder="country"
            v-model="country"
            :class="{ 'is-invalid': country == '' }"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="city-input"
            placeholder="city"
            v-model="city"
            :class="{ 'is-invalid': city == '' }"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="street-input"
            placeholder="street"
            v-model="street"
            :class="{ 'is-invalid': street == '' }"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="house-number-input"
            placeholder="house number"
            v-model="houseNumber"
            :class="{ 'is-invalid': houseNumber == '' }"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="floor-input"
            placeholder="floor"
            v-model="floor"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="apartment-input"
            placeholder="apartment number"
            v-model="apartment"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-info mt-5">Submit</button>
    <div class="invalid-feedback" v-show="!isValid">
      couldn't register:/ maybe the email is taken.
    </div>
  </form>
</template>

<script>
import { ApiService } from "@/api/api";
import router from "@/router/routes";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      creditNumber: "",
      cvc: "",
      experationDate: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      floor: "",
      apartment: "",
      isValid: true,
    };
  },

  methods: {
    ...mapActions["setUser"],
    castToNumber(stg) {
      if (stg == "") {
        return null;
      } else {
        return Number(stg);
      }
    },

    async register() {
      const response = (
        await ApiService.Users.register(
          this.firstName,
          this.lastName,
          this.castToNumber(this.phoneNumber),
          this.email,
          this.password,
          Number(this.creditNumber),
          Number(this.cvc),
          this.experationDate + "T00:00:00Z",
          this.country,
          this.city,
          this.street,
          Number(this.houseNumber),
          this.castToNumber(this.floor),
          this.castToNumber(this.apartment)
        )
      ).status;
      if (response.status == 201) {
        this.setUser(response.data);
        router.push("/");
      } else {
        this.isValid = false;
      }
    },
  },
};
</script>

<style>
form {
  width: 50%;
  margin-top: 2rem;
}

input {
  background-color: lightblue !important;
}
</style>
