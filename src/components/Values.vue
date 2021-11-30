<template>
  <section class="value">
    <div class="value-header">
      <h1>Our work values</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti,
        pariatur minima alias quo aspernatur!
      </p>
    </div>
    <div class="value-wrap">
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
      <div class="value-item">
        <div class="item-header">
          <div class="header-icon">
            <img src="@/assets/icon-leaf.svg" alt="" />
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <p class="item-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quos nesciunt porro!
        </p>
      </div>
    </div>
    <router-link :to="{ name: 'Services' }" class="primary-btn service"
      >Our services</router-link
    >
  </section>
</template>

<script>
export default {
  name: "Values",
};
</script>

<style scoped>
.primary-btn:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}

.value {
  width: 100%;
  height: 130vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 90px;
}

.value-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.value-header h1 {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading2);
  font-weight: 400;
}

.value-header p {
  width: 40%;
  font-size: var(--fontsize-heading6);
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
}

.value-wrap {
  margin-top: 60px;
  width: 100%;
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 30px;
}

.value-item {
  border: 1px solid var(--neutral-color-4);
  padding: 35px;
}

.value-item .item-header {
  display: flex;
  gap: 20px;
  align-items: center;
}

.value-item .item-header .header-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--neutral-color-4);
}

.value-item .item-header .header-icon img {
  transform: translate(40%, 50%);
}

.value-item .item-header h3 {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading3);
  font-weight: 400;
}

.value-item .item-content {
  margin-top: 35px;
  font-size: var(--fontsize-heading6);
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
}

.value .service {
  margin: 40px auto;
  text-decoration: none;
}
</style>
