<template>
  <div>
    <div class="d-flex" v-for="product in products" :key="product.id">
      <product-card-vue
        class="p-2 flex-fill"
        :image="product.imageURL"
        :title="product.title"
        :description="product.description"
        :is-in-cart="isInCart"
        @addToCart="addToCart(product.id)"
        @removeFromCart="removeFromCart(productID)"
      ></product-card-vue>
    </div>
  </div>
</template>

<script>
import { ApiService } from "@/api/api";
import ProductCardVue from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
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
    addToCart(productID) {
      ApiService.Users.addToCart(productID, this.getUser.id);
    },
    removeFromCart(productID) {
      ApiService.Users.removeFromCart(productID, this.getUser.id);
    },
  },
};
</script>
