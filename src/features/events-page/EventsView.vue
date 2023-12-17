<template>
  <div class="events-container">
    <div class="description">
      <HeroImage heading="Upcoming Events" :paragraph="heroPara" source="img/rangitoto.jpg" />
    </div>
    <div v-for="event in eventList" :key="event.name" class="event">
      <EventComponent :event="event" />
    </div>
  </div>
</template>

<script>
import eventList from "@/assets/events.json";
import EventComponent from "@/components/EventComponent.vue";
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "EventsView",
  components: {
    EventComponent,
    HeroImage
  },
  data: function () {
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
      heroPara: `This page lists upcoming club events. 
        Events range from casual social gatherings to training camps in other cities or even other countries. 
        <p>This page was last updated on 08/07/2023.</p>`
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
  max-width: 1300px;
  margin: 0 auto;
}

.events-container>* {
  margin-bottom: 32px;
}
</style>
