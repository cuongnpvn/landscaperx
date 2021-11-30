<template>
  <header>
    <div class="logo">
      <span>Landscaper X</span>
    </div>
    <nav>
      <router-link :to="{ name: 'Home' }" class="nav-item">Home</router-link>
      <router-link :to="{ name: 'Services' }" class="nav-item"
        >Service</router-link
      >
      <router-link :to="{ name: 'About' }" class="nav-item">About</router-link>
      <router-link :to="{ name: 'Blog' }" class="nav-item">Blog</router-link>
      <router-link :to="{ name: 'Shop' }" class="nav-item">Shop</router-link>
    </nav>
    <div class="user">
      <div @click="toggleCart" class="user-cart">
        <span :class="{ notEmpty: getCartItems.length !== 0 }"
          >Cart ({{ getCartItems.length }})</span
        >
      </div>
      <router-link :to="{ name: 'Contact' }" class="contact"
        >Get in touch</router-link
      >
    </div>
  </header>
  <transition name="fade">
    <div @click="closeCart($event)" v-if="showCart" class="bg-black"></div>
  </transition>
  <transition name="slide">
    <div v-if="showCart" class="cart" ref="cartModal">
      <div class="cart-header">
        <span>Your Cart</span>
        <img
          @click="toggleCart"
          src="@/assets/icon-close.svg"
          alt=""
          class="close-icon"
        />
      </div>
      <div v-if="getCartItems.length === 0" class="emptyCart">
        You don't have any item yet.
        <button @click="visitShop" class="primary-btn">Visit Shop</button>
      </div>
      <div class="cart-wrap">
        <div
          v-for="(item, index) in getCartItems"
          :key="index"
          class="cart-item"
        >
          <img :src="item.img" alt="" class="item-cover" />
          <div class="item-info">
            <h5 class="info-name">{{ item.name }}</h5>
            <h4 class="info-price">$ {{ item.price }} USD</h4>
            <p class="info-size">Size: {{ item.size }}</p>
            <button @click="removeItem(item)" class="remove-item">
              Remove
            </button>
          </div>
          <div class="item-qty">
            <span>{{ item.qty }}</span>
          </div>
        </div>
      </div>
      <div class="cart-total">
        <div class="total-calc">
          <span>Subtotal</span>
          <h3>$ {{ getTotal }} USD</h3>
        </div>
        <button class="primary-btn check-out">Continue to Checkout</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      cartItems: this.$store.state.cartItems,
      total: 0,
    };
  },
  methods: {
    toggleCart() {
      this.$store.dispatch("toggleCart");
    },
    closeCart(event) {
      if (event.target !== this.$refs.cartModal) {
        this.$store.dispatch("toggleCart");
      }
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", { item });
    },
    visitShop() {
      this.$store.dispatch("toggleCart");
      this.$router.push({ name: "Shop" });
    },
  },
  computed: {
    getCartItems() {
      return this.$store.state.cartItems;
    },
    getTotal() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
    ...mapState(["showCart"]),
  },
};
</script>

<style scoped>
.primary-btn {
  text-decoration: none;
}

.primary-btn:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

header {
  width: 100%;
  height: 15vh;
  background: #fff;
  padding: 0 7vw;
  display: flex;
  align-items: center;
  font-size: var(--fontsize-heading6);
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

.logo {
  flex-basis: 20%;
  margin-right: 35px;
}

.logo span {
  font-size: var(--fontsize-heading3);
  font-family: var(--font-heading);
  font-weight: 800;
  cursor: pointer;
}

nav {
  flex-basis: 50%;
  display: flex;
  gap: 35px;
}

.nav-item {
  cursor: pointer;
  transition: 200ms ease all;
  text-decoration: none;
}

.nav-item:hover {
  color: var(--primary-color);
}

.user {
  display: flex;
  gap: 25px;
  align-items: center;
}

.user-cart {
  cursor: pointer;
}

.notEmpty {
  color: var(--primary-color);
}

.contact {
  width: fit-content;
  padding: 15px 40px;
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: 400ms ease all;
  cursor: pointer;
}

.contact:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.bg-black {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
}

.fade-enter-active,
.fade-leave-active {
  transition: 400ms ease all;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 35%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 99;
}

.slide-enter-active,
.slide-leave-active {
  transition: 500ms ease all;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(10%);
  opacity: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
  padding: 40px;
}

.cart-header span {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading4);
  font-weight: 400;
}

.cart-header .close-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.cart-wrap {
  display: flex;
  height: 60vh;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 40px;
  overflow: auto;
}

.cart-wrap::-webkit-scrollbar {
  display: none;
}

.emptyCart {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.cart-wrap .cart-item {
  position: relative;
  display: flex;
  gap: 15px;
}

.cart-wrap .cart-item .item-cover {
  width: 65px;
  height: 65px;
  object-fit: cover;
}

.cart-wrap .cart-item .item-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cart-wrap .cart-item .item-info .info-name {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading6);
  font-weight: 600;
}

.cart-wrap .cart-item .item-info .info-price,
.cart-wrap .cart-item .item-info .info-size {
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
}

.cart-wrap .cart-item .item-info .remove-item {
  width: fit-content;
  border: none;
  background: none;
  font-size: var(--fontsize-heading6);
  text-decoration: underline;
  color: var(--primary-color);
}

.cart-wrap .cart-item .item-qty {
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 45px;
  border: 1px solid var(--neutral-color-4);
  font-size: var(--fontsize-heading4);
  display: flex;
  align-items: center;
  padding-left: 12px;
}

.cart-total {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 34vw;
  height: 25vh;
  border: 1px solid var(--neutral-color-4);
  border-width: 1px 0 0 0;
  padding: 40px;
}

.cart-total .total-calc {
  display: flex;
  justify-content: space-between;
}

.cart-total .total-calc span {
  font-size: var(--fontsize-heading5);
  color: rgba(0, 0, 0, 0.6);
}

.cart-total .total-calc h3 {
  font-size: var(--fontsize-heading4);
  font-weight: 500;
}

.cart-total .check-out {
  margin-top: 20px;
}

.primary-btn:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}
</style>
