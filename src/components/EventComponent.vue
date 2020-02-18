<template>
  <div class="event-container">
    <!-- <div class="event-img">
      <img
        :src="imageUrl"
        alt=""
      >
    </div> -->
    <div class="text-container">
      <h2 class="event-title">{{ event.title }}</h2>
      <p>
        <span title="Location">🗺️</span>&nbsp;<a
          v-if="event.location"
          :href="`https://www.google.com/maps/search/${event.location}`"
          target="_blank"
          >{{ event.location }}</a
        >
        <span v-else>To Be Decided</span>
      </p>
      <p>
        <span title="Date">📆</span> {{ calculateDateString(event) || TBA }}
      </p>
      <p class="event-text" :class="{ desc: !showingMore }">
        {{ description }}
      </p>
      <a
        v-if="showExpand"
        href="javascript:;"
        @click="showingMore = !showingMore"
        class="show-more"
        >{{ showingMore ? "Read Less" : "Read More" }}</a
      >

      <p class="event-text"></p>
      <div v-if="event.signUpURL">
        To sign up, follow
        <a :href="event.signUpURL" target="_blank" rel="noopener noreferrer"
          >this link</a
        >
      </div>

      <div v-if="!event.offSitelink && event.extendedDescription">
        For more information follow
        <router-link :to="'/events/' + event.id">this link</router-link>
      </div>

      <div v-if="event.offSitelink">
        For more information follow
        <a :href="event.offSitelink" target="_blank" rel="noopener noreferrer"
          >this link</a
        >
      </div>
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
  props: {
    event: Object
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
    }
  },
  methods: {
    calculateDateString(event) {
      if (!event.startDate) return "";
      let startDate = new Intl.DateTimeFormat(
        "default",
        this.calculateFormatterOptions(event.startDate)
      ).format(new Date(event.startDate));

      if (!event.endDate) return startDate;

      let endDate = new Intl.DateTimeFormat(
        "default",
        this.calculateFormatterOptions(event.endDate)
      ).format(new Date(event.endDate));

      return `${startDate} - ${endDate}`;
    },
    calculateFormatterOptions(dateStr) {
      const fullStrOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      };

      const monthYearOptions = {
        month: "long",
        year: "numeric"
      };

      switch (dateStr.split("-").length) {
        case 1:
          return { year: "numeric" };
        case 2:
          return monthYearOptions;
        case 3:
        default:
          return fullStrOptions;
      }
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
