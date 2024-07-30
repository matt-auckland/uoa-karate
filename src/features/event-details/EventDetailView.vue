
<template>
  <div class="event-container">
    <router-link to="/events/">< Back to event list</router-link>
    <div class="event">
      <h1 class="event-title">{{ event.name }}</h1>
      <img :src="event.img" alt="Event image" v-if="event.img" class="event-img" loading="lazy">
      <div class="event-text"><b>Date:</b> {{ dateString }}</div>
      <div class="event-text"><b>Location:</b> {{ event.location }}</div>
      <div class="event-text" v-html="event.extendedDescription || event.description"></div>
      <div class="event-text" v-if="event.signUpURL">To sign up, follow <a :href="event.signUpURL" target="_blank"
           rel="noopener noreferrer">this link</a></div>
    </div>

  </div>
</template>

<script>
import eventList from "@/assets/events.json";
import utils from '../../libs/utils';


export default {
  name: "EventDetailView",
  computed: {
    dateString() {
      return utils.calculateDateString(this.event.startDate, this.event.endDate)
    },
    eventId: function () {
      return this.$route.params.id;
    },
    event: function () {
      return eventList.find(ev => ev.id === this.eventId);
    }
  }
};
</script>

<style scoped>
.event-container {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 30px;
  grid-auto-flow: dense;
  justify-content: center; */
}

.event {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-gap: 10px 30px;
  grid-auto-flow: dense;
}

.event-title {
  grid-area: 1/1/2/3;
  justify-self: center;
  text-align: center;
}

.event-img {
  justify-self: center;
  grid-area: 2/2/6/3;
  max-height: 100%;
  max-width: 150px;
}

@media (max-width: 500px) {
  .event-img {
    max-width: calc(150px * 0.875);
  }
}

@media (max-width: 350px) {
  .event-img {
    max-width: calc(150px * 0.75);
  }
}

.event-text,
.page-desc {
  padding-left: 20px;
}

.page-desc {}
</style>
