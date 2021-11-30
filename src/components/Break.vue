<template>
  <div class="home-break">
    <h1 class="break-title">
      Get in touch to design a beautiful landscape today
    </h1>
    <router-link :to="{ name: 'Contact' }" class="primary-btn contact"
      >Get in touch</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-break {
  width: 100%;
  height: 70vh;
  background: var(--neutral-color-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  padding-left: 110px;
}

.home-break .break-title {
  font-family: var(--font-heading);
  font-size: var(--fontsize-heading1);
  font-weight: 500;
  width: 60%;
  color: var(--neutral-color-3);
}

.contact {
  text-decoration: none;
}

.contact:hover {
  background: #fff;
  color: var(--neutral-color-8);
  border-color: var(--neutral-color-8);
}
</style>
