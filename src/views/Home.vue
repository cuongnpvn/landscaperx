<template>
  <Header />
  <div class="home">
    <div class="home-hero">
      <div class="hero-content">
        <div class="content-design">
          <div class="design-hline"></div>
          <span>Landscape Design</span>
        </div>
        <h1 class="content-title">Let us bring life to your garden.</h1>
        <div class="content-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam
          omnis
        </div>
        <div class="content-btn-wrap">
          <router-link :to="{ name: 'Contact' }" class="primary-btn contact"
            >Get in touch</router-link
          >
          <router-link :to="{ name: 'Services' }" class="primary-btn service"
            >Our services</router-link
          >
        </div>
      </div>
      <img src="@/assets/home/home-hero.jpg" alt="" class="hero-img" />
    </div>
    <div class="home-project">
      <div class="project-header">
        <h2 class="header-intro">Our past projects of landscaping work</h2>
        <span class="header-desc"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
          molestias natus. Similique, impedit dolorum!</span
        >
      </div>
      <div class="project-wrap">
        <div class="wrap-column">
          <img src="@/assets/home/home1.jpg" alt="" class="project-item" />
          <img src="@/assets/home/home2.jpg" alt="" class="project-item" />
        </div>
        <div class="wrap-column">
          <img src="@/assets/home/home3.jpg" alt="" class="project-item" />
          <img src="@/assets/home/home4.jpg" alt="" class="project-item" />
        </div>
        <div class="wrap-column">
          <img src="@/assets/home/home5.jpg" alt="" class="project-item" />
        </div>
        <div class="wrap-column">
          <img src="@/assets/home/home6.jpg" alt="" class="project-item" />
          <img src="@/assets/home/home7.jpg" alt="" class="project-item" />
        </div>
      </div>
      <router-link :to="{ name: 'Contact' }" class="primary-btn contact"
        >Get in touch</router-link
      >
    </div>
    <div class="home-service">
      <div class="service-content">
        <div class="content-design">
          <div class="design-hline"></div>
          <span>Services</span>
        </div>
        <h1 class="content-title">Our landscaping work and services</h1>
        <div class="content-subtitle">
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor.
        </div>
        <router-link :to="{ name: 'Services' }" class="primary-btn contact"
          >All services</router-link
        >
      </div>
      <div class="service-wrap">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
        >
          <img :src="service.img" alt="" class="card-cover" />
          <h3 class="card-name">{{ service.name }}</h3>
          <p class="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro
            esse et.
          </p>
          <div class="card-more">
            <span>Learn more</span>
            <img src="@/assets/icon-arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="home-about">
      <img src="@/assets/home/home2.jpg" alt="" class="about-cover-back" />
      <img src="@/assets/home/home3.jpg" alt="" class="about-cover-front" />
      <div class="about-content">
        <div class="content-design">
          <div class="design-hline"></div>
          <span>About Us</span>
        </div>
        <h1 class="content-title">Quality work done with passion and care</h1>
        <div class="content-subtitle">
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor.
        </div>
        <div class="content-point">
          <div class="point-item">
            <img src="@/assets/icon-leaf.svg" alt="" class="item-img" />
            <span>Eco friendly</span>
          </div>
          <div class="point-item">
            <img src="@/assets/icon-heart.svg" alt="" class="item-img" />
            <span>Done with love</span>
          </div>
          <div class="point-item">
            <img src="@/assets/icon-medal.svg" alt="" class="item-img" />
            <span>High quality</span>
          </div>
          <div class="point-item">
            <img src="@/assets/icon-shovel.svg" alt="" class="item-img" />
            <span>Easy maintenance</span>
          </div>
        </div>
        <router-link :to="{ name: 'About' }" class="primary-btn contact"
          >About us</router-link
        >
      </div>
    </div>
    <div class="home-why">
      <div class="why-header">
        <span class="header-whyus">Why us</span>
        <h1 class="header-title">
          We are experts on everything regarding landscaping
        </h1>
        <p class="header-desc">
          Lorem ipsum. Fugiat voluptatem recusandae hic quae, rerum corporis
          quasi voluptas laudantium vel expedita!
        </p>
      </div>
      <div class="why-number">
        <div class="number-item">
          <h1 class="item-num">40<span>+</span></h1>
          <div class="item-desc">Years of Experience</div>
        </div>
        <div class="number-item">
          <h1 class="item-num">10<span>+</span></h1>
          <div class="item-desc">Specialist team members</div>
        </div>
        <div class="number-item">
          <h1 class="item-num">50<span>+</span></h1>
          <div class="item-desc">Successful Projects</div>
        </div>
        <div class="number-item">
          <h1 class="item-num">100<span>%</span></h1>
          <div class="item-desc">Client Sastifaction</div>
        </div>
      </div>
    </div>
    <Testimonial />
    <Break />
    <div class="home-blog">
      <div class="blog-header">
        <div class="header-design">
          <div class="design-hline"></div>
          <span>Our Blog</span>
        </div>
        <h1 class="header-title">Discover weekly content about landscaping</h1>
        <router-link :to="{ name: 'Blog' }" class="primary-btn articles"
          >All articles</router-link
        >
      </div>
      <div class="blog-content">
        <div
          @click="toSingleBlog(blog.name)"
          v-for="(blog, index) in relatedBlogs"
          :key="index"
          class="content-post"
        >
          <img :src="blog.img" alt="" class="post-cover" />
          <div class="post-info">
            <h2 class="info-title">
              {{ blog.name }}
            </h2>
            <h4 class="info-desc">
              {{ blog.desc }}
            </h4>
            <div class="info-hline"></div>
            <div class="info-detail">
              <div class="detail-more">
                Read more <img src="@/assets/icon-arrow-right.svg" alt="" />
              </div>
              <div class="detail-wrap">
                <span class="detail-cat">{{ blog.category }}</span>
                <div class="detail-hline"></div>
                <span class="detail-date">{{ blog.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
import Break from "@/components/Break.vue";
import Testimonial from "@/components/Testimonial.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ContactForm,
    Break,
    Testimonial,
  },
  data() {
    return {
      services: this.$store.state.services,
      relatedBlogs: this.$store.getters.getRelatedBlogs,
    };
  },
  methods: {
    toSingleBlog(name) {
      this.$router.push({ name: "SingleBlog", params: { name: name } });
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.home-hero {
  height: 100vh;
  display: flex;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  padding: 0 90px;
}

.content-design {
  display: flex;
  align-items: center;
  gap: 20px;
}

.design-hline {
  width: 25px;
  height: 2px;
  background: var(--primary-color);
}

.content-design span {
  text-transform: uppercase;
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--primary-color);
}

.content-title {
  font-size: var(--fontsize-heading1);
  font-weight: 400;
  font-family: var(--font-heading);
}

.content-subtitle {
  width: 70%;
  font-size: var(--fontsize-heading6);
  line-height: 36px;
  color: rgba(0, 0, 0, 0.6);
}

.content-btn-wrap {
  display: flex;
  gap: 20px;
}

.contact {
  background: var(--primary-color);
  color: #fff;
  border: 1px solid var(--primary-color);
  text-decoration: none;
}

.contact:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.service {
  background: #fff;
  color: var(--neutral-color-8);
  border: 1px solid var(--neutral-color-8);
  text-decoration: none;
}

.service:hover {
  background: var(--neutral-color-8);
  color: #fff;
  border-color: var(--neutral-color-8);
}

.hero-img {
  width: 50%;
  height: 100%;
  object-fit: cover;
}

.home-project {
  width: 100%;
  height: 140vh;
  padding: 0 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
  margin-top: 20vh;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.header-intro {
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  font-family: var(--font-heading);
  width: 40%;
}

.header-desc {
  flex-basis: 45%;
  font-size: var(--fontsize-heading5);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
}

.project-wrap {
  display: flex;
  gap: 15px;
  width: 100%;
  height: 90vh;
}

.wrap-column {
  flex-basis: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wrap-column:nth-child(3) {
  flex-basis: 50%;
}

.wrap-column:nth-child(3) > .project-item {
  height: 93.8%;
}

.project-item {
  width: 100%;
  height: 45%;
  object-fit: cover;
}

.home-project > .contact {
  margin: 30px auto;
}

.home-service {
  margin: 10vh 0;
  width: 100%;
  height: 200vh;
  padding: 0 90px;
  display: flex;
  gap: 50px;
}

.service-content {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  height: 60vh;
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.service-content .content-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.service-content .content-design .hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.service-content .content-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
}

.service-content .content-title {
  width: 80%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.service-content .content-subtitle {
  font-size: var(--fontsize-heading5);
  color: rgba(0, 0, 0, 0.6);
}

.service-wrap {
  padding-top: 50px;
  flex-basis: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 35px;
}

.service-card {
  border: 1px solid var(--neutral-color-5);
  display: flex;
  flex-direction: column;
  height: 60vh;
  gap: 20px;
  cursor: pointer;
  transition: 400ms ease all;
}

.service-card:hover {
  transform: scale(0.94);
}

.service-card .card-cover {
  width: 100%;
  height: 40%;
  object-fit: cover;
}

.service-card .card-name {
  padding-left: 25px;
  font-size: var(--fontsize-heading4);
  font-weight: 400;
  font-family: var(--font-heading);
}

.service-card:hover .card-name {
  color: var(--primary-color);
}

.service-card .card-desc {
  padding-left: 25px;
  width: 80%;
  line-height: 24px;
}

.service-card .card-more {
  font-size: var(--fontsize-heading6);
  padding-left: 25px;
  margin-top: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
}

.service-card .card-more span {
  color: var(--primary-color);
}

.service-card .card-more img {
  filter: invert(49%) sepia(92%) saturate(314%) hue-rotate(112deg)
    brightness(94%) contrast(90%);
  width: 22px;
  height: 18px;
}

.home-about {
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--neutral-color-2);
  padding-left: 58%;
  position: relative;
}

.about-cover-back,
.about-cover-front {
  position: absolute;
  width: 470px;
  height: 470px;
  object-fit: cover;
}

.about-cover-back {
  top: 150px;
  left: 100px;
}

.about-cover-front {
  top: 350px;
  left: 250px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.about-content .content-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.about-content .content-design .hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.about-content .content-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
}

.about-content .content-title {
  width: 80%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.about-content .content-subtitle {
  font-size: var(--fontsize-heading5);
  color: rgba(0, 0, 0, 0.6);
}

.about-content .content-point {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  width: 80%;
}

.point-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.point-item span {
  font-size: var(--fontsize-heading6);
}

.home-why {
  margin-top: 10vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding-top: 60px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.why-header {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.header-whyus {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  color: var(--primary-color);
}

.header-title {
  font-family: var(--font-heading);
  width: 60%;
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: center;
}

.header-desc {
  line-height: 40px;
  color: rgba(0, 0, 0, 0.6);
  width: 60%;
  font-size: var(--fontsize-heading5);
  text-align: center;
}

.why-number {
  display: flex;
  justify-content: space-around;
  width: 90%;
}

.number-item {
  flex-basis: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.number-item .item-num {
  font-family: var(--font-heading);
  font-size: 96px;
  font-weight: 400;
  color: var(--neutral-color-8);
}

.number-item .item-num span {
  font-family: var(--font-heading);
  color: var(--primary-color);
}

.number-item .item-desc {
  text-align: center;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  color: rgba(0, 0, 0, 0.6);
}

.home-blog {
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  margin-top: 10vh;
}

.blog-header {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  position: relative;
}

.blog-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.blog-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.blog-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.blog-header .header-title {
  width: 40%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: left;
}

.blog-header .articles {
  position: absolute;
  right: 0;
  bottom: 50px;
  background: #fff;
  color: var(--neutral-color-8);
  border: 1px solid var(--neutral-color-8);
  text-decoration: none;
}

.blog-header .articles:hover {
  background: var(--neutral-color-8);
  color: #fff;
  border-color: var(--neutral-color-8);
}

.blog-content {
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.content-post {
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 300ms ease all;
}

.content-post:hover {
  transform: scale(0.94);
}

.post-cover {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.post-info {
  flex-basis: 50%;
  width: 100%;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
}

.post-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
  line-height: 38px;
}

.post-info .info-desc {
  font-size: var(--fontsize-heading6);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  line-height: 36px;
}

.post-info .info-hline {
  position: absolute;
  width: calc(100% - 70px);
  height: 1px;
  background: var(--neutral-color-4);
  bottom: 80px;
}

.post-info .info-detail {
  width: 100%;
  height: 80px;
  padding: 0 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-info .info-detail .detail-more {
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  display: flex;
  gap: 12px;
}

.post-info .info-detail .detail-more img {
  width: 20px;
  height: 16px;
  filter: invert(58%) sepia(54%) saturate(504%) hue-rotate(112deg)
    brightness(85%) contrast(88%);
}

.post-info .info-detail .detail-wrap {
  display: flex;
  gap: 9px;
  align-items: center;
}

.post-info .info-detail .detail-wrap .detail-cat,
.post-info .info-detail .detail-wrap .detail-date {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}

.post-info .info-detail .detail-wrap .detail-hline {
  width: 12px;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
