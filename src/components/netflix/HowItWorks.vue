<template>
  <div id="how_it_works_container">
    <div class="how_it_works_content">
      <p class="how_it_works_title">Here's how it works:</p>
      <img class="process_image" src="@/assets/process.gif" alt="" />
      <div class="desc">
        <div id="dvd_rental">
          <p class="desc_header">The #1 Online DVD Rental Company</p>
          <div class="dvd_rental_content">
            <div v-for="(data, index) in listData" :key="index" class="list">
              <img src="@/assets/validation_star.gif" alt="" />
              <p :class="data.id === 1 ? 'bold' : ''" class="list_info">
                {{ data.content }}
              </p>
            </div>
          </div>
        </div>
        <div id="featured">
          <p class="desc_header">As Featured In:</p>
          <div class="featured_content">
            <img src="@/assets/validation_logos.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const listData = [
  { id: 1, content: "No Late Fees - Ever!" },
  { id: 2, content: "Over 13,500 titles - classics to new releases" },
  { id: 3, content: "Free shipping both ways in 1-3 days" },
  { id: 4, content: "No driving. No lines. No hassles." },
  { id: 5, content: "Always have up to 3 DVDs at home" },
  { id: 6, content: "No Commitments. Cancel Anytime." },
];
</script>

<style scoped>
.list_info {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #25221b;
  font-size: 13px;
}
.bold {
  font-weight: bold;
}
.list {
  display: flex;
  gap: 12px;
}
.dvd_rental_content,
.featured_content {
  padding: 17px;
}
.desc_header {
  height: 25px;
  background-color: #6390bf;
  padding: 6px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
#dvd_rental,
#featured {
  border: 1px solid grey;
  height: 14.8em;
  background: #fff;
}
.desc {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 322px);
  gap: 8px;
}
.process_image {
  margin-top: 15px;
}
.how_it_works_title {
  color: #535351;
  font-size: 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
#how_it_works_container {
  background-color: #eee;
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
}

.how_it_works_content {
  width: 650px;
  margin-top: 10px;
}
</style>
