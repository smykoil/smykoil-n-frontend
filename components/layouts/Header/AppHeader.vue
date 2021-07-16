<template>
  <div class="bg-header">
    <div class="flex flex-col bg-black bg-opacity-10 h-56 items-center justify-center">
      <h1 class="text-4xl font-serif font-bold text-white">Смыкова Наталия</h1>
      <h2 class="text-xl font-sans font-light text-gray-300">Блог учителя-дефектолога</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style scoped>
.bg-header {
  background-image: url("https://smykova-n.ru/img/wall.jpg");
  background-position: center center;
  background-size: cover;
}
</style>
