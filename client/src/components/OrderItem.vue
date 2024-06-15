<template>
  <div>
    <div class="card border-light w-100">
      <div class="row g-0">
        <div class="col-md-1">
          <img :src="productDetails.imageURL" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="text-start card-title">{{ productDetails.title }}</h5>
          </div>
        </div>
        <div class="col-md-2">
          <p class="card-text">price: {{ productDetails.price }}$</p>
        </div>
        <div class="col-md-2">
          <a @click="$emit('removeFromCart')" class="btn btn-warning"
            >remove from cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from "@/api/api";

export default {
  props: ["id"],
  data() {
    return {
      productDetails: {},
    };
  },
  async created() {
    this.productDetails = (
      await ApiService.Products.fetchProductByID(this.id)
    ).data;
    this.$emit("price", this.productDetails.price);
  },
};
</script>

<style scoped>
.card {
  margin: 0%;
  max-width: 70vw;
  max-height: 15vh;
}
</style>
