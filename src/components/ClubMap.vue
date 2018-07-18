<template>
  <div class="hello">
    <div class="map-container">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1EuZMidDtn9MdRiKIcS1jJIeze5r_QjdZ"></iframe>
      <!-- Map can be found here:
      https://www.google.com/maps/d/u/0/edit?mid=1EuZMidDtn9MdRiKIcS1jJIeze5r_QjdZ&ll=-36.85095245459175%2C174.76866753657373&z=17 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClubMap',
  props: {
    msg: String
  }
}
</script>


<style scoped>

  .map-container {
    width: 100%;
    height: 400px;
    filter: brightness(85%);
  }

  iframe {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: none;
  }

</style>
