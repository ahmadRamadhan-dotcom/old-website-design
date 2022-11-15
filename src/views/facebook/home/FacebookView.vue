<template>
  <div id="facebook_view">
    <div class="header">
      <img src="@/assets/fb-left-logo.jpg" alt="" />
      <div class="right">
        <img src="@/assets/fb-right-logo.jpg" alt="" />
        <div class="right_bottom">
          <p id="link">login</p>
          <p id="link">register</p>
          <p id="link">about</p>
        </div>
      </div>
    </div>
    <main class="main">
      <aside class="aside">
        <div class="aside_content">
          <p id="label">Email:</p>
          <input type="text" id="email" />
          <p id="label">Password:</p>
          <input type="text" id="password" />
          <div id="submit">
            <button id="input_submit">login</button>
            <button id="input_submit">register</button>
          </div>
        </div>
      </aside>
      <div class="content_wrapper">
        <div class="header_content">
          <p class="header_title">Welcome to Thefacebook!</p>
        </div>
        <p class="content_title">[ Welcome to Thefacebook ]</p>
        <div class="content_container">
          <p id="content_p" class="paragraf_desc">
            Thefacebook is an online directory that connects people through
            social networks at colleges.
          </p>
          <div id="content">
            <p id="content_p">
              We have opened up Thefacebook for popular consumption at
              <span class="bold">Harvard,</span>
              <span class="bold"> Columbia,</span>
              <span class="bold"> Stanford,</span>
              <span class="bold"> Yale,</span>
              <span class="bold"> Cornell,</span>
              <span class="bold"> Dartmouth,</span>
              <span class="bold"> UPenn,</span>
              <span class="bold"> MIT,</span>
              <span class="bold"> BU,</span>
              <span class="bold"> NYU,</span> and now
              <span class="bold"> Berkeley, Brown</span> and
              <span class="bold"> Princeton,</span>
            </p>
            <p id="content_p" class="hint">
              Your facebook is limited to your own college or university.
            </p>
            <p id="content_p" class="hint">You can use Thefacebook to:</p>
            <ul>
              <li id="content_p">Search for people at your school</li>
              <li id="content_p">Find out who is in your classes</li>
              <li id="content_p">Look up your friends' friends</li>
              <li id="content_p">See a visualization of your social network</li>
            </ul>
            <p id="content_p" class="hint">
              To get started, click below to register. If you have already
              registered, you can log in.
            </p>
            <div id="submit" class="hint">
              <button id="input_submit">Register</button>
              <button id="input_submit" class="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="footer">
      <div class="footer_content">
        <div class="footer_list">
          <ul>
            <li v-for="(data, index) in footerList" :key="index">
              {{ data.name }}
            </li>
          </ul>
        </div>
        <p id="footer_p">a Mark Zuckerberg production</p>
        <p id="footer_p">Thefacebook © 2004</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/views/facebook/home/style.css";
const footerList = [
  { id: 1, name: "about" },
  { id: 2, name: "contact" },
  { id: 3, name: "tags" },
  { id: 4, name: "terms" },
  { id: 5, name: "privacy" },
];
</script>
