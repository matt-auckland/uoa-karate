<template>
  <main>
    <div class="container">
      <HeroImage class="hero-image" source="/img/hawks_nest.jpg" :heading="heroHeading" :paragraph="heroText" />
      <!-- <section class="about-section">
        <p class="text-container">
          We strive to be a fun and inclusive martial arts club, specialising in traditional Okinawan Goju Ryu Karate.
          Our club has a diverse mix of

        </p>
      </section> -->
      <TrainingSchedule class="schedule" />
      <FeesTabs class="fees" />
      <UpcomingEvents class="events" />
    </div>
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />
  </main>
</template>

<script>
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTabs from "@/components/fees-table/FeesTabs.vue";
import ClubMap from "@/components/ClubMap.vue";
import ContactForm from "@/components/ContactForm.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "HomePage",
  components: {
    ClubMap,
    TrainingSchedule,
    FeesTabs,
    ContactForm,
    UpcomingEvents,
    HeroImage
  },
  data: function () {
    return {
      heroHeading: "Welcome to our Club!",
      heroText: "Our club welcomes people with any level of experience, both students and non-students alike. We accept new members all year round, but we host beginner specific trainings at the start of every semester. Students get FREE training for their first semester!"
    };
  }
};
</script>

<style scoped>
main {
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
    "hero hero hero"
    "schedule events events"
    "fees events events";
}

@media (max-width: 481px) {
  main {
    text-align: center;
    grid-template-areas:
      "content content"
      "map map"
      "contact contact";
  }

  .container {
    grid-template-areas:
      "hero hero"
      "schedule schedule"
      "fees fees";
  }

  .events {
    display: none;
  }
}

.hero-image {
  grid-area: hero;
  width: 100%;
  margin: 0 auto;

  background-position-x: 0;
  background-size: cover;
  height: 435px;
  border-radius: 10px;

  display: flex;
  align-items: center;
}

.about-section {
  grid-area: about;

  .text-container {
    padding: 30px 20px;
    background: rgba(79, 79, 79, 0.577);
    border-radius: 5px;
    color: white;
  }
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
