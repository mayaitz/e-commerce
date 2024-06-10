<template>
  <div>
    <div class="d-flex" :v-for="product in products">
      <product-card-vue
        class="p-2 flex-fill"
        image="https://m.media-amazon.com/images/I/515sXTO5QkL._AC_UF1000,1000_QL80_.jpg"
        title="cool pen"
        description="Some quick example of a pen. an exquisite pen."
        :is-in-cart="isInCart"
        @addToCart="isInCart = !isInCart"
        @removeFromCart="isInCart = !isInCart"
      ></product-card-vue>
    </div>
  </div>
</template>

<script>
import ProductCardVue from "@/components/ProductCard.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    ProductCardVue,
  },
  data() {
    return {
      products: [1, 2, 3],
      isInCart: true,
    };
  },
};
</script>
