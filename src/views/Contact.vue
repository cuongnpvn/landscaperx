<template>
  <Header />
  <ContactForm />
  <div class="hero">
    <div class="hero-solid"></div>
    <img src="@/assets/contact/contact-cover.jpg" alt="" class="hero-cover" />
    <div class="hero-wrap">
      <div class="hero-card">
        <img src="@/assets/icon-location.svg" alt="" class="card-icon" />
        <h2 class="card-title">Visit us</h2>
        <span class="card-detail"
          >7918 Garfield Ave. <br />Los Angeles, CA 92056</span
        >
      </div>
      <div class="hero-card">
        <img src="@/assets/icon-location.svg" alt="" class="card-icon" />
        <h2 class="card-title">Visit us</h2>
        <span class="card-detail"
          >7918 Garfield Ave. <br />Los Angeles, CA 92056</span
        >
      </div>
      <div class="hero-card">
        <img src="@/assets/icon-location.svg" alt="" class="card-icon" />
        <h2 class="card-title">Visit us</h2>
        <span class="card-detail"
          >7918 Garfield Ave. <br />Los Angeles, CA 92056</span
        >
      </div>
    </div>
  </div>
  <div class="faq">
    <div class="faq-header">
      <span class="header-tag">FAQ</span>
      <h1 class="header-title">Frequently Asked Questions</h1>
      <p class="header-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Asperiores labore porro libero, rem ex dolores.
      </p>
    </div>
    <div class="faq-wrap">
      <div class="wrap-column">
        <div
          @click="toggleAnswer(0)"
          class="faq-item"
          :class="{ isShow: showAnswer[0] }"
        >
          <div class="item-show">
            <h3 class="item-question">
              What is your experience in landscaping?
            </h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[0] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
        <div
          @click="toggleAnswer(1)"
          class="faq-item"
          :class="{ isShow: showAnswer[1] }"
        >
          <div class="item-show">
            <h3 class="item-question">Do you offer commercial landscaping?</h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[1] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
        <div
          @click="toggleAnswer(2)"
          class="faq-item"
          :class="{ isShow: showAnswer[2] }"
        >
          <div class="item-show">
            <h3 class="item-question">How can I get a quote for my project?</h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[2] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
      </div>
      <div class="wrap-column">
        <div
          @click="toggleAnswer(3)"
          class="faq-item"
          :class="{ isShow: showAnswer[3] }"
        >
          <div class="item-show">
            <h3 class="item-question">In which areas of CA do you work on?</h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[3] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
        <div
          @click="toggleAnswer(4)"
          class="faq-item"
          :class="{ isShow: showAnswer[4] }"
        >
          <div class="item-show">
            <h3 class="item-question">Do you have examples of past work?</h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[4] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
        <div
          @click="toggleAnswer(5)"
          class="faq-item"
          :class="{ isShow: showAnswer[5] }"
        >
          <div class="item-show">
            <h3 class="item-question">
              Do you offer services in other states?
            </h3>
            <img
              src="@/assets/icon-forward.svg"
              alt=""
              class="item-icon"
              :class="{ isShowIcon: showAnswer[5] }"
            />
          </div>
          <p class="item-answer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit consequuntur, commodi optio hic nisi accusamus
            cupiditate quibusdam nihil. Praesentium, voluptatum?
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="hline"></div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Header,
    ContactForm,
    Footer,
  },
  data() {
    return {
      showAnswer: [0, 0, 0, 0, 0, 0],
    };
  },
  created() {},
  methods: {
    toggleAnswer(value) {
      if (this.showAnswer[value] == 0) {
        this.showAnswer[value] = 1;
      } else {
        this.showAnswer[value] = 0;
      }
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  position: relative;
}

.hero-solid {
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 40vh;
  background: linear-gradient(
    to bottom,
    var(--neutral-color-3),
    var(--neutral-color-2)
  );
}

.hero-cover {
  width: 100%;
  height: 70vh;
  padding: 0 120px;
  object-fit: cover;
}

.hero-wrap {
  position: absolute;
  top: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
}

.hero-wrap .hero-card {
  border: 1px solid var(--neutral-color-4);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  padding: 70px 40px;
}

.hero-wrap .hero-card .card-icon {
  width: 65px;
  height: 65px;
}

.hero-wrap .hero-card .card-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
}

.hero-wrap .hero-card .card-detail {
  text-align: center;
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
}

.faq {
  width: 100%;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.faq-header {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
}

.faq-header .header-tag {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--primary-color);
}

.faq-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.faq-header .header-desc {
  text-align: center;
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.faq-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  padding-bottom: 120px;
}

.faq-wrap .wrap-column {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.faq-wrap .faq-item {
  border: 1px solid var(--neutral-color-4);
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 35px;
  overflow: hidden;
  transition: 400ms ease all;
  cursor: pointer;
}

.faq-wrap .faq-item:hover {
  color: var(--primary-color);
}

.faq-wrap .isShow {
  height: 230px;
}

.faq-wrap .faq-item .item-show {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-wrap .faq-item .item-show .item-question {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
}

.faq-wrap .faq-item .item-show .item-icon {
  width: 27px;
  height: 27px;
  filter: invert(63%) sepia(90%) saturate(1%) hue-rotate(360deg) brightness(94%)
    contrast(94%);
  transition: 400ms ease all;
}

.faq-wrap .faq-item .item-show .isShowIcon {
  transform: rotate(90deg);
}

.faq-wrap .faq-item .item-answer {
  margin-top: 20px;
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
