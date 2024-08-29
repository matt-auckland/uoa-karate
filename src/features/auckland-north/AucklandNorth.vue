<template>
  <content>
    <div class="container">
      <HeroImage class="hero-image" source="/group-photo.jpg" heading="Auckland North Karate Club"
                 :paragraph="paragraphText" />
      <div class="flavour-text">
        <h2>What is Goju Ryu Karate?</h2>
        <p>Goju Ryu Karate is a martial art that originated from Okinawa, Japan. Goju Ryu Karate utilises fluid,
          circular movements and teaches effective close-distance fighting, fast strikes and takedowns. With an
          emphasises both strength and flexibility, Goju Ryu enhances physical fitness while also building mental
          discipline and self-confidence.</p>
        <p>Renowned for its practical self-defense techniques, Goju Ryu is perfect for both beginners and experienced
          martial artists of all ages, join us today to learn to protect yourself and your loved ones with confidence.
        </p>
      </div>
      <div class="richard">
        <h2>Meet your instructor:</h2>
        <MemberCard :member="richard" :wide="true" />
      </div>
      <div>
      </div>
      <TrainingSchedule :schedule="schedule" class="schedule" />
      <FeesTable :feeTableData="feeData" class="fees" />
    </div>
    <ClubMap :mapUrl="mapUrl" class="clubmap" />
    <div class="contact-form">
      <h2>Contact Auckland North Goju Ryu</h2>
      <p style="font-size: 18px">
        Email us at <a href="mailto:an.gojuryu.karate@gmail.com">an.gojuryu.karate@gmail.com</a>
        <br>
        Follow us on Facebook <a href="https://www.facebook.com/AucklandNorthKarate/" target="_blank"
           rel="noopener noreferrer">https://www.facebook.com/AucklandNorthKarate/</a>
        <br>
        Or contact us on <a href="tel:0210650994">0210 650 994</a>

      </p>
    </div>
  </content>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTable from "@/components/fees-table/FeesTable.vue";
import ClubMap from "@/components/ClubMap.vue";
import HeroImage from "../../components/HeroImage.vue";
// import ContactForm from "@/components/ContactForm.vue";
import Utils from "@/libs/utils.js";


export default {
  name: "auckland-north",
  head: {
    title: "Auckland North Karate Club",
    meta: [
      {
        name: "description",
        content: "We're a Goju Ryu Karate dojo based in Sunnynook on the North Shore. We are open to beginners and experienced martial artists alike. Families and children (12+) are also welcome."
      }
    ]
  },
  components: {
    ClubMap,
    TrainingSchedule,
    FeesTable,
    HeroImage,
    MemberCard
  },
  data: function () {
    return {
      mapUrl: "https://www.google.com/maps/d/embed?mid=1lSeGuFy53GDmQIbpM2aS5jWlWWawurI",
      schedule: [
        {
          "index": 1,
          "day": "Thurdays",
          "startTime": "6pm",
          "finishTime": "7.30pm",
          "location": "Acacia room, Sunnynook Community Centre, Sunnynook",
          // "notes": "Notes here",
          "canDisplay": true
        },
      ],
      feeData: [
        {
          type: 'Training Fees',
          cost: '$8 per class or $30 monthly',
          notes: '',
        },
        {
          type: 'Family Discount',
          cost: 'Children pay $6 per class or $20 monthly',
          notes: 'Children must be training with an accompanying adult, and 12+ years old',
        },
        {
          type: 'Grading Fee',
          cost: '$35',
          notes: 'Gradings occur twice a year',
        },
      ],
      paragraphText: "Goju Ryu Karate is a martial art that originated from Okinawa, Japan. Goju Ryu Karate utilises fluid, circular movements and teaches effective close-distance fighting, fast strikes and takedowns. With an emphasises both strength and flexibility, Goju Ryu enhances physical fitness, builds mental discipline, as well as self-confidence.",
      paragraphText: "We're a Goju Ryu Karate dojo based in Sunnynook on the North Shore. We are open to beginners and experienced martial artists alike. Families and children (12+) are also welcome.",
      // paragraphText: "Goju Ryu is a traditional martial art which focuses on mental and physical improvement. Beginners and experienced martial artists are welcome.",
      richard: {
        name: "Sensei Richard Ly",
        danGrade: true,
        rank: 4,
        desc: `Sensei Richard has over ${Utils.calculateYears('03/01/2008')} years of Goju Ryu experience, and is the founder and head instructor of Auckland North.`,
        imgSrc: "/img/sensei_richard.png"
      },
    };
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

.richard {
  grid-area: richard;
}

.flavour-text {
  grid-area: flavour;
}

.container {
  display: grid;
  grid-area: content;
  grid-column-gap: 50px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas:
    "hero hero hero"
    "flavour flavour richard"
    "schedule schedule  fees"
    /* "fees events events"; */
}

@media (max-width: 981px) {
  content {
    grid-template-areas:
      "content content"
      "map map"
      "contact contact";
  }

  .container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "hero hero"
      "flavour richard"
      "schedule schedule"
      "fees fees";
  }

  .events {
    display: none;
  }
}

@media (max-width: 600px) {
  content {
    text-align: center;
  }
  .container {
    grid-template-columns: 1fr;
    grid-template-areas: "hero"
      "flavour"
      "richard"
      "schedule"
      "fees";
  }
}

.hero-image {
  grid-area: hero;
  width: 100%;
  margin: 0 auto;

  /* background-image: url("/group-photo.jpg"); */
  background-position-x: 0px;
  background-size: cover;
  height: 435px;
  border-radius: 10px;

  display: flex;
  align-items: center;
}

.home-intro .text-container {
  max-width: 450px;
  width: 80%;
  margin-left: 30px;
  padding: 30px 20px;
  background: rgba(79, 79, 79, 0.577);
  border-radius: 5px;
  color: white;
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
