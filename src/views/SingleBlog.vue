<template>
  <Header />
  <div class="hero">
    <div class="hero-tag">
      <span class="tag-category">{{ blog.category }}</span>
      <div class="tag-hline"></div>
      <span class="tag-date">{{ blog.date }}</span>
    </div>
    <div class="hero-title">
      {{ blog.name }}
    </div>
    <div class="hero-author">
      <img :src="blog.authorImg" alt="" class="author-cover" />
      <span class="author-name">{{ blog.author }}</span>
    </div>
  </div>
  <img :src="blog.img" alt="" class="blog-cover" />
  <div class="blog-content">
    <h2 class="content-title">Types of Gardens</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae
      ut maiores quia nemo vel aut adipisci ex recusandae sed tenetur nam
      exercitationem eveniet! Harum enim tenetur soluta culpa ullam.
    </p>
    <h5 class="content-outline">1. Butterfly Gardens</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam beatae
      quisquam modi iusto saepe neque suscipit officia eaque omnis vel commodi
      sequi minima nihil molestias nulla distinctio, itaque sunt illo.
    </p>
    <figure>
      <img src="@/assets/blog/blog1.jpg" alt="" class="blog-img" />
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laborum.
      </figcaption>
    </figure>
    <h5 class="content-outline">2. Container Gardens</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam beatae
      quisquam modi iusto saepe neque suscipit officia eaque omnis vel commodi
      sequi minima nihil molestias nulla distinctio, itaque sunt illo.
    </p>
    <img src="@/assets/blog/blog2.jpg" alt="" class="blog-img" />
    <h5 class="content-outline">3. Organic Gardens</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam beatae
      quisquam modi iusto saepe neque suscipit officia eaque omnis vel commodi
      sequi minima nihil molestias nulla distinctio, itaque sunt illo.
    </p>
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis quam
        dignissim ultrices sed vel a molestie aliquam. iverra enim sit metus.
        Quisque quam amet platea penatibus. Orci et sem gravida laoreet nisl.
      </p>
    </blockquote>
    <h5 class="content-outline">4. Water Gardens</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam beatae
      quisquam modi iusto saepe neque suscipit officia eaque omnis vel commodi
      sequi minima nihil molestias nulla distinctio, itaque sunt illo.
    </p>
  </div>
  <div class="related-blog">
    <div class="blog-header">
      <h1 class="header-title">Latest articles</h1>
      <div class="primary-btn articles">All articles</div>
    </div>
    <div class="blog-wrap">
      <div
        @click="toArticle(blog.name)"
        v-for="(blog, index) in relatedBlogs"
        :key="index"
        class="blog-item"
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
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SingleBlog",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      relatedBlogs: this.$store.getters.getRelatedBlogs,
      blog: this.$store.getters.getSingleBlog(this.$route.params.name),
    };
  },
  created() {
    console.log(this.relatedBlogs);
  },
  methods: {
    toArticle(name) {
      this.$router.push({ name: "SingleBlog", params: { name: name } });
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
  height: 95vh;
  background: linear-gradient(
    to bottom,
    var(--neutral-color-3),
    var(--neutral-color-2)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 0 110px;
  padding-bottom: 100px;
}

.hero-tag {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: var(--fontsize-heading6);
}

.hero-tag .tag-hline {
  width: 20px;
  height: 1px;
  background: var(--neutral-color-6);
}

.hero-tag span {
  color: var(--neutral-color-6);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  width: 60%;
}

.hero-author {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hero-author .author-cover {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.hero-author .author-name {
  font-size: var(--fontsize-heading4);
}

.blog-cover {
  position: absolute;
  top: 90vh;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  padding: 0 110px;
}

.blog-content {
  width: 50%;
  margin: 0 auto;
  margin-top: 80vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-content .content-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.blog-content p {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.blog-content .content-outline {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 500;
  color: var(--neutral-color-8);
}

.blog-content .blog-img {
  margin: 20px 0;
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.blog-content blockquote {
  margin: 25px 0;
  padding: 25px 35px;
  background: var(--neutral-color-3);
  border: 1px solid var(--primary-color);
  border-width: 0 0 0 4px;
}

.blog-content blockquote p {
  font-size: var(--fontsize-heading5);
}

.blog-content figcaption {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}

.related-blog {
  width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  margin-top: 10vh;
  background: var(--neutral-color-2);
}

.related-blog .blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20vh;
  margin-bottom: 5vh;
}

.related-blog .blog-header .header-title {
  width: 40%;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
  text-align: left;
}

.related-blog .blog-header .articles {
  padding: 25px 55px;
  background: #fff;
  color: var(--neutral-color-8);
  border: 1px solid var(--neutral-color-8);
}

.related-blog .blog-header .articles:hover {
  background: var(--neutral-color-8);
  color: #fff;
  border-color: var(--neutral-color-8);
}

.related-blog .blog-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.related-blog .blog-wrap .blog-item {
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 300ms ease all;
}

.related-blog .blog-wrap .blog-item:hover {
  transform: scale(0.94);
}

.related-blog .blog-wrap .blog-item .item-cover {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.related-blog .blog-wrap .blog-item .item-info {
  flex-basis: 50%;
  width: 100%;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
}

.related-blog .blog-wrap .blog-item .item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
  line-height: 38px;
  transition: 400ms ease all;
}

.related-blog .blog-wrap .blog-item:hover .item-info .info-title {
  color: var(--primary-color);
}

.related-blog .blog-wrap .blog-item .item-info .info-desc {
  font-size: var(--fontsize-heading6);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  line-height: 36px;
}

.related-blog .blog-wrap .blog-item .item-info .info-hline {
  position: absolute;
  width: calc(100% - 70px);
  height: 1px;
  background: var(--neutral-color-4);
  bottom: 80px;
}

.related-blog .blog-wrap .blog-item .item-info .info-detail {
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

.related-blog .blog-wrap .blog-item .item-info .info-detail .detail-more {
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
  display: flex;
  gap: 12px;
}

.related-blog .blog-wrap .blog-item .item-info .info-detail .detail-more img {
  width: 20px;
  height: 16px;
  filter: invert(58%) sepia(54%) saturate(504%) hue-rotate(112deg)
    brightness(85%) contrast(88%);
}

.related-blog .blog-wrap .blog-item .item-info .info-detail .detail-wrap {
  display: flex;
  gap: 9px;
  align-items: center;
}

.related-blog
  .blog-wrap
  .blog-item
  .item-info
  .info-detail
  .detail-wrap
  .detail-cat,
.related-blog
  .blog-wrap
  .blog-item
  .item-info
  .info-detail
  .detail-wrap
  .detail-date {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}

.related-blog
  .blog-wrap
  .blog-item
  .item-info
  .info-detail
  .detail-wrap
  .detail-hline {
  width: 12px;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
