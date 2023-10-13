<template>
  <div class="about-container">
    <hero-image
      class="hero"
      source="img/group_saifa.JPG"
      heading="About the Club"
      :paragraph="heroText"
    ></hero-image>
    <div class="image-one">
      <app-image
        source="img/two_sensei.jpg"
        caption="Sensei Ewan Tempero and Sensei Tom Davies"
      >
      </app-image>
    </div>

    <div class="paraOne">
      <h2>About the Club</h2>
      <p>
        {{
          `Founded in 2003 by Sensei Ewan Tempero (5th degree Black Belt) and Sensei Tom Davies (4th degree Black Belt), The University of Auckland Goju Ryu Karate Club has been running for over ${new Date().getFullYear() -
            2003} years.`
        }}
      </p>
      <p>
        The club is affiliated with the
        <a
          href="https://iogkf.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          International Okinawan Goju Ryu Federation (IOGKF)</a>, an international body dedicated to preserving the art of the Okinawan
        Goju-Ryu Karate, as well as the New Zealand branch organization,
        <a
          href="https://karate.org.nz"
          target="_blank"
          rel="noopener noreferrer"
        >IOGKFNZ</a>. This gives club members access to expert intructors and the ability
        to attend training camps/seminars around the country and the world.
      </p>
    </div>
    <div class="paraTwo">
      <h2>Club Events</h2>
      <p>
        We try to create a warm and welcoming atmosphere at the club and as part
        of this we regularly hold all kinds of social events. Some examples: Our
        own 'Karate Camp', weekend training seminars, dinner/lunches after
        training, group movie viewings, trainings at the beach, and other group
        outings around Auckland. We also participate in tournaments multiple
        times a year and attend training camps around New Zealand (and
        occassionally overseas!).
      </p>
      <p>
        See the <router-link :to="'/events'">events page</router-link> for
        information on upcoming events.
      </p>
    </div>

    <div class="club-event-sect">
      <div class="swipe-container">
        <swiper :options="imgSwiperOpt">
          <swiper-slide
            v-for="i in eventImages"
            :key="i.source"
          >
            <app-image
              class="event-image"
              :source="i.source"
              :caption="i.caption"
            />
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
    </div>
    <div class="image-two">
      <app-image
        :source="'img/hawks_nest_sensei.jpg'"
        :caption="'Sensei Ewan explaining an exercise at the Hawks Nest'"
      />
    </div>
    <div class="paraThree">
      <h2>Training Location & Facilities</h2>
      <p>
        Most club trainings are run out of the awesome
        <a
          href="https://hawksnestgym.co.nz/"
          target="_blank"
        >Hawks Nest Gym</a>
        which is a fully furbished Mauy Thai Gym located at Level 3/492 Queen
        Street, Auckland; near the intersection of Queen Street and City Road.
      </p>
      <p>
        The gym facilities include padded floors, a shower, bathroom, mirrors,
        punching bags, skipping ropes, Muay Thai style focus mitts and more.
        We've also stocked the with some equipment of our own, including kick
        shields and
        <a
          href="https://zoehinis.com/2014/09/04/hojo-undo-101-chishi/"
          target="_blank"
        >chiishi</a>, a traditional Karate training implement from Okinawa (the birthplace
        of Karate).
      </p>
    </div>

    <div class="instructors-sect">
      <h2>Meet the Instructors</h2>
      <div class="swipe-containersss">
        <swiper :options="swiperOpt">
          <swiper-slide
            v-for="i in instructors"
            :key="i.name + i.imgSrc"
          >
            <MemberCard
              :name="i.name"
              :rank="i.rank"
              :imgSrc="i.imgSrc"
              :desc="i.desc"
              :danGrade="true"
            />
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
    </div>

    <!-- <div class="exec-sect">
      <h2>Meet the Exec</h2>
      <swiper :options="swiperOpt">
        <swiper-slide
          v-for="i in exec"
          :key="i.name + i.desc"
        >
          <MemberCard
            :name="i.name"
            :rank="i.rank"
            :imgSrc="i.imgSrc"
            :desc="i.desc"
            :danGrade="i.danGrade"
          />
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div> -->
  </div>
</template>

<script>
import MemberCard from "@/components/member-card.vue";

export default {
  components: {
    MemberCard
  },
  data() {
    return {
      heroText: "The Auckland University Goju Ryu Karate Club welcomes both university students and non-students, with any level of experience, and with any martial arts background.",
      swiperOpt: {
        loop: true,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
          el: ".swiper-pagination"
        }
      },
      imgSwiperOpt: {
        autoplay: {
          delay: 5000
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      instructors: [
        {
          name: "Sensei Ewan Tempero",
          rank: 5,
          desc:
            "Sensei Ewan has over 30 years of Goju Ryu experience. He is the chief instructor of the club, which he co-founded with Sensei Tom in 2003.",
          imgSrc: "/img/sensei_ewan.jpg"
        },
        {
          name: "Sensei Richard Ly",
          rank: 4,
          desc: "Sensei Richard has over 10 years of Goju Ryu experience.",
          imgSrc: "/img/sensei_richard.png"
        },
        // {
        //   name: "Senpai Mathew Paul",
        //   rank: 2,
        //   desc: "Senpai Mat has over 9 years experience in Goju Ryu.",
        //   imgSrc: "/img/sensei_yin_2.png"
        // },
      ],
      eventImages: [
        {
          source: "img/gishiki_group.jpg",
          caption:
            "Club members with their fellow New Zealanders at an international training camp."
        },
        {
          source: "img/camp_2019.png",
          caption: "Fun at the Club's 2019 Karate Camp"
        },
        {
          source: "img/tournament.jpg",
          caption:
            "Smiles after placing at the Bi-Annual Pukekohe Karate Tournament"
        }
      ]
    };
  }
};
</script>
<!-- Swiper -->
<style>
.swiper-pagination {
  position: initial;
  margin-top: 10px;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: var(--persian-red-light);
}
</style>

<style scoped>
.swiper-wrapper {
  width: 100%;
}
.swiper-slide {
  width: auto;
}

.hero {
  grid-area: hero;
}
.image-one {
  grid-area: image-one;
  display: flex;
}

.image-two {
  grid-area: image-two;
}
.paraOne {
  grid-area: paraOne;
}
.paraTwo {
  grid-area: paraTwo;
}
.paraThree {
  grid-area: paraThree;
}

.image-two {
  display: flex;
  grid-area: image-two;
}

.instructors-sect {
  width: 100%;
  max-width: 1300px;
  grid-area: instructors;
}

.exec-sect {
  width: 100%;
  grid-area: exec;
}

.club-event-sect {
  grid-area: events;
  overflow: hidden;
}

.about-container {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "hero hero"
    "image-one paraOne"
    "paraTwo events"
    "image-two paraThree"
    "instructors instructors"
    "exec exec";
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  grid-gap: 15px;
  justify-content: center;
  padding: 0 15px;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 800px) {
  .about-container {
    grid-template-areas:
      "hero hero"
      "image-one image-one"
      "paraOne paraOne"
      "paraTwo paraTwo"
      "events events"
      "image-two image-two"
      "paraThree paraThree"
      "instructors instructors"
      "exec exec";
  }
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
