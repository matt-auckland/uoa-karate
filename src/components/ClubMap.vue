<template>
  <div class="hello">
    <h2>Where are we?</h2>
    <div class="map-container">
      Insert Map Here
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .map-container {
    width: 100%;
    height: 300px;
    background-color: beige;
  }

</style>
