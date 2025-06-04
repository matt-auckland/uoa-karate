<template>
  <div
    class="hero-image"
    :style="`background-image: url('${source}')`"
  >
    <div
      class="text-container"
      :class="{'span': spanText}"
    >
      <h1>{{ heading }}</h1>
      <p v-html="paragraph" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: {
    spanText: {type: Boolean, default: false},
    source: { type: String, required: true },
    heading: { type: String, required: true },
    paragraph: { type: String, required: true }
  }
};
</script>

<style scoped>
.hero-image {
  width: 100%;
  margin: 0 auto;
  background-color: #ccc;
  background-position-y: 50%;
  background-size: cover;
  height: 435px;
  border-radius: 10px;

  display: flex;
  align-items: center;
}

.hero-image .text-container {
  max-width: 450px;
  width: 80%;
  margin: 0 30px;
  padding: 30px 20px;
  background: rgba(79, 79, 79, 0.85);
  border-radius: 5px;
  color: white;

  &.span {
    max-width: 80%;
  }
}
</style>
