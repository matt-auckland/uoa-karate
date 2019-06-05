<template>
  <figure>
    <img
      :src="source"
      :alt="caption"
    >
    <figcaption>{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "vue-image",
  props: {
    source: { type: String, required: true },
    caption: { type: String, required: true }
  }
};
</script>


<style scoped>
img {
  width: 100%;
}

figure {
  width: 100%;
  margin: 10px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
</style>
