
<template>
  <div class="events-container">
    <div class="description">
      <hero-image
        heading="Upcoming Events"
        :paragraph="heroPara"
        source="img/rangitoto.jpg"
      >
        </hero-image>
    </div>
    <div
      v-for="event in eventList"
      :key="event.name"
      class="event"
    >
      <EventComponent :event="event" />
    </div>
  </div>
</template>

<script>
import eventList from "@/assets/events.json";
import EventComponent from "@/components/EventComponent";

export default {
  name: "EventsView",
  components: {
    EventComponent
  },
  data: function() {
    return {
      eventList: eventList
        .filter(event => {
          if (new Date(event.startDate) > new Date()) {
            return true;
          }
        })
        .sort((a, b) => {
          return new Date(a.startDate) - new Date(b.startDate);
        }),
        heroPara: `This page lists upcoming club events. Events range from casual social gatherings to training camps in other cities or even other countries. <p>This page was last updated on 26/08/2019.</p>`
    };
  }
};
</script>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  min-height: 100vh;
  max-width: 820px;
  margin: 0 auto;
  text-align: justify;
}

.events-container > * {
  margin-bottom: 32px;
}
</style>
