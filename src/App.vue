<template>
  <router-view :key="$route.fullPath" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  color: #142a25;
  --font-heading: "Lora", serif;
  --primary-color: #2da884;
  --neutral-color-8: #142a25;
  --neutral-color-7: #4b665f;
  --neutral-color-6: #637a75;
  --neutral-color-5: #a0bdb6;
  --neutral-color-4: #d9e9e5;
  --neutral-color-3: #eff6f5;
  --neutral-color-2: #f7fcfa;
  --fontsize-heading1: 54px;
  --fontsize-heading2: 38px;
  --fontsize-heading3: 28px;
  --fontsize-heading4: 24px;
  --fontsize-heading5: 20px;
  --fontsize-heading6: 18px;
  --fontsize-paragraph-small: 16px;
  --fontsize-paragraph-default: 18px;
  --fontsize-paragraph-large: 24px;
}

.primary-btn {
  width: fit-content;
  padding: 24px 34px;
  font-size: var(--fontsize-heading5);
  transition: 300ms linear all;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  border: 1px solid var(--primary-color);
}
</style>
