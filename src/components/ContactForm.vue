<template>
  <transition name="fade">
    <div v-if="showResponse" class="responseModal">
      <img src="@/assets/icon-check.svg" alt="" class="response-icon" />
      <div class="responseMessage">
        Thanks for choosing us <br />
        We'll get back to you soon!
      </div>
    </div>
  </transition>
  <div class="home-contact">
    <div class="contact-info">
      <div class="info-header">
        <div class="header-design">
          <div class="design-hline"></div>
          <span>Get in touch</span>
        </div>
        <h1 class="header-title">Fill the form to get a free consultation</h1>
      </div>
      <div class="info-item">
        <img src="@/assets/icon-location.svg" alt="" class="item-icon" />
        <span class="info-detail"
          >880 N Alameda St, Los Angeles, CA, 90012</span
        >
      </div>
      <div class="info-item">
        <img src="@/assets/icon-call.svg" alt="" class="item-icon" />
        <span class="info-detail">(+84) 0909 9989</span>
      </div>
      <div class="info-item">
        <img src="@/assets/icon-contact.svg" alt="" class="item-icon" />
        <span class="info-detail">contact@landscaper.com</span>
      </div>
    </div>
    <div class="contact-form">
      <div class="form-row">
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Full name"
        />
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Email address"
        />
      </div>
      <div class="form-row">
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Phone number"
        />
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Service"
        />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        class="form-message"
      ></textarea>
      <div @click="handleSend" class="primary-btn send">Send message</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      showResponse: false,
    };
  },
  methods: {
    handleSend() {
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

.home-contact {
  width: 100%;
  height: 130vh;
  display: flex;
  padding: 20vh 90px;
  background: var(--neutral-color-3);
}

.home-contact .contact-info {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-info .info-header {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-info .info-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.contact-info .info-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.contact-info .info-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.contact-info .info-header .header-title {
  width: 70%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: left;
  margin-bottom: 30px;
}

.contact-info .info-item {
  width: 70%;
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-info .info-item .info-detail {
  color: var(--neutral-color-8);
  font-size: var(--fontsize-heading5);
}

.home-contact .contact-form {
  flex-basis: 60%;
  background: var(--neutral-color-2);
  height: 80vh;
  box-shadow: -10px 0 15px -5px rgba(0, 0, 0, 0.07),
    0px 10px 15px -5px rgba(0, 0, 0, 0.07);
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-form .form-row {
  display: flex;
  justify-content: space-between;
}

.form-row .form-input {
  width: 45%;
  height: 80px;
  background: none;
  border: none;
  outline: none;
  font-size: var(--fontsize-heading6);
  border: 1px solid var(--primary-color);
  border-width: 0 0 1px 0;
}

.contact-form .form-message {
  background: none;
  border: none;
  outline: none;
  font-size: var(--fontsize-heading6);
  border: 1px solid var(--primary-color);
  border-width: 0 0 1px 0;
}

.contact-form .send:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}
</style>
