
<template>
  <div class="events-container">
    <h2 class="event-title">Upcoming Events:</h2>
    <div v-for="event in upcomingEventList" :key="event.name" class="event">
      <div class="event-title">{{event.name}} - {{event.date}}</div>
      <div class="event-text"><b>Location:</b> {{event.location}} - For more information follow 
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
      }),
      // filtered: this.upcomingEventList.filter((event, index) => {
      //   if (index < 5) {
      //     return true
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.events-container {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(auto, 600px)); */
  /* grid-auto-rows: minmax(200px, auto); */
  /* grid-gap: 30px; */
  /* grid-auto-flow: dense; */
  /* justify-content: center; */
}

.event {

}

.page-desc {

}
</style>
