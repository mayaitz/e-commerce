<template>
  <div class="row">
    <div
      class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12"
      v-for="product in products"
      :key="product.id"
    >
      <product-card-vue
        :id="product.id"
        :image="product.imageURL"
        :title="product.title"
        :price="product.price"
        :stock="product.stock"
        :description="product.description"
        @addToCart="addToCartEvent(product.id)"
        @removeFromCart="removeFromCartEvent(product.id)"
      ></product-card-vue>
    </div>
  </div>
</template>

<script>
import { ApiService } from "@/api/api";
import ProductCardVue from "@/components/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    ProductCardVue,
  },
  async created() {
    this.products = (await ApiService.Products.fetchProducts()).data;
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    addToCartEvent(productID) {
      this.addToCart(productID);
      ApiService.Users.addToCart(productID, this.getUser.id);
    },
    removeFromCartEvent(productID) {
      this.removeFromCart(productID);
      ApiService.Users.removeFromCart(productID, this.getUser.id);
    },
  },
};
</script>
