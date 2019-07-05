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
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "content content"
    "map contact";
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

@media (max-width: 981px) {
  content {
    text-align: center;
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
  min-width: 200px;

  display: grid;
  grid-gap: 20px;
  align-items: flex-start;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.first-image {
  max-width: 400px;
  width: 100%;
  grid-area: first-image;
  margin: 18px auto 0 auto;
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

.events {
  grid-area: events;
}
</style>

