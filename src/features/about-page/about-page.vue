
<template>
  <div class="about-container">
    <hero-image
      class="hero"
      source="img/group_saifa.JPG"
      heading="About the Club"
      :paragraph="`Founded in 2003 by Sensei Ewan Tempero (4th degree Black Belt) and Sensei Tom Davies (4th degree Black Belt), The University of Auckland Goju Ryu Karate Club has been running for over ${new Date().getFullYear() - 2003} years. We welcome both university students and non-students of any experince level, and from any style of martial arts.`"
    ></hero-image>

    <app-image
      class="imageOne"
      source="img/two_sensei.jpg"
      caption="Sensei Ewan Tempero and Sensei Tom Davies"
    >
    </app-image>

    <app-image
      class="imageTwo"
      source="img/group_saifa.JPG"
      caption="Club members performing Saifa kata at the beach"
    >
    </app-image>
    <p class="paraOne">
      <span>
        Run by Sensei Ewan Tempero and Tom Davies
      </span>
      <span>
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
      </span>
    </p>

    <p class="paraTwo">
      We try to create a warm and welcoming atmosphere at the club and as part of this we regularly hold all kinds of social events, including: Our own 'Karate Camp', weekend training camps, dinner/lunches after training, group movie viewings, trainings at the beach, and other group outings around Auckland.
    </p>

    <p class="paraThree">
      We also participate in tournaments multiple times a year and attend training camps in Wellington (and occassionally overseas!).
    </p>

    <app-image
      class="imageThree"
      source="img/camp_group.jpg"
      caption="Club members at Karate Camp"
    />

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
        loop: true
      },
      instructors: [
        {
          name: "Sensei Ewan Tempero",
          rank: 4,
          desc:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt architecto quo adipisci laudantium, laborum beatae porro culpa maxime veritatis cum minima consectetur consequatur qui illum sapiente reiciendis expedita nisi.",
          imgSrc: "/img/sensei_ewan.jpg"
        },
        {
          name: "Sensei Tom Davies",
          rank: 4,
          desc:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt architecto quo adipisci laudantium, laborum beatae porro culpa maxime veritatis cum minima consectetur consequatur qui illum sapiente reiciendis expedita nisi.",
          imgSrc: "/img/sensei_tom.jpg"
        },
        {
          name: "Sensei Yin Tung Ho",
          rank: 3,
          desc:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt architecto quo adipisci laudantium, laborum beatae porro culpa maxime veritatis cum minima consectetur consequatur qui illum sapiente reiciendis expedita nisi.",
          imgSrc: "/img/sensei_yin_2.png"
        },
        {
          name: "Sensei Richard Ly",
          rank: 3,
          desc:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt architecto quo adipisci laudantium, laborum beatae porro culpa maxime veritatis cum minima consectetur consequatur qui illum sapiente reiciendis expedita nisi.",
          imgSrc: "/img/sensei_richard.png"
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

.swiper-container {
  height: 100%;
}

.swiper-wrapper {
  width: 100%;
}

.swiper-slide {
  width: auto;
}

.about-container {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "hero hero"
    "imageOne paraOne"
    "paraTwo imageTwo"
    "imageThree paraThree"
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
</style>
