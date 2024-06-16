<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }} <br /></p>
      <div>
        price: {{ price }}$ <br />
        <small class="text-muted">stock: {{ stock }}</small>
      </div>
      <a
        v-if="!isInCart"
        @click="$emit('addToCart')"
        class="btn btn-warning"
        :class="{ disabled: !isUserConnected }"
        >add to cart</a
      ><a v-else @click="$emit('removeFromCart')" class="btn btn-warning"
        >remove from cart</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id", "image", "title", "description", "stock", "price"],
  computed: {
    ...mapGetters(["getCart", "getUser"]),
    isInCart() {
      return this.getCart.includes(this.id);
    },
    isUserConnected() {
      return this.getUser.id;
    },
  },
};
</script>

<style>
.card {
  margin: 3rem;
  max-width: 300px;
}

img {
  max-height: 200px;
}
</style>
