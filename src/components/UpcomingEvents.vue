
<template>
  <div class="events-container">
    <h2 class="component-title">Upcoming Events:</h2>
    <div v-for="event in upcomingEventList" :key="event.name" class="event">
      <div class="event-text">
        <b>{{event.name}}</b>.
      </div>
      <div class="event-text">
          {{event.date}}
      </div>
      <div class="event-text">
        Location: {{event.location}}.
      </div> 
      <div class="event-text">
        For more information follow 
        <router-link v-if="!event.offSitelink" :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link>
        <a v-if="event.offSitelink" :href="event.offSitelink" target="_blank" rel="noopener noreferrer">this link</a>
      </div>
    </div>
  </div>
</template>

<script>
import eventList from '../assets/events.json'


export default {
  name: 'UpcomingEvents',
  components: {
  },
  data: function() {
    return {
      upcomingEventList:  eventList.filter(event => {
        if (new Date(event.startDate) > new Date()){
          return true
        }
      }).filter((event, index) => {
        if (index < 4) {
          return true
        }
      })
    }
  },
  methods: {
    computeDate: function (event) {
      
      return date
    }
  }
}
</script>

<style scoped>
.events-container {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(auto, 335px));
  grid-auto-rows: minmax(80px, auto);
  grid-gap: 30px;
  grid-auto-flow: dense;
}

.component-title {
  grid-area: 1/1/1/-1;
}

.event-text {
  /* margin: 3px 0; */
}
.event {
  margin: 0 0 8px 0;
}
.page-desc {

}
</style>