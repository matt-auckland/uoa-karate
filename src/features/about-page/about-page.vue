
<template>
  <div class="about-container">
    <hero-image
      class="hero"
      source="img/group_saifa.JPG"
      heading="About the Club"
      :paragraph="`The Auckland University Goju Ryu Karate Club welcomes both university students and non-students, with any level of experience, and with any martial arts background.`"
    ></hero-image>

    <app-image
      class="imageOne"
      source="img/two_sensei.jpg"
      caption="Sensei Ewan Tempero and Sensei Tom Davies"
    >
    </app-image>

    </app-image>
    <div class="paraOne">
      <p>
        {{`Founded in 2003 by Sensei Ewan Tempero (4th degree Black Belt) and Sensei Tom Davies (4th degree Black Belt), The University of Auckland Goju Ryu Karate Club has been running for over ${new Date().getFullYear() - 2003} years.` }}
      </p>
      <p>
        The club is affiliated with the
        <a
          href="https://iogkf.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          International Okinawan Goju Ryu Federation (IOGKF)</a>, an international body dedicated to preserving the art of the Okinawan Goju-Ryu Karate, as well as the New Zealand branch organization,
        <a
          href="https://karate.org.nz"
          target="_blank"
          rel="noopener noreferrer"
        >IOGKFNZ</a>.
        This gives club members access to expert intructors and the ability to attend training camps/seminars around the country and the world.
      </p>
    </div>
    <div class="paraTwo">
      <h2>Club Events</h2>

      <p>
        We try to create a warm and welcoming atmosphere at the club and as part of this we regularly hold all kinds of social events.
        Some examples: Our own 'Karate Camp', weekend training seminars, dinner/lunches after training, group movie viewings, trainings at the beach, and other group outings around Auckland.
        We also participate in tournaments multiple times a year and attend training camps around New Zealand (and occassionally overseas!).
      </p>
    </div>
    <div class="club-event-sect">
      <swiper :options="galleryOpt">
        <swiper-slide
          v-for="i in eventImages"
          :key="i.source"
        >
          <div class="flex-center">

            <app-image
              class="event-image"
              :source="i.source"
              :caption="i.caption"
            />
          </div>
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
        ></div>

      </swiper>
    </div>

    <div class="instructors-sect">
      <h2>Meet the Instructors</h2>
      <swiper :options="swiperOpt">
        <swiper-slide
          v-for="i in instructors"
          :key="i.name"
        >
          <InstructorCard
            :name="i.name"
            :rank="i.rank"
            :imgSrc="i.imgSrc"
            :desc="i.desc"
          />
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>


<script>
import Person from "@/components/Person.vue";
import ClubMembers from "@/assets/club-members.json";
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTable from "@/components/FeesTable.vue";
import InstructorCard from "@/components/instructor-card.vue";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Person,
    swiper,
    swiperSlide,
    InstructorCard
  },
  data() {
    return {
      ClubMembers: ClubMembers,
      swiperOpt: {
        speed: 400,
        slidesPerView: "auto",
        spaceBetween: 30,
        grabCursor: true,
        loop: true
      },
      galleryOpt: {
        speed: 400,
        grabCursor: true,
        // spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      instructors: [
        {
          name: "Sensei Ewan Tempero",
          rank: 4,
          desc:
            "Sensei Ewan has over 30 years of Goju Ryu experience. He is the chief instructor of the club, which he co-founded with Sensei Tom in 2003.",
          imgSrc: "/img/sensei_ewan.jpg"
        },
        {
          name: "Sensei Tom Davies",
          rank: 4,
          desc:
            "Sensei Tom has over 20 years experience in the martial arts, with black belts in Goju Ryu and several other Karate styles. He co-founded the club with Sensei Ewan.",
          imgSrc: "/img/sensei_tom.jpg"
        },
        {
          name: "Sensei Greg Shanahan",
          rank: 3,
          desc: "Sensei Greg has over 25 years experience in Goju Ryu.",
          imgSrc: "/img/sensei_greg.jpg"
        },
        {
          name: "Sensei Yin Tung Ho",
          rank: 3,
          desc: "Sensei Yin has over 15 years experience in Goju Ryu.",
          imgSrc: "/img/sensei_yin_2.png"
        },
        {
          name: "Sensei Richard Ly",
          rank: 3,
          desc: "Sensei Richard has over 10 years of Goju Ryu experience.",
          imgSrc: "/img/sensei_richard.png"
        }
      ],
      eventImages: [
        {
          source: "img/camp_group.jpg",
          caption: "Club members at Karate Camp"
        },
        {
          source: "img/gishiki_group.jpg",
          caption:
            "Club members with their fellow New ZEalanders at a international training camp."
        },
        {
          source: "img/camp_2019.png",
          caption: "Fun at the 2019 Club Karate Camp"
        },
        {
          source: "img/tournament.jpg",
          caption: "Smiles after placing at the Bi-Annual Pukekohe Tournament"
        }
      ]
    };
  }
};
</script>


<style scoped>
.hero {
  grid-area: hero;
}
.imageOne {
  grid-area: imageOne;
}
.imageTwo {
  grid-area: imageTwo;
}
.imageThree {
  grid-area: imageThree;
}
.imageOne {
  grid-area: imageOne;
}
.imageTwo {
  grid-area: imageTwo;
}
.imageThree {
  grid-area: imageThree;
}

.instructors-sect {
  max-width: 1300px;
  grid-area: instructors;
}

.club-event-sect {
  width: 600px;
  grid-area: events;
}

.swiper-container {
  height: 100%;
}

.swiper-wrapper {
  width: 100%;
}

.swiper-slide {
  width: auto;
}

.event-image {
  width: 450px;
}
.about-container {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "hero hero"
    "imageOne paraOne"
    "paraTwo events"
    "instructors instructors";
  grid-column-gap: 30px;
  grid-row-gap: 40px;

  grid-gap: 15px;
  justify-content: center;
  padding: 0 15px;
}

p {
  padding: 0 10px;

  max-width: 600px;
  min-width: 300px;
}

.header,
.people-container {
  grid-column-start: 1;
  grid-column-end: -1;
  width: 100%;
}

.header h1 {
  text-align: center;
  margin: 20px 0 0 0;
}

.person-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.flex-center {
  display: flex;
  justify-content: center;
}
</style>
