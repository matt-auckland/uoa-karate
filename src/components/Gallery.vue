<template>
  <div class="hello">
    <div class="gallery-container">
      <h1>Image Gallery! 🖼️</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    msg: String
  }
}
</script>


<style scoped>

  .gallery-container {
    width: 100%;
    height: 400px;
    background-color: var(--tuatara-light);
  }



</style>
