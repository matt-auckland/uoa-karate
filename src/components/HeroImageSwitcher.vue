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

      <div class="image-nav" role="group" aria-label="Select hero image">
        <button
          type="button"
          @click="showPreviousImage"
          aria-label="Show previous image"
        >
          Back
        </button>

        <!-- Caption intentionally hidden for now; keep data/computed support for easy re-enable -->
        <!-- <span class="caption" aria-live="polite">{{
          currentImage.caption
        }}</span> -->

        <button
          type="button"
          @click="showNextImage"
          aria-label="Show next image"
        >
          Next
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
    normalizedImages() {
      return this.images.map((image) => {
        if (typeof image === "string") {
          return { source: image, caption: "" };
        }

        return {
          source: image.source,
          caption: image.caption || "",
        };
      });
    },
    currentImage() {
      return (
        this.normalizedImages[this.currentImageIndex] || {
          source: "",
          caption: "",
        }
      );
    },
    heroStyle() {
      return {
        backgroundImage: `url('${this.currentImage.source}')`,
      };
    },
  },
  methods: {
    toggleText() {
      this.isTextHidden = !this.isTextHidden;
    },
    showPreviousImage() {
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = this.normalizedImages.length - 1;
        return;
      }

      this.currentImageIndex -= 1;
    },
    showNextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.normalizedImages.length;
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
  flex-direction: row;
  gap: 8px;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  flex-shrink: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background: rgba(79, 79, 79, 0.6);
  border-radius: 8px;
  padding: 10px;
}

.text-toggle,
.image-nav button {
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.text-toggle:hover,
.image-nav button:hover {
  background: rgba(255, 255, 255, 0.35);
}

.image-nav {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
}

.caption {
  color: white;
  min-width: 120px;
  text-align: center;
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
    align-items: center;
    flex-wrap: nowrap;
  }

  .caption {
    min-width: 96px;
  }
}
</style>
