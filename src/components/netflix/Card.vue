<template>
  <div v-for="(data, index) in filmData" :key="index" id="card_container">
    <p id="title_card">{{ data.title }}</p>
    <img :src="data.image" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  filmData: Array,
});
</script>

<style scoped>
#card_container {
  width: 100px;
  display: grid;
  gap: 4px;
}
#title_card {
  color: #00458b;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  text-decoration: underline;
  text-align: center;
}
</style>
