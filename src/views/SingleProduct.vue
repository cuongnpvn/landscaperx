<template>
  <Header />
  <main>
    <FocusImage
      v-if="focusImg"
      v-on:closeFocus="closeFocus"
      :imgList="getImgList"
      :currentImg="currentFocusImg"
    />
    <div class="img-wrap">
      <img
        @click="toggleFocusImg(0)"
        :src="product.img"
        alt=""
        class="img-cover"
      />
      <div class="detail-wrap">
        <img
          @click="toggleFocusImg(1)"
          :src="product.imgDetail1"
          alt=""
          class="detail-item"
        />
        <img
          @click="toggleFocusImg(2)"
          :src="product.imgDetail2"
          alt=""
          class="detail-item"
        />
        <img
          @click="toggleFocusImg(3)"
          :src="product.imgDetail3"
          alt=""
          class="detail-item"
        />
      </div>
    </div>
    <div class="info">
      <div class="info-name">{{ product.name }}</div>
      <div class="price-wrap">
        <div class="info-price" :class="{ isSale: product.sale }">
          $ {{ product.price }} USD
        </div>
        <div v-if="product.sale" class="info-price sale-price">
          $ {{ product.salePrice }} USD
        </div>
      </div>
      <div class="info-item">
        <span>Weight</span>
        <span>{{ getWeight }} oz</span>
      </div>
      <div class="info-item">
        <span>Dimension</span>
        <span>{{ getDimensions }} in</span>
      </div>
      <p class="info-desc">
        {{ product.desc }}
      </p>
      <div class="input-wrap">
        <div class="info-qty">
          <span>Quantity</span>
          <input type="number" name="" id="" class="input-qty" v-model="qty" />
        </div>
        <div class="info-size">
          <span>Size</span>
          <select name="size" id="" class="input-size" v-model="size">
            <option value="Small">Small</option>
            <option value="Regular">Regular</option>
            <option value="Lagre">Lagre</option>
          </select>
        </div>
      </div>
      <button @click="addToCart" class="primary-btn addCart">
        Add to Cart
      </button>
    </div>
  </main>
  <div class="product">
    <div class="product-header">
      <div
        @click="changeTab(0)"
        class="header-title"
        :class="{ isSelected: currentShow === 0 }"
      >
        Product Description
      </div>
      <div
        @click="changeTab(1)"
        class="header-title"
        :class="{ isSelected: currentShow === 1 }"
      >
        Additional Info
      </div>
      <div
        @click="changeTab(2)"
        class="header-title"
        :class="{ isSelected: currentShow === 2 }"
      >
        Shipping
      </div>
    </div>
    <div class="product-details">
      <div class="details-title">{{ getProductInfo.title }}</div>
      <p class="details-content">
        {{ getProductInfo.desc }}
      </p>
    </div>
  </div>
  <div class="related">
    <div class="related-header">
      <span>Related products</span>
      <router-link :to="{ name: 'Shop' }" class="all-products"
        >Browse all products</router-link
      >
    </div>
    <div class="related-wrap">
      <div
        @click="toProduct(product.name)"
        v-for="(product, index) in relatedProducts"
        :key="index"
        class="related-item"
      >
        <img :src="product.img" alt="" class="item-cover" />
        <div class="item-info">
          <h2 class="info-title">{{ product.name }}</h2>
          <div class="price-wrap">
            <div class="info-price" :class="{ isSale: product.sale }">
              $ {{ product.price }} USD
            </div>
            <div v-if="product.sale" class="info-price sale-price">
              $ {{ product.salePrice }} USD
            </div>
          </div>
          <div class="info-more">
            <span>Add to cart</span>
            <img src="@/assets/icon-arrow-right.svg" alt="" class="more-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import FocusImage from "@/components/FocusImage.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SingleProduct",
  components: {
    Header,
    Footer,
    FocusImage,
  },
  data() {
    return {
      qty: 1,
      product: this.$store.getters.getSingleProduct(this.$route.params.name),
      size: "Small",
      relatedProducts: this.$store.getters.getRelatedProducts,
      productInfomation: [
        {
          name: "Product Description",
          title: "Is this the right plant for me?",
          desc: "Vix ea utamur referrentur, eum quod graece diceret ne. Mel at aperiam salutatus molestiae, utamur neglegentur ut vis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis quam dignissim ultrices sed vel a molestie aliquam. Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet nisl. At volutpat vitae faucibus etiam vitae ornare est integer. Libero imperdiet risus pharetra, risus. Rhoncus integer odio auctor amet. Velit egestas.",
        },
        {
          name: "Additional Info",
          title: "Something you should know",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ornare tellus et urna, vitae eleifend diam. Ultricies vestibulum in vitae commodo, volutpat. Dui leo massa pretium dolor non feugiat sociis dui. Bibendum nec feugiat aliquet ultrices commodo proin. Ac ultrices elit nibh blandit sit amet tristique vulputate. Nam in accumsan consectetur odio. Pulvinar amet ac vitae amet, ante lorem.",
        },
        {
          name: "Shipping",
          title: "How to track my package?",
          desc: "Faucibus malesuada facilisis et rhoncus consectetur elementum, nunc sed dictum. Proin neque, convallis diam interdum gravida tincidunt. Lacus porta scelerisque commodo adipiscing mollis massa. Ac ultrices elit nibh blandit sit amet tristique vulputate. Nam in accumsan consectetur odio. Pulvinar amet ac vitae amet, ante lorem.",
        },
      ],
      currentShow: 0,
      currentFocusImg: 0,
      focusImg: false,
      openCheckOut: false,
    };
  },
  methods: {
    changeTab(value) {
      this.currentShow = value;
    },
    toProduct(value) {
      this.$router.push({ name: "SingleProduct", params: { name: value } });
    },
    closeFocus() {
      this.focusImg = !this.focusImg;
    },
    toggleFocusImg(value) {
      this.focusImg = true;
      this.currentFocusImg = value;
    },
    addToCart() {
      this.$store.dispatch("addItem", {
        name: this.product.name,
        qty: this.qty,
        size: this.size,
      });
      this.$store.dispatch("toggleCart");
    },
  },
  computed: {
    getWeight() {
      if (this.size == "Small") {
        return this.product.weightSmall;
      } else if (this.size == "Regular") {
        return this.product.weightRegular;
      } else {
        return this.product.weightLarge;
      }
    },
    getDimensions() {
      if (this.size == "Small") {
        return this.product.dimensionsSmall;
      } else if (this.size == "Regular") {
        return this.product.dimensionsRegular;
      } else {
        return this.product.dimensionsLarge;
      }
    },
    getProductInfo() {
      return this.productInfomation[this.currentShow];
    },
    getImgList() {
      return [
        this.product.img,
        this.product.imgDetail1,
        this.product.imgDetail2,
        this.product.imgDetail3,
      ];
    },
    openCart() {
      console.log(this.openCheckOut);
      return this.openCheckOut;
    },
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
main {
  padding: 20vh 0;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}

.img-wrap {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 38vw;
}

.img-wrap .img-cover {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

.img-wrap .detail-wrap {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 30vw;
}

.img-wrap .detail-wrap .detail-item {
  object-fit: cover;
  height: 150px;
  width: 12vw;
}

.info {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.info .info-name {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.info .price-wrap {
  display: flex;
  gap: 15px;
}

.info .price-wrap .info-price {
  margin-bottom: 20px;
  font-size: var(--fontsize-heading4);
  font-weight: 400;
  color: var(--primary-color);
}

.info .price-wrap .isSale {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.6);
}

.info .info-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: var(--fontsize-heading6);
  font-weight: 500;
}

.info .info-desc {
  margin-top: 20px;
  padding-bottom: 40px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  line-height: 30px;
}

.info .input-wrap {
  display: flex;
  gap: 25px;
}

.info .input-wrap .info-qty,
.info .input-wrap .info-size {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80px;
}

.info .input-wrap .info-qty span,
.info .input-wrap .info-size span {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}

.info .input-wrap .info-qty .input-qty {
  width: 70px;
  height: 100%;
  padding: 0 12px;
  font-size: var(--fontsize-heading6);
  outline: none;
  border: 1px solid var(--neutral-color-4);
}

.info .input-wrap .info-size .input-size {
  width: 250px;
  height: 100%;
  padding: 0 15px;
  font-size: var(--fontsize-heading6);
  outline: none;
  border: 1px solid var(--neutral-color-4);
}

.addCart {
  padding: 20px 55px;
}

.addCart:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: var(--neutral-color-3);
  padding: 25vh 20vw;
}

.product-header {
  width: 100%;
  padding: 0 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.product-header .header-title {
  padding: 0 8px;
  padding-bottom: 15px;
  border: 1px solid transparent;
  border-width: 0 0 4px 0;
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  color: var(--neutral-color-7);
  cursor: pointer;
}

.product-header .isSelected {
  border-color: var(--primary-color);
}

.product-details {
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  border: 1px solid var(--neutral-color-4);
  background: #fff;
}

.product-details .details-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
}

.product-details .details-content {
  font-size: var(--fontsize-heading6);
  line-height: 40px;
  color: var(--neutral-color-6);
}

.related {
  width: 100%;
  padding: 20vh 90px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.related-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.related-header span {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
}

.related-header .all-products {
  font-size: var(--fontsize-heading5);
  padding: 25px 35px;
  background: #fff;
  color: var(--neutral-color-8);
  border: 1px solid var(--neutral-color-8);
  transition: 400ms ease all;
  cursor: pointer;
  text-decoration: none;
}

.related-header .all-products:hover {
  background: var(--neutral-color-8);
  color: #fff;
  border-color: var(--neutral-color-8);
}

.related-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.related-wrap .related-item {
  width: 32%;
  height: 80vh;
  border: 1px solid var(--neutral-color-4);
  display: flex;
  flex-direction: column;
  transition: 400ms ease all;
  cursor: pointer;
}

.related-wrap .related-item:hover {
  transform: scale(0.94);
}

.related-wrap .related-item .item-cover {
  height: 55%;
  object-fit: cover;
}

.related-wrap .related-item .item-info {
  padding: 45px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-wrap .related-item .item-info .info-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
}

.related-wrap .related-item .item-info .price-wrap {
  display: flex;
  gap: 15px;
}

.related-wrap .related-item .item-info .price-wrap .isSale {
  text-decoration: line-through;
}

.related-wrap .related-item .item-info .price-wrap .info-price {
  font-size: var(--fontsize-heading6);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
}

.related-wrap .related-item .item-info .price-wrap .sale-price {
  color: var(--primary-color);
}

.related-wrap .related-item .item-info .info-more {
  margin-top: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.related-wrap .related-item .item-info .info-more span {
  font-size: var(--fontsize-heading6);
  color: var(--primary-color);
}

.related-wrap .related-item .item-info .info-more .more-icon {
  width: 25px;
  height: 16px;
  filter: invert(53%) sepia(85%) saturate(312%) hue-rotate(112deg)
    brightness(88%) contrast(98%);
}
</style>
