<template>
  <div @click="closeFocus($event)" class="focus-img" ref="bgRef">
    <div class="hero">
      <img
        @click="navImg(-1)"
        src="@/assets/icon-backward.svg"
        alt=""
        class="nav-icon"
      />
      <img :src="getCurrentShowImg" alt="" class="main-img" />
      <img
        @click="navImg(1)"
        src="@/assets/icon-forward.svg"
        alt=""
        class="nav-icon"
      />
    </div>
    <div class="more-img">
      <img
        v-for="(img, index) in imgList"
        :key="index"
        :src="img"
        alt=""
        :class="{ isSelected: currentShow === index }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FocusImage",
  props: ["imgList", "currentImg"],
  data() {
    return {
      currentShow: this.currentImg,
    };
  },
  methods: {
    closeFocus(e) {
      if (e.target === this.$refs.bgRef) {
        console.log(e.target);
        this.$emit("closeFocus");
      }
    },
    navImg(value) {
      if (this.currentShow == 0 && value == -1) {
        this.currentShow = 3;
      } else {
        this.currentShow = Math.abs(this.currentShow + value) % 4;
      }
    },
  },
  computed: {
    getCurrentShowImg() {
      return this.imgList[this.currentShow];
    },
  },
};
</script>

<style scoped>
.focus-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.focus-img .hero {
  display: flex;
  align-items: center;
  gap: 50px;
}

.focus-img .hero .main-img {
  height: 70vh;
  width: 40vw;
  object-fit: contain;
}

.focus-img .hero .nav-icon {
  width: 70px;
  height: 70px;
  filter: invert(72%) sepia(1%) saturate(0%) hue-rotate(218deg) brightness(96%)
    contrast(102%);
  cursor: pointer;
  transition: 200ms ease all;
}

.focus-img .hero .nav-icon:hover {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
}

.focus-img .more-img {
  display: flex;
  gap: 20px;
}

.focus-img .more-img img {
  -webkit-filter: brightness(100%);
  width: 75px;
  height: 75px;
  object-fit: cover;
  cursor: pointer;
}

.focus-img .more-img .isSelected {
  -webkit-filter: brightness(40%);
}
</style>
