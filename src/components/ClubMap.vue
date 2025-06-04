<template>
  <div class="map-container">
    <iframe :src="mapUrl" />
    <!-- Map can be found here:
    https://www.google.com/maps/d/u/0/edit?mid=1EuZMidDtn9MdRiKIcS1jJIeze5r_QjdZ&ll=-36.85095245459175%2C174.76866753657373&z=17 -->
  </div>
</template>

<script>
export default {
  name: "ClubMap",
  props: {
    mapUrl: {
      type: String
      // uoa karate map
      , default: "https://www.google.com/maps/d/embed?mid=1EuZMidDtn9MdRiKIcS1jJIeze5r_QjdZ"
    },
  }
};
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
