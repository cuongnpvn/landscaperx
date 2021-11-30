<template>
  <Header />
  <section class="about">
    <img src="@/assets/about/about-cover.jpg" alt="" class="about-cover" />
    <div class="about-header">
      <div class="header-design">
        <div class="design-hline"></div>
        <span>About us</span>
      </div>
      <h1 class="header-title">A team of experienced landscapers</h1>
      <p class="header-subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit
        exercitationem inventore sequi ipsa ea?
      </p>
      <router-link :to="{ name: 'Blog' }" class="primary-btn"
        >All articles</router-link
      >
    </div>
  </section>
  <section class="mission">
    <div class="mission-header">
      <div class="header-design">
        <div class="design-hline"></div>
        <span>Our mission</span>
      </div>
      <h1 class="header-title">The mission behind our landscaping services</h1>
      <p class="header-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        labore, temporibus saepe fugit dolores perferendis, voluptas dolorum
        veniam sint voluptate quos eos vitae voluptatum magni nam commodi
        architecto incidunt suscipit.
      </p>
      <router-link :to="{ name: 'Services' }" class="primary-btn"
        >Our services</router-link
      >
    </div>
    <div class="mission-cover">
      <img src="@/assets/about/mission-back.jpg" alt="" class="cover-back" />
      <img src="@/assets/about/mission-front.jpg" alt="" class="cover-front" />
    </div>
  </section>
  <Values />
  <section class="experience">
    <div class="experience-header">
      <div class="header-design">
        <div class="design-hline"></div>
        <span>Our Experience</span>
      </div>
      <h1 class="header-title">Why working with us?</h1>
      <router-link :to="{ name: 'Contact' }" class="primary-btn contact"
        >Get in touch</router-link
      >
    </div>
    <div class="experience-wrap">
      <img
        src="@/assets/about/experience-cover.jpg"
        alt=""
        class="experience-cover"
      />
      <div class="experience-content">
        <div
          @click="toggleAccordion(1)"
          class="content-item"
          :class="{ selected: isSelected == 1 }"
        >
          <div class="item-header">
            <img src="@/assets/icon-clock.svg" alt="" class="header-icon" />
            <h2 class="header-title">Timely response guaranteed</h2>
          </div>
          <p class="item-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            corporis molestiae nostrum dicta itaque est?
          </p>
        </div>
        <div
          @click="toggleAccordion(2)"
          class="content-item"
          :class="{ selected: isSelected == 2 }"
        >
          <div class="item-header">
            <img src="@/assets/icon-watering.svg" alt="" class="header-icon" />
            <h2 class="header-title">Reliable equipment and staff</h2>
          </div>
          <p class="item-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            corporis molestiae nostrum dicta itaque est?
          </p>
        </div>
        <div
          @click="toggleAccordion(3)"
          class="content-item"
          :class="{ selected: isSelected == 3 }"
        >
          <div class="item-header">
            <img src="@/assets/icon-coin.svg" alt="" class="header-icon" />
            <h2 class="header-title">Cost-effective quotes</h2>
          </div>
          <p class="item-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            corporis molestiae nostrum dicta itaque est?
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="team">
    <div class="team-header">
      <span class="header-ourteam"> our team </span>
      <h1 class="header-title">Our team of expert landscapers</h1>
    </div>
    <div class="team-content">
      <div v-for="(member, index) in teams" :key="index" class="content-item">
        <img :src="member.img" alt="" class="item-cover" />
        <div class="item-card">
          <h3 class="card-name">{{ member.name }}</h3>
          <span class="card-role">{{ member.role }}</span>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Values from "@/components/Values.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
    Values,
  },
  data() {
    return {
      isSelected: 0,
      teams: this.$store.state.teams,
    };
  },
  methods: {
    toggleAccordion(value) {
      if (value == this.isSelected) {
        this.isSelected = 0;
      } else {
        this.isSelected = value;
      }
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 130vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0px 90px;
}

.about .about-cover {
  width: 600px;
  height: 700px;
  object-fit: cover;
}

.about .about-header {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 40px;
}

.about .about-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.about .about-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.about .about-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.about-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 400;
}

.about-header .header-subtitle {
  font-size: var(--fontsize-heading5);
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
}

.primary-btn {
  text-decoration: none;
}

.primary-btn:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.mission {
  width: 100%;
  height: 130vh;
  background: var(--neutral-color-2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0px 90px;
}

.mission .mission-header {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 40px;
}

.mission .mission-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.mission .mission-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.mission .mission-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.mission-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.mission-header .header-subtitle {
  font-size: var(--fontsize-heading5);
  color: rgba(0, 0, 0, 0.6);
  line-height: 40px;
}

.mission-cover {
  position: relative;
  width: 60%;
  height: 80vh;
}
.mission-cover img {
  width: 470px;
  height: 470px;
  object-fit: cover;
  position: absolute;
}

.mission-cover .cover-back {
  right: 0;
  top: 0;
}

.mission-cover .cover-front {
  left: 0;
  bottom: 0;
}

.experience {
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--neutral-color-2);
  padding: 0 90px;
}

.experience-header {
  margin-bottom: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
}

.experience-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.experience-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.experience-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.experience-header .header-title {
  width: 40%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: left;
}

.experience-header .contact {
  position: absolute;
  right: 0;
  top: 40px;
  background: #fff;
  color: var(--neutral-color-8);
  border: 1px solid var(--neutral-color-8);
}

.contact:hover {
  background: var(--neutral-color-8);
  color: #fff;
  border-color: var(--neutral-color-8);
}

.experience-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.experience-wrap .experience-cover {
  width: 600px;
  height: 650px;
  object-fit: cover;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.experience-content .content-item {
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
  padding-bottom: 20px;
  overflow: hidden;
  height: 55px;
  transition: 400ms ease all;
  cursor: pointer;
  width: 80%;
}

.experience-content .content-item:hover {
  transform: translateX(10px);
}

.experience-content .selected {
  height: 200px;
}

.experience-content .content-item .item-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.experience-content .content-item .item-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
  transition: 400ms ease all;
}

.experience-content .content-item:hover .item-header .header-title {
  color: var(--primary-color);
}

.experience-content .content-item .item-desc {
  padding-left: 60px;
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  line-height: 35px;
}

.team {
  width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  gap: 35px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.team-header {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-bottom: 30px;
}

.team-header .header-ourteam {
  font-size: var(--fontsize-heading5);
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.team-header .header-title {
  text-align: center;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  width: 30%;
  line-height: 60px;
}

.team-content {
  display: flex;
  gap: 35px;
  justify-content: center;
  padding: 0 90px;
}

.team-content .content-item {
  width: 30%;
  height: 500px;
  position: relative;
  cursor: pointer;
}

.team-content .content-item .item-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 400ms ease all;
}

.team-content .content-item:hover .item-cover {
  transform: scale(1.03);
}

.team-content .content-item .item-card {
  position: absolute;
  width: 70%;
  height: 130px;
  background: #fff;
  bottom: 50px;
  left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: 400ms ease all;
}

.team-content .content-item:hover .item-card {
  transform: translateY(-35px);
}

.team-content .content-item .item-card .card-name {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
}

.team-content .content-item .item-card .card-role {
  font-size: var(--fontsize-heading5);
  color: var(--primary-color);
}
</style>
