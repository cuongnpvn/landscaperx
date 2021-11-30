<template>
  <Header />
  <div class="hero">
    <div class="hero-header">
      <h1 class="header-title">Articles & News</h1>
      <p class="header-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing <br />
        elit. Deleniti quam inventore officia earum?
      </p>
    </div>
    <img :src="blogs[0].img" alt="" class="hero-cover" />
    <div @click="toArticle(blogs[0].name)" class="hero-content">
      <div class="content-header">
        <div class="header-hline"></div>
        <div class="header-featured">Featured</div>
      </div>
      <div class="content-title">
        {{ blogs[0].name }}
      </div>
      <div class="content-desc">
        {{ blogs[0].desc }}
      </div>
      <div class="content-author">
        <img :src="blogs[0].authorImg" alt="" class="author-cover" />
        <div class="author-name">{{ blogs[0].author }}</div>
      </div>
    </div>
  </div>
  <div class="article">
    <div class="article-header">
      <h1 class="header-title">Latest articles</h1>
      <div class="header-filter">
        <div
          @click="toggleFilter('All')"
          class="filter-item"
          :class="{ isSelected: currentCategory === 'All' }"
        >
          All
        </div>
        <div
          @click="toggleFilter('Landscaping')"
          class="filter-item"
          :class="{ isSelected: currentCategory === 'Landscaping' }"
        >
          Landscaping
        </div>
        <div
          @click="toggleFilter('Garden')"
          class="filter-item"
          :class="{ isSelected: currentCategory === 'Garden' }"
        >
          Garden
        </div>
        <div
          @click="toggleFilter('Fountains')"
          class="filter-item"
          :class="{ isSelected: currentCategory === 'Fountains' }"
        >
          Fountains
        </div>
      </div>
    </div>
    <div class="article-wrap">
      <div
        @click="toArticle(blog.name)"
        v-for="(blog, index) in getBlogsList"
        :key="index"
        class="article-item"
      >
        <img :src="blog.img" alt="" class="item-cover" />
        <div class="item-info">
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
  <Break />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Break from "@/components/Break.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Blog",
  components: {
    Header,
    Break,
    Footer,
  },
  data() {
    return {
      blogs: this.$store.state.blogs,
      currentCategory: "All",
    };
  },
  methods: {
    toggleFilter(value) {
      this.currentCategory = value;
    },
    toArticle(name) {
      this.$router.push({ name: "SingleBlog", params: { name: name } });
    },
  },
  computed: {
    getBlogsList() {
      if (this.currentCategory == "All") {
        return this.blogs;
      } else {
        return this.blogs.filter(
          (blog) => blog.category == this.currentCategory
        );
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
  height: 120vh;
  position: relative;
}

.hero-header {
  width: 100%;
  height: 60%;
  background: var(--neutral-color-2);
  padding: 0 120px;
  padding-bottom: 30vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 400;
}

.hero-header .header-desc {
  margin-right: 60px;
  font-size: var(--fontsize-heading6);
  line-height: 35px;
  color: rgba(0, 0, 0, 0.6);
}

.hero-cover {
  position: absolute;
  top: 36vh;
  right: 0;
  width: 85%;
  height: 75vh;
  padding: 0 100px;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  width: 47%;
  height: 60vh;
  top: 45vh;
  left: 120px;
  padding: 50px 55px;
  border: 1px solid var(--neutral-color-4);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  transition: 400ms ease all;
  cursor: pointer;
}

.hero-content:hover {
  transform: translateY(-20px);
}

.hero-content .content-header {
  display: flex;
  gap: 15px;
  align-items: center;
}

.hero-content .content-header .header-hline {
  width: 20px;
  height: 2px;
  background: var(--primary-color);
}

.hero-content .content-header .header-featured {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.hero-content .content-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
  transition: 300ms ease all;
}

.hero-content .content-title:hover {
  color: var(--primary-color);
}

.hero-content .content-desc {
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.hero-content .content-author {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.hero-content .content-author .author-cover {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.hero-content .content-author .author-name {
  font-size: var(--fontsize-heading5);
}

.article {
  width: 100%;
  margin: 20vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 0 120px;
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.article-header .header-filter {
  display: flex;
  align-items: center;
  gap: 20px;
}

.article-header .header-filter .isSelected {
  color: var(--primary-color);
}

.article-header .header-filter .filter-item {
  font-size: var(--fontsize-heading6);
  cursor: pointer;
  transition: 200ms ease all;
}

.article-header .header-filter .filter-item:hover {
  color: var(--primary-color);
}

.article-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px 25px;
}

.article-item {
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 300ms ease all;
}

.article-item:hover {
  transform: scale(0.94);
}

.item-cover {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.item-info {
  flex-basis: 50%;
  width: 100%;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
}

.item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
  line-height: 38px;
}

.item-info .info-desc {
  font-size: var(--fontsize-heading6);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  line-height: 36px;
}

.item-info .info-hline {
  position: absolute;
  width: calc(100% - 70px);
  height: 1px;
  background: var(--neutral-color-4);
  bottom: 80px;
}

.item-info .info-detail {
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

.item-info .info-detail .detail-more {
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  display: flex;
  gap: 12px;
}

.item-info .info-detail .detail-more img {
  width: 20px;
  height: 16px;
  filter: invert(58%) sepia(54%) saturate(504%) hue-rotate(112deg)
    brightness(85%) contrast(88%);
}

.item-info .info-detail .detail-wrap {
  display: flex;
  gap: 9px;
  align-items: center;
}

.item-info .info-detail .detail-wrap .detail-cat,
.item-info .info-detail .detail-wrap .detail-date {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}

.item-info .info-detail .detail-wrap .detail-hline {
  width: 12px;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
