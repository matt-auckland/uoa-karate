<template>
  <figure>
    <img
      loading="lazy"
      :src="source"
      :alt="caption"
    >
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "AppImage",
  props: {
    source: { type: String, required: true },
    caption: { type: String, required: true }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  background-color: #ccc;
}

figure {
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-height: 100%;
  max-width: 100%;
  width: 100%;
  margin: 0;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
</style>
