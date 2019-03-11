<template>
  <content>

    <div class="container">
      <img
        src="https://via.placeholder.com/350x200.png"
        alt=""
        class="first-image"
      >
      <HomeIntro
        msg="Practise Daily"
        class="home-intro"
      />
      <TrainingSchedule class="schedule" />
      <FeesTable class="fees" />
      <UpcomingEvents class="events" />
    </div>
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />

    <!-- <Gallery class="gallery" /> -->
    <!-- <ToDo class="todo" /> -->

    <QuoteDisplay class="quote-display" />
  </content>
</template>

<script>
import HomeIntro from "@/components/HomeIntro.vue";
import ToDo from "@/components/ToDo.vue";
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTable from "@/components/FeesTable.vue";
import ClubMap from "@/components/ClubMap.vue";
import Gallery from "@/components/Gallery.vue";
import ContactForm from "@/components/ContactForm.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import QuoteDisplay from "@/components/QuoteDisplay.vue";

export default {
  name: "home",
  components: {
    HomeIntro,
    ToDo,
    ClubMap,
    TrainingSchedule,
    FeesTable,
    Gallery,
    ContactForm,
    UpcomingEvents,
    QuoteDisplay
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
content {
  display: grid;
  grid-template-areas:
    "content content"
    "map contact"
    "quote quote";
  padding: 0 5vw;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
}

.container {
  display: grid;
  grid-area: content;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  grid-template-areas:
    "first-image intro events events"
    "schedule schedule events events"
    "fees fees events events";
}

.content {
  display: grid;
  grid-template-columns: 300px 300px;
  grid-auto-rows: minmax(200px, auto);
  justify-content: center;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
}

@media (max-width: 981px) {
  content {
    grid-template-areas:
      "content content"
      "map map"
      "contact contact"
      "quote quote";
  }
  .container {
    grid-template-areas:
      "intro intro"
      "first-image first-image"
      "schedule schedule"
      "fees fees";
  }
  .events {
    display: none;
  }
}

.home-intro {
  grid-area: intro;
}

.first-image {
  grid-area: first-image;
}

.double-col {
  grid-area: double;
}

.schedule {
  grid-area: schedule;
}

.fees {
  grid-area: fees;
}

.second-image {
  grid-area: second-image;
}
.contact-form {
  grid-area: contact;
}

.clubmap {
  grid-area: map;
  margin: 30px 0 10px 0;
}

.todo {
}

.events {
  grid-area: events;
}

.quote-display {
  grid-area: quote;
}
</style>

