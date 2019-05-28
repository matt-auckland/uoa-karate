<template>
  <content>

    <div class="container">
      <img
        src="/group-photo.jpg"
        alt=""
        class="first-image"
      >
      <HomeIntro class="home-intro" />
      <TrainingSchedule class="schedule" />
      <FeesTable class="fees" />
      <UpcomingEvents class="events" />
    </div>
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />

    <!-- <Gallery class="gallery" /> -->
    <!-- <ToDo class="todo" /> -->

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
    UpcomingEvents
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
content {
  max-width: 13 00px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "content content"
    "map contact";
  padding: 50px 5vw 0 5vw;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
}

.container {
  display: grid;
  grid-area: content;
  grid-column-gap: 50px;
  grid-row-gap: 40px;
  grid-template-areas:
    " intro  first-image events events"
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
      "contact contact";
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
  width: 100%;
  margin: 0 auto;
}

.first-image {
  max-width: 400px;
  width: 100%;
  grid-area: first-image;
  margin: auto;
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
  margin: 5px 0 10px 0;
}

.todo {
}

.events {
  grid-area: events;
}
</style>

