
<template>
  <div class="">
    <h2 class="component-title">Upcoming Events:</h2>
    <div class="events-container">
      <div
        v-for="event in upcomingEventList"
        :key="event.title"
        class="event"
      >
        <div class="event-inner">
          <div class="event-text title">
            <b>{{event.title}}</b>
          </div>
          <div class="event-text date">
            {{event.date}}
          </div>
          <div class="event-text location">
            Location: {{event.location}}.
          </div>

          <div
            class="event-text link"
            v-if="event.offSitelink"
          >
            For more information, follow
            <a
              :href="event.offSitelink"
              target="_blank"
              rel="noopener noreferrer"
            >this link</a>
            <router-link
              v-if="!event.offSitelink && event.extendedDescription"
              :to="'/events/' + event.title.replace(/\ /gi, '-')"
            >this link</router-link>
          </div>
          <div
            class="event-text"
            v-if="event.signUpURL"
          >To sign up, follow <a
              :href="event.signUpURL"
              target="_blank"
              rel="noopener noreferrer"
            >this link</a>
          </div>
        </div>
      </div>
      <div class="see-more">
        <router-link to="/events">Click here to see more events</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import eventList from "../assets/events.json";

export default {
  name: "UpcomingEvents",
  components: {},
  data: function() {
    return {
      upcomingEventList: eventList
        .filter(event => {
          if (new Date(event.startDate) > new Date()) {
            return true;
          }
        })
        .sort((a, b) => {
          return new Date(a.startDate) - new Date(b.startDate);
        })
        .filter((event, index) => {
          if (index < 4) {
            return true;
          }
        })
    };
  },
  methods: {
    computeDate: function(event) {
      return event.date;
    }
  }
};
</script>

<style scoped>
.events-container {
  display: grid;
  padding-top: 15px;
  /* grid-template-columns: 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(auto, 335px));
  grid-auto-rows: minmax(80px, auto);
  grid-gap: 30px;
  justify-items: center;
}

.component-title {
  grid-area: 1/1/1/-1;
}

.see-more {
  text-align: center;
  /* grid-column: 2/2; */
}
.event {
  width: 100%;
  border-radius: 15px;
  border: 2px solid var(--persian-red-darker);
  background-color: black;
}

.event-inner {
  padding: 15px 10px;
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

.page-desc {
}
</style>