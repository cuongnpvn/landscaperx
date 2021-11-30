<template>
  <transition name="fade">
    <div v-if="showResponse" class="responseModal">
      <img src="@/assets/icon-check.svg" alt="" class="response-icon" />
      <div class="responseMessage">
        We've sent a Newsletter to your email. <br />
        Check your mailbox!
      </div>
    </div>
  </transition>
  <footer>
    <div class="top">
      <div class="info">
        <h1>Landscaper X</h1>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
          voluptates.
        </p>
        <div class="logo-wrap">
          <img class="filted-logo" src="@/assets/logo-facebook.svg" alt="" />
          <img class="filted-logo" src="@/assets/logo-twitter.svg" alt="" />
          <img class="filted-logo" src="@/assets/logo-instagram.svg" alt="" />
          <img class="filted-logo" src="@/assets/logo-linkedin.svg" alt="" />
          <img class="filted-logo" src="@/assets/logo-youtube.svg" alt="" />
          <img src="@/assets/logo-whatsapp.svg" alt="" />
        </div>
        <span>Subscribe to our Newsletter</span>
        <div class="user">
          <input type="text" name="" id="" placeholder="Enter your email" />
          <button @click="handleSubcribe" class="primary-btn">Subscribe</button>
        </div>
      </div>
      <div class="pages">
        <span>Pages</span>
        <div class="hline"></div>
        <div class="wrapper">
          <div class="column">
            <router-link :to="{ name: 'Home' }" class="page-item"
              >Home</router-link
            >
            <router-link :to="{ name: 'About' }" class="page-item"
              >About</router-link
            >
            <router-link :to="{ name: 'Services' }" class="page-item"
              >Services</router-link
            >
            <router-link :to="{ name: 'Services' }" class="page-item"
              >Single Service</router-link
            >
            <router-link :to="{ name: 'Shop' }" class="page-item"
              >Shop</router-link
            >
            <router-link :to="{ name: 'Shop' }" class="page-item"
              >Single Product</router-link
            >
          </div>
          <div class="column">
            <router-link :to="{ name: 'Blog' }" class="page-item"
              >Blog</router-link
            >
            <router-link :to="{ name: 'Blog' }" class="page-item"
              >Blog Post</router-link
            >
            <router-link :to="{ name: 'Contact' }" class="page-item"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="break-line"></div>
    <div class="bottom">
      <span class="cpright"
        >All Rights Reserved | Copyright © Landscaper X</span
      >
      <span class="note"
        >Designed by BRIX Templates - Powered by CuongNguyen Inc</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      showResponse: false,
    };
  },
  methods: {
    handleSubcribe() {
      this.showResponse = true;
      setTimeout(() => {
        this.showResponse = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: 400ms ease all;
}
.fade-leave-active {
  transition: 800ms ease all;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.responseModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.responseModal .response-icon {
  width: 70px;
  height: 70px;
}

.responseModal .responseMessage {
  margin-top: 30px;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 500;
  text-align: center;
  line-height: 45px;
}
footer {
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 110px;
  position: relative;
}

.top {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}

.top .info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-basis: 40%;
}

.top .info h1 {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 500;
}
.top .info .desc {
  width: 80%;
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.top .info .logo-wrap {
  display: flex;
  gap: 25px;
}

.top .info .logo-wrap img {
  width: 25px;
  height: 25px;
}

.top .info .logo-wrap .filted-logo {
  filter: invert(58%) sepia(54%) saturate(504%) hue-rotate(112deg)
    brightness(85%) contrast(88%);
}

.top .info span {
  margin-top: 60px;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
}

.top .info .user {
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  border: 1px solid var(--neutral-color-5);
  border-width: 0 0 1px 0;
}
.top .info .user input {
  border: none;
  background: none;
  outline: none;
  font-size: var(--fontsize-heading6);
}

.top .info .user button {
  padding: 12px 18px;
}

.top .info .user button:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.top .pages {
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-right: 50px;
}

.top .pages span {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
}

.top .pages .hline {
  width: 100%;
  height: 1px;
  background: var(--neutral-color-5);
}

.top .pages .wrapper {
  display: flex;
  justify-content: space-between;
}

.top .pages .wrapper .column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.top .pages .wrapper .column .page-item {
  text-decoration: none;
  font-size: var(--fontsize-heading6);
  cursor: pointer;
}

.top .pages .wrapper .column .page-item:hover {
  color: var(--primary-color);
}

.break-line {
  position: absolute;
  bottom: 50px;
  width: calc(100% - 220px);
  height: 1px;
  background: var(--neutral-color-5);
}

.bottom {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom span {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}
</style>
