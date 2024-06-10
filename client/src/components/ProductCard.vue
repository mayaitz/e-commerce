<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a v-if="isInCart" @click="$emit('addToCart')" class="btn btn-warning"
        >add to cart</a
      ><a v-else @click="$emit('removeFromCart')" class="btn btn-warning"
        >remove from cart</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "description", "isInCart"],
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
