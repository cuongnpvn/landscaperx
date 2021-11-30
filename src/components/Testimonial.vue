<template>
  <div class="home-testimonial">
    <div class="testimonial-header">
      <div class="header-design">
        <div class="design-hline"></div>
        <span>Testimonials</span>
      </div>
      <h1 class="header-title">Don't take our word, take theirs</h1>
      <router-link :to="{ name: 'About' }" class="primary-btn explore"
        >Read more reviews</router-link
      >
    </div>
    <div class="testimonial-content">
      <transition-group name="slide-fade" mode="in-out">
        <div :key="currentShow" class="content-wrap">
          <div class="content-review">
            <div class="review-heading">"{{ getCurrentTestimonial.name }}"</div>
            <div class="review-detail">
              {{ getCurrentTestimonial.content }}
            </div>
          </div>
          <div class="hline"></div>
          <div class="content-user">
            <div class="user-info">
              <img :src="getCurrentTestimonial.authorImg" alt="" />
              <h5 class="info-name">{{ getCurrentTestimonial.author }}</h5>
              <h6 class="info-city">
                {{ getCurrentTestimonial.authorLocation }}
              </h6>
            </div>
            <div class="user-nav">
              <div @click="changeTestimonial(-1)" class="nav-item">
                <img src="@/assets/icon-arrow-left.svg" alt="" />
              </div>
              <div @click="changeTestimonial(1)" class="nav-item">
                <img src="@/assets/icon-arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  data() {
    return {
      testimonials: [
        {
          name: "Our home landscape is now beautiful",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor ipsum dolor sit amet.",
          author: "Sophie Moore",
          authorImg: require("@/assets/testimonial/testimonial1.jpg"),
          authorLocation: "Log Angeles, CA",
        },
        {
          name: "Now our backyard looks amazing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          author: "Bill Cannon",
          authorImg: require("@/assets/testimonial/testimonial2.jpg"),
          authorLocation: "New York, CA",
        },
        {
          name: "Our garden looks amazing thanks to you",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          author: "Eva Clinton",
          authorImg: require("@/assets/testimonial/testimonial3.jpg"),
          authorLocation: "Seatle, CA",
        },
      ],
      currentShow: 0,
    };
  },
  methods: {
    changeTestimonial(value) {
      this.currentShow = Math.abs((this.currentShow + value) % 3);
    },
  },
  computed: {
    getCurrentTestimonial() {
      return this.testimonials[this.currentShow];
    },
  },
};
</script>
<style scoped>
.home-testimonial {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 90px;
  gap: 50px;
  overflow-x: hidden;
}

.testimonial-header {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.testimonial-header .header-design {
  display: flex;
  gap: 15px;
  align-items: center;
}

.testimonial-header .header-design .design-hline {
  width: 16px;
  height: 2px;
  background: var(--primary-color);
}

.testimonial-header .header-design span {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  font-weight: 500;
}

.testimonial-header .header-title {
  width: 100%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: left;
  margin-bottom: 30px;
}

.testimonial-header .explore {
  text-decoration: none;
}

.testimonial-header .explore:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out 0.1s;
}

.slide-fade-leave-active {
  transition: all 0s ease-in;
}

/* .slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(25%);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10%);
  opacity: 0;
}

.testimonial-content {
  width: 70%;
  height: 55vh;
  border: 1px solid var(--neutral-color-5);
  display: flex;
  position: relative;
  font-size: var(--fontsize-heading6);
}

.testimonial-content .content-wrap {
  padding: 50px 50px 0 50px;
}

.testimonial-content .content-review {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.testimonial-content .content-review .review-heading {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
}

.testimonial-content .content-review .review-detail {
  color: rgba(0, 0, 0, 0.6);
  line-height: 40px;
}

.testimonial-content .hline {
  position: absolute;
  bottom: 100px;
  left: 50px;
  width: calc(100% - 100px);
  height: 1px;
  background: var(--neutral-color-4);
}

.testimonial-content .content-user {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 50px;
  height: 100px;
}

.testimonial-content .content-user .user-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding-left: 75px;
}

.testimonial-content .content-user .user-info img {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-content .content-user .user-info .info-name {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading5);
  font-weight: 500;
}

.testimonial-content .content-user .user-info .info-city {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.testimonial-content .content-user .user-nav {
  display: flex;
  gap: 20px;
}

.testimonial-content .content-user .user-nav .nav-item {
  width: 45px;
  height: 45px;
  border: 1px solid var(--neutral-color-8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 300ms ease all;
}

.testimonial-content .content-user .user-nav .nav-item:hover {
  opacity: 0.5;
}

.testimonial-content .content-user .user-nav .nav-item img {
  width: 20px;
  height: 16px;
}
</style>
