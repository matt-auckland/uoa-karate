<template>
  <a :href="formURL" target="_blank" rel="noopener noreferrer">
    <h2>Click here to Sign Up!</h2>
    <img :src="img" alt="QR code for sign up form" />
  </a>
</template>

<script>
import QRCodeImg from '@/assets/AUGRK-registration-form-QR.png'
export default {
  data() {
    return {
      formURL: 'https://docs.google.com/forms/d/e/1FAIpQLSffDWYs8lzM4vdZOVCKmiijebR2F5tjHnwwWRR9vbIXKeXobg/viewform',
      img: QRCodeImg
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  text-align: center;
}

img {
  --size: 280px;
  aspect-ratio: 1/1;
  height: 100%;
  max-width: var(--size);
  max-height: var(--size);
}
</style>