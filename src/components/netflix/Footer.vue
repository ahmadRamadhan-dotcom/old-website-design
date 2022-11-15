<template>
  <div id="footer_container">
    <div class="footer_link">
      <a id="link" v-for="(data, index) in footerListData" :key="index" href="#"
        >{{ data.name }} |</a
      >
    </div>
    <div class="footer_copyright">
      © 1997-2003 Netflix, Inc. All rights reserved. Terms of Use. {104}
    </div>
  </div>
</template>

<script setup>
const footerListData = [
  { id: 1, name: "Gift Subcriptions" },
  { id: 2, name: "Contact Us" },
  { id: 3, name: "Affiliates" },
  { id: 4, name: "Press Room" },
  { id: 5, name: "About Us" },
  { id: 6, name: "Privacy Policy" },
  { id: 7, name: "Jobs" },
  { id: 8, name: "Investor Relations" },
];
</script>

<style scoped>
.footer_copyright {
  font-size: 10px;
  font-weight: 400;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
}
.footer_link {
  display: flex;
  justify-content: center;
  gap: 5px;
}
#footer_container {
  width: 773px;
  text-align: center;
  margin-bottom: 20px;
}

#link {
  font-size: 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
