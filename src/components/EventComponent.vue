<template>
  <div class="event-container">
    <!-- <div class="event-img">
      <img
        :src="imageUrl"
        alt=""
        loading="lazy"
      >
    </div> -->
    <div class="text-container">
      <h2 class="event-title">
        {{ event.title }}
      </h2>
      <p>
        <span title="Location">🗺️</span>&nbsp;<a
          v-if="event.location"
          :href="`https://www.google.com/maps/search/${event.location}`"
          target="_blank"
        >{{ event.location }}</a>
        <span v-else>To Be Decided</span>
      </p>
      <p>
        <span title="Date">📆</span> {{ dateString || "TBA" }}
      </p>
      <p
        class="event-text"
        :class="{ desc: !showingMore }"
      >
        {{ description }}
      </p>
      <a
        v-if="showExpand"
        href="javascript:;"
        class="show-more"
        @click="showingMore = !showingMore"
      >{{ showingMore ? "Unexpand" : "Expand" }}</a>

      <p class="event-text" />
      <div v-if="event.signUpURL">
        To sign up, follow
        <a
          :href="event.signUpURL"
          target="_blank"
          rel="noopener noreferrer"
        >this link</a>
      </div>

      <div v-if="!event.offsiteLink && event.extendedDescription">
        For more information follow
        <router-link :to="'/events/' + event.id">
          this link
        </router-link>
      </div>

      <div v-if="event.offsiteLink">
        For more information follow
        <a
          :href="event.offsiteLink"
          target="_blank"
          rel="noopener noreferrer"
        >this link</a>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../libs/utils';
export default {
  name: "EventComponent",
  components: {},
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultImages: {
        default: "img/group_saifa.JPG",
        gasshuku: "img/gishiki_group.jpg", // TODO: Add default images
        tournament: "img/tournament.jpg",
        training: "",
        grading: "",
        dinner: "",
        movie: ""
      },
      showingMore: false,
      maxDesc: 300 //170
    };
  },
  computed: {
    showExpand() {
      return this.event.description.length > this.maxDesc;
    },
    description() {
      if (!this.showingMore && this.showExpand) {
        return this.event.description.slice(0, this.maxDesc) + "... ";
      }
      return this.event.description;
    },
    imageUrl() {
      if (!this.event.customImage)
        return this.defaultImages[this.event.type || "default"];

      if (this.event.customImage.includes("http"))
        return this.event.customImage;

      return `img/${this.event.customImage}`;
    },
    dateString() {
      return utils.calculateDateString(this.event.startDate, this.event.endDate)
    }
  }
};
</script>

<style scoped>
.event-container {
  padding: 20px 25px;
  border: solid 1px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.event-title {
  font-size: 24px;
  margin: 0 0 5px 0;
}

.text-container {
  flex: 1 1 100px;
}

p {
  margin: 5px 0;
}

.show-more {
  color: --var(--persian-red);
}

.event-img {
  background-color: #333;
  flex: 1 1 300px;
  margin-right: 5%;
  height: 200px;
  max-width: 500px;
  overflow: hidden;

  display: flex;
  align-items: center;
}

.event-img > img {
  width: 100%;
}

.event-text {
  /* max-height: 40px;
  overflow: hidden; */
  max-width: 750px;
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
    padding: 25px 30px;
  }
}
</style>
