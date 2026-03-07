<template>
  <section class="hero-switcher" :style="heroStyle">
    <div
      v-if="!isTextHidden"
      class="text-container"
      :class="{ span: spanText }"
    >
      <h1>{{ heading }}</h1>
      <p v-html="paragraph"></p>
    </div>

    <div class="controls" aria-label="Hero image controls">
      <button type="button" class="text-toggle" @click="toggleText">
        {{ isTextHidden ? "Show text" : "Hide text" }}
      </button>

      <div class="image-buttons" role="group" aria-label="Select hero image">
        <button
          v-for="(image, index) in images"
          :key="image"
          type="button"
          :class="{ active: currentImageIndex === index }"
          @click="setImage(index)"
          :aria-label="`Show image ${index + 1}`"
          :aria-pressed="currentImageIndex === index"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroImageSwitcher",
  props: {
    spanText: { type: Boolean, default: false },
    heading: { type: String, required: true },
    paragraph: { type: String, required: true },
    images: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      isTextHidden: false,
    };
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url('${this.images[this.currentImageIndex]}')`,
      };
    },
  },
  methods: {
    setImage(index) {
      this.currentImageIndex = index;
    },
    toggleText() {
      this.isTextHidden = !this.isTextHidden;
    },
  },
};
</script>

<style scoped>
.hero-switcher {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #ccc;
  background-position: center;
  background-size: cover;
  min-height: 435px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 20px 86px;
}

.text-container {
  max-width: 450px;
  width: 85%;
  min-height: 180px;
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;
  padding: 16px 18px;
  background: rgba(79, 79, 79, 0.85);
  border-radius: 5px;
  color: white;
}

.text-container h1 {
  margin: 0 0 4px;
}

.text-container p {
  margin: 0;
}

.text-container.span {
  max-width: 80%;
}

.controls {
  display: flex;
  gap: 12px;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  flex-shrink: 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(79, 79, 79, 0.6);
  border-radius: 8px;
  padding: 10px;
}

.text-toggle,
.image-buttons button {
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.text-toggle:hover,
.image-buttons button:hover,
.image-buttons button.active {
  background: rgba(255, 255, 255, 0.35);
}

.image-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 781px) {
  .hero-switcher {
    min-height: 320px;
    padding: 16px 16px 82px;
  }

  .text-container {
    max-width: 100%;
    width: 100%;
    min-height: 150px;
    padding: 10px 12px;
  }

  .controls {
    left: 16px;
    right: 16px;
    bottom: 16px;
    justify-content: center;
  }
}
</style>
