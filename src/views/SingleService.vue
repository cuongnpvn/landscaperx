<template>
  <Header />
  <section class="service">
    <div class="bg-solid"></div>
    <img :src="service.img" alt="" class="service-cover" />
    <div class="service-card">
      <h1 class="card-title">{{ service.name }}</h1>
      <p class="card-desc">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Vel eius esse nobis.
      </p>
    </div>
    <div class="service-details">
      <h2 class="details-title">
        More details about <br />
        this service
      </h2>
      <p class="details-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quas obcaecati architecto eaque minima earum esse ullam doloremque omnis
        repudiandae dignissimos, nobis qui nam laudantium adipisci excepturi
        voluptate expedita dolores temporibus. Distinctio repudiandae quam, ad
        repellendus aut facilis sapiente reprehenderit?
      </p>
    </div>
    <div class="service-wrap">
      <img src="@/assets/service/service-back.jpg" alt="" class="img-back" />
      <img src="@/assets/service/service-front.jpg" alt="" class="img-front" />
    </div>
  </section>
  <section class="process">
    <div class="process-header">
      <div class="header-design">
        <div class="design-hline"></div>
        <div class="design-tag">Our Process</div>
      </div>
      <div class="header-title">
        A simple process to <br />
        have a beautiful lawn
      </div>
      <div class="primary-btn contact">Contact Us</div>
    </div>
    <div class="process-wrap">
      <div class="process-item">
        <div class="item-info">
          <div class="info-number">
            <span>1.</span>
          </div>
          <div class="info-title">Step one</div>
          <div class="info-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            quam explicabo, architecto repudiandae quas qui?
          </div>
        </div>
        <img src="@/assets/service/process1.jpg" alt="" class="item-cover" />
      </div>
      <div class="process-item">
        <div class="item-info">
          <div class="info-number">
            <span>2.</span>
          </div>
          <div class="info-title">Step two</div>
          <div class="info-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            quam explicabo, architecto repudiandae quas qui?
          </div>
        </div>
        <img src="@/assets/service/process2.jpg" alt="" class="item-cover" />
      </div>
      <div class="process-item">
        <div class="item-info">
          <div class="info-number">
            <span>3.</span>
          </div>
          <div class="info-title">Step three</div>
          <div class="info-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            quam explicabo, architecto repudiandae quas qui?
          </div>
        </div>
        <img src="@/assets/service/process3.jpg" alt="" class="item-cover" />
      </div>
    </div>
  </section>
  <Values />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Values from "@/components/Values.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SingleService",
  components: {
    Header,
    Values,
    Footer,
  },
  data() {
    return {
      service: this.$store.getters.getSingleService(this.$route.params.name),
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.primary-btn:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.service {
  width: 100%;
  padding: 10vh 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.bg-solid {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  background: linear-gradient(
    to bottom,
    var(--neutral-color-3),
    var(--neutral-color-2)
  );
}

.service-cover {
  height: 90vh;
  object-fit: cover;
}

.service-card {
  position: absolute;
  top: 50vh;
  left: 170px;
  width: 40%;
  height: 40vh;
  background: #fff;
  border: 1px solid var(--neutral-color-4);
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
}

.service-card .card-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 400;
}

.service-card .card-desc {
  font-size: var(--fontsize-heading5);
  line-height: 36px;
  color: rgba(0, 0, 0, 0.6);
}

.service-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15vh 0;
}

.service-details .details-title {
  flex-basis: 50%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  line-height: 60px;
}

.service-details .details-content {
  flex-basis: 50%;
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 35px;
}

.service-wrap {
  height: 110vh;
  position: relative;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.service-wrap img {
  position: absolute;
  width: 52%;
  height: 70vh;
  object-fit: cover;
}

.service-wrap .img-back {
  z-index: -1;
  top: 0;
  left: 0;
}

.service-wrap .img-front {
  right: 0;
  top: 22vh;
}

.process {
  width: 100%;
  padding: 10vh 100px;
  display: flex;
  justify-content: space-between;
}

.process-header {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  height: 40vh;
}

.process-header .header-design {
  display: flex;
  align-items: center;
  gap: 15px;
}

.process-header .header-design .design-hline {
  width: 20px;
  height: 2px;
  background: var(--primary-color);
}

.process-header .header-design .design-tag {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary-color);
}

.process-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
}

.process-wrap {
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.process-wrap .process-item {
  height: 45vh;
  border: 1px solid var(--neutral-color-4);
  display: flex;
  justify-content: space-between;
}

.process-wrap .process-item .item-info {
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.process-wrap .process-item .item-info .info-number {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--neutral-color-4);
  position: relative;
  margin-left: 10px;
}

.process-wrap .process-item .item-info .info-number span {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-style: italic;
  position: absolute;
  bottom: -5px;
  right: 10px;
}

.process-wrap .process-item .item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
}

.process-wrap .process-item .item-info .info-desc {
  margin-top: 10px;
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.process-wrap .process-item .item-cover {
  width: 45%;
  height: 100%;
  object-fit: cover;
}
</style>
