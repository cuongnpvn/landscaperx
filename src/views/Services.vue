<template>
  <Header />
  <section class="service">
    <div class="service-header">
      <h1 class="header-title">Our Services</h1>
      <p class="header-subtitle">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Sunt, voluptatum. Dolores?elit. Sunt, voluptatum.
        Dolores?
      </p>
    </div>
    <div class="service-wrap">
      <div
        @click="toSingleService(service.name)"
        v-for="(service, index) in services"
        :key="index"
        class="service-item"
      >
        <img :src="service.img" alt="" class="item-cover" />
        <div class="item-info">
          <h3 class="info-title">{{ service.name }}</h3>
          <p class="info-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
            maiores voluptatem!
          </p>
          <div class="info-more">
            <span>Learn more</span>
            <img src="@/assets/icon-arrow-right.svg" alt="" class="more-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Testimonial />
  <Break />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Break from "@/components/Break.vue";
import Testimonial from "@/components/Testimonial.vue";
export default {
  name: "Services",
  components: {
    Header,
    Testimonial,
    Break,
    Footer,
  },
  data() {
    return {
      services: this.$store.state.services,
    };
  },
  methods: {
    toSingleService(name) {
      this.$router.push({ name: "SingleService", params: { name: name } });
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.service {
  width: 100%;
  height: 230vh;
  display: flex;
  flex-direction: column;
  gap: 45px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.service-header {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}

.service-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 400;
}

.service-header .header-subtitle {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
  text-align: center;
}

.service-wrap {
  width: 100%;
  padding: 0 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 25px;
}

.service-wrap .service-item {
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 400ms ease all;
}

.service-wrap .service-item:hover {
  transform: scale(0.93);
}

.service-wrap .service-item .item-cover {
  flex-basis: 40%;
  width: 100%;
  height: 40%;
  object-fit: cover;
}

.service-wrap .service-item .item-info {
  padding: 50px 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-wrap .service-item .item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
  transition: 300ms ease all;
}

.service-wrap .service-item:hover .item-info .info-title {
  color: var(--primary-color);
}

.service-wrap .service-item .item-info .info-desc {
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.service-wrap .service-item .item-info .info-more {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: var(--fontsize-heading6);
}

.service-wrap .service-item .item-info .info-more span {
  color: var(--primary-color);
}

.service-wrap .service-item .item-info .info-more .more-icon {
  width: 20px;
  height: 16px;
  filter: invert(61%) sepia(8%) saturate(3961%) hue-rotate(112deg)
    brightness(91%) contrast(70%);
}
</style>
