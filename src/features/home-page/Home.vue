<template>
  <content>
    <div class="container">
      <div class="home-intro">
        <div class="text-container">
          <h1>Welcome to the University of Auckland Goju Ryu Karate Club</h1>
          <p>
            We are open to members with any level of experience and from any style, both students and non-students alike.
            We take new members all year round so feel free to drop in for a trial at any time.
            Training typically runs all year round, from mid-January till mid-December.
          </p>

        </div>
        <app-image
          :source="'/group-photo.jpg'"
          :caption="'The club performing at Courses and Careers Day'"
          class="hero-image"
        ></app-image>
      </div>
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
    "intro   events events"
    "schedule events events"
    "fees events events";
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

.hero-image {
  max-width: 400px;
  width: 100%;
  grid-area: first-image;
  margin: 18px auto 0 auto;
}

.home-intro h1,
.home-intro p {
  max-width: 800px;
  margin: 10px 0;
}

.home-intro p {
  text-align: justify;
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

