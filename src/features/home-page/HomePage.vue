<template>
  <main>
    <div class="container">
      <HeroImageSwitcher class="hero-image" :heading="heroHeading" :paragraph="heroText" :images="heroImages" />
      <!-- <section class="about-section">
        <p class="text-container">
          We strive to be a fun and inclusive martial arts club, specialising in traditional Okinawan Goju Ryu Karate.
          Our club has a diverse mix of

        </p>
      </section> -->
      <TrainingSchedule class="schedule" />
      <FeesSection class="fees" />
      <!-- <UpcomingEvents class="events" /> -->
      <SignUpQRCode class="qr-code" />
    </div>
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />
  </main>
</template>

<script>
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesSection from "@/components/fees-table/FeesSection.vue";
import ClubMap from "@/components/ClubMap.vue";
import ContactForm from "@/components/ContactForm.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import HeroImageSwitcher from "@/components/HeroImageSwitcher.vue";
import SignUpQRCode from "../../components/SignUpQRCode.vue";
import { preloadImages } from "@/libs/imagePreloader.js";

export default {
  name: "HomePage",
  components: {
    ClubMap,
    TrainingSchedule,
    FeesSection,
    ContactForm,
    UpcomingEvents,
    HeroImageSwitcher,
    SignUpQRCode,
  },
  data: function () {
    return {
      heroImages: [
        {
          source: "/img/group-grading-2025.jpg",
          caption: "Post-Grading in the Combat Studio",
        },
        {
          source: "/img/fun_karate_pose.jpg",
          caption: "Fighting stances at training",
        },
        {
          source: "/img/mid-grading-2025.jpg",
          caption: "Club grading in the Combat Studio",
        },
        {
          source: "/img/camp_2019.png",
          caption: "Karate Camp 2019",
        },
        // {
        //   source: "/img/hawks_nest.jpg",
        //   caption: "Hawks Nest post grading",
        // },
        {
          source: "/img/open-day.jpg",
          caption: "Demonstrating at Open Day",
        },
      ],
      heroHeading: "Welcome to our Club!",
      heroText:
        "We strive to be a fun and inclusive Martial Arts club, specialising in traditional Okinawan Goju Ryu Karate. We accept new members all year round. Students get FREE training for their first semester!",
      preloadedHeroImages: [],
    };
  },
  mounted() {
    this.preloadedHeroImages = preloadImages(this.heroImages);
  },
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
  --columns: 3;
  grid-template-columns: repeat(var(--columns), 1fr);
  display: grid;
  grid-area: content;
  grid-column-gap: 50px;
  grid-row-gap: 40px;
  grid-template-areas:
    "hero hero hero"
    "fees fees qr-code"
    "schedule schedule schedule";
}

@media (max-width: 781px) {
  main {
    text-align: center;
    grid-template-areas:
      "content content"
      "map map"
      "contact contact";
  }

  .container {
    --columns: 2;
    grid-template-areas:
      "hero hero"
      "fees fees"
      "schedule schedule"
      "qr-code qr-code";
  }

  .events {
    display: none;
  }
}

.hero-image {
  grid-area: hero;
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

.qr-code {
  grid-area: qr-code;
  justify-self: center;
}
</style>
