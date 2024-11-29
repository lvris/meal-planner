<template>
  <HeaderBar title="Dashboard"></HeaderBar>

  <NCarousel h-80>
    <img class="carousel-img"
      src="https://scatterjar.com/wp-content/uploads/2019/10/www.scatterjar.com-3518-1024x1536.jpg">
    <img class="carousel-img"
      src="https://scatterjar.com/wp-content/uploads/2016/09/www.scatterjar.com-3691-1024x683.jpg">
    <img class="carousel-img"
      src="https://scatterjar.com/wp-content/uploads/2016/10/www.scatterjar.com-4346-1024x1536.jpg">
    <img class="carousel-img"
      src="https://scatterjar.com/wp-content/uploads/2016/07/www.scatterjar.com-2306-1024x683.jpg">
  </NCarousel>

  <NResult status="404" title="Try Something">
  </NResult>
</template>

<script lang="ts" setup>
import HeaderBar from '@/components/Layouts/HeaderBar.vue';
</script>

<style lang="css" scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>