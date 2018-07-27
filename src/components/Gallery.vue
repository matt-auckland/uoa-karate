<template>
  <div class="hello">
    <vue-instagram token="4129170661.1677ed0.b434535d2a95436889c4c50b7a782e90" username="kiwikarateka" :count="6" class="gallery-container">
      <template slot="feeds" scope="props">
        <a :href="props.feed.link" target="_blank">
          <div class="card-image">
            <img :src="props.feed.images.low_resolution.url" alt="Instagram Image">
          </div>
        </a>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'Gallery',
  components: {
    VueInstagram
  },
}
</script>


<style scoped>

  .gallery-container {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
  }

  img {
    width: 100%;
    border-radius: 15px;
  }

  .card {    
  }



</style>
