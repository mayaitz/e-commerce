<template>
  <div>
    <h1 class="mb-2">Shopping Cart</h1>
    <div v-if="getCart.length === 0" class="mt-5 text-center">
      Your shopping cart is empty... <br />
      <router-link to="/"
        >Let's go find you your perfect pen match!</router-link
      >
    </div>
    <div v-else class="d-flex justify-content-center align-items-center vw-100">
      <div class="card w-75">
        <div
          v-for="itemID in getCart"
          :key="itemID"
          class="list-group list-group-flush"
        >
          <order-item
            :id="itemID"
            class="list-group-item"
            @removeFromCart="removeFromCartEvent(itemID)"
            @price="addToTotalPrice"
          ></order-item>
        </div>
        <div class="text-start" id="order-details">
          total price is {{ totalPrice }}$ <br />
          delivery would take up to 7 word days, depending on the destination
          location.
        </div>
        <button type="button" class="btn btn-info w-100" @click="buy">
          buy!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from "@/api/api";
import OrderItem from "@/components/OrderItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters(["getCart", "getUser"]),
  },
  methods: {
    ...mapActions(["removeFromCart", "clearCart"]),
    removeFromCartEvent(productID) {
      this.removeFromCart(productID);
      ApiService.Users.removeFromCart(productID, this.getUser.id);
    },
    addToTotalPrice(price) {
      this.totalPrice += price;
    },
    async buy() {
      await ApiService.Orders.newOrder(this.getUser.id);
      this.clearCart();
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 70vw;
}
#order-details {
  margin-top: 2rem;
  margin-left: 1rem;
}
</style>
