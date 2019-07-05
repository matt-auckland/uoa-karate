
<template>
  <div class="event-container">
    <div
      class="event-img"
      :style="{ backgroundImage: 'url(' + imageUrl + ')'}"
    >
    </div>
    <div class="text-container">
      <h2 class="event-title">{{event.name}}</h2>
      <p><span>🗺️</span> {{event.location}}</p>
      <p><span>📆</span> {{event.date}}</p>
      <p class="event-text">{{event.description}}</p>

      <p class="event-text">
        <span v-if="!event.offSitelink && event.extendedDescription">
          For more information follow <router-link :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link>
        </span>

        <span v-if="event.signUpURL">To sign up, follow <a
            :href="event.signUpURL"
            target="_blank"
            rel="noopener noreferrer"
          >this link</a></span>
        <span v-if="event.offSitelink">For more information follow <a
            :href="event.offSitelink"
            target="_blank"
            rel="noopener noreferrer"
          >this link</a></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventComponent",
  components: {},
  data() {
    return {
      defaultImages: {
        default: "img/group_saifa.JPG",
        gasshuku: "", // TODO: Add default images
        training: "",
        grading: "",
        dinner: "",
        movie: ""
      }
    };
  },
  props: {
    event: Object
  },
  computed: {
    imageUrl() {
      if (!this.event.customImage)
        return this.defaultImages[this.event.type || "default"];

      if (this.event.customImage.includes("http"))
        return this.event.customImage;

      return `img/${this.event.customImage}`;
    }
  }
};
</script>

<style scoped>
.event-container {
  padding: 20px 25px;
  background-color: rgba(225, 97, 97, 0.658);
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.event-title {
  font-size: 24px;
  margin: 0 0 5px 0;
}
.text-container {
  flex: 1 1 200px;
}

p {
  margin: 5px 0;
}

.event-img {
  background-color: #333;
  flex: 0 1 300px;
  margin-right: 15px;
  height: 150px;
  width: 400px;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 650px) {
  .event-container {
    flex-direction: column;
    padding: 0;
  }
  .event-img {
    margin: 0 0 20px 0;
    height: 100px;
    flex: 0 1 200px;

    width: 100%;
    background-size: cover;
    border-radius: 20px 20px 0 0;
  }
  .text-container {
    padding: 0 30px 25px 30px;
  }
}
</style>
