<template>
  <div id="banner_hero">
    <h1 class="title">Gallery of Web Design in old days</h1>
  </div>
</template>

<style scoped>
#banner_hero {
  background-color: #000;
}
.title {
  color: #fff;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  font-weight: 500;
}
@media (max-width: 767px) {
  #banner_hero {
    padding: 70px 70px;
  }
  .title {
    font-size: 21px;
  }
}

@media (min-width: 767px) {
  #banner_hero {
    padding: 80px 80px;
  }
  .title {
    font-size: 28px;
  }
}

@media (min-width: 1023px) {
  #banner_hero {
    padding: 100px 100px;
  }
  .title {
    font-size: 32px;
  }
}

@media (min-width: 1279px) {
  #banner_hero {
    padding: 100px 200px;
    background-color: #000;
  }
}

@media (min-width: 1562px) {
  #banner_hero {
    padding: 150px 200px;
  }
  .title {
    font-size: 48px;
  }
}
</style>
