<template>
  <div class="netflix_view">
    <header class="header">
      <div class="header_content">
        <img src="@/assets/netflix_logo.gif" alt="" />
        <img src="@/assets/header_sign_in.gif" alt="" />
      </div>
    </header>
    <BannerHero />
    <div class="content">
      <div class="main">
        <div class="top_film">
          <Card :film-data="filmData" />
        </div>
        <div class="see">
          <p class="see_more">See more new releases</p>
        </div>
        <div class="hr"></div>
        <HowItWorks />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import "@/views/netflix/style.css";
import white from "@/assets/white.jpg";
import abandon from "@/assets/abandon.jpg";
import ghost_ship from "@/assets/ghost_ship.jpg";
import knock_around from "@/assets/knock_around.jpg";
import BannerHero from "@/components/netflix/BannerHero.vue";
import Card from "@/components/netflix/Card.vue";
import HowItWorks from "@/components/netflix/HowItWorks.vue";
import Footer from "@/components/netflix/Footer.vue";

const filmData = [
  { id: 1, title: "White Oleander", image: white },
  { id: 2, title: "Abandon", image: abandon },
  { id: 3, title: "Ghost Ship", image: ghost_ship },
  { id: 4, title: "Knockaround Guys", image: knock_around },
];
</script>
