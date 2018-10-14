
<template>
  <div class="">
    <h2 class="component-title">Upcoming Events:</h2>
    <div class="events-container">
      <div v-for="event in upcomingEventList" :key="event.name" class="event">
        <div class="event-text title">
          <b>{{event.name}}</b>.
        </div>
        <div class="event-text date">
            {{event.date}}
        </div>
        <div class="event-text location">
          Location: {{event.location}}.
        </div> 
        <div class="event-text link">
          For more information follow 
          <router-link v-if="!event.offSitelink" :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link>
          <a v-if="event.offSitelink" :href="event.offSitelink" target="_blank" rel="noopener noreferrer">this link</a>
        </div>
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
      }).sort((a,b) => {
        return new Date(a.startDate) - new Date(b.startDate)
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
  justify-items: center;
}

.component-title {
  grid-area: 1/1/1/-1;
}

.event-text {

}

.title {
  margin-bottom: 6px;

}

.date {
  margin-bottom: 3px;

}

.location {
  margin-bottom: 8px;

}

.link {


}

.event {
  padding: 15px 10px;
  border-radius: 15px;
  border: 2px solid var(--persian-red-darker);
}
.page-desc {

}
</style>