<template>
  <Header />
  <section class="shop">
    <div class="shop-header">
      <h1 class="header-title">Shop</h1>
      <p class="header-subtitle">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Sunt, voluptatum. Dolores?elit. Sunt, voluptatum.
        Dolores?
      </p>
    </div>
    <div class="shop-wrap">
      <div
        @click="toProduct(product.name)"
        v-for="(product, index) in products"
        :key="index"
        class="shop-item"
      >
        <img :src="product.img" alt="" class="item-cover" />
        <div class="item-info">
          <h2 class="info-title">{{ product.name }}</h2>
          <div class="price-wrap">
            <span class="info-price" :class="{ isSale: product.sale }"
              >$ {{ product.price }} USD</span
            >
            <span v-if="product.sale" class="info-price sale-price"
              >$ {{ product.salePrice }} USD</span
            >
          </div>

          <div class="info-add">
            <span>Add to cart</span>
            <img src="@/assets/icon-arrow-right.svg" alt="" class="add-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Break />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Break from "@/components/Break.vue";
export default {
  name: "Shop",
  components: {
    Header,
    Footer,
    Break,
  },
  data() {
    return {
      products: this.$store.state.products,
    };
  },
  methods: {
    toProduct(value) {
      this.$router.push({ name: "SingleProduct", params: { name: value } });
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 230vh;
  display: flex;
  flex-direction: column;
  gap: 45px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.shop-header {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}

.shop-header .header-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 400;
}

.shop-header .header-subtitle {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
  text-align: center;
}

.shop-wrap {
  width: 100%;
  height: 150vh;
  padding: 0 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px 35px;
}

.shop-wrap .shop-item {
  height: 85vh;
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 400ms ease all;
}

.shop-wrap .shop-item:hover {
  transform: scale(0.93);
}

.shop-wrap .shop-item .item-cover {
  width: 100%;
  height: 60%;
  flex-basis: 40%;
  object-fit: cover;
}

.shop-wrap .shop-item .item-info {
  padding: 50px 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.shop-wrap .shop-item .item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
  transition: 300ms ease all;
}

.shop-wrap .shop-item:hover .item-info .info-title {
  color: var(--primary-color);
}

.shop-wrap .shop-item .item-info .price-wrap {
  display: flex;
  gap: 15px;
}

.shop-wrap .shop-item .item-info .price-wrap .info-price {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
}

.shop-wrap .shop-item .item-info .price-wrap .sale-price {
  color: var(--primary-color);
}

.shop-wrap .shop-item .item-info .price-wrap .isSale {
  text-decoration: line-through;
}

.shop-wrap .shop-item .item-info .info-add {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: var(--fontsize-heading6);
}

.shop-wrap .shop-item .item-info .info-add span {
  color: var(--primary-color);
}

.shop-wrap .shop-item .item-info .info-add .add-icon {
  width: 20px;
  height: 16px;
  filter: invert(61%) sepia(8%) saturate(3961%) hue-rotate(112deg)
    brightness(91%) contrast(70%);
}
</style>
