<template>
  <div id="banner_hero_netflix">
    <div class="hero_content_container">
      <div class="banner_content">
        <p class="content_title">Try NETFLIX for FREE today!</p>
        <p class="content_desc">No Due Dates. No Late Fees.</p>
        <div class="more_info">
          <img src="@/assets/learn_mre.gif" alt="" />
          <img src="@/assets/see_more.gif" alt="" />
        </div>
        <img
          class="start_free_trial"
          src="@/assets/signup_btn_start.gif"
          alt=""
        />
      </div>
    </div>
    <div class="banner_footer">
      <div class="footer_content">
        <p class="footer_content_p">
          Have a special offer or gift subscription?
        </p>
        <input type="text" id="subscription" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#redeem {
  height: 27px;
}
#subscription {
  width: 83px;
}
.footer_content_p {
  font-size: 10px;
  color: #ffff99;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.footer_content {
  width: 360px;
  display: flex;
  place-items: center;
  align-items: center;
  gap: 10px;
}
.banner_footer {
  height: 2.4em;
  background: url("@/assets/selection_code_bar.gif");
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
}
.start_free_trial {
  margin-top: 10px;
}
.more_info {
  margin-top: 15px;
  display: flex;
  gap: 35px;
}
.content_desc {
  color: #000;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 7px;
}
.content_title {
  font-size: 18px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
#banner_hero_netflix {
  height: 17.2em;
  background: url("@/assets/banner_hero_netflix.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
.hero_content_container {
  padding: 29px;
}
.banner_content {
  width: 100%;
  margin-top: 50px;
}
</style>
