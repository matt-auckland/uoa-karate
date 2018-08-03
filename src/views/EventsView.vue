
<template>
  <div class="event-container">
    <div class="">
      <h2 class="event-title">Upcoming Events:</h2>
      <p class="page-desc">
        This page lists upcoming club events. Events range from casual social gatherings to training camps in other cities or even other countries. There is no guarantee it is up to date.
        This page was last updated on 28/06/2018. If you have any questions about upcoming events you can find a <router-link to="/">contact form here</router-link>.
        </p>
      </div>
    <div v-for="event in eventList" :key="event.name" class="event">
      <h2 class="event-title">{{event.name}}</h2>
      <img :src="event.img" alt="Event image" v-if="event.img" class="event-img">
      <div class="event-text"><b>Date:</b> {{event.date}}</div>
      <div class="event-text"><b>Location:</b> {{event.location}}</div>
      <div class="event-text">{{event.description}}</div>
      <div class="event-text" v-if="!event.offSitelink">For more information follow <router-link :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link></div>
      <div class="event-text" v-if="event.offSitelink">For more information follow <a :href="event.offSitelink" target="_blank" rel="noopener noreferrer">this link</a></div>
    </div>
  </div>
</template>

<script>
import eventList from './events.json'

export default {
  name: 'EventsView',
  components: {
  },
  data: function() {
    return {
      eventList
    }
  }
}
</script>

<style scoped>
.event-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 30px;
  grid-auto-flow: dense;
  justify-content: center;
}

.event {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
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

.event-text, .page-desc {
  padding-left: 20px;
}

.page-desc {

}
</style>
